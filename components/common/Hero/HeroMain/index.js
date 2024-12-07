import styled from "styled-components";

export const HeroMain = styled.main`
  text-align: center;
  padding: 160px 0 9vh;
  min-height: 100vh;  
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 120px 0 6vh;
  }
`;