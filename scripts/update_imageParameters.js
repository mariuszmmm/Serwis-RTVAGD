const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });
const { v2: cloudinary } = require('cloudinary');
const { getCldImageUrl } = require('next-cloudinary');

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  secure: true,
});

const imagePublicIds = [
  "Serwis/serwis-rtv-agd",
  "Serwis/naprawa-pralek",
  "Serwis/naprawa-suszarek",
  "Serwis/naprawa-zmywarek",
  "Serwis/naprawa-ekspresow",
  "Serwis/naprawa-telewizorow"
];

async function fetchImageData() {
  console.log("Pobieranie danych obrazów z Cloudinary...");
  try {
    const imageDetails = await Promise.all(
      imagePublicIds.map(id => cloudinary.api.resource(id))
    );

    const getImageUrl = ({ src, width, height, quality, format, version }) => {
      return getCldImageUrl({
        src,
        width,
        height,
        crop: 'limit',
        quality: quality || 'auto',
        format: format || 'auto',
        version,
      });
    };

    const imageParameters = {};
    const widths = [190, 284, 380, 425, 460, 480, 520, 568, 760, 850, 1024];

    imageDetails.forEach(detail => {
      const key = detail.public_id.split('/').pop().replace(/-/g, "_");
      imageParameters[key] = {
        public_id: detail.public_id,
        version: `v${detail.version}`,
        width: detail.width,
        height: detail.height,
        imageUrl: getImageUrl({
          src: detail.public_id,
          width: detail.width,
          height: detail.height,
          format: "webp",
          version: `v${detail.version}`,
        }),
        imageUrl_520: getImageUrl({
          src: detail.public_id,
          width: 520,
          height: 520,
          format: "webp",
          version: `v${detail.version}`,
        }),
        thumbnailUrl: getImageUrl({
          src: detail.public_id,
          width: 150,
          height: 150,
          quality: '60',
          format: "jpeg",
          version: `v${detail.version}`,
        }),
        srcSet: widths.map(w => `${getImageUrl({ src: detail.public_id, width: w, version: `v${detail.version}` })} ${w}w`)
          .join(', '),
      };
    });

    const filePath = path.join(__dirname, '..', 'imageParameters.json');

    fs.writeFileSync(filePath, JSON.stringify(imageParameters, null, 2), 'utf-8');
    console.log('✅ imageParameters.json został wygenerowany!');
    console.log('Ścieżka do pliku:', filePath);
    console.log('\n--- Zawartość imageParameters.json ---\n');
    console.log(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.error("Błąd podczas pobierania wersji obrazów:", error);
    process.exit(1);
  }
}

fetchImageData();