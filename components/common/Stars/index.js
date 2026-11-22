import { Star, StarsWrapper } from "./styled";

export const Stars = ({ rating, center }) => {
  if (!rating || rating <= 0) return null;

  const rounded = Math.round(rating);

  return (
    <StarsWrapper $center={center}>
      <Star $active={rounded >= 1} />
      <Star $active={rounded >= 2} />
      <Star $active={rounded >= 3} />
      <Star $active={rounded >= 4} />
      <Star $active={rounded >= 5} />
    </StarsWrapper>
  );
};
