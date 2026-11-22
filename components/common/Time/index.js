import { format } from "date-fns";
import { pl } from 'date-fns/locale';
import { FormattedDate } from "./styled";

const Time = ({ time }) => {
  if (!time) {
    return <FormattedDate />;
  }

  const date = new Date(time * (typeof time === "number" ? 1000 : 1));
  const formattedDate = Number.isNaN(date.getTime())
    ? ""
    : format(date, "d MMMM yyyy", { locale: pl });

  return <FormattedDate>{formattedDate}</FormattedDate>;
};

export default Time;