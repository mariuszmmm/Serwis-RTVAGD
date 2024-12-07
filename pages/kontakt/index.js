import { ContactSection, ContactContainer, ContactInfo, ContactText } from "../../styles/kontakt/KontaktStyled";
import ContactForm from "../../components/ContactForm";
import { StyledLink } from "../../components/common/StyledLink";
import { SubTitle } from "../../components/common/SubTitle";
import { Title } from "../../components/common/Title";
import { serwis } from "../../utils/serwis";
import Iframe from "../../components/Iframe";
import MetaTags from "../../components/common/MetaTags";
import { getDataForMetaTags } from "../../utils/dataForMetaTags";
import { ImageContainer } from "../../styles/kontakt/KontaktStyled";
import { getGoogleData } from "../../utils/getGoogleData";
import { appUrls } from "../../utils/urls";
import { getImageParameters } from "../../utils/getImageParameters";

const Contact = ({ rating, ratingsTotal, dataForMetaTags }) => {
  const path = appUrls.kontakt;

  return (
    <>
      <MetaTags
        path={path}
        page={dataForMetaTags}
        rating={rating}
        ratingsTotal={ratingsTotal}
      />
      <ContactContainer>
        <Title>Kontakt</Title>
        <ContactSection>
          <ContactForm />
          <ContactInfo>
            <SubTitle>
              <StyledLink
                href={appUrls.home}
                title={serwis.name}
              >
                {serwis.shortName}
              </StyledLink>
            </SubTitle>
            <ContactText>
              adres:{"  "}
              <span>
                <StyledLink
                  href={serwis.url.GMF}
                  rel="noopener noreferrer"
                  title={serwis.adres}
                >
                  {serwis.adres}
                </StyledLink>
              </span>
            </ContactText>
            <ContactText>
              e-mail:{" "}
              <span>
                <StyledLink
                  href={`mailto:${serwis.email}`}
                  title={serwis.email}
                >
                  {serwis.email}
                </StyledLink>
              </span>
            </ContactText>
            <ContactText>
              telefon:{" "}
              <span>
                <StyledLink
                  href={`tel:${serwis.phone.number}`}
                  title={serwis.phone.international}
                >
                  {serwis.phone.international}
                </StyledLink>
              </span>
            </ContactText>
            <br />
            <ContactText>NIP: 7952257951</ContactText>
            <br />
            <ContactText>Zapraszamy od poniedziałku do piątku</ContactText>
            <ContactText>
              w godzinach 9.30-17.00
            </ContactText>
            <ImageContainer>
              <Iframe />
            </ImageContainer>
          </ContactInfo>

        </ContactSection>
      </ContactContainer>
    </>
  );
};

export const getStaticProps = async () => {
  const [googleData, imageParameters, dataForMetaTags] = await Promise.all([
    getGoogleData(),
    getImageParameters(["serwis_rtv_agd"]),
    getDataForMetaTags("kontakt")
  ]);

  return {
    props: {
      ...(googleData || {}),
      imageParameters: imageParameters || null,
      dataForMetaTags: dataForMetaTags || null,
    },
  };
};

export default Contact;