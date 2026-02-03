import { Container } from "../../components/common/Container";
import { Section } from "../../components/common/Section";
import { Title } from "../../components/common/Title";
import { SubTitle } from "../../components/common/SubTitle";
import { Text } from "../../components/common/Text";
import MetaTags from "../../components/common/MetaTags";
import { appUrls } from "../../utils/urls";
import { getDataForMetaTags } from "../../utils/dataForMetaTags";
import { getGoogleData } from "../../utils/getGoogleData";
import { serwis } from "../../utils/serwis";
import { StyledLink } from "../../components/common/StyledLink";

const PrivacyPolicy = ({ rating, ratingsTotal, dataForMetaTags }) => {
  const path = appUrls.polityka_prywatnosci;

  return (
    <>
      {/* <MetaTags path={path} page={dataForMetaTags} rating={rating} ratingsTotal={ratingsTotal} /> */}

      <Container>
        <Section>
          <Title>Polityka prywatności</Title>

          <SubTitle>Administrator danych</SubTitle>
          <Text>
            Administratorem danych osobowych jest {serwis.person}, prowadzący {serwis.shortName}, <br />
            adres: {serwis.adres}. <br />
            kontakt:
          </Text>
          <Text as='ul' $list>
            <li>
              e-mail:{" "}
              <StyledLink href={`mailto:${serwis.email}`} $standardText>
                {serwis.email}
              </StyledLink>
            </li>
            <li>
              telefon:{" "}
              <StyledLink href={`tel:${serwis.phone.formatted}`} $standardText>
                {serwis.phone.formatted}
              </StyledLink>
            </li>
          </Text>

          <SubTitle>Zakres przetwarzanych danych</SubTitle>
          <Text as='ul' $list>
            <li>imię i nazwisko,</li>
            <li>adres e-mail,</li>
            <li>treść wiadomości przesłanej za pomocą formularza kontaktowego,</li>
            <li>dane techniczne: adres IP, logi serwera, informacje o urządzeniu i przeglądarce.</li>
          </Text>

          <SubTitle>Cele i podstawy prawne</SubTitle>
          <Text>Dane osobowe są przetwarzane w następujących celach:</Text>
          <Text as='ul' $list>
            <li>obsługa zapytań przesłanych przez formularz kontaktowy,</li>
            <li>kontakt z użytkownikiem oraz archiwizacja korespondencji.</li>
          </Text>
          <Text>Podstawą prawną przetwarzania danych jest:</Text>
          <Text as='ul' $list>
            <li>
              art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora polegający na prowadzeniu
              korespondencji i obsłudze zapytań.
            </li>
          </Text>

          <SubTitle>Odbiorcy danych</SubTitle>
          <Text>
            Dane osobowe mogą być przekazywane podmiotom przetwarzającym dane na zlecenie Administratora, w
            szczególności:
          </Text>
          <Text as='ul' $list>
            <li>dostawcy hostingu strony internetowej,</li>
            <li>dostawcy poczty elektronicznej,</li>
            <li>dostawcy usług obsługi formularza kontaktowego (EmailJS),</li>
            <li>dostawcy usług infrastrukturalnych i zabezpieczających (Cloudflare).</li>
          </Text>
          <Text>
            Dane mogą być również udostępnione organom publicznym, jeżeli obowiązek taki wynika z przepisów prawa.
          </Text>

          <SubTitle>Przekazywanie danych poza UE</SubTitle>
          <Text>
            W związku z korzystaniem z narzędzi takich jak EmailJS lub Cloudflare, dane osobowe mogą być przekazywane do
            państw trzecich (poza Unię Europejską, w szczególności do USA).
            <br />
            Przekazywanie danych odbywa się z zastosowaniem odpowiednich zabezpieczeń, w tym standardowych klauzul
            umownych (SCC) zgodnie z art. 46 RODO.
          </Text>

          <SubTitle>Okres przechowywania danych</SubTitle>
          <Text>Dane osobowe są przechowywane:</Text>
          <Text as='ul' $list>
            <li>przez czas niezbędny do obsługi zapytania i prowadzenia korespondencji,</li>
            <li>a następnie przez okres przedawnienia ewentualnych roszczeń wynikających z przepisów prawa.</li>
          </Text>

          <SubTitle>Prawa użytkownika</SubTitle>
          <Text>Użytkownik ma prawo do:</Text>
          <Text as='ul' $list>
            <li>dostępu do swoich danych oraz otrzymania ich kopii,</li>
            <li>sprostowania danych,</li>
            <li>usunięcia danych,</li>
            <li>ograniczenia przetwarzania danych,</li>
            <li>wniesienia sprzeciwu wobec przetwarzania danych,</li>
            <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO).</li>
          </Text>

          <SubTitle>Dobrowolność podania danych</SubTitle>
          <Text>
            Podanie danych osobowych jest dobrowolne, jednak niezbędne do skontaktowania się z Administratorem i
            uzyskania odpowiedzi na przesłane zapytanie.
          </Text>

          <SubTitle>Profilowanie</SubTitle>
          <Text>
            Dane osobowe użytkowników nie są wykorzystywane do zautomatyzowanego podejmowania decyzji ani profilowania.
          </Text>

          <SubTitle>Pliki cookies</SubTitle>
          <Text>Serwis {serwis.site} wykorzystuje:</Text>
          <Text as='ul' $list>
            <li>niezbędne pliki cookies, konieczne do prawidłowego działania strony,</li>
            <li>opcjonalnie pliki cookies analityczne, jeśli zostaną włączone przez użytkownika.</li>
          </Text>
          <Text>
            Użytkownik może samodzielnie zarządzać plikami cookies poprzez ustawienia swojej przeglądarki internetowej.
          </Text>

          <SubTitle>Zmiany w polityce prywatności</SubTitle>
          <Text>
            Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce prywatności. Aktualna wersja
            dokumentu jest zawsze dostępna pod adresem: {appUrls.polityka_prywatnosci}.
          </Text>
        </Section>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const [googleData, dataForMetaTags] = await Promise.all([
    getGoogleData(),
    getDataForMetaTags("polityka_prywatnosci"),
  ]);

  return {
    props: {
      ...(googleData || {}),
      dataForMetaTags: dataForMetaTags || null,
    },
  };
};

export default PrivacyPolicy;
