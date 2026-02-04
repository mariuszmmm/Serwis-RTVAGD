import { BackgroundImage } from "../common/BackgroundImage";
import { BackgroundWrapper, Circle, Rotating } from "./styled";
import { usePathname } from "next/navigation";

const Background = ({ dataForMetaTags, imageParameters }) => {
  const pathname = usePathname() || "";
  const isServicesPath = pathname.includes("naprawa-");

  return (
    <BackgroundWrapper>
      {!isServicesPath && imageParameters && dataForMetaTags && (
        <BackgroundImage
          src={imageParameters.serwis_rtv_agd?.imageUrl}
          srcSet={imageParameters.serwis_rtv_agd?.srcSet}
          width={dataForMetaTags.metaTags?.imageWidth}
          height={dataForMetaTags.metaTags?.imageHeight}
          title={dataForMetaTags.metaTags?.imageTitle}
          alt={dataForMetaTags.metaTags?.imageAlt}
          loading='eager'
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
