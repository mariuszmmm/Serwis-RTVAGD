import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: absolute;
  top: 400px;
  left: 50%;
  transition: opacity 0.5s ease-in-out;
  /* z-index: ${({ $show }) => ($show ? 1 : -1)}; */
  z-index: -1;
  pointer-events: ${({ $show }) => ($show ? "auto" : "none")};
  transform: ${({ $left }) => ($left ? "translateX(-150%)" : "translateX(50%)")};
  opacity: ${({ $show }) => ($show ? 1 : 0)};

  @media(orientation: portrait) {
    top: clamp(550px, 50vw, 600px);
    transform: translateX(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      top: clamp(420px,65vw, 550px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      top: 350px;
    }
  }
`;