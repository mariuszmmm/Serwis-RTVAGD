import { Container } from '../../components/common/Container';
import { Section } from '../../components/common/Section';
import { Title } from '../../components/common/Title';
import { SubTitle } from '../../components/common/SubTitle';
import { appUrls, imageUrls } from '../../utils/urls';
import MetaTags from '../../components/common/MetaTags';
import { getDataForMetaTags } from '../../utils/dataForMetaTags';
import { ButtonLink } from '../../components/common/ButtonLink';
import { serwis } from '../../utils/serwis';
import Image from 'next/image';
import { StyledPhoto } from '../../components/common/StyledPhoto';
import { getGoogleData } from '../../utils/getGoogleData';
import { StyledText } from '../../components/common/Text/styled';
import { StyledLink } from '../../components/common/StyledLink';
import { HeroText } from '../../components/common/Hero/HeroText';
import { Break } from '../../components/Break';
import { getImageParameters } from '../../utils/getImageParameters';
import { Photo } from '../../components/common/Photo';

const TelevisionService = ({ rating, ratingsTotal, reviews, imageParameters, dataForMetaTags }) => {
  const path = appUrls.naprawa_telewizorow;

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
        <Title>Naprawa Telewizorów w&nbsp;Przemyślu</Title>

        <Section>
          <Photo
            src={imageParameters.naprawa_telewizorow.imageUrl}
            srcSet={imageParameters.naprawa_telewizorow.srcSet}
            sizes="(max-width: 880px) 59vw, 520px"
            $maxWidth="520px"
            width={dataForMetaTags.metaTags.imageWidth}
            height={dataForMetaTags.metaTags.imageHeight}
            alt={dataForMetaTags.metaTags.imageAlt}
            title={dataForMetaTags.metaTags.imageTitle}
            loading="eager"
          />
        </Section>

        <Section>
          <SubTitle>Naprawa telewizorów Przemyśl – Specjalistyczna Obsługa LCD, OLED, Smart TV</SubTitle>
          <StyledText>
            Twój telewizor odmówił posłuszeństwa w najmniej odpowiednim momencie? Doskonale to znam. Oferuję profesjonalną naprawę telewizorów w Przemyślu, podchodząc do każdego przypadku z pełnym zaangażowaniem. Niezależnie od tego, czy to problem z obrazem w Twoim OLED, kłopoty ze Smart TV, czy usterka w starszym modelu LCD – znajdę rozwiązanie. Moim celem jest szybka diagnoza i skuteczna naprawa, byś mógł jak najszybciej wrócić do swoich ulubionych seansów. Jeśli interesuje Cię solidna naprawa telewizorów w Przemyślu, zapraszam do kontaktu.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Najczęstsze Usterki Telewizorów – Diagnoza i Naprawa</SubTitle>
          <StyledText as="ul" $cross>
            <li><strong>Brak obrazu lub problemy z wyświetlaniem</strong> – przyczyny to awarie matrycy, uszkodzenia podświetlenia LED, problemy w układzie sterowania. Dokładna diagnostyka elektroniki i podzespołów wyświetlania pozwala zlokalizować usterkę.</li>
            <li><strong>Brak dźwięku</strong> – usterki układów audio, głośników lub oprogramowania mogą powodować ciszę. Weryfikuję połączenia, moduły audio i oprogramowanie Smart TV.</li>
            <li><strong>Problemy z zasilaniem</strong> – telewizor nie włącza się, wyłącza się samoczynnie lub ma nieregularne zachowanie zasilacza. Kontrola zasilania i elementów bezpiecznikowych pozwala stwierdzić, co wymaga naprawy.</li>
            <li><strong>Uszkodzenia matrycy</strong> – pęknięcia, przebarwienia lub martwe piksele. Oceniam, czy naprawa jest opłacalna, i doradzam najlepsze rozwiązanie.</li>
            <li><strong>Awaria funkcji Smart TV</strong> – problemy z łącznością internetową, aplikacjami lub oprogramowaniem. Sprawdzam ustawienia sieci, aktualizacje firmware i konfigurację systemu.</li>
            <li><strong>Zakłócenia obrazu lub dźwięku</strong> – linie na ekranie, zniekształcenia lub trzaski. Analizuję układy wewnętrzne, kable i sygnały wejściowe.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Dlaczego wybrać mój Serwis TV w Przemyślu?</SubTitle>
          <StyledText as="ul" $check>
            <li><strong>Szybka i trafna diagnoza</strong>: określam przyczynę usterki możliwie szybko, aby ograniczyć czas bez telewizora.</li>
            <li><strong>Wieloletnie doświadczenie</strong>: praca z różnorodnymi technologiami (LCD, LED, OLED, QLED, Smart TV) pomaga skutecznie lokalizować i usuwać problemy.</li>
            <li><strong>Sprawdzone części</strong>: korzystam z komponentów, które odpowiadają specyfikacjom producenta, by zapewnić długotrwałe działanie.</li>
            <li><strong>Elastyczność lokalizacji naprawy</strong>: prostsze naprawy u Klienta, bardziej złożone w warsztacie – doradzam najwygodniejszą opcję.</li>
            <li><strong>Przejrzystość kosztów</strong>: po diagnostyce informuję o przewidywanym zakresie prac i kosztach, by uniknąć niespodzianek.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Jak przebiega Naprawa Telewizora?</SubTitle>
          <StyledText as="ol" >
            <li><strong>Kontakt i opis objawów</strong>: krótka konsultacja telefoniczna lub e-mail z informacją, co się dzieje (np. brak obrazu, migotanie, brak dźwięku).</li>
            <li><strong>Diagnostyka</strong>: testy elektroniki, analiza podzespołów zasilania, sterowania i wyświetlania; sprawdzenie oprogramowania Smart TV.</li>
            <li><strong>Naprawa lub wymiana</strong>: w zależności od usterki wymiana odpowiednich elementów: płyta zasilająca, podświetlenie, matryca, moduły audio, elementy sieciowe lub elektroniczne.</li>
            <li><strong>Test działania</strong>: uruchamiam telewizor w różnych trybach (wejścia HDMI, TV, Smart), sprawdzam jakość obrazu i dźwięku.</li>
            <li><strong>Porady i wskazówki</strong>: rekomenduję ustawienia, aktualizacje oprogramowania i sposób eksploatacji, by minimalizować ryzyko awarii.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>FAQ – najczęściej zadawane pytania</SubTitle>
          <StyledText as="ul" $list>
            {dataForMetaTags.schema.faqPage.mainEntity.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <StyledText>{item.acceptedAnswer.text}</StyledText>
              </li>
            ))}
          </StyledText >
        </Section>

        <Section>
          <HeroText>
            <strong>
              Nie pozwól, by Usterka Telewizora ograniczała Twój komfort.<Break /> Skontaktuj się ze mną, a ustalimy, jak szybko przywrócić urządzenie do sprawności.
            </strong>
          </HeroText>
          <ButtonLink
            href={`tel:${serwis.phone.number}`}
            title='Naprawa telewizorów w Przemyślu'
          >
            Zadzwoń teraz
          </ButtonLink>
        </Section>

        <Section>
          <SubTitle>Obsługiwany obszar</SubTitle>
          <StyledText>
            Naprawa Telewizorów w Przemyślu i w miejscowościach: Bolestraszyce, Duńkowiczki, Krówniki, Nehrybka, Orzechowce, Ostrów, Pikulice, Prałkowce, Wyszatyce, Żurawica. Dalsze lokalizacje – zapraszam do kontaktu.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Sprawdź też inne usługi</SubTitle>
          <StyledText as="ul" $list>
            <li>
              <StyledLink href={appUrls.naprawa_zmywarek}><strong>Naprawa zmywarek</strong></StyledLink>
            </li>
            <li>
              <StyledLink href={appUrls.naprawa_pralek}><strong>Naprawa pralek</strong></StyledLink>
            </li>
            <li>
              <StyledLink href={appUrls.naprawa_suszarek}><strong>Naprawa suszarek do prania</strong></StyledLink>
            </li>
            {/* <li>
              <StyledLink href={appUrls.naprawa_ekspresow}><strong>Naprawa ekspresów do kawy</strong></StyledLink>
            </li> */}
          </StyledText >
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
    getImageParameters(["naprawa_telewizorow"]),
    getDataForMetaTags("naprawa_telewizorow")
  ]);

  return {
    props: {
      ...(googleData || {}),
      imageParameters: imageParameters || null,
      dataForMetaTags: dataForMetaTags || null,
    },
  };
};



export default TelevisionService;