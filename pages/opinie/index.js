import { Container } from "../../components/common/Container";
import { Title } from "../../components/common/Title";
import ReviewsItem from "../../components/ReviewsItem";
import { serwis } from "../../utils/serwis";
import { ButtonLink } from "../../components/common/ButtonLink";
import MetaTags from "../../components/common/MetaTags";
import { getDataForMetaTags } from "../../utils/dataForMetaTags";
import { getGoogleData } from "../../utils/getGoogleData";
import { Section } from "../../components/common/Section";
import { HeroText } from "../../components/common/Hero/HeroText";
import { StyledText } from "../../components/common/Text/styled";
import { StyledLink } from "../../components/common/StyledLink";
import { Break } from "../../components/Break";
import { appUrls } from "../../utils/urls";
import { getImageParameters } from "../../utils/getImageParameters";

const Reviews = ({ status, reviews, rating, ratingsTotal, dataForMetaTags }) => {
  const path = appUrls.opinie;

  return (
    <>
      <MetaTags
        path={path}
        page={dataForMetaTags}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />
      <Container>
        <Section>
          <Title>Opinie Klientów</Title>
          {reviews ?
            reviews.map((item, index) => (
              <ReviewsItem
                item={item}
                key={item.time}
                reviewIndex={index + 1}
              />
            ))
            :
            <>
              <p>Wystąpił błąd podczas ładowania opinii.</p>
              <p> Proszę spróbować ponownie później.</p>
            </>
          }
        </Section>

        {reviews &&
          <Section>
            <HeroText>
              <strong>Czy jesteś zadowolony z usług? Podziel się swoim doświadczeniem i pomóż innym klientom w podejmowaniu najlepszych decyzji!</strong>
            </HeroText>
            <ButtonLink
              href={serwis.url.addTestimonial}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zostaw swoją opinię
            </ButtonLink>
            <StyledText $disclaimer>
              Prezentujemy wybrane, nieweryfikowane przez serwis opinie z Google.
              <Break />
              Zobacz{" "}
              <StyledLink
                href={serwis.url.GMF}
                target="_blank"
                rel="noopener noreferrer"
                title="Zobacz wszystkie opinie w Mapach Google"
              >
                wszystkie opinie w Google
              </StyledLink>{" "}
              oraz{" "}
              <span style={{ whiteSpace: "nowrap" }}>
                <StyledLink
                  href={`${appUrls.polityka_prywatnosci}#opinie`}
                  title="Zasady publikacji opinii"
                >
                  zasady publikacji opinii
                </StyledLink>
                .
              </span>
            </StyledText>
          </Section>}

      </Container>
    </>
  );
};

// export const getStaticProps = async () => {
//   const data = await getGoogleData();

//   return { props: { ...data || null } };
// };

export const getStaticProps = async () => {
  const [googleData, imageParameters, dataForMetaTags] = await Promise.all([
    getGoogleData(),
    getImageParameters(["serwis_rtv_agd"]),
    getDataForMetaTags("opinie")
  ]);

  return {
    props: {
      ...(googleData || {}),
      imageParameters: imageParameters || null,
      dataForMetaTags: dataForMetaTags || null,
    },
  };
};

export default Reviews;