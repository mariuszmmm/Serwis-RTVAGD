import {
  FooterContainer,
  FooterText,
  FooterWrapper,
  FacebookIcon,
  GoogleIcon,
  FooterInfo,
  FooterCopy,
  EmailIcon,
  PhoneIcon,
  StyledLink,
  LinkIcon,
  LocationIcon,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { SubTitle } from "../common/SubTitle";
import { appUrls } from "../../utils/urls";

const Footer = () => (
  <FooterWrapper
  // itemScope
  // itemType="https://schema.org/WPFooter"
  >
    <FooterContainer>
      <SubTitle>{serwis.shortName}</SubTitle>
      <FooterInfo>
        <StyledLink
          $area="adres"
          href={serwis.url.GMF}
          rel="noopener noreferrer"
          title="Adres"
        >
          <LocationIcon />
          <FooterText>ul. {serwis.adres} </FooterText>
        </StyledLink>
        <StyledLink
          $area="telefon"
          href={`tel:${serwis.phone.number}`}
          title="Telefon"
        >
          <PhoneIcon />
          <FooterText>{serwis.phone.formatted} </FooterText>
        </StyledLink>
        <StyledLink
          $area="email"
          href={`mailto:${serwis.email}`}
          title="E-mail"
        >
          <EmailIcon />
          <FooterText>{serwis.email} </FooterText>
        </StyledLink>
        <StyledLink
          $area="facebook"
          href={serwis.url.facebook}
          rel="noopener noreferrer"
          title="Facebook"
        // itemProp="sameAs"
        >
          <FacebookIcon />
          <FooterText>Facebook</FooterText>
        </StyledLink>
        <StyledLink
          $area="link"
          href={appUrls.home}
          title="naprawaprzemysl.pl"
        >
          <LinkIcon />
          <FooterText>{"naprawaprzemysl.pl"} </FooterText>
        </StyledLink>
        <StyledLink
          $area="google"
          href={serwis.url.GMF}
          rel="noopener noreferrer"
          title="Google"
        // itemProp="sameAs"
        >
          <GoogleIcon />
          <FooterText>Google</FooterText>
        </StyledLink>
      </FooterInfo>
      <FooterCopy>
        © 2025 {serwis.shortName}. Wszelkie prawa zastrzeżone.
      </FooterCopy>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;