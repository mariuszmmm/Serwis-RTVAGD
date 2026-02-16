import { Container } from "../../components/common/Container";
import { Section } from "../../components/common/Section";
import { Title } from "../../components/common/Title";
import { Text } from "../../components/common/Text";
import { Team } from "../../components/common/TeamImage";
import { appUrls, imageUrls } from "../../utils/urls";
import MetaTags from "../../components/common/MetaTags";
import { getDataForMetaTags } from "../../utils/dataForMetaTags";
import Image from "next/image";
import { getGoogleData } from "../../utils/getGoogleData";
import { serwis } from "../../utils/serwis";
import { getImageParameters } from "../../utils/getImageParameters";

const About = ({ rating, ratingsTotal, dataForMetaTags }) => {
  const path = appUrls.o_mnie;

  return (
    <>
      <MetaTags path={path} page={dataForMetaTags} rating={rating} ratingsTotal={ratingsTotal} />
      <Container>
        <Section>
          <Title>O Serwisie RTV i AGD w&nbsp;Przemyślu</Title>
          <div>
            <Text>
              Witaj w Serwisie RTV i AGD w Przemyślu! Jestem {serwis.person} – specjalista z wieloletnim doświadczeniem
              w branży. Moja misja to skuteczna i rzetelna naprawa pralek, suszarek, zmywarek, telewizorów oraz
              ekspresów do kawy, zawsze z myślą o pełnym zadowoleniu klienta.
            </Text>

            <Text>
              Wiem, jak ważny jest sprawny sprzęt w każdym domu. Dlatego do każdej naprawy podchodzę indywidualnie, z
              pełnym zaangażowaniem i pasją. Nie jest to dla mnie tylko techniczne zadanie, ale przede wszystkim okazja
              do zbudowania trwałego zaufania i dobrych relacji z moimi klientami. Gwarantuję rzetelność, terminowość
              oraz uczciwość w każdym etapie pracy.
            </Text>

            <Text>
              Stawiam na precyzyjną diagnostykę i efektywne rozwiązania, aby Twoje urządzenia odzyskały pełną sprawność
              na długo. Kiedy korzystasz z moich usług, masz pewność, że Twoim sprzętem zajmuje się doświadczony i
              sprawdzony fachowiec.
            </Text>

            <Text>Serdecznie zapraszam do kontaktu i skorzystania z profesjonalnych usług mojego serwisu!</Text>

            <Team>
              <Image src={imageUrls.serwis_1} alt='serwis' loading='lazy' fill style={{ objectFit: "cover" }} />
            </Team>
          </div>
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
    getImageParameters(["serwis_rtv_agd"]),
    getDataForMetaTags("o_mnie"),
  ]);

  return {
    props: {
      ...(googleData || {}),
      imageParameters: imageParameters || null,
      dataForMetaTags: dataForMetaTags || null,
    },
  };
};

export default About;
