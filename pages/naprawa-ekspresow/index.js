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
import { Break } from '../../components/Break';
import { HeroText } from '../../components/common/Hero/HeroText';
import { getImageParameters } from '../../utils/getImageParameters';
import { Photo } from '../../components/common/Photo';

const CoffeeMachineService = ({ rating, ratingsTotal, reviews, imageParameters, dataForMetaTags }) => {
  const path = appUrls.naprawa_ekspresow;

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
        <Title>Naprawa Ekspresów do&nbsp;Kawy w&nbsp;Przemyślu</Title>

        <Section>
          <Photo
            src={imageParameters.naprawa_ekspresow.imageUrl}
            srcSet={imageParameters.naprawa_ekspresow.srcSet}
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
          <SubTitle>Naprawa Ekspresów Przemyśl – Profesjonalny Serwis wszystkich marek</SubTitle>
          <StyledText>
            Poranek bez ulubionej kawy? A może awaria ekspresu paraliżuje pracę w Twojej kawiarni? Doskonale rozumiem ten problem. Oferuję profesjonalny serwis i naprawę ekspresów w Przemyślu, by szybko przywrócić Twoje urządzenie do życia. Niezależnie od tego, czy posiadasz domowy ekspres automatyczny, czy profesjonalną maszynę gastronomiczną, podejdę do problemu z pełnym zaangażowaniem. Jeśli szukasz fachowca, dla którego naprawa ekspresów w Przemyślu to codzienność, dobrze trafiłeś. Skontaktuj się, a ja zajmę się resztą!
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Najczęstsze Usterki Ekspresów do Kawy</SubTitle>
          <StyledText as="ul" $cross>
            <li><strong>Brak zaparzania kawy</strong> – może wynikać z zatkanych dysz, problemu z pompą lub układem zaparzania. Dokładne czyszczenie i weryfikacja elementów ciśnieniowych to klucz do przywrócenia funkcji.</li>
            <li><strong>Wycieki wody podczas pracy</strong> – najczęściej uszkodzone uszczelki, szczelność przewodów lub elementy bojlera wymagają kontroli i ewentualnej wymiany.</li>
            <li><strong>Błędy na wyświetlaczu</strong> – usterki elektroniki, czujników lub nieprawidłowe parametry konfiguracji. Analizuję komunikaty i weryfikuję moduły sterujące.</li>
            <li><strong>Słabe spienianie mleka</strong> – może być wynikiem zabrudzeń układu parowego, kamienia lub problemu z pompą ciśnieniową. Czyszczenie i regulacja układu spieniania to częste działania.</li>
            <li><strong>Zmiana smaku kawy</strong> – często kwestia stanu filtra wody, zanieczyszczeń lub konieczności odkamieniania. Doradzam, jak regularnie przeprowadzać konserwację.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Dlaczego wybrać mój Serwis Ekspresów w Przemyślu?</SubTitle>
          <StyledText as="ul" $check>
            <li><strong>Szybka diagnoza</strong>: precyzyjnie określam źródło awarii, by ograniczyć czas przestoju ekspresu.</li>
            <li><strong>Wieloletnie doświadczenie</strong>: praca z różnymi modelami i markami ekspresów – od urządzeń kompaktowych po profesjonalne maszyny gastronomiczne.</li>
            <li><strong>Sprawdzone części</strong>: korzystam z komponentów o odpowiednich parametrach, by przywrócić niezawodne działanie ekspresu.</li>
            <li><strong>Przejrzystość działań</strong>: wyjaśniam przyczynę usterki i zakres koniecznych prac, abyś wiedział, jakie są etapy naprawy i związane z tym koszty.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Jak przebiega proces Naprawy Ekspresu do Kawy?</SubTitle>
          <StyledText as="ol" >
            <li><strong>Konsultacja i wstępne ustalenie</strong>: opis problemu (objawy, model), wstępne wskazówki co do możliwych przyczyn i terminu wizyty.</li>
            <li><strong>Diagnostyka</strong>: dokładna kontrola układu hydraulicznego, ciśnieniowego i elektronicznego; odczyt kodów błędów, testy funkcjonalne.</li>
            <li><strong>Naprawa i konserwacja</strong>: czyszczenie systemu zaparzania, wymiana uszczelek, naprawa pompy, modułów elektronicznych lub innych uszkodzonych komponentów.</li>
            <li><strong>Test końcowy</strong>: przygotowanie próbnej kawy, ocena temperatury, smaku i funkcji spieniania mleka, weryfikacja szczelności instalacji.</li>
            <li><strong>Porady użytkowe</strong>: wskazówki dotyczące regularnego odkamieniania, wymiany filtrów wody i codziennej pielęgnacji, aby uniknąć powtórnych awarii.</li>
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
            <strong>Nie pozwól, aby Awaria Ekspresu popsuła Twój dzień!<Break /> Skontaktuj się ze mną, a sprawnie przywrócę pełną funkcjonalność Twojego urządzenia, abyś mógł cieszyć się ulubioną kawą każdego dnia.</strong>
          </HeroText>
          <ButtonLink href={`tel:${serwis.phone.number}`} title='Naprawa ekspresów w Przemyślu'>
            Zadzwoń teraz
          </ButtonLink>
        </Section>

        <Section>
          <SubTitle>Obsługiwany obszar</SubTitle>
          <StyledText>
            Serwis Ekspresów do kawy w Przemyślu i okolicach: Bolestraszyce, Duńkowiczki, Krówniki, Nehrybka, Orzechowce, Ostrów, Pikulice, Prałkowce, Wyszatyce, Żurawica.<Break /> Pozostałe lokalizacje – proszę o kontakt.
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
              <StyledLink href={appUrls.naprawa_suszarek}><strong>Naprawa suszarek do ubrań</strong></StyledLink>
            </li>
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
    getImageParameters(["naprawa_ekspresow"]),
    getDataForMetaTags("naprawa_ekspresow")
  ]);

  return {
    props: {
      ...(googleData || {}),
      imageParameters: imageParameters || null,
      dataForMetaTags: dataForMetaTags || null,
    },
  };
};

export default CoffeeMachineService;