// import { getCldImageUrl } from "next-cloudinary";
import imageParameters from "../public/imageParameters.json";

export const getImageParameters = (pageKeys) => {
  const parameters = {};

  pageKeys.forEach(key => {
    const img = imageParameters[key];
    if (!img) {
      console.error(`Nie znaleziono danych obrazu dla klucza: ${key}`);
      return;
    }

    parameters[key] = {
      imageUrl: img.imageUrl,
      // imageUrl_520: img.imageUrl_520,
      srcSet: img.srcSet,
    };
  });

  return parameters;
}