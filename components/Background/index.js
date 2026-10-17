import { BackgroundImage } from "../common/BackgroundImage";
import { BackgroundWrapper, Circle, Rotating } from "./styled";
import { usePathname } from "next/navigation";

const Background = ({ dataForMetaTags, imageParameters }) => {
  const pathname = usePathname() || "";
  const isHomePage = pathname === "/" || pathname === "";

  return (
    <BackgroundWrapper>
      {isHomePage && imageParameters?.serwis_rtv_agd && dataForMetaTags && (
        <BackgroundImage
          src={imageParameters.serwis_rtv_agd.imageUrl}
          srcSet={imageParameters.serwis_rtv_agd.srcSet}
          sizes='100vw'
          width={dataForMetaTags.metaTags?.imageWidth || 931}
          height={dataForMetaTags.metaTags?.imageHeight || 497}
          title={dataForMetaTags.metaTags?.imageTitle || "Serwis RTV i AGD Przemyśl"}
          alt={dataForMetaTags.metaTags?.imageAlt || "Technik serwisu RTV i AGD w Przemyślu"}
          loading='eager'
          fetchpriority='low'
        />
      )}
      <Rotating>
        <Circle $top={"0%"} $left={"40%"}></Circle>
        <Circle $top={"-70%"} $left={"10%"}></Circle>
        <Circle $top={"0%"} $left={"-30%"}></Circle>
      </Rotating>
    </BackgroundWrapper>
  );
};

export default Background;
