import { HeroMain } from "../components/common/Hero/HeroMain";
import { HeroHeader } from "../components/common/Hero/HeroHeader";
import { HeroText } from "../components/common/Hero/HeroText";
import { HeroTitle } from "../components/common/Hero/HeroTitle";
import { ButtonLink } from "../components/common/ButtonLink";
import { Section } from "../components/common/Section";
import { SubTitle } from "../components/common/SubTitle";
import { serwis } from "../utils/serwis";
import WashingMachine from "../components/homeComponents/WashingMachine";
import CoffeeMachine from "../components/homeComponents/CoffeeMachine";
import Television from "../components/homeComponents/Television";
import Dishwasher from "../components/homeComponents/Dishwasher";
import Dryer from "../components/homeComponents/Dryer";
import CoffeeMachine2 from "../components/homeComponents/CoffeeMachine_2";
import { StyledLink } from "../components/common/StyledLink";
import { useState, useEffect, useRef } from "react";
import { mobileScene, scene } from "../utils/scenes";
import MetaTags from "../components/common/MetaTags";
import { appUrls } from "../utils/urls";
import { StyledText } from "../components/common/Text/styled";
import { getGoogleData } from "../utils/getGoogleData";
import { getDataForMetaTags } from "../utils/dataForMetaTags";
import { getImageParameters } from "../utils/getImageParameters";

const Home = ({ rating, ratingsTotal, reviews, dataForMetaTags }) => {
  const path = appUrls.home;
  const [isPortrait, setIsPortrait] = useState(
    typeof window !== "undefined" ? window.innerHeight > window.innerWidth : true,
  );
  const [activeScene, setActiveScene] = useState({
    reset: true,
    number: 0,
    content: mobileScene[0],
  });
  const [hold, setHold] = useState(false);

  useEffect(() => {
    const initialIsPortrait = window.innerHeight > window.innerWidth;
    setIsPortrait(initialIsPortrait);
    setActiveScene({
      reset: false,
      number: 0,
      content: initialIsPortrait ? mobileScene[0] : scene[0],
    });

    const handleResize = () => {
      const actualState = window.innerHeight > window.innerWidth;
      if (isPortrait === actualState) return;
      setActiveScene({
        ...activeScene,
        reset: true,
        number: 0,
        content: actualState ? mobileScene[0] : scene[0],
      });
      setIsPortrait(actualState);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

    // eslint-disable-next-line
  }, [isPortrait]);

  const sceneNumberRef = useRef(activeScene.number);

  useEffect(() => {
    if (hold) return;

    const updateScene = () => {
      let sceneNumber = sceneNumberRef.current >= 12 ? 1 : sceneNumberRef.current + 1;
      setActiveScene({
        reset: false,
        number: sceneNumber,
        content: isPortrait ? mobileScene[sceneNumber] : scene[sceneNumber],
      });
      sceneNumberRef.current = sceneNumber;

      const intervalDuration = sceneNumber % 2 !== 0 ? 3000 : 800;
      clearInterval(interval);
      interval = setInterval(updateScene, intervalDuration);
    };

    let interval = setInterval(updateScene, 300);

    return () => clearInterval(interval);
  }, [hold, isPortrait]);

  return (
    <>
      <MetaTags path={path} page={dataForMetaTags} rating={rating} ratingsTotal={ratingsTotal} reviews={reviews} />
      <HeroMain>
        <HeroHeader>
          <HeroTitle lang='pl'>Serwis RTV i AGD w&nbsp;Przemyślu</HeroTitle>
          <HeroText> Rzetelnie, szybko i skutecznie!</HeroText>
          <ButtonLink href={`tel:${serwis.phone.number}`} title='Naprawa RTV i AGD Przemyśl - Zadzwoń teraz' $hero>
            Zleć naprawę
          </ButtonLink>
          {!activeScene.reset && <WashingMachine show={activeScene.content[0]} setHold={setHold} left />}
          {!activeScene.reset && <Television show={activeScene.content[1]} setHold={setHold} left />}
          {!activeScene.reset && <Dryer show={activeScene.content[2]} setHold={setHold} left />}
          {!activeScene.reset && <CoffeeMachine show={activeScene.content[3]} setHold={setHold} />}
          {!activeScene.reset && <Dishwasher show={activeScene.content[4]} setHold={setHold} />}
          {!activeScene.reset && <CoffeeMachine2 show={activeScene.content[5]} setHold={setHold} />}
        </HeroHeader>

        <Section>
          <SubTitle lang='pl'>Serwis i naprawa sprzętu RTV i AGD wszystkich popularnych marek</SubTitle>
          <StyledText as='ul'>
            <li>
              <StyledLink href={appUrls.naprawa_pralek} title='Naprawa pralek w Przemyślu'>
                <strong>Pralki: </strong>
              </StyledLink>
              Bosch, Siemens, LG, Samsung, Whirlpool, Electrolux, Miele, Beko
            </li>
            <li>
              <StyledLink href={appUrls.naprawa_suszarek} title='Naprawa suszarek w Przemyślu'>
                <strong>Suszarki: </strong>
              </StyledLink>
              Bosch, Siemens, Whirlpool, Electrolux, Beko, Miele, Samsung
            </li>
            <li>
              <StyledLink href={appUrls.naprawa_zmywarek} title='Naprawa zmywarek w Przemyślu'>
                <strong>Zmywarki: </strong>
              </StyledLink>
              Bosch, Siemens, Whirlpool, Electrolux, Beko, Samsung, AEG
            </li>
            <li>
              <StyledLink href={appUrls.naprawa_telewizorow} title='Naprawa telewizorów w Przemyślu'>
                <strong>Telewizory: </strong>
              </StyledLink>
              LG, Samsung, Sony, Philips, Panasonic, TCL, Sharp, JVC
            </li>
            <li>
              <StyledLink href={appUrls.naprawa_ekspresow} title='Naprawa ekspresów do kawy w Przemyślu'>
                <strong>Ekspresy do kawy: </strong>
              </StyledLink>
              De’Longhi, Jura, Siemens, Bosch, Philips, Krups
            </li>
          </StyledText>
          <StyledText>
            Wieloletnie doświadczenie i dostęp do oryginalnych części zamiennych, gwarantuje szybką diagnozę i solidną
            naprawę Twojego sprzętu. Niezależnie od marki, możesz liczyć na profesjonalną pomoc.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Serwis RTV i AGD z dojazdem – Przemyśl i okolice</SubTitle>
          <StyledText>
            Oferuję mobilny serwis RTV i AGD z dojazdem do klienta na terenie Przemyśla i okolic. Jeśli Twoje urządzenie
            wymaga naprawy, a mieszkasz w jednej z wymienionych miejscowości, skontaktuj się ze mną: Przemyśl,
            Bolestraszyce, Duńkowiczki, Krówniki, Nehrybka, Orzechowce, Ostrów, Pikulice, Prałkowce, Wyszatyce,
            Żurawica.
          </StyledText>
        </Section>

        <Section>
          <HeroText>
            <strong>Zaufaj doświadczeniu – gwarantuję szybką i skuteczną naprawę Twojego sprzętu.</strong>
          </HeroText>
        </Section>
      </HeroMain>
    </>
  );
};

export const getStaticProps = async () => {
  const [googleData, imageParameters, dataForMetaTags] = await Promise.all([
    getGoogleData(),
    getImageParameters(["serwis_rtv_agd"]),
    getDataForMetaTags("home"),
  ]);

  console.log("googleData:", googleData);
  console.log("imageParameters:", imageParameters);
  console.log("dataForMetaTags:", dataForMetaTags);

  return {
    props: {
      ...(googleData || {}),
      imageParameters: imageParameters || null,
      dataForMetaTags: dataForMetaTags || null,
    },
  };
};

export default Home;
