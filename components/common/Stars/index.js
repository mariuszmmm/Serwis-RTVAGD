import { Star, StarsWrapper } from "./styled";

export const Stars = ({ rating, center }) => (
  rating &&
  <StarsWrapper $center={center}>
    <Star $active={rating >= 1} />
    <Star $active={rating >= 2} />
    <Star $active={rating >= 3} />
    <Star $active={rating >= 4} />
    <Star $active={rating >= 5} />
  </StarsWrapper>
);
