import { getCldImageUrl } from "next-cloudinary";
import { Stars } from "../../components/common/Stars";
import { appUrls } from "../../utils/urls";
import { ImageWrapper, StyledLink, Text, Wrpper } from "./styled";

export const GoogleRating = ({ rating, hidden }) => {
  const getUrl = (width) => getCldImageUrl({
    src: 'Serwis/logoGoogle',
    width,
    quality: 'auto',
    fetchFormat: 'auto',
    dpr: 'auto'
  });

  return (
    <>
      {rating > 4 &&
        <Wrpper
          $hidden={hidden}
          id="rating"
        >
          <StyledLink
            href={appUrls.opinie}
            title="Poznaj opinie zadowolonych klientów! ⭐⭐⭐⭐⭐"
          >
            <ImageWrapper>
              <img
                alt="google logo"
                src={getUrl(32)}
                width={32}
                height={32}
                srcSet={`
                  ${getUrl(18)} 18w,
                  ${getUrl(24)} 24w,
                  ${getUrl(32)} 32w,
                  ${getUrl(36)} 36w,
                  ${getUrl(48)} 48w,
                  ${getUrl(64)} 64w
                `}
                sizes="(max-width: 480px) 18px, (max-width: 768px) 24px, 32px"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
            </ImageWrapper>
            <Text>Google Rating {rating.toString().replace(".", ",")}</Text>
            <Stars rating={5} center />
          </StyledLink>
        </Wrpper>}
    </>
  );
};
