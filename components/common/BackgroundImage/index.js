import styled from "styled-components";

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  opacity: 0.10;
  filter: brightness(0.8) contrast(1.1);
  pointer-events: none;
  z-index: 0;
`;
