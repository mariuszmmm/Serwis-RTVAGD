import styled from "styled-components";

export const Container = styled.main`
  padding: 160px 0 9vh;
  text-align: center;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 120px 0 9vh;
  }
`;