import { Container } from "../../components/common/Container";
import { Section } from "../../components/common/Section";
import { Title } from "../../components/common/Title";
import { SubTitle } from "../../components/common/SubTitle";
import { appUrls, imageUrls } from "../../utils/urls";
import { getDataForMetaTags } from "../../utils/dataForMetaTags";
import MetaTags from "../../components/common/MetaTags";
import { ButtonLink } from "../../components/common/ButtonLink";
import { serwis } from "../../utils/serwis";
import { Photo } from "../../components/common/Photo";
import { StyledText } from "../../components/common/Text/styled";
import { HeroText } from "../../components/common/Hero/HeroText";
import { StyledLink } from "../../components/common/StyledLink";
import { Break } from "../../components/Break";
import { getGoogleData } from "../../utils/getGoogleData";
import { getImageParameters } from "../../utils/getImageParameters";

const WashingMachineService = ({ rating, ratingsTotal, reviews, imageParameters, dataForMetaTags }) => {
  const path = appUrls.naprawa_pralek;

  return (
    <>
      <MetaTags path={path} page={dataForMetaTags} rating={rating} ratingsTotal={ratingsTotal} reviews={reviews} />
      <Container>
        <Title>Naprawa Pralek w&nbsp;Przemyślu</Title>

        <Section>
          <Photo
            src={imageParameters?.naprawa_pralek?.imageUrl}
            srcSet={imageParameters?.naprawa_pralek?.srcSet}
            sizes='(max-width: 880px) 59vw, 520px'
            $maxWidth='520px'
            width={dataForMetaTags.metaTags.imageWidth}
            height={dataForMetaTags.metaTags.imageHeight}
            alt={dataForMetaTags.metaTags.imageAlt}
            title={dataForMetaTags.metaTags.imageTitle}
            loading='eager'
          />
        </Section>

        <Section>
          <SubTitle>Naprawa pralek Przemyśl – Kompleksowa Diagnostyka i Usunięcie Awarii</SubTitle>
          <StyledText>
            Zepsuta pralka to nie koniec świata, ale na pewno spore zamieszanie w codziennym życiu. Doskonale to
            rozumiem, dlatego oferuję szybką i skuteczną naprawę pralek na terenie Przemyśla i okolic. Niezależnie od
            tego, czy Twoja pralka hałasuje, cieknie, czy po prostu odmówiła posłuszeństwa – jestem tu, by pomóc.
            Podchodzę do każdej naprawy indywidualnie, używając profesjonalnego sprzętu i sprawdzonych części. Moim
            celem jest nie tylko usunięcie usterki, ale zapewnienie, że Twoja pralka będzie działać jak nowa. Jeśli
            szukasz fachowca, dla którego naprawa pralek w Przemyślu to chleb powszedni, dobrze trafiłeś!
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Najczęstsze Usterki Pralek, które Naprawiam</SubTitle>
          <StyledText as='ul' $cross>
            <li>
              <strong>Pralka nie pobiera wody</strong> – możliwe przyczyny to uszkodzony elektrozawór, zatkany filtr
              wody, niedrożny wąż doprowadzający czy problem z czujnikiem poziomu (hydrostat).
            </li>
            <li>
              <strong>Wycieki wody</strong> – źródłem mogą być nieszczelne uszczelki drzwi, pęknięty wąż odpływowy lub
              uszkodzona pompa. Dokładna kontrola pozwala zidentyfikować przyczynę.
            </li>
            <li>
              <strong>Hałas lub nadmierne wibracje</strong> – przyczyną bywają zużyte łożyska, amortyzatory, niestabilne
              ustawienie urządzenia czy nierównomierny wsad. Sprawdzam wszystkie elementy zawieszenia i montażu.
            </li>
            <li>
              <strong>Brak odwirowania</strong> – często wiąże się z uszkodzeniem silnika, szczotek, filtrem odpływowym
              lub problemem z paskiem napędowym. Staram się lokalizować usterki precyzyjnie, by wymienić tylko to, co
              faktycznie jest uszkodzone.
            </li>
            <li>
              <strong>Pralka nie uruchamia się</strong> – możliwe przyczyny to problem z zasilaniem, uszkodzona blokada
              drzwi czy moduł sterowania. Weryfikuję obwody i komponenty elektroniczne.
            </li>
            <li>
              <strong>Nadmierne pienienie lub pozostałości detergentu</strong> – analizuję prawidłowe dozowanie oraz
              stan dysz i układu płukania, by przywrócić optymalną pracę.
            </li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Dlaczego wybrać mój Serwis Pralek w Przemyślu?</SubTitle>
          <StyledText as='ul' $check>
            <li>
              <strong>Szybka organizacja terminu</strong>: staram się ustalić dogodny czas wizyty tak szybko, jak to
              możliwe, aby jak najkrócej odczuwać niedogodności związane z awarią.
            </li>
            <li>
              <strong>Wieloletnie doświadczenie</strong>: dzięki praktyce przy różnorodnych modelach od renomowanych
              producentów (Bosch, Electrolux, Samsung, Whirlpool, Beko, Amica i inne) potrafię skutecznie reagować na
              złożone usterki.
            </li>
            <li>
              <strong>Kompleksowa obsługa</strong>: naprawiam pralki różnych marek, przyjmując urządzenie do diagnozy
              zarówno w domu Klienta, jak i w warsztacie (jeśli wymagana jest bardziej skomplikowana naprawa).
            </li>
            <li>
              <strong>Sprawdzone części</strong>: w razie potrzeby stosuję części od zaufanych dostawców, co
              minimalizuje ryzyko ponownych problemów.
            </li>
            <li>
              <strong>Przejrzyste podejście</strong>: szczegółowo wyjaśniam przyczynę usterki oraz zakres niezbędnych
              prac, unikając zbędnych wymian i kosztów.
            </li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Jak przebiega proces Naprawy Pralki?</SubTitle>
          <StyledText as='ol'>
            <li>
              <strong>Kontakt i wstępna konsultacja</strong>: opis awarii telefonicznie lub mailowo, omówienie możliwych
              przyczyn i wstępna orientacyjna wycena zakresu prac.
            </li>
            <li>
              <strong>Diagnostyka na miejscu</strong>: dokładne sprawdzenie pralki przy użyciu narzędzi diagnostycznych,
              potwierdzenie lub weryfikacja wstępnej hipotezy co do usterki.
            </li>
            <li>
              <strong>Naprawa lub wymiana części</strong>: usuwam usterkę z wykorzystaniem oryginalnych lub wysokiej
              jakości zamienników, dbając o właściwe parametry urządzenia.
            </li>
            <li>
              <strong>Test końcowy</strong>: wykonuję cykl testowy, by potwierdzić prawidłowe działanie pralki i
              zweryfikować brak wycieków czy nieprawidłowości przy odwirowaniu.
            </li>
            <li>
              <strong>Porady eksploatacyjne</strong>: podpowiadam, jak dbać o pralkę (czyszczenie filtrów, właściwe
              rozkładanie wsadu itp.), by unikać podobnych awarii.
            </li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>FAQ – najczęściej zadawane pytania</SubTitle>
          <StyledText as='ul' $list>
            {dataForMetaTags.schema.faqPage.mainEntity.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <StyledText>{item.acceptedAnswer.text}</StyledText>
              </li>
            ))}
          </StyledText>
        </Section>

        <Section>
          <HeroText>
            <strong>
              Nie pozwól, by Awaria Pralki zaburzyła Twoje plany.
              <Break /> Skontaktuj się już dziś, opisując problem – razem dobierzemy najlepsze rozwiązanie.
            </strong>
          </HeroText>
          <ButtonLink href={`tel:${serwis.phone.number}`} title='Naprawa pralek w Przemyślu'>
            📞 Zadzwoń teraz
          </ButtonLink>
        </Section>

        <Section>
          <SubTitle>Obsługiwany obszar</SubTitle>
          <StyledText>
            Świadczę usługi naprawy pralek w Przemyślu oraz w pobliskich miejscowościach: Bolestraszyce, Duńkowiczki,
            Krówniki, Nehrybka, Orzechowce, Ostrów, Pikulice, Prałkowce, Wyszatyce, Żurawica. Jeśli Twoja miejscowość
            nie została wymieniona, zapraszam do kontaktu – ustalimy dogodny termin wizyty.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Sprawdź też inne usługi</SubTitle>
          <StyledText as='ul' $list>
            <li>
              <StyledLink href={appUrls.naprawa_suszarek}>
                <strong>Naprawa suszarek</strong>
              </StyledLink>
            </li>
            {/* <li>
              <StyledLink href={appUrls.naprawa_zmywarek}><strong>Naprawa zmywarek</strong></StyledLink>
            </li> */}
            {/* <li>
              <StyledLink href={appUrls.naprawa_telewizorow}><strong>Naprawa telewizorów</strong></StyledLink>
            </li> */}
            <li>
              <StyledLink href={appUrls.naprawa_ekspresow}>
                <strong>Naprawa ekspresów do kawy</strong>
              </StyledLink>
            </li>
          </StyledText>
        </Section>
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
    getImageParameters(["naprawa_pralek"]),
    getDataForMetaTags("naprawa_pralek"),
  ]);

  console.log("googleData:", googleData);
  console.log("imageParameters:", imageParameters);
  console.log("dataForMetaTags:", dataForMetaTags);

  return {
    props: {
      ...(googleData || {}),
      imageParameters: imageParameters || {},
      dataForMetaTags: dataForMetaTags || {},
    },
  };
};

export default WashingMachineService;
