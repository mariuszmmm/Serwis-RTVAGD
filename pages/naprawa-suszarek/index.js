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
import { StyledText } from '../../components/common/Text/styled';
import { HeroText } from '../../components/common/Hero/HeroText';
import { StyledLink } from '../../components/common/StyledLink';
import { getGoogleData } from '../../utils/getGoogleData';
import { Break } from '../../components/Break';
import { getImageParameters } from '../../utils/getImageParameters';
import { Photo } from '../../components/common/Photo';

const DryerService = ({ rating, ratingsTotal, reviews, imageParameters, dataForMetaTags }) => {
  const path = appUrls.naprawa_suszarek;

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
        <Title>Naprawa Suszarek Bębnowych w&nbsp;Przemyślu</Title>

        <Section>
          <Photo
            src={imageParameters.naprawa_suszarek.imageUrl}
            srcSet={imageParameters.naprawa_suszarek.srcSet}
            sizes="(max-width: 1094px) 59vw, 645px"
            $maxWidth="645px"
            width={dataForMetaTags.metaTags.imageWidth}
            height={dataForMetaTags.metaTags.imageHeight}
            alt={dataForMetaTags.metaTags.imageAlt}
            title={dataForMetaTags.metaTags.imageTitle}
            loading="eager"
          />
        </Section>

        <Section>
          <SubTitle>Naprawa suszarek Przemyśl – Pełna Diagnostyka i Serwis</SubTitle>
          <StyledText>
            Gdy suszarka do ubrań odmawia posłuszeństwa, a mokre pranie czeka na wysuszenie, domowe obowiązki potrafią się skomplikować. Jeśli właśnie spotkała Cię taka sytuacja, jestem do Twojej dyspozycji. Specjalizuję się w serwisie i naprawie suszarek do prania na terenie Przemyśla i okolic. Niezależnie od tego, czy masz nowoczesny model z pompą ciepła, kondensacyjny, czy tradycyjny – znam je od podszewki. Moja praca to nie tylko szybka diagnoza, ale przede wszystkim skuteczna naprawa suszarek do ubrań, która przywróci Twojemu urządzeniu pełną sprawność. Zaufaj mojemu doświadczeniu – Twoja suszarka szybko wróci do formy!
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Częste problemy z Suszarkami do Prania – Rozwiązania</SubTitle>
          <StyledText as="ul" $cross>
            <li><strong>Bęben nie obraca się</strong> – może wynikać z zerwanego paska napędowego, zużytych łożysk lub uszkodzonego silnika. Dokładna kontrola elementów napędu pozwala zidentyfikować problem.</li>
            <li><strong>Suszarka wyłącza się przed zakończeniem cyklu</strong> – przyczyną mogą być czujnik wilgotności, przegrzewanie lub moduł sterujący. Sprawdzam układ elektroniczny i termiczne zabezpieczenia.</li>
            <li><strong>Niewystarczające suszenie</strong> – często efekt niedrożnego filtra kłaczków lub przewodu wentylacyjnego. W suszarkach kondensacyjnych analizuję stan skraplacza oraz pojemnika na wodę.</li>
            <li><strong>Przecieki wody</strong> – w modelach kondensacyjnych może to być uszkodzony zbiornik lub wąż spustowy; w innych – nieszczelne elementy. Sprawdzam szczelność układów.</li>
            <li><strong>Kody błędów na wyświetlaczu</strong> – weryfikuję komunikaty, diagnozuję usterki czujników, modułów i ich połączeń.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Dlaczego wybrać {serwis.shortName} do Naprawy Suszarki?</SubTitle>
          <StyledText as="ul" $check>
            <li><strong>Szybkie ustalenie terminu</strong>: staram się zaaranżować wizytę jak najszybciej, z uwzględnieniem potrzeb Klienta i dostępności części.</li>
            <li><strong>Wieloletnia praktyka</strong>: doświadczenie w różnych typach suszarek – kondensacyjnych, z pompą ciepła czy z grzałką elektryczną – pozwala sprawnie diagnozować nawet nietypowe usterki.</li>
            <li><strong>Obsługa szerokiego zakresu marek</strong>: Bosch, Siemens, Whirlpool, Electrolux, Beko, Miele, Samsung, Amica, AEG, Candy, Hotpoint-Ariston, LG, Indesit, Zanussi i inne – potrafię dostosować naprawę do specyfiki modelu.</li>
            <li><strong>Sprawdzone części i metody</strong>: stosuję części o parametrach odpowiadających oryginalnym lub równoważnym. Dbam o czystość filtrów i przewodów, by przywrócić maksymalną wydajność.</li>
            <li><strong>Przejrzystość kosztów</strong>: po diagnostyce na miejscu przedstawiam orientacyjną wycenę, byś znał zakres i koszty naprawy przed podjęciem decyzji.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Jak działam – proces Serwisu Suszarek</SubTitle>
          <StyledText as="ol" >
            <li><strong>Kontakt i opis usterki</strong>: krótka rozmowa telefoniczna lub wiadomość e-mail z opisem symptomów i modelem urządzenia.</li>
            <li><strong>Diagnostyka na miejscu</strong>: pełne sprawdzenie suszarki, testy funkcjonalne i analiza ewentualnych kodów błędów.</li>
            <li><strong>Naprawa lub wymiana części</strong>: wymieniam tylko te podzespoły, które faktycznie są niesprawne, stosując części o potwierdzonej jakości.</li>
            <li><strong>Test suszenia</strong>: wykonuję krótki cykl testowy, by zweryfikować poprawność działania, szczelność i efektywność odprowadzania wilgoci.</li>
            <li><strong>Wskazówki eksploatacyjne</strong>: doradzam, jak dbać o suszarkę (czyszczenie filtra, kontrola układu wentylacyjnego/ skraplacza), aby wydłużyć czas bezawaryjnej pracy.</li>
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
            <strong>Potrzebujesz szybkiej i fachowej Naprawy Suszarki?<Break /> Skontaktuj się, podając objawy usterki – ustalimy optymalny termin wizyty i zakres prac.</strong>
          </HeroText>
          <ButtonLink href={`tel:${serwis.phone.number}`} title='Naprawa suszarek w Przemyślu' >
            Zadzwoń 📞 {serwis.phone.formatted}
          </ButtonLink>
        </Section>

        <Section>
          <SubTitle>Obsługiwany obszar</SubTitle>
          <StyledText>
            Serwis Suszarek w Przemyślu i w miejscowościach: Bolestraszyce, Duńkowiczki, Krówniki, Nehrybka, Orzechowce, Ostrów, Pikulice, Prałkowce, Wyszatyce, Żurawica. Inne lokalizacje – proszę o kontakt w celu ustalenia dogodnej wizyty.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Sprawdź też inne usługi</SubTitle>
          <StyledText as="ul" $list>
            <li>
              <StyledLink href={appUrls.naprawa_pralek}><strong>Naprawa pralek</strong></StyledLink>
            </li>
            <li>
              <StyledLink href={appUrls.naprawa_zmywarek}><strong>Naprawa zmywarek</strong></StyledLink>
            </li>
            {/* <li>
              <StyledLink href={appUrls.naprawa_ekspresow}><strong>Naprawa ekspresów do kawy</strong></StyledLink>
            </li> */}
            {/* <li>
              <StyledLink href={appUrls.naprawa_telewizorow}><strong>Naprawa telewizorów</strong></StyledLink>
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
    getImageParameters(["naprawa_suszarek"]),
    getDataForMetaTags("naprawa_suszarek")
  ]);

  return {
    props: {
      ...(googleData || {}),
      imageParameters: imageParameters || null,
      dataForMetaTags: dataForMetaTags || null,
    },
  };
};

export default DryerService;