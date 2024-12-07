import styled from "styled-components";

export const Photo = styled.img`
  width: 59vw;
  height: auto;
  max-width: ${({ $maxWidth }) => $maxWidth || '100%'};
`;