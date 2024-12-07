require("dotenv").config();
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const PLACE_ID = process.env.NEXT_PUBLIC_PLACE_ID;

if (!KEY) {
  console.error("Brakuje KEY w zmiennych środowiskowych.");
  process.exit(1);
}

async function fetchData() {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&fields=reviews,rating,user_ratings_total&language=pl&key=${KEY}`;
  const aditionalUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&fields=reviews&language=pl&reviews_sort=newest&key=${KEY}`;

  const [res, aditionalRes] = await Promise.all([axios.get(url), axios.get(aditionalUrl)]);

  const json = res.data;
  const aditionalJson = aditionalRes.data;

  if (json.status !== "OK" || aditionalJson.status !== "OK") {
    throw new Error(`HTTP error! status: ${json.status}, ${aditionalJson.status}`);
  }

  if (
    !json.result ||
    !aditionalJson.result ||
    !Array.isArray(aditionalJson.result.reviews) ||
    !Array.isArray(json.result.reviews)
  ) {
    console.error("Nieprawidłowa odpowiedź Google API:", JSON.stringify(json, null, 2));
    console.error("Nieprawidłowa odpowiedź Google API:", JSON.stringify(aditionalJson, null, 2));
    throw new Error("Brak danych w odpowiedzi Google.");
  }

  const reviews = json.result.reviews;
  const additionalReviews = aditionalJson.result.reviews;
  const rating = json.result.rating || 0;
  const user_ratings_total = json.result.user_ratings_total || 0;
  const update_time = new Date().toISOString().replace("T", " ").substring(0, 19);

  const newReviews = reviews.map((item) => ({
    author_name: item.author_name || "",
    profile_photo_url: item.profile_photo_url || "",
    text: item.text || "",
    rating: item.rating || 0,
    time: item.time || 0,
  }));

  const newAdditionalReviews = additionalReviews.map((item) => ({
    author_name: item.author_name || "",
    profile_photo_url: item.profile_photo_url || "",
    text: item.text || "",
    rating: item.rating || 0,
    time: item.time || 0,
  }));

  const filteredRewievs = newReviews.filter((review) => review.text && review.rating > 4);
  const additionalFilteredRewievs = newAdditionalReviews.filter((review) => review.text && review.rating > 4);

  const uniqueReviews = [];
  [...filteredRewievs, ...additionalFilteredRewievs].forEach((rewiew) => {
    if (!uniqueReviews.some((uniqueRewiew) => uniqueRewiew.text === rewiew.text)) {
      uniqueReviews.push(rewiew);
    }
  });

  const sortedReviews = uniqueReviews.sort((a, b) => b.time - a.time);

  return {
    reviews: sortedReviews,
    rating,
    user_ratings_total,
    update_time,
  };
}

(async () => {
  try {
    const data = await fetchData();
    // Pozwól na podanie ścieżki do pliku jako argumentu, domyślnie public/googleData.json
    const argPath = process.argv[2];
    const filePath = argPath ? argPath : path.join(__dirname, "..", "googleData.json");
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    console.log("✅ googleData.json został wygenerowany!");
    console.log("Ścieżka do pliku:", filePath);
    console.log("\n--- Zawartość googleData.json ---\n");
    console.log(fs.readFileSync(filePath, "utf8"));
  } catch (err) {
    console.error("Błąd podczas pobierania danych:", err);
    process.exit(1);
  }
})();
