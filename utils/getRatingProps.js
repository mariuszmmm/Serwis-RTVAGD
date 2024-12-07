import axios from 'axios';
import { reviewUrl } from "./urls";
import fs from 'fs';
import path from 'path';

export const getRatingProps = async () => {
  try {
    const response = await axios(reviewUrl);
    const ratingsTotal = response.data?.user_ratings_total || null;
    const rating = response.data?.rating || null;
    const ratingAceptable = rating >= 4 ? rating : null;
    return {
      props: {
        status: 'success',
        ratingsTotal,
        rating: ratingAceptable
      },
    };
  } catch (error) {
    // Fallback: try to load from public/data.json using fs (for build time)
    try {
      const dataPath = path.join(process.cwd(), 'public', 'data.json');
      const fileData = fs.readFileSync(dataPath, 'utf-8');
      const data = JSON.parse(fileData);
      const ratingsTotal = data?.user_ratings_total || null;
      const rating = data?.rating || null;
      const ratingAceptable = rating >= 4 ? rating : null;
      return {
        props: {
          status: 'success',
          ratingsTotal,
          rating: ratingAceptable
        },
      };
    } catch (fallbackError) {
      console.error('Error fetching rating:', fallbackError);
      return {
        props: {
          status: 'error',
          error: fallbackError.message,
          ratingsTotal: null,
          rating: null
        },
      };
    }
  }
};