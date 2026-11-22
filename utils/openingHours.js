const POLISH_DAYS = {
  1: "poniedziałek",
  2: "wtorek",
  3: "środa",
  4: "czwartek",
  5: "piątek",
  6: "sobota",
  0: "niedziela",
};

const POLISH_DAY_ORDER = [1, 2, 3, 4, 5, 6, 0];

const SCHEMA_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const DEFAULT_OPENING_HOURS = {
  periods: [1, 2, 3, 4, 5].map((day) => ({
    open: { day, time: "1000" },
    close: { day, time: "1600" },
  })),
  weekday_text: [
    "poniedziałek: 10:00–16:00",
    "wtorek: 10:00–16:00",
    "środa: 10:00–16:00",
    "czwartek: 10:00–16:00",
    "piątek: 10:00–16:00",
    "sobota: Zamknięte",
    "niedziela: Zamknięte",
  ],
};

/**
 * Converts a Google Places 4-digit time string ("1000") to "10:00".
 */
export const formatTime = (hhmm) => {
  if (typeof hhmm !== "string" || !/^\d{4}$/.test(hhmm)) return null;
  const hours = Number(hhmm.slice(0, 2));
  const minutes = Number(hhmm.slice(2, 4));
  if (hours > 23 || minutes > 59) return null;
  return `${hhmm.slice(0, 2)}:${hhmm.slice(2, 4)}`;
};

const groupPeriodsByDay = (periods) => {
  const byDay = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
  let hasComplexPeriod = false;

  for (const period of periods) {
    const openDay = period?.open?.day;
    const closeDay = period?.close?.day;
    const openTime = formatTime(period?.open?.time);
    const closeTime = formatTime(period?.close?.time);

    if (
      typeof openDay !== "number" ||
      typeof closeDay !== "number" ||
      openDay !== closeDay ||
      openDay < 0 ||
      openDay > 6 ||
      !openTime ||
      !closeTime
    ) {
      hasComplexPeriod = true;
      continue;
    }

    byDay[openDay].push({ open: openTime, close: closeTime });
  }

  return { byDay, hasComplexPeriod };
};

const buildFallbackWeekdayLines = (byDay) =>
  POLISH_DAY_ORDER.map((day) => {
    const dayName = POLISH_DAYS[day];
    const entries = byDay[day];
    if (!entries || entries.length === 0) {
      return `${dayName}: Zamknięte`;
    }
    const ranges = entries.map((entry) => `${entry.open}–${entry.close}`).join(", ");
    return `${dayName}: ${ranges}`;
  });

/**
 * Formats Google openingHours into display lines for the Contact page.
 * Uses compact weekday phrasing when Mon–Fri share identical single-interval hours.
 */
export const formatOpeningHoursForDisplay = (openingHours) => {
  const hasPeriods = Boolean(
    openingHours && Array.isArray(openingHours.periods) && openingHours.periods.length > 0
  );
  const hasWeekdayText = Boolean(
    openingHours && Array.isArray(openingHours.weekday_text) && openingHours.weekday_text.length > 0
  );

  const source = hasPeriods || hasWeekdayText ? openingHours : DEFAULT_OPENING_HOURS;
  const periods = Array.isArray(source.periods) ? source.periods : [];
  const { byDay, hasComplexPeriod } = groupPeriodsByDay(periods);

  const weekdayDays = [1, 2, 3, 4, 5];
  const allWeekdaysSinglePeriod = weekdayDays.every((day) => byDay[day].length === 1);

  if (!hasComplexPeriod && allWeekdaysSinglePeriod) {
    const first = byDay[1][0];
    const allWeekdaysIdentical = weekdayDays.every(
      (day) => byDay[day][0].open === first.open && byDay[day][0].close === first.close
    );
    const sundayClosed = byDay[0].length === 0;

    if (allWeekdaysIdentical && sundayClosed) {
      const weekdayRange = `${first.open}–${first.close}`;

      if (byDay[6].length === 0) {
        return {
          mode: "compact",
          lines: [
            "Zapraszamy od poniedziałku do piątku",
            `w godzinach ${weekdayRange}`,
          ],
        };
      }

      const satRanges = byDay[6].map((entry) => `${entry.open}–${entry.close}`).join(", ");
      return {
        mode: "compact",
        lines: [
          `Zapraszamy od poniedziałku do piątku w godzinach ${weekdayRange}`,
          `sobota: ${satRanges}`,
        ],
      };
    }
  }

  const lines =
    Array.isArray(source.weekday_text) && source.weekday_text.length > 0
      ? source.weekday_text
      : buildFallbackWeekdayLines(byDay);

  return {
    mode: "list",
    lines,
  };
};

/**
 * Builds Schema.org OpeningHoursSpecification[] from Google Places periods,
 * grouping days that share identical opening and closing times.
 */
export const buildOpeningHoursSpecification = (openingHours) => {
  if (!openingHours || !Array.isArray(openingHours.periods) || openingHours.periods.length === 0) {
    return null;
  }

  const groups = new Map();

  for (const period of openingHours.periods) {
    const openDay = period?.open?.day;
    const closeDay = period?.close?.day;
    if (
      typeof openDay !== "number" ||
      typeof closeDay !== "number" ||
      openDay !== closeDay ||
      openDay < 0 ||
      openDay > 6
    ) {
      continue;
    }

    const opens = formatTime(period?.open?.time);
    const closes = formatTime(period?.close?.time);
    const dayName = SCHEMA_DAYS[openDay];
    if (!opens || !closes || !dayName) continue;

    const key = `${opens}-${closes}`;
    if (!groups.has(key)) {
      groups.set(key, {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [],
        opens,
        closes,
      });
    }

    const group = groups.get(key);
    if (!group.dayOfWeek.includes(dayName)) {
      group.dayOfWeek.push(dayName);
    }
  }

  const specifications = Array.from(groups.values());
  return specifications.length > 0 ? specifications : null;
};
