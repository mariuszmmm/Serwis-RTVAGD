import styled from "styled-components";

export const HeroHeader = styled.header`
  max-width: 1200px;
  min-height: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  min-height: clamp(500px, 50vw, 800px);  

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 0 10px;
  }

  @media (orientation: portrait) {
    min-height: clamp(370px, 106vw, 900px);  
  }
`;