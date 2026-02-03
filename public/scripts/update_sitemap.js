const fs = require("fs");
require("dotenv").config({ path: ".env" });
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const path = require("path");
const imageParameters = require("../imageParameters.json");

const generateSitemap = async () => {
  const routes = {
    "/": {
      changefreq: "daily",
      priority: "1.0",
      image: imageParameters.serwis_rtv_agd.imageUrl,
      caption: "Profesjonalna naprawa sprzętu RTV i AGD w Przemyślu.",
      title: "Serwis RTV i AGD Przemyśl",
    },
    "/naprawa-pralek/": {
      changefreq: "daily",
      priority: "0.9",
      image: imageParameters.naprawa_pralek.imageUrl,
      caption: "Profesjonalna naprawa pralek w Przemyślu.",
      title: "Serwis Pralek Przemyśl",
    },
    "/naprawa-suszarek/": {
      changefreq: "daily",
      priority: "0.9",
      image: imageParameters.naprawa_suszarek.imageUrl,
      caption: "Profesjonalna naprawa suszarek do prania w Przemyślu.",
      title: "Serwis Suszarek Przemyśl",
    },
    "/naprawa-zmywarek/": {
      changefreq: "daily",
      priority: "0.9",
      image: imageParameters.naprawa_zmywarek.imageUrl,
      caption: "Profesjonalna naprawa zmywarek w Przemyślu.",
      title: "Serwis Zmywarek Przemyśl",
    },
    "/naprawa-ekspresow/": {
      changefreq: "daily",
      priority: "0.9",
      image: imageParameters.naprawa_ekspresow.imageUrl,
      caption: "Profesjonalna naprawa ekspresów do kawy w Przemyślu.",
      title: "Serwis Ekspresów do Kawy Przemyśl",
    },
    "/naprawa-telewizorow/": {
      changefreq: "daily",
      priority: "0.9",
      image: imageParameters.naprawa_telewizorow.imageUrl,
      caption: "Profesjonalna naprawa telewizorów w Przemyślu.",
      title: "Serwis Telewizorów Przemyśl",
    },
    "/o-mnie/": {
      changefreq: "weekly",
      priority: "0.5",
    },
    "/opinie/": {
      changefreq: "daily",
      priority: "0.8",
    },
    "/kontakt/": {
      changefreq: "monthly",
      priority: "0.8",
    },
    "/polityka-prywatnosci/": {
      changefreq: "yearly",
      priority: "0.3",
    },
  };

  const urlsXml = Object.entries(routes)
    .map(([route], index) => {
      const data = routes[route];
      const imageBlock =
        data.image && data.caption && data.title
          ? [
              `    <image:image>`,
              `      <image:loc>${data.image}</image:loc>`,
              `      <image:caption>${data.caption}</image:caption>`,
              `      <image:title>${data.title}</image:title>`,
              `    </image:image>`,
            ].join("\n")
          : "";
      return [
        `  <url>`,
        `    <loc>${BASE_URL}${route}</loc>`,
        `    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>`,
        `    <changefreq>${data.changefreq || "daily"}</changefreq>`,
        `    <priority>${data.priority || "0.8"}</priority>`,
        imageBlock,
        `  </url>`,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
    urlsXml +
    "\n" +
    `</urlset>`;

  try {
    if (!BASE_URL) {
      throw new Error("❌ Błąd: NEXT_PUBLIC_BASE_URL nie jest ustawiony w zmiennych środowiskowych.");
    }

    const filePath = path.join(__dirname, "..", "sitemap.xml");
    fs.writeFileSync(filePath, sitemap.trim());
    console.log("✅ sitemap.xml został wygenerowany!");
    console.log("Ścieżka do pliku:", filePath);
    console.log("\n--- Zawartość sitemap.xml ---\n");
    console.log(fs.readFileSync(filePath, "utf8"));
  } catch (err) {
    console.error("❌ Błąd podczas zapisu pliku:", err);
  }
};

generateSitemap();
