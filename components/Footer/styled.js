import styled, { css } from "styled-components";
import Facebook from "../../public/icons/facebook.svg";
import Envelope from "../../public/icons/envelope.svg";
import Phone from "../../public/icons/phone.svg";
import Google from "../../public/icons/address-card.svg";
import Link from "../../public/icons/link.svg";
import Location from "../../public/icons/location.svg";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  height: min-content;
  padding: 1vh 0;
  font-size: 0.8rem;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  max-width: 1500px;
  margin: 10px auto 0;
  padding: 0 20px;
  height: 100%;

  & > :first-child {
    padding-left: 5px;
  }
`;

export const FooterInfo = styled.div`
  display: grid;
  align-content: center;
  width: 100%;
  gap: 5px clamp(10px, 0.9vw, 200px);
  margin-bottom: 10px;

  grid-template-areas:
    "telefon  google"
    "email facebook"
    "adres link";

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-areas:
      "telefon google"
      "email facebook"
      "link link"
      "adres adres";
  }
`;

export const FooterText = styled.span`
  margin: 0;
  font-size: clamp(0.5rem, 2.7vw, 0.9rem);
  font-weight: 200;
  width: max-content;
`;

export const FooterCopy = styled.p`
  margin: 10px 0 3px;
  font-size: clamp(0.2rem, 1.9vw, 0.6rem);
  color: ${({ theme }) => theme.color.border};
  font-weight: 200;
  width: max-content;
  align-self: center;
`;

const styledIcon = css`
  width: 2vw;
  height: 2vw;
  max-width: 2rem;
  max-height: 2rem;
`;

export const EmailIcon = styled(Envelope)`
  ${styledIcon}
`;
export const PhoneIcon = styled(Phone)`
  ${styledIcon}
`;
export const FacebookIcon = styled(Facebook)`
  ${styledIcon}
`;
export const GoogleIcon = styled(Google)`
  ${styledIcon}
`;

export const LinkIcon = styled(Link)`
  ${styledIcon}
`;

export const LocationIcon = styled(Location)`
  ${styledIcon}
`;

export const StyledLink = styled.a`
  grid-area: ${({ $area }) => $area};
  display: ${({ $footer }) => ($footer ? "inline" : "flex")};
  align-items: center;
  justify-self: left;
  gap: clamp(5px, 5.5vw, 10px);
  padding: 5px;
  color: ${({ theme, $footer }) => ($footer ? theme.color.border : theme.color.white)};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.color.button};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
  }
`;
