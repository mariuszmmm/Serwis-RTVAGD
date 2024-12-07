import styled from 'styled-components';

const StyledBreak = styled.br`
  @media (max-width: ${({ theme }) => theme.breakpoint.small})  {
    display: none;
  }
`;

export const Break = () => (
  <>
    <StyledBreak />
    <span> </span>
  </>
);