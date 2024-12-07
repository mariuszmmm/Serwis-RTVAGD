
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
// export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://naprawaprzemysl.pl";


export const cloudinaryImageUrls = {
  serwis: "https://res.cloudinary.com/difc0i71u/image/upload/v1731168333/Serwis/serwis.webp",
  serwis_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/serwis",
  telewizor: "https://res.cloudinary.com/difc0i71u/image/upload/v1734715051/Serwis/serwis-telewizorow-przemysl-naprawa-telewizora.png",
  telewizor_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto,w_300/v1/Serwis/serwis-telewizorow-przemysl-naprawa-telewizoras",

  ekspres: "https://res.cloudinary.com/difc0i71u/image/upload/v1734715051/Serwis/naprawa-ekspresow-2",

  ekspres_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/serwis-ekspresow-przemysl-naprawa-ekspresu",
  ekspres_2: "https://res.cloudinary.com/difc0i71u/image/upload/v1734715051/Serwis/serwis-ekspresow-przemysl-profesjonalna-naprawa-ekspresu.png",
  ekspres_2_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/serwis-ekspresow-przemysl-profesjonalna-naprawa-ekspresu",
  // zmywarka: "https://res.cloudinary.com/difc0i71u/image/upload/v1734715051/Serwis/serwis-zmywarek-przemysl-naprawa-zmywarki.webp",

  zmywarka: "https://res.cloudinary.com/difc0i71u/image/upload/v1755867034/Serwis/naprawa-zmywarek.png",
  zmywarka_520: "https://res.cloudinary.com/difc0i71u/image/upload/w_520/v1754622765/Serwis/naprawa-zmywarek.webp",
  zmywarka_284: "https://res.cloudinary.com/difc0i71u/image/upload/w_284/v1754622765/Serwis/naprawa-zmywarek.webp",




  zmywarka_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto,w_300/v1/Serwis/serwis-zmywarek-przemysl-naprawa-zmywarki",

  // pralka: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto/q_auto/v1754622763/Serwis/naprawa-pralek-2.webp",
  pralka: "https://res.cloudinary.com/difc0i71u/image/upload/v1/Serwis/naprawa-pralek-2.webp",

  pralka_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/serwis-pralek-przemysl-naprawa-pralki",
  suszarka: "https://res.cloudinary.com/difc0i71u/image/upload/v1734715051/Serwis/serwis-suszarek-przemysl-naprawa-suszarki.png",
  suszarka_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/serwis-suszarek-przemysl-naprawa-suszarki",
  logoGoogle: "https://res.cloudinary.com/difc0i71u/image/upload/v1731168332/Serwis/logoGoogle.png",
  logoGoogle_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/logoGoogle",
  logo: "https://res.cloudinary.com/difc0i71u/image/upload/v1733813310/Serwis/logo.png",
  logo_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/logo",
  mapa: "https://res.cloudinary.com/difc0i71u/image/upload/v1732595296/Serwis/mapa.png",
  mapa_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/mapa",
};





export const imageUrls = {
  // serwis: `https://res.cloudinary.com/difc0i71u/image/upload/v1755230400/Serwis/serwis-rtv-agd.webp`,
  serwis: `${baseUrl}/images/serwis-rtv-agd.webp`,
  serwis_768: `${baseUrl}/images/serwis-rtv-agd-768.webp`,
  serwis_480: `${baseUrl}/images/serwis-rtv-agd-480.webp`,

  pralka: `${baseUrl}/images/naprawa-pralek-700.webp`,
  pralka_520: `${baseUrl}/images/naprawa-pralek-520.webp`,
  pralka_284: `${baseUrl}/images/naprawa-pralek-284.webp`,

  suszarka: `${baseUrl}/images/naprawa-suszarek-2.webp`,

  // zmywarka: `https://res.cloudinary.com/difc0i71u/image/upload/v1755748024/Serwis/naprawa-zmywarek.png`,


  zmywarka_520: `${baseUrl}/images/naprawa-zmywarek-520.webp`,
  zmywarka_284: `${baseUrl}/images/naprawa-zmywarek-284.webp`,
  // zmywarka: `${baseUrl}/images/naprawa-zmywarek.png`,

  telewizor: `${baseUrl}/images/naprawa-telewizorow-2.webp`,
  ekspres: `${baseUrl}/images/naprawa-ekspresow-2.webp`,

  _pralka: `${baseUrl}/images/pralka.webp`,
  _pralka_520: `${baseUrl}/images/pralka-520.webp`,
  _pralka_284: `${baseUrl}/images/pralka-284.webp`,

  _suszarka: `${baseUrl}/images/suszarka.webp`,
  _suszarka_520: `${baseUrl}/images/suszarka-520.webp`,
  _suszarka_284: `${baseUrl}/images/suszarka-284.webp`,

  _zmywarka: `${baseUrl}/images/zmywarka.webp`,
  _zmywarka_520: `${baseUrl}/images/zmywarka-520.webp`,
  _zmywarka_284: `${baseUrl}/images/zmywarka-284.webp`,

  _telewizor: `${baseUrl}/images/telewizor.webp`,
  _telewizor_520: `${baseUrl}/images/telewizor-520.webp`,
  _telewizor_284: `${baseUrl}/images/telewizor-284.webp`,

  _ekspres: `${baseUrl}/images/ekspres.webp`,
  _ekspres_520: `${baseUrl}/images/ekspres-520.webp`,
  _ekspres_284: `${baseUrl}/images/ekspres-284.webp`,

  _ekspres_2: `${baseUrl}/images/ekspres_2.webp`,
  _ekspres_2_284: `${baseUrl}/images/ekspres_2-284.webp`,



  serwis_1: baseUrl + "/images/serwis.jpg",
  telewizor_300: baseUrl + "/images/serwis-telewizorow-przemysl-naprawa-telewizora_300.webp",
  ekspres_300: baseUrl + "/images/serwis-ekspresow-przemysl-naprawa-ekspresu_300.webp",
  ekspres_2: baseUrl + "/images/serwis-ekspresow-przemysl-profesjonalna-naprawa-ekspresu.webp",

  ekspres_2_300: baseUrl + "/images/serwis-ekspresow-przemysl-profesjonalna-naprawa-ekspresu_300.webp",
  zmywarka_300: baseUrl + "/images/serwis-zmywarek-przemysl-naprawa-zmywarki_300.webp",
  pralka_300: baseUrl + "/images/naprawa-pralek-przemysl-serwis-300.webp",
  suszarka_300: baseUrl + "/images/serwis-suszarek-przemysl-naprawa-suszarki_300.webp",

  logoGoogle: baseUrl + "/images/logoGoogle.webp",
  logo: baseUrl + "/images/logo.svg",
  mapa: baseUrl + "/images/mapa.webp",
  qrCode: baseUrl + "/images/qrCode.svg",
  favicon: baseUrl + "/images/favicon.svg",
};

export const appUrls = {
  home: baseUrl + "/",
  kontakt: baseUrl + "/kontakt/",
  o_mnie: baseUrl + "/o-mnie/",
  opinie: baseUrl + "/opinie/",
  naprawa_pralek: baseUrl + "/naprawa-pralek/",
  naprawa_suszarek: baseUrl + "/naprawa-suszarek/",
  naprawa_zmywarek: baseUrl + "/naprawa-zmywarek/",
  naprawa_ekspresow: baseUrl + "/naprawa-ekspresow/",
  naprawa_telewizorow: baseUrl + "/naprawa-telewizorow/",
};

// export const routes = {
//   home: "/",
//   kontakt: "/kontakt/",
//   o_mnie: "/o-mnie/",
//   opinie: "/opinie/",
//   naprawa_pralek: "/naprawa-pralek/",
//   naprawa_suszarek: "/naprawa-suszarek/",
//   naprawa_zmywarek: "/naprawa-zmywarek/",
//   naprawa_ekspresow: "/naprawa-ekspresow/",
//   naprawa_telewizorow: "/naprawa-telewizorow/",
// };

// export const dataUrl = baseUrl ? `${baseUrl}/data.json` : "http://localhost:3000/data.json";
export const dataUrl = "https://naprawaprzemysl.pl/data.json";

export const imageDataUrl = "https://naprawaprzemysl.pl/imageParameters.json";