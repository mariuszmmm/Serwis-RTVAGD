import axios from "axios";
import { dataUrl } from "./urls";
import { serwis } from "./serwis";
import data from "../public/googleData.json";

const formatGoogleData = (reviews, ratingsTotal, rating, openingHours = null) => {
  if (!Array.isArray(reviews) || !ratingsTotal || !rating) {
    throw new Error("Invalid response from Google Places API");
  }

  const MIN_REVIEW_LENGTH = 200;
  let selectedReviews = reviews.filter(
    (review) => review?.text && review.text.trim().length >= MIN_REVIEW_LENGTH && (review.rating >= 5 || !review.rating)
  );

  if (selectedReviews.length < 5) {
    let reserveReviews = serwis.reviews
      .filter((item) => item?.text && item.text.trim().length >= MIN_REVIEW_LENGTH)
      .filter((item) => !selectedReviews.find((review) => review.text === item.text));
    let reserveReviewsIndex = 0;

    while (selectedReviews.length < 5 && reserveReviewsIndex < reserveReviews.length) {
      selectedReviews = [...selectedReviews, reserveReviews[reserveReviewsIndex]];
      reserveReviewsIndex++;
    }
  }

  return {
    reviews: selectedReviews || [],
    ratingsTotal: ratingsTotal || null,
    rating: rating || null,
    openingHours: openingHours || null,
  };
};

const hasValidLocalData =
  Boolean(data) &&
  Array.isArray(data.reviews) &&
  Boolean(data.user_ratings_total) &&
  Boolean(data.rating);

export const getGoogleData = async () => {
  if (process.env.CI === "true" && hasValidLocalData) {
    return formatGoogleData(
      data.reviews,
      data.user_ratings_total,
      data.rating,
      data.opening_hours || null
    );
  }

  try {
    const response = await axios.get(dataUrl);
    const reviews = response.data.reviews || [];
    const ratingsTotal = response.data.user_ratings_total || null;
    const rating = response.data.rating || null;
    const openingHours = response.data.opening_hours || data.opening_hours || null;

    return formatGoogleData(reviews, ratingsTotal, rating, openingHours);
  } catch (error) {
    console.error("Error fetching data from Google Places API:", error);

    const reviews = data.reviews || [];
    const ratingsTotal = data.user_ratings_total || null;
    const rating = data.rating || null;
    const openingHours = data.opening_hours || null;

    return formatGoogleData(reviews, ratingsTotal, rating, openingHours);
  }
};
