import styled from "styled-components";

export const StyledPhoto = styled.div`
  position: relative;
  width: 42vw;
  max-width: 700px;
  aspect-ratio: ${({ $width, $height }) => $width && $height ? `${$width} / ${$height}` : '1 / 1'};
  justify-self: center;
  margin-bottom: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 30px;
  }

  @media(orientation: portrait) {
    width: clamp(30vw, 59vw, 520px);
  }
`;