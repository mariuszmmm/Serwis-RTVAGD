import Head from "next/head";
import Link from "next/link";
import { Container } from "../components/common/Container";
import { Section } from "../components/common/Section";
import { Title } from "../components/common/Title";
import { Text } from "../components/common/Text";
import { ButtonLink } from "../components/common/ButtonLink";
import { routes } from "../utils/urls";

const Custom404 = () => (
  <>
    <Head>
      <title>404 – Nie znaleziono strony | Serwis RTV i AGD Przemyśl</title>
      <meta name='robots' content='noindex' />
    </Head>
    <Container>
      <Section>
        <Title>404 – Strona nie została znaleziona</Title>
        <Text $center>
          Przepraszamy, podany adres strony nie istnieje lub został przeniesiony.
        </Text>
        <ButtonLink as={Link} href={routes.home} title='Wróć na stronę główną'>
          Wróć na stronę główną
        </ButtonLink>
      </Section>
    </Container>
  </>
);

export default Custom404;
