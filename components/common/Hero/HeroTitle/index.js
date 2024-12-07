import styled from "styled-components";

export const HeroTitle = styled.h1`
  margin: 60px 0 0;
  font-size: clamp(1.5rem, 5vw, 2.5rem);  
  line-height: 1.2;
  padding: 0 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 30px 0 0;
    font-size: 1.3rem;
  }
`;