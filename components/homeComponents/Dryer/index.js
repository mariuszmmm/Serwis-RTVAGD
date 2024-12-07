import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../common/ImageWrapper";
import { HeroImage } from "../../common/Hero/HeroImage";
import { getCldImageUrl } from "next-cloudinary";

const Dryer = ({ show, left, setHold }) => {

  const getUrl = (width) => getCldImageUrl({
    src: 'Serwis/suszarka',
    width,
    quality: 'auto',
    fetchFormat: 'auto',
    dpr: 'auto'
  });

  return (
    <ImageWrapper
      $show={show}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      $left={left}
    >
      <Link
        href={appUrls.naprawa_suszarek}
        title="Serwis suszarek w Przemyślu"
      >
        <HeroImage
          src={getUrl(700)}
          alt="Suszarki"
          width={700}
          height={700}
          srcSet={`
            ${getUrl(142)} 142w,
            ${getUrl(284)} 284w,
            ${getUrl(426)} 426w,
            ${getUrl(520)} 520w,
            ${getUrl(700)} 700w,
            ${getUrl(1024)} 1024w,
            ${getUrl(1400)} 1400w
          `}
          sizes="(orientation: portrait) and (max-width: 520px) 59vw, (orientation: portrait) 520px, 30vw"
          loading="lazy"
        />
      </Link>
    </ImageWrapper>
  )
};

export default Dryer;