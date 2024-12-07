import styled from "styled-components";

export const HeroText = styled.p`
  margin: 24px 0 36px;
  font-size: clamp(0.8rem, 2.3vw, 1.3rem);
  line-height: 1.5;
  font-weight: 400;
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 20px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 16px 0;
  }
`;