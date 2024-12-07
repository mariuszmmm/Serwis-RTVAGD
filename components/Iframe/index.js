import { StyledIframe } from "./IframeStyled";

const Iframe = () => {
  const iframeSrc =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5152.333915350569!2d22.771064331707773!3d49.78292515912198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b7f241be960ad%3A0xfc3cd55238f8f8a6!2sNaprawa%20pralek%20i%20sprz%C4%99tu%20RTV%20-%20naprawa%20ekspres%C3%B3w%20do%20kawy%2C%20naprawa%20telewizor%C3%B3w%2C%20naprawa%20zmywarki%2C%20serwis%20agd%2C!5e0!3m2!1spl!2spl!4v1719589983858!5m2!1spl!2spl";

  return (
    <StyledIframe
      src={iframeSrc}
      loading="lazy"
      title="Lokalizacja serwisu RTV-AGD"
    />
  );
};

export default Iframe;
