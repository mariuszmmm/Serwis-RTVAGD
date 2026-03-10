// import { imageParameters } from "./getImageParameters";
import { serwis } from "./serwis";
import { appUrls, imageUrls } from "./urls";
import imageParameters from "../public/imageParameters.json" with { type: "json" };

export const getDataForMetaTags = async (key) => {
  // const imageParameters = await getImageParameters();

  // console.log("imageParameters", imageParameters)

  const datePublished = new Date("2024-07-03").toISOString();
  const date = new Date().toISOString();
  const dateModified = new Date(date).toISOString();
  // const shortName = serwis.shortName;
  const shortName = "Naprawa Przemyśl";
  const name = serwis.name;
  const shortPhoneNumber = serwis.phone.short;
  const formattedPhoneNumber = serwis.phone.formatted;

  const address = {
    "@type": "PostalAddress",
    streetAddress: "Generała Józefa Sowińskiego 2",
    addressLocality: "Przemyśl",
    addressRegion: "Podkarpackie",
    postalCode: "37-700",
    addressCountry: "PL",
  };

  const geo = {
    "@type": "GeoCoordinates",
    latitude: "49.7827725",
    longitude: "22.7760291",
  };

  const openingHours = "Mo, Tu, We, Th, Fr, 09:30-17:00";

  const website = {
    "@type": "WebSite",
    "@id": appUrls.home + "#website",
    url: appUrls.home,
    name: shortName,
    inLanguage: "pl-PL",
    description:
      "Profesjonalny serwis RTV i AGD w Przemyślu. Szybka i skuteczna naprawa pralek, suszarek, zmywarek, telewizorów i ekspresów do kawy.",
    image: "https://naprawaprzemysl.pl/images/logo.svg",
  };

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": appUrls.home + "#localbusiness", // dodane 17.05.2025
    name: serwis.subName, // zgodny z CEIDG
    image: imageUrls.serwis,
    url: appUrls.home,
    logo: imageUrls.logo,
    telephone: serwis.phone.number,
    email: serwis.email,
    description:
      "Profesjonalny serwis i naprawa sprzętu RTV i AGD w Przemyślu. Specjalizujemy się w naprawie pralek, suszarek, zmywarek, telewizorów i ekspresów do kawy.",
    address,
    geo,
    hasMap: serwis.url.GMF,
    // openingHours,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "17:00",
      },
    ],
    priceRange: "100-500 PLN",
    // "areaServed": [
    //  { "@type": "Place", "name": "Przemyśl" },
    //  { "@type": "Place", "name": "Bolestraszyce" },
    //  { "@type": "Place", "name": "Duńkowiczki" },
    //  { "@type": "Place", "name": "Krówniki" },
    //  { "@type": "Place", "name": "Nehrybka" },
    //  { "@type": "Place", "name": "Orzechowce" },
    //  { "@type": "Place", "name": "Ostrów" },
    //  { "@type": "Place", "name": "Pikulice" },
    //  { "@type": "Place", "name": "Prałkowce" },
    //  { "@type": "Place", "name": "Wyszatyce" },
    //  { "@type": "Place", "name": "Żurawica" }
    //  ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 49.7827725,
        longitude: 22.7760291,
      },
      geoRadius: 20000, // 20 km od Przemyśla
    },
    sameAs: [serwis.url.facebook, serwis.url.GMF],
    // "hasOfferCatalog": {
    //   "@type": "OfferCatalog",
    //   "name": "Usługi serwisowe RTV i AGD",
    //   "itemListElement": [
    //     {
    //       "@type": "Offer",
    //       "itemOffered": { "@type": "Service", "@id": appUrls.naprawa_pralek + "#service" }
    //     },
    //     {
    //       "@type": "Offer",
    //       "itemOffered": { "@type": "Service", "@id": appUrls.naprawa_suszarek + "#service" }
    //     },
    //     {
    //       "@type": "Offer",
    //       "itemOffered": { "@type": "Service", "@id": appUrls.naprawa_zmywarek + "#service" }
    //     },
    //     {
    //       "@type": "Offer",
    //       "itemOffered": { "@type": "Service", "@id": appUrls.naprawa_ekspresow + "#service" }
    //     },
    //     {
    //       "@type": "Offer",
    //       "itemOffered": { "@type": "Service", "@id": appUrls.naprawa_telewizorow + "#service" }
    //     }
    //   ]
    // }
  };

  const siteNavigationElements = [
    {
      "@type": "SiteNavigationElement",
      name: "Strona główna",
      url: "https://naprawaprzemysl.pl/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "O mnie",
      url: "https://naprawaprzemysl.pl/o-mnie/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Naprawa pralek",
      url: "https://naprawaprzemysl.pl/naprawa-pralek/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Naprawa suszarek",
      url: "https://naprawaprzemysl.pl/naprawa-suszarek/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Naprawa zmywarek",
      url: "https://naprawaprzemysl.pl/naprawa-zmywarek/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Naprawa ekspresów",
      url: "https://naprawaprzemysl.pl/naprawa-ekspresow/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Naprawa telewizorów",
      url: "https://naprawaprzemysl.pl/naprawa-telewizorow/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Opinie",
      url: "https://naprawaprzemysl.pl/opinie/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Kontakt",
      url: "https://naprawaprzemysl.pl/kontakt/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Polityka prywatności",
      url: "https://naprawaprzemysl.pl/polityka-prywatnosci/",
    },
  ];

  const dataForMetaTags = {
    home: {
      metaTags: {
        // title: "Naprawa RTV i AGD Przemyśl - Pralek, TV, Zmywarek, Ekspresów" + ` | ${shortName}`,
        // ogTitle: "Naprawa RTV i AGD Przemyśl - Pralek, TV, Zmywarek, Ekspresów",
        // twitterTitle: "Naprawa RTV i AGD Przemyśl - Pralek, TV, Zmywarek, Ekspresów",
        //   title: `${shortName} ✔️ Naprawa Przemyśl ☎️ ${formattedPhoneNumber} | ${serwis.name}`,
        //    ogTitle: `${shortName} ✔️ Naprawa Przemyśl ☎️ ${formattedPhoneNumber} | ${serwis.name}`,
        //   twitterTitle: `${shortName} ✔️ 🔧 Naprawa Przemyśl ☎️ ${formattedPhoneNumber} | ${serwis.name}`,
        title: `Naprawa Przemyśl ✔️ Serwis RTV i AGD ☎️ ${formattedPhoneNumber}`,
        ogTitle: `Naprawa Przemyśl ✔️ Serwis RTV i AGD ☎️ ${formattedPhoneNumber}`,
        twitterTitle: `Naprawa Przemyśl ✔️ Serwis RTV i AGD ☎️ ${formattedPhoneNumber}`,
        description: `Profesjonalny Serwis RTV i AGD w Przemyślu. Naprawa: ✔️ Suszarek do prania ✔️ Pralek ✔️ Zmywarek ✔️ Telewizorów ✔️ Ekspresów do kawy ⚡ Zadzwoń! ☎️ ${shortPhoneNumber}`,
        ogDescription: `Profesjonalny Serwis RTV i AGD w Przemyślu. Naprawa: ✔️ Suszarek do prania ✔️ Pralek ✔️ Zmywarek ✔️ Telewizorów ✔️ Ekspresów do kawy ⚡ Zadzwoń! ☎️ ${shortPhoneNumber}`,
        twitterDescription: `Profesjonalny Serwis RTV i AGD w Przemyślu. Naprawa: ✔️ Suszarek do prania ✔️ Pralek ✔️ Zmywarek ✔️ Telewizorów ✔️ Ekspresów do kawy ⚡ Zadzwoń! ☎️ ${shortPhoneNumber}`,
        imageAlt: "Technik serwisu RTV i AGD naprawiający sprzęt w Przemyślu",
        imageTitle: `Serwis RTV i AGD Przemyśl`,
        imageWidth: "931",
        imageHeight: "497",
        imageType: "image/webp",
        image: imageParameters.serwis_rtv_agd.imageUrl,
        type: "website",
        siteName: shortName,
        canonical: appUrls.home,
        keywords: "Naprawa RTV AGD Przemyśl, Serwis RTV AGD Przemyśl, Naprawa AGD z dojazdem Przemyśl",
      },
      schema: {
        localBusiness,
        product: {
          "@type": "Product",
          "@id": appUrls.home + "#product",
          name: "Usługa naprawy sprzętu RTV i AGD w Przemyślu",
          description: "Diagnostyka i naprawa sprzętu RTV-AGD w Przemyślu, z zachowaniem najwyższej staranności.",
          // "image": { "@type": "ImageObject", "@id": appUrls.home + "#primaryimage" },
          brand: { "@type": "Brand", name: shortName },
          url: appUrls.home,
        },
        place: {
          "@type": "Place",
          geo: geo,
          name: serwis.subName,
        },
        website,
        webpage: {
          "@type": "WebPage",
          "@id": appUrls.home + "#webpage",
          url: appUrls.home,
          inLanguage: "pl-PL",
          name: `Naprawa Przemyśl ✔️ Serwis RTV i AGD ☎️ ${formattedPhoneNumber}`,
          isPartOf: { "@type": "WebSite", "@id": appUrls.home + "#website" },
          primaryImageOfPage: { "@type": "ImageObject", "@id": appUrls.home + "#primaryimage" },
          // "image": { "@type": "ImageObject", "@id": appUrls.home + "#primaryimage" },
          thumbnailUrl: imageUrls.serwis,
          datePublished: datePublished,
          dateModified: dateModified,
          description:
            "Profesjonalna naprawa sprzętu RTV i AGD w Przemyślu. Serwis pralek, suszarek, zmywarek, telewizorów i ekspresów do kawy.",
          // "breadcrumb": { "@type": "BreadcrumbList", "@id": appUrls.home + "#breadcrumb" },
        },
        imageObject: {
          "@type": "ImageObject",
          "@id": appUrls.home + "#primaryimage",
          url: imageUrls.serwis,
          inLanguage: "pl-PL",
          contentUrl: imageUrls.serwis,
          width: 931,
          height: 497,
          name: `Naprawa Przemyśl ✔️ Serwis RTV i AGD ☎️ ${formattedPhoneNumber}`,
          description: "Doświadczony technik serwisu RTV i AGD w trakcie naprawy urządzenia w Przemyślu.",
          caption: "Twój zaufany serwis RTV i AGD w Przemyślu – szybkie i skuteczne naprawy.",
          representativeOfPage: true,
        },
        breadcrumbList: {
          "@type": "BreadcrumbList",
          "@id": appUrls.home + "#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "WebPage",
                "@id": appUrls.home,
                url: appUrls.home,
                name: shortName,
              },
            },
          ],
        },
      },
    },
    kontakt: {
      metaTags: {
        title: `Kontakt ☎️ ${formattedPhoneNumber} | Serwis RTV-AGD`,
        canonical: appUrls.kontakt,
        description: `Skontaktuj się z Serwisem RTV i AGD w Przemyślu pod numerem ☎️ ${formattedPhoneNumber} lub odwiedź nas przy ul. Generała Sowińskiego 2. Fachowe usługi!`,
        imageAlt: "Technik serwisu RTV i AGD naprawiający sprzęt w Przemyślu",
        imageTitle: `Serwis RTV i AGD Przemyśl`,
        imageWidth: "931",
        imageHeight: "497",
        imageType: "image/webp",
        image: imageUrls.serwis,
        type: "article",
        siteName: shortName,
        // keywords: "kontakt naprawa AGD, kontakt serwis Przemyśl, naprawa sprzętu AGD kontakt, naprawa pralek kontakt, naprawa RTV kontakt, naprawa ekspresów kontakt, kontakt serwis RTV AGD",
        // appleMobileWebAppTitle: `${shortName} - kontakt`,
      },
      schema: {
        localBusiness,
        contactPage: {
          "@type": "ContactPage",
          name: `Kontakt - ${name}`,
          url: appUrls.kontakt,
          description: "Skontaktuj się z Serwisem RTV i AGD w Przemyślu. Dane kontaktowe, adres i godziny otwarcia.",
          about: {
            "@type": "LocalBusiness",
            "@id": appUrls.home + "#localbusiness",
          },
        },
        website,
        webpage: {
          "@type": "WebPage",
          "@id": appUrls.kontakt + "#webpage",
          url: appUrls.kontakt,
          inLanguage: "pl-PL",
          name: `Kontakt ☎️ ${formattedPhoneNumber} | Serwis RTV-AGD`,
          isPartOf: { "@type": "WebSite", "@id": appUrls.home + "#website" },
          datePublished: datePublished,
          dateModified: dateModified,
          description: `Skontaktuj się pod numerem ${formattedPhoneNumber} lub odwiedź nas w Przemyślu, ul. Generała Sowińskiego 2. Szybkie, fachowe usługi naprawy sprzętu RTV i AGD.`,
        },
        breadcrumbList: {
          "@type": "BreadcrumbList",
          "@id": appUrls.kontakt + "#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "WebPage",
                "@id": appUrls.home,
                url: appUrls.home,
                name: shortName,
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "WebPage",
                "@id": appUrls.kontakt,
                url: appUrls.kontakt,
                name: "Kontakt",
              },
            },
          ],
        },
      },
    },
    o_mnie: {
      metaTags: {
        title: `O Serwisie RTV i AGD w Przemyślu ☎️ ${formattedPhoneNumber} | Sprawdź nas!`,
        canonical: appUrls.o_mnie,
        description:
          "Dowiedz się o moim doświadczeniu w naprawie sprzętu RTV i AGD oraz zaangażowaniu w najwyższej jakości usługi serwisowe w Przemyślu.",
        imageAlt: "Technik serwisu RTV i AGD naprawiający sprzęt w Przemyślu",
        imageTitle: `Serwis RTV i AGD Przemyśl`,
        imageWidth: "931",
        imageHeight: "497",
        imageType: "image/webp",
        image: imageUrls.serwis,
        type: "article",
        siteName: shortName,
        // keywords: "naprawa AGD Przemyśl, serwis sprzętu RTV, doświadczenie w naprawie AGD, profesjonalna naprawa pralek, naprawa suszarek, naprawa urządzeń domowych, naprawa sprzętu RTV, serwis pralek Przemyśl, naprawa telewizorów Przemyśl, serwis ekspresów do kawy",
        // appleMobileWebAppTitle: `${shortName} - o mnie`,
      },
      schema: {
        localBusiness,
        aboutPage: {
          "@type": "AboutPage",
          "@id": appUrls.o_mnie + "#webpage",
          url: appUrls.o_mnie,
          inLanguage: "pl-PL",
          name: `O Serwisie RTV i AGD w Przemyślu ☎️ ${formattedPhoneNumber} | Sprawdź nas!`,
          isPartOf: { "@type": "WebSite", "@id": appUrls.home + "#website" },
          description:
            "Poznaj Serwis RTV i AGD w Przemyślu – Twojego doświadczonego specjalistę od napraw AGD i RTV. Poznaj moją misję i podejście do klienta.",
          // "breadcrumb": { "@type": "BreadcrumbList", "@id": appUrls.o_mnie + "#breadcrumb" },
          mainEntity: {
            "@type": "Person",
            "@id": appUrls.o_mnie + "#person",
          },
          about: {
            "@type": "LocalBusiness",
            name: name,
            url: appUrls.home,
            "@id": appUrls.home + "#localbusiness",
          },
        },
        person: {
          "@type": "Person",
          "@id": appUrls.o_mnie + "#person",
          name: serwis.person,
          url: appUrls.o_mnie,
          jobTitle: "Właściciel i Specjalista Serwisu RTV i AGD",
          worksFor: {
            "@type": "LocalBusiness",
            name: "Serwis RTV i AGD w Przemyślu",
            url: appUrls.home,
            "@id": appUrls.home + "#localbusiness",
          },
          description: `Jestem ${serwis.person} – specjalista z wieloletnim doświadczeniem w naprawie sprzętu RTV i AGD w Przemyślu. Kładę nacisk na indywidualne podejście i zadowolenie klienta.`,
        },
        breadcrumbList: {
          "@type": "BreadcrumbList",
          "@id": appUrls.o_mnie + "#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "WebPage",
                "@id": appUrls.home,
                url: appUrls.home,
                name: shortName,
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "WebPage",
                "@id": appUrls.o_mnie,
                url: appUrls.o_mnie,
                name: "O serwisie",
              },
            },
          ],
        },
      },
    },
    opinie: {
      path: "/opinie/",
      metaTags: {
        title: `Opinie o Serwisie RTV i AGD w Przemyślu ☎️ ${formattedPhoneNumber} | Sprawdź nas!`,
        canonical: appUrls.opinie,
        description:
          "Przejrzyj opinie zadowolonych klientów Serwisu RTV i AGD w Przemyślu. Dowiedz się, dlaczego skorzystali własnie z tego serwisu.",
        imageAlt: "Technik serwisu RTV i AGD naprawiający sprzęt w Przemyślu",
        imageTitle: `Serwis RTV i AGD Przemyśl`,
        imageWidth: "931",
        imageHeight: "497",
        imageType: "image/webp",
        image: imageUrls.serwis,
        type: "article",
        siteName: shortName,
        // keywords: "opinie naprawa AGD, opinie serwis RTV, recenzje naprawy pralek, opinie naprawa zmywarek, opinie naprawa ekspresów, doświadczenia z naprawą AGD, opinie naprawa telewizorów",
        // appleMobileWebAppTitle: `${shortName} - opinie`,
      },
      schema: {
        localBusiness,
        website,
        webpage: {
          "@type": "WebPage",
          "@id": appUrls.opinie + "#webpage",
          url: appUrls.opinie,
          inLanguage: "pl-PL",
          name: `Opinie o Serwisie RTV i AGD w Przemyślu ☎️ ${formattedPhoneNumber} | Sprawdź nas!`,
          isPartOf: { "@type": "WebSite", "@id": appUrls.home + "#website" },
          datePublished: datePublished,
          dateModified: dateModified,
          description: `Przeczytaj opinie naszych klientów o Serwisie RTV i AGD w Przemyślu. Dowiedz się, dlaczego warto nam zaufać.`,
          about: {
            "@type": "LocalBusiness",
            "@id": appUrls.home + "#localbusiness",
          },
        },
        breadcrumbList: {
          "@type": "BreadcrumbList",
          "@id": appUrls.opinie + "#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "WebPage",
                "@id": appUrls.home,
                url: appUrls.home,
                name: shortName,
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "WebPage",
                "@id": appUrls.opinie,
                url: appUrls.opinie,
                name: "Opinie",
              },
            },
          ],
        },
      },
    },
    polityka_prywatnosci: {
      metaTags: {
        title: `Polityka prywatności | ${shortName}`,
        canonical: appUrls.polityka_prywatnosci,
        description:
          "Informacje o przetwarzaniu danych osobowych, prawach użytkownika oraz plikach cookies na stronie serwisu RTV i AGD w Przemyślu.",
        imageAlt: "Serwis RTV i AGD w Przemyślu",
        imageTitle: "Serwis RTV i AGD w Przemyślu",
        imageWidth: "931",
        imageHeight: "497",
        imageType: "image/webp",
        image: imageUrls.serwis,
        type: "article",
        siteName: shortName,
      },
      schema: {
        website,
        webpage: {
          "@type": "WebPage",
          "@id": appUrls.polityka_prywatnosci + "#webpage",
          url: appUrls.polityka_prywatnosci,
          inLanguage: "pl-PL",
          name: `Polityka prywatności | ${shortName}`,
          isPartOf: { "@type": "WebSite", "@id": appUrls.home + "#website" },
          datePublished: datePublished,
          dateModified: dateModified,
          description:
            "Polityka prywatności serwisu RTV i AGD w Przemyślu – zasady przetwarzania danych osobowych i plików cookies.",
        },
        breadcrumbList: {
          "@type": "BreadcrumbList",
          "@id": appUrls.polityka_prywatnosci + "#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "WebPage",
                "@id": appUrls.home,
                url: appUrls.home,
                name: shortName,
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "WebPage",
                "@id": appUrls.polityka_prywatnosci,
                url: appUrls.polityka_prywatnosci,
                name: "Polityka prywatności",
              },
            },
          ],
        },
      },
    },
    naprawa_pralek: {
      metaTags: {
        title: `Naprawa Pralek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        ogTitle: `Naprawa Pralek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        twitterTitle: `Naprawa Pralek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        description: `Naprawa pralek w Przemyślu. ☝ Zepsuta pralka ❓ Szybka i skuteczna naprawa ❗ Z gwarancją i w konkurencyjnej cenie. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        ogDescription: `Naprawa pralek w Przemyślu. ☝ Zepsuta pralka ❓ Szybka i skuteczna naprawa ❗ Z gwarancją i w konkurencyjnej cenie. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        twitterDescription: `Naprawa pralek w Przemyślu. ☝ Zepsuta pralka ❓ Szybka i skuteczna naprawa ❗ Z gwarancją i w konkurencyjnej cenie. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        imageType: "image/webp",
        image: imageUrls.pralka,
        imageAlt: "Technik serwisu AGD naprawiający pralkę w Przemyślu",
        imageTitle: "Serwis Pralek Przemyśl",
        imageWidth: "700",
        imageHeight: "700",
        type: "website",
        siteName: shortName,
        canonical: appUrls.naprawa_pralek,

        keywords: "Naprawa Pralek Przemyśl, Serwis Pralek Przemyśl, Usterki Pralek Przemyśl",
      },
      schema: {
        localBusiness,
        service: {
          "@type": "Service",
          "@id": appUrls.naprawa_pralek + "#service",
          name: "Naprawa Pralek w Przemyślu",
          serviceType: "Naprawa Pralek",
          description:
            "Profesjonalny serwis i naprawa pralek wszystkich marek w Przemyślu. Szybka diagnoza i gwarancja.",
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_pralek + "#primaryimage" },
          provider: {
            "@type": "LocalBusiness",
            name: name,
            url: appUrls.home,
            "@id": appUrls.home + "#localbusiness",
          },
          url: appUrls.naprawa_pralek,
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 49.7827725,
              longitude: 22.7760291,
            },
            geoRadius: 20000,
          },
        },
        product: {
          "@type": "Product",
          "@id": appUrls.naprawa_pralek + "#product",
          name: "Usługa naprawy pralek w Przemyślu",
          description: "Kompleksowa diagnostyka i naprawa pralek różnych marek w Przemyślu.",
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_pralek + "#primaryimage" },
          brand: { "@type": "Brand", name: shortName },
          url: appUrls.naprawa_pralek,
        },
        faqPage: {
          "@type": "FAQPage",
          "@id": appUrls.naprawa_pralek + "#faq",
          name: "Najczęściej zadawane pytania dotyczące naprawy pralek",
          mainEntity: [
            {
              "@type": "Question",
              name: "Dlaczego pralka nie pobiera wody?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Może to wynikać z uszkodzonego elektrozaworu, niedrożnego filtra czy problemu z dopływem wody. Dokładna diagnostyka pozwala ustalić, która część wymaga uwagi.",
              },
            },
            {
              "@type": "Question",
              name: "Czy serwis obsługuje pralki wszystkich marek?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Tak, naprawiam większość dostępnych na rynku modeli (Bosch, Electrolux, Samsung, Whirlpool, Beko, Amica, itp.). Każde urządzenie traktuję indywidualnie.",
              },
            },
            {
              "@type": "Question",
              name: "Jak szybko mogę liczyć na wizytę?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Staram się ustalić termin możliwie jak najszybciej, zwykle w ciągu kilku dni od zgłoszenia. Dokładny czas zależy od aktualnego obłożenia i dostępności części.",
              },
            },
            {
              "@type": "Question",
              name: "Jakiej jakości części są stosowane?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sięgam po części od zaufanych dostawców, odpowiadające specyfikacjom producentów albo spełniające równoważne parametry techniczne.",
              },
            },
            {
              "@type": "Question",
              name: "Gdzie naprawiam pralki?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "W większości przypadków naprawa odbywa się u Klienta. W razie konieczności zaawansowanej naprawy mogę zabrać pralkę do warsztatu, po wcześniejszym uzgodnieniu.",
              },
            },
          ],
        },
        place: {
          "@type": "Place",
          geo: geo,
          name: serwis.subName,
        },
        imageObject: {
          "@type": "ImageObject",
          "@id": appUrls.naprawa_pralek + "#primaryimage",
          url: imageUrls.pralka,
          inLanguage: "pl-PL",
          contentUrl: imageUrls.pralka,
          width: 700,
          height: 700,
          name: `Naprawa Pralek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
          description: "Profesjonalna naprawa pralek w Przemyślu, szybka diagnoza i usunięcie usterki.",
          caption: "Serwisant naprawia pralkę – szybko i skutecznie.",
          representativeOfPage: true,
        },
        website,
        webpage: {
          "@type": "WebPage",
          "@id": appUrls.naprawa_pralek + "#webpage",
          url: appUrls.naprawa_pralek,
          inLanguage: "pl-PL",
          name: `Naprawa Pralek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
          isPartOf: { "@type": "WebSite", "@id": appUrls.home + "#website" },
          primaryImageOfPage: { "@type": "ImageObject", "@id": appUrls.naprawa_pralek + "#primaryimage" },
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_pralek + "#primaryimage" },
          thumbnailUrl: imageUrls.pralka,
          datePublished: datePublished,
          dateModified: dateModified,
          description: "Profesjonalna naprawa pralek w Przemyślu, szybka diagnoza i usunięcie usterki.",
          // "breadcrumb": { "@type": "BreadcrumbList", "@id": appUrls.naprawa_pralek + "#breadcrumb" },
          mainEntity: { "@type": "Product", "@id": appUrls.naprawa_pralek + "#product" }, // jeśli występuje Product to mainEntity powinien być Product, w przeciwnym przypadku Service
          // "about": { "@type": "Product", "@id": appUrls.naprawa_pralek + "#product" }  // jeśli występuje Product to typ powinien być Product, w przeciwnym przypadku Service
        },
        breadcrumbList: {
          "@type": "BreadcrumbList",
          "@id": appUrls.naprawa_pralek + "#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "WebPage",
                "@id": appUrls.home,
                url: appUrls.home,
                name: shortName,
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "WebPage",
                "@id": appUrls.naprawa_pralek,
                url: appUrls.naprawa_pralek,
                name: "Naprawa Pralek",
              },
            },
          ],
        },
      },
    },
    naprawa_suszarek: {
      metaTags: {
        title: `Naprawa Suszarek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        ogTitle: `Naprawa Suszarek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        twitterTitle: `Naprawa Suszarek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        description: `Naprawa suszarek do prania w Przemyślu. ☝ Potrzebujesz naprawić suszarkę ❓ Profesjonalny serwis suszarek do ubrań ❗ Z dojazdem. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        ogDescription: `Naprawa suszarek do prania w Przemyślu. ☝ Potrzebujesz naprawić suszarkę ❓ Profesjonalny serwis suszarek do ubrań ❗ Z dojazdem. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        twitterDescription: `Naprawa suszarek do prania w Przemyślu. ☝ Potrzebujesz naprawić suszarkę ❓ Profesjonalny serwis suszarek do ubrań ❗ Z dojazdem. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        imageType: "image/webp",
        image: imageUrls.suszarka,
        imageAlt: "Technik serwisu AGD diagnozujący suszarkę do ubrań w Przemyślu",
        imageTitle: "Serwis Suszarek Przemyśl",
        imageWidth: "869",
        imageHeight: "700",
        type: "website",
        siteName: shortName,
        canonical: appUrls.naprawa_suszarek,
        keywords:
          "Naprawa Suszarek Przemyśl, Serwis Suszarek Przemyśl, Naprawa Suszarek z dojazdem Przemyśl, Naprawa Suszarek do ubrań Przemyśl, Naprawa Suszarek do prania Przemyśl",
      },
      schema: {
        localBusiness,
        service: {
          "@type": "Service",
          "@id": appUrls.naprawa_suszarek + "#service",
          serviceType: "Naprawa Suszarek",
          name: "Naprawa Suszarek w Przemyślu",
          description:
            "Profesjonalny serwis i naprawa suszarek do ubrań wszystkich typów w Przemyślu. Szybka diagnoza i gwarancja.",
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_suszarek + "#primaryimage" },
          provider: {
            "@type": "LocalBusiness",
            name: name,
            url: appUrls.home,
            "@id": appUrls.home + "#localbusiness",
          },
          url: appUrls.naprawa_suszarek,
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 49.7827725,
              longitude: 22.7760291,
            },
            geoRadius: 20000,
          },
        },
        product: {
          "@type": "Product",
          "@id": appUrls.naprawa_suszarek + "#product",
          name: "Usługa naprawy suszarek w Przemyślu",
          description:
            "Diagnostyka i naprawa suszarek kondensacyjnych, z pompą ciepła i tradycyjnych, z zachowaniem najwyższej staranności.",
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_suszarek + "#primaryimage" },
          brand: { "@type": "Brand", name: shortName },
          url: appUrls.naprawa_suszarek,
        },
        place: {
          "@type": "Place",
          geo: geo,
          name: serwis.subName,
        },
        faqPage: {
          "@type": "FAQPage",
          "@id": appUrls.naprawa_suszarek + "#faq",
          name: "Najczęściej zadawane pytania dotyczące naprawy suszarek",
          mainEntity: [
            {
              "@type": "Question",
              name: "Dlaczego suszarka dłużej suszy lub nie suszy wystarczająco?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Przyczyną często jest niedrożny filtr kłaczków, zanieczyszczony przewód wentylacyjny lub zabrudzony skraplacz. Pełna diagnostyka pozwala szybko ustalić źródło problemu.",
              },
            },
            {
              "@type": "Question",
              name: "Czy naprawia się suszarki z pompą ciepła i tradycyjne?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Tak, mam doświadczenie w obu technologiach – różnice polegają na specyfice układów chłodniczych i sterowania, które uwzględniam w naprawie.",
              },
            },
            {
              "@type": "Question",
              name: "Ile może wynosić koszt naprawy?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Koszt zależy od rodzaju usterki i ceny części. Po diagnozie na miejscu przedstawiam orientacyjną wycenę, aby uniknąć niespodzianek.",
              },
            },
            {
              "@type": "Question",
              name: "Jak szybko mogę umówić wizytę w Przemyślu?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Termin ustalamy w zależności od bieżącego kalendarza i dostępności części, starając się reagować możliwie sprawnie.",
              },
            },
            {
              "@type": "Question",
              name: "Czy usługa obejmuje dojazd poza Przemyśl?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Obsługuję Przemyśl i okoliczne miejscowości. Jeśli jesteś poza podstawowym obszarem, proszę o kontakt – sprawdzimy możliwość wizyty.",
              },
            },
          ],
        },
        imageObject: {
          "@type": "ImageObject",
          "@id": appUrls.naprawa_suszarek + "#primaryimage",
          url: imageUrls.suszarka,
          inLanguage: "pl-PL",
          contentUrl: imageUrls.suszarka,
          width: 700,
          height: 700,
          name: `Naprawa Suszarek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
          description: "Profesjonalna naprawa suszarek kondensacyjnych i z pompą ciepła w Przemyślu.",
          caption: "Serwisant szybko naprawi Twoją suszarkę do prania.",
          representativeOfPage: true,
        },
        website,
        webpage: {
          "@type": "WebPage",
          "@id": appUrls.naprawa_suszarek + "#webpage",
          url: appUrls.naprawa_suszarek,
          inLanguage: "pl-PL",
          name: `Naprawa Suszarek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
          isPartOf: { "@type": "WebSite", "@id": appUrls.home + "#website" },
          primaryImageOfPage: { "@type": "ImageObject", "@id": appUrls.naprawa_suszarek + "#primaryimage" },
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_suszarek + "#primaryimage" },
          thumbnailUrl: imageUrls.suszarka,
          datePublished: datePublished,
          dateModified: dateModified,
          description: "Profesjonalna naprawa suszarek do prania, kondensacyjnych i z pompą ciepła w Przemyślu.",
          // "breadcrumb": { "@type": "BreadcrumbList", "@id": appUrls.naprawa_suszarek + "#breadcrumb" },
          mainEntity: { "@type": "Product", "@id": appUrls.naprawa_suszarek + "#product" }, // jeśli występuje Product to mainEntity powinien być Product, w przeciwnym przypadku Service
          // "about": { "@type": "Product", "@id": appUrls.naprawa_suszarek + "#product" }  // jeśli występuje Product to typ powinien być Product, w przeciwnym przypadku Service
        },
        breadcrumbList: {
          "@type": "BreadcrumbList",
          "@id": appUrls.naprawa_suszarek + "#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "WebPage",
                "@id": appUrls.home,
                url: appUrls.home,
                name: shortName,
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "WebPage",
                "@id": appUrls.naprawa_suszarek,
                url: appUrls.naprawa_suszarek,
                name: "Naprawa Suszarek",
              },
            },
          ],
        },
      },
    },
    naprawa_zmywarek: {
      metaTags: {
        title: `Naprawa Zmywarek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        ogTitle: `Naprawa Zmywarek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        twitterTitle: `Naprawa Zmywarek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        description: `Naprawa zmywarek w Przemyślu. ☝ Awaria zmywarki ❓ Skuteczne usunięcie usterek ❗ Fachowa pomoc z gwarancją i dojazdem. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        ogDescription: `Naprawa zmywarek w Przemyślu. ☝ Awaria zmywarki ❓ Skuteczne usunięcie usterek ❗ Fachowa pomoc z gwarancją i dojazdem. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        twitterDescription: `Naprawa zmywarek w Przemyślu. ☝ Awaria zmywarki ❓ Skuteczne usunięcie usterek ❗ Fachowa pomoc z gwarancją i dojazdem. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        imageType: "image/webp",
        image: imageParameters.naprawa_zmywarek.imageUrl,
        imageAlt: "Technik serwisu AGD naprawiający zmywarkę w Przemyślu",
        imageTitle: "Serwis Zmywarek Przemyśl",
        imageWidth: "520",
        imageHeight: "520",
        type: "website",
        siteName: shortName,
        canonical: appUrls.naprawa_zmywarek,
        keywords: "Naprawa Zmywarek Przemyśl, Serwis Zmywarek Przemyśl, Usterki Zmywarek Przemyśl",
      },
      schema: {
        localBusiness,
        service: {
          "@type": "Service",
          "@id": appUrls.naprawa_zmywarek + "#service",
          serviceType: "Naprawa Zmywarek",
          name: "Naprawa Zmywarek w Przemyślu",
          description:
            "Profesjonalny serwis i naprawa zmywarek wolnostojących i do zabudowy w Przemyślu. Szybka diagnoza i gwarancja.",
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_zmywarek + "#primaryimage" },
          provider: {
            "@type": "LocalBusiness",
            name: name,
            url: appUrls.home,
            "@id": appUrls.home + "#localbusiness",
          },
          url: appUrls.naprawa_zmywarek,
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 49.7827725,
              longitude: 22.7760291,
            },
            geoRadius: 20000,
          },
        },
        product: {
          "@type": "Product",
          "@id": appUrls.naprawa_zmywarek + "#product",
          name: "Usługa naprawy zmywarek w Przemyślu", // "name": "Naprawa zmywarek Przemyśl",
          description:
            "Szybka i profesjonalna naprawa zmywarek w Przemyślu i okolicach. Oferuję kompleksową diagnostykę oraz naprawę zmywarek wszystkich marek (Bosch, Electrolux, Beko i inne). Korzystam z profesjonalnych narzędzi i oryginalnych części, zapewniając gwarancję na usługę.",
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_zmywarek + "#primaryimage" },
          brand: { "@type": "Brand", name: shortName },
          url: appUrls.naprawa_zmywarek,
        },
        faqPage: {
          "@type": "FAQPage",
          "@id": appUrls.naprawa_zmywarek + "#faq",
          name: "Najczęściej zadawane pytania dotyczące naprawy zmywarek",
          mainEntity: [
            {
              "@type": "Question",
              name: "Co powoduje brak pobierania wody przez zmywarkę?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Najczęściej problemem są zawór dopływu lub zatkany filtr. Diagnostyka pozwala ustalić, czy wystarczy czyszczenie czy też konieczna jest wymiana elementu.",
              },
            },
            {
              "@type": "Question",
              name: "Czy obsługiwane są zmywarki wszystkich marek?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Tak – mam doświadczenie z wieloma markami: Bosch, Electrolux, Beko, Siemens, Whirlpool, itp. Każdy model traktuję indywidualnie.",
              },
            },
            {
              "@type": "Question",
              name: "Jakie są orientacyjne koszty?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Koszt zależy od rodzaju usterki i ceny części. Po diagnozie przedstawiam przybliżoną wycenę naprawy.",
              },
            },
            {
              "@type": "Question",
              name: "Czy naprawa odbywa się u mnie w domu?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Zwykle przeprowadzam naprawę na miejscu u Klienta. Jeśli konieczna jest bardziej zaawansowana interwencja, urządzenie może zostać przewiezione do warsztatu po uzgodnieniu szczegółów.",
              },
            },
            {
              "@type": "Question",
              name: "Jak szybko mogę liczyć na interwencję?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Termin ustalamy indywidualnie, starając się działać możliwie sprawnie, w zależności od dostępności części.",
              },
            },
          ],
        },
        place: {
          "@type": "Place",
          geo: geo,
          name: serwis.subName,
        },
        imageObject: {
          "@type": "ImageObject",
          "@id": appUrls.naprawa_zmywarek + "#primaryimage",
          url: imageParameters.naprawa_zmywarek.imageUrl,
          inLanguage: "pl-PL",
          contentUrl: imageParameters.naprawa_zmywarek.imageUrl,
          width: "520",
          height: "520",
          name: `Naprawa Zmywarek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
          description: "Profesjonalna naprawa zmywarek wolnostojących i do zabudowy w Przemyślu.",
          caption: "Serwisant szybko i skutecznie naprawi Twoją zmywarkę.",
          representativeOfPage: true,
        },
        website,
        webpage: {
          "@type": "WebPage",
          "@id": appUrls.naprawa_zmywarek + "#webpage",
          url: appUrls.naprawa_zmywarek,
          inLanguage: "pl-PL",
          name: `Naprawa Zmywarek Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
          isPartOf: { "@type": "WebSite", "@id": appUrls.home + "#website" },
          primaryImageOfPage: { "@type": "ImageObject", "@id": appUrls.naprawa_zmywarek + "#primaryimage" },
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_zmywarek + "#primaryimage" },
          thumbnailUrl: imageParameters.naprawa_zmywarek.thumbnailUrl,
          datePublished: datePublished,
          dateModified: dateModified,
          description: "Profesjonalna naprawa zmywarek wolnostojących i do zabudowy w Przemyślu.",
          // "breadcrumb": { "@type": "BreadcrumbList", "@id": appUrls.naprawa_zmywarek + "#breadcrumb" },
          mainEntity: { "@type": "Product", "@id": appUrls.naprawa_zmywarek + "#product" }, // jeśli występuje Product to mainEntity powinien być Product, w przeciwnym przypadku Service
          // "about": { "@type": "Product", "@id": appUrls.naprawa_zmywarek + "#product" }  // jeśli występuje Product to typ powinien być Product, w przeciwnym przypadku Service
        },
        breadcrumbList: {
          "@type": "BreadcrumbList",
          "@id": appUrls.naprawa_zmywarek + "#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "WebPage",
                "@id": appUrls.home,
                url: appUrls.home,
                name: shortName,
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "WebPage",
                "@id": appUrls.naprawa_zmywarek,
                url: appUrls.naprawa_zmywarek,
                name: "Naprawa Zmywarek",
              },
            },
          ],
        },
      },
    },
    naprawa_ekspresow: {
      metaTags: {
        title: `Naprawa Ekspresów do Kawy Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        ogTitle: `Naprawa Ekspresów do Kawy Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        twitterTitle: `Naprawa Ekspresów do Kawy Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        description: `Naprawa ekspresów do kawy w Przemyślu. ☝ Przywróć doskonały smak kawy ☕ Serwis ekspresów ciśnieniowych i automatycznych. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        ogDescription: `Naprawa ekspresów do kawy w Przemyślu. ☝ Przywróć doskonały smak kawy ☕ Serwis ekspresów ciśnieniowych i automatycznych. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        twitterDescription: `Naprawa ekspresów do kawy w Przemyślu. ☝ Przywróć doskonały smak kawy ☕ Serwis ekspresów ciśnieniowych i automatycznych. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        imageType: "image/webp",
        image: imageUrls.ekspres,
        imageAlt: "Technik serwisu AGD naprawiający ekspres do kawy Philips w Przemyślu",
        imageTitle: "Serwis Ekspresów do Kawy Przemyśl",
        imageWidth: "700",
        imageHeight: "700",
        type: "website",
        siteName: shortName,
        canonical: appUrls.naprawa_ekspresow,
        keywords: "Naprawa Ekspresów Przemyśl, Serwis Ekspresów do Kawy Przemyśl",
      },
      schema: {
        localBusiness,
        service: {
          "@type": "Service",
          "@id": appUrls.naprawa_ekspresow + "#service",
          serviceType: "Naprawa Ekspresów do Kawy",
          name: "Naprawa Ekspresów do Kawy w Przemyślu",
          description:
            "Profesjonalny serwis i naprawa ekspresów ciśnieniowych, automatycznych i kolbowych wszystkich marek w Przemyślu. Szybka diagnoza i gwarancja.",
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_ekspresow + "#primaryimage" },
          provider: {
            "@type": "LocalBusiness",
            name: name,
            url: appUrls.home,
            "@id": appUrls.home + "#localbusiness",
          },
          url: appUrls.naprawa_ekspresow,
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 49.7827725,
              longitude: 22.7760291,
            },
            geoRadius: 20000,
          },
        },
        product: {
          "@type": "Product",
          "@id": appUrls.naprawa_ekspresow + "#product",
          name: "Usługa naprawy ekspresów w Przemyślu",
          description:
            "Profesjonalna naprawa ekspresów do kawy wszystkich marek w Przemyślu i okolicach. Specjalizuję się w kompleksowej naprawie domowych i profesjonalnych ekspresów, oferując szybką diagnozę i oryginalne części. Zapewniam gwarancję i pełne zadowolenie klientów.",
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_ekspresow + "#primaryimage" },
          brand: { "@type": "Brand", name: shortName },
          url: appUrls.naprawa_ekspresow,
        },
        faqPage: {
          "@type": "FAQPage",
          "@id": appUrls.naprawa_ekspresow + "#faq",
          name: "Najczęściej zadawane pytania dotyczące naprawy ekspresów",
          mainEntity: [
            {
              "@type": "Question",
              name: "Dlaczego ekspres nie zaparza kawy?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Problem może być w układzie ciśnieniowym (pompa), zatkanych dyszach czy uszkodzonym elemencie zaparzania. Diagnostyka odsłania, które części wymagają interwencji.",
              },
            },
            {
              "@type": "Question",
              name: "Czy obsługujecie ekspresy profesjonalne?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Tak, zarówno ekspresy domowe automatyczne, jak i maszyny gastronomiczne. Każde urządzenie traktuję z uwzględnieniem specyfiki i wymagań serwisowych.",
              },
            },
            {
              "@type": "Question",
              name: "Jak często wykonywać konserwację?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Zalecam regularne odkamienianie zgodnie z instrukcją producenta oraz wymianę filtrów wody co kilka miesięcy (w zależności od jakości wody). Pomaga to uniknąć częstych usterek.",
              },
            },
            {
              "@type": "Question",
              name: "Czy mogę liczyć na szybką naprawę?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Termin ustalamy indywidualnie, starając się zminimalizować przestój urządzenia. Dokładne terminy zależą od dostępności części i rodzaju usterki.",
              },
            },
          ],
        },
        place: {
          "@type": "Place",
          geo: geo,
          name: serwis.subName,
        },
        imageObject: {
          "@type": "ImageObject",
          "@id": appUrls.naprawa_ekspresow + "#primaryimage",
          url: imageUrls.ekspres,
          inLanguage: "pl-PL",
          contentUrl: imageUrls.ekspres,
          width: 700,
          height: 700,
          name: `Naprawa Ekspresów do Kawy Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
          description: "Profesjonalna naprawa ekspresów ciśnieniowych i automatycznych w Przemyślu.",
          caption: "Serwisant szybko naprawi Twój ekspres do kawy.",
          representativeOfPage: true,
        },
        website,
        webpage: {
          "@type": "WebPage",
          "@id": appUrls.naprawa_ekspresow + "#webpage",
          url: appUrls.naprawa_ekspresow,
          inLanguage: "pl-PL",
          name: `Naprawa Ekspresów do Kawy Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
          isPartOf: { "@type": "WebSite", "@id": appUrls.home + "#website" },
          primaryImageOfPage: { "@type": "ImageObject", "@id": appUrls.naprawa_ekspresow + "#primaryimage" },
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_ekspresow + "#primaryimage" },
          thumbnailUrl: imageUrls.ekspres,
          datePublished: datePublished,
          dateModified: dateModified,
          description: "Profesjonalna naprawa ekspresów ciśnieniowych i automatycznych w Przemyślu.",
          // "breadcrumb": { "@type": "BreadcrumbList", "@id": appUrls.naprawa_ekspresow + "#breadcrumb" },
          mainEntity: { "@type": "Product", "@id": appUrls.naprawa_ekspresow + "#product" }, // jeśli występuje Product to mainEntity powinien być Product, w przeciwnym przypadku Service
          // "about": { "@type": "Product", "@id": appUrls.naprawa_ekspresow + "#product" }  // jeśli występuje Product to typ powinien być Product, w przeciwnym przypadku Service
        },
        breadcrumbList: {
          "@type": "BreadcrumbList",
          "@id": appUrls.naprawa_ekspresow + "#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "WebPage",
                "@id": appUrls.home,
                url: appUrls.home,
                name: shortName,
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "WebPage",
                "@id": appUrls.naprawa_ekspresow,
                url: appUrls.naprawa_ekspresow,
                name: "Naprawa Ekspresów",
              },
            },
          ],
        },
      },
    },
    naprawa_telewizorow: {
      metaTags: {
        title: `Naprawa Telewizorów Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        ogTitle: `Naprawa Telewizorów Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        twitterTitle: `Naprawa Telewizorów Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
        description: `Naprawa telewizorów LED, LCD, OLED w Przemyślu. ☝ Twój telewizor nie działa ❓ Profesjonalny serwis RTV ❗ Z gwarancją i dojazdem. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        ogDescription: `Naprawa telewizorów LED, LCD, OLED w Przemyślu. ☝ Twój telewizor nie działa ❓ Profesjonalny serwis RTV ❗ Z gwarancją i dojazdem. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        twitterDescription: `Naprawa telewizorów LED, LCD, OLED w Przemyślu. ☝ Twój telewizor nie działa ❓ Profesjonalny serwis RTV ❗ Z gwarancją i dojazdem. ⚡ Zadzwoń! ☎️ ${formattedPhoneNumber}`,
        imageType: "image/webp",
        image: imageUrls.telewizor,
        imageAlt: "Technik serwisu RTV naprawiający telewizor Smart TV w Przemyślu",
        imageTitle: "Serwis Telewizorów Przemyśl",
        imageWidth: "700",
        imageHeight: "700",
        type: "website",
        siteName: shortName,
        canonical: appUrls.naprawa_telewizorow,
        keywords:
          "Naprawa Telewizorów Przemyśl, Serwis TV Przemyśl, Naprawa Smart TV Przemyśl, Naprawa LCD OLED Przemyśl",
      },
      schema: {
        localBusiness,
        service: {
          "@type": "Service",
          "@id": appUrls.naprawa_telewizorow + "#service",
          serviceType: "Naprawa Telewizorów",
          name: "Naprawa Telewizorów w Przemyślu",
          description:
            "Profesjonalny serwis i naprawa telewizorów LCD, LED, OLED i Smart TV wszystkich marek w Przemyślu. Szybka diagnoza i gwarancja.",
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_telewizorow + "#primaryimage" },
          provider: {
            "@type": "LocalBusiness",
            name: name,
            url: appUrls.home,
            "@id": appUrls.home + "#localbusiness",
          },
          url: appUrls.naprawa_telewizorow,
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 49.7827725,
              longitude: 22.7760291,
            },
            geoRadius: 20000,
          },
        },
        product: {
          "@type": "Product",
          "@id": appUrls.naprawa_telewizorow + "#product",
          name: "Usługa naprawy telewizorów w Przemyślu",
          description: "Fachowa naprawa telewizorów LCD, LED, OLED i Smart TV w Przemyślu",
          // "image": { "@id": appUrls.naprawa_telewizorow + "#primaryimage" },
          brand: { "@type": "Brand", name: shortName },
          url: appUrls.naprawa_telewizorow,
        },
        faqPage: {
          "@type": "FAQPage",
          "@id": appUrls.naprawa_telewizorow + "#faq",
          name: "Najczęściej zadawane pytania dotyczące naprawy telewizorów",
          mainEntity: [
            {
              "@type": "Question",
              name: "Co zrobić, gdy telewizor nie włącza się?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sprawdzam zasilanie, listwę, panel sterowania i płyty wewnętrzne. Dokładna diagnoza wskaże, czy problem dotyczy zasilacza, panelu sterowania lub innego elementu.",
              },
            },
            {
              "@type": "Question",
              name: "Jak postępować przy braku obrazu?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Diagnoza obejmuje kontrolę podświetlenia, matrycy oraz układów sterujących. Oceniam stan techniczny i doradzam rozwiązanie, uwzględniając opłacalność naprawy.",
              },
            },
            {
              "@type": "Question",
              name: "Czy naprawiacie Smart TV?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Tak, weryfikuję problemy z oprogramowaniem, siecią i aplikacjami. Pomagam z konfiguracją i aktualizacjami systemu.",
              },
            },
            {
              "@type": "Question",
              name: "Ile trwa naprawa?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Czas zależy od rodzaju usterki i dostępności części. Po diagnostyce informuję o przewidywanym czasie realizacji.",
              },
            },
          ],
        },
        place: {
          "@type": "Place",
          geo: geo,
          name: serwis.subName,
        },
        imageObject: {
          "@type": "ImageObject",
          "@id": appUrls.naprawa_telewizorow + "#primaryimage",
          url: imageUrls.telewizor,
          inLanguage: "pl-PL",
          contentUrl: imageUrls.telewizor,
          width: 700,
          height: 700,
          name: `Naprawa Telewizorów Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
          description: "Profesjonalna naprawa telewizorów LCD, LED, OLED i Smart TV w Przemyślu.",
          caption: "Serwisant przywróci Twój telewizor do życia.",
          representativeOfPage: true,
        },
        website,
        webpage: {
          "@type": "WebPage",
          "@id": appUrls.naprawa_telewizorow + "#webpage",
          url: appUrls.naprawa_telewizorow,
          inLanguage: "pl-PL",
          name: `Naprawa Telewizorów Przemyśl ☎️ ${formattedPhoneNumber} | ${shortName}`,
          isPartOf: { "@type": "WebSite", "@id": appUrls.home + "#website" },
          primaryImageOfPage: { "@type": "ImageObject", "@id": appUrls.naprawa_telewizorow + "#primaryimage" },
          // "image": { "@type": "ImageObject", "@id": appUrls.naprawa_telewizorow + "#primaryimage" },
          thumbnailUrl: imageUrls.telewizor,
          datePublished: datePublished,
          dateModified: dateModified,
          description: "Profesjonalna naprawa telewizorów LCD, LED, OLED i Smart TV w Przemyślu.",
          // "breadcrumb": { "@type": "BreadcrumbList", "@id": appUrls.naprawa_telewizorow + "#breadcrumb" },
          mainEntity: { "@type": "Product", "@id": appUrls.naprawa_telewizorow + "#product" }, // jeśli występuje Product to mainEntity powinien być Product, w przeciwnym przypadku Service
          // "about": { "@type": "Product", "@id": appUrls.naprawa_telewizorow + "#product" }  // jeśli występuje Product to typ powinien być Product, w przeciwnym przypadku Service
        },
        breadcrumbList: {
          "@type": "BreadcrumbList",
          "@id": appUrls.naprawa_telewizorow + "#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "WebPage",
                "@id": appUrls.home,
                url: appUrls.home,
                name: shortName,
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "WebPage",
                "@id": appUrls.naprawa_telewizorow,
                url: appUrls.naprawa_telewizorow,
                name: "Naprawa Telewizorów",
              },
            },
          ],
        },
      },
    },
  };

  // const values = ["title", "description", "imageAlt", "imageTitle"];
  const values = ["title", "description"];

  function logMetaTagLengths(pageKeys) {
    pageKeys.forEach((pageKey) => {
      const metaTags = dataForMetaTags[pageKey]?.metaTags;
      if (!metaTags) return;
      console.log(" ");
      console.log(`Dla strony https://naprawaprzemysl.pl/${dataForMetaTags[pageKey]?.metaTags.canonical} mam:`);

      Object.entries(metaTags).forEach(([key, value]) => {
        if (values.includes(key)) {
          console.log(`${key}: "${value}",`);
          console.log(`${key} length: ${value.length},`);
        }
      });
    });
  }

  // logMetaTagLengths(["home", "naprawa_pralek", "naprawa_suszarek", "naprawa_zmywarek", "naprawa_telewizorow", "naprawa_ekspresow", "kontakt", "o_mnie", "opinie"]);

  // logMetaTagLengths(["home", "naprawa_pralek", "naprawa_suszarek", "naprawa_zmywarek", "naprawa_telewizorow", "naprawa_ekspresow"]);

  return dataForMetaTags[key];
};
