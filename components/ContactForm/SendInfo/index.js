import { Info, SendInfoWrapper } from "./SendInfoStyled";

const SendInfo = ({ show, success }) => (
  <SendInfoWrapper $show={show}>
    <Info>
      {success ? "Wiadomośc została wysłana" : "Błąd podczas wysyłania"}
    </Info>
  </SendInfoWrapper>
);

export default SendInfo;