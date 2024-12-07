import Time from "../common/Time";
import { Stars } from "../common/Stars";
import {
  ItemWrapper,
  Header,
  Author,
  Data,
  Avatar,
} from "./styled";
import { Text } from "../common/Text";
import Image from "next/image";

const ReviewsItem = ({ reviewIndex, item }) => (
  <ItemWrapper id={`review${reviewIndex}`}>
    <Header>
      <Avatar>
        <Image
          src={item?.profile_photo_url}
          alt="Foto"
          loading='lazy'
          fill
        />
      </Avatar>
      <Data>
        <Author>{item?.author_name}</Author>
        <Time time={item?.time} />
      </Data>
    </Header>
    <Stars rating={item?.rating || 0} />
    <Text $forReviews>{item?.text}</Text>
  </ItemWrapper>
);

export default ReviewsItem;