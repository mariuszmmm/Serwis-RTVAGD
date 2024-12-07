export const getCurrentDateTimeISOWithOffset = () => {
  const now = new Date();

  const pad = (num) => String(num).padStart(2, '0');

  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  const offset = now.getTimezoneOffset();
  const offsetHours = Math.abs(Math.floor(offset / 60));
  const offsetMinutes = Math.abs(offset % 60);
  const offsetSign = offset <= 0 ? "+" : "-";

  const formattedOffset = `${offsetSign}${pad(offsetHours)}:${pad(offsetMinutes)}`;

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${formattedOffset}`;
}


