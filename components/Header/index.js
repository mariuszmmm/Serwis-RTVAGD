import {
  HeaderContainer,
  HeaderWrapper,
  ListItem,
  Logo,
  NavList,
  StyledLink,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { ButtonLink } from "../common/ButtonLink";
import { useEffect, useState } from "react";
import SubNav from "./SubNav";
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Emoticon } from '../common/Emoticon';
import { appUrls, imageUrls } from '../../utils/urls';
import Image from "next/image";
const GoogleRating = dynamic(() => import('../GoogleRating').then(mod => mod.GoogleRating), { ssr: false });
const QrCode = dynamic(() => import('../QrCode').then(mod => mod.QrCode), { ssr: false });

const Header = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [showSubNav, setShowSubNav] = useState(false);
  const pathname = usePathname()
  const servicesPath = pathname.includes("naprawa-");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
        setShowSubNav(false);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper
    // itemScope
    // itemType="https://schema.org/WPHeader"
    >
      <HeaderContainer>
        <Logo
          href={appUrls.home}
          title={`${serwis.subName}`}
        >
          <Emoticon $logo>
            <Image
              src={imageUrls.logo}
              alt={`Logo ${serwis.shortName}`}
              fill
            // itemProp="image"
            />
          </Emoticon>
          {" "}{serwis.url.site}
        </Logo>
        <nav>
          <NavList>
            <ListItem>
              <StyledLink
                href={appUrls.home}
                $active={pathname === "/"}
              >
                Strona Główna
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink
                href={appUrls.o_mnie}
                $active={pathname === "/o-mnie/"}
              >
                O mnie
              </StyledLink>
            </ListItem>
            <ListItem
              onMouseEnter={() => setShowSubNav(true)}
              onTouchStart={() => setShowSubNav(true)}
              onMouseLeave={() => setShowSubNav(false)}
            >
              <StyledLink as="div"
                $active={servicesPath && !showSubNav}
                $disabled
              >
                Usługi
              </StyledLink>
              <SubNav showSubNav={showSubNav} />
            </ListItem>
            <ListItem>
              <StyledLink
                href={appUrls.opinie}
                $active={pathname === "/opinie/"}
              >
                Opinie
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink
                href={appUrls.kontakt}
                $active={pathname === "/kontakt/"}
              >
                Kontakt
              </StyledLink>
            </ListItem>
          </NavList>
        </nav>
        {props && <>
          <ButtonLink
            href={serwis.url.addTestimonial}
            rel="noopener noreferrer"
            $opinia
            $hidden={scrolled}
            title="Wystaw opinię"
          >
            Wystaw opinię
          </ButtonLink>
          <QrCode hidden={scrolled} />
          <GoogleRating rating={props.rating} hidden={scrolled} />
        </>}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;