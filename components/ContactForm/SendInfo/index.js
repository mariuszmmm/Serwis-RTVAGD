import { Info, SendInfoWrapper } from "./SendInfoStyled";

const SendInfo = ({ show, success }) => (
  <SendInfoWrapper $show={show}>
    <Info>
      {success ? "Wiadomość została wysłana" : "Błąd podczas wysyłania"}
    </Info>
  </SendInfoWrapper>
);

export default SendInfo;