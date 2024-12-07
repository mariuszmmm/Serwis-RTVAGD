import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

export const Rotating = styled.div`
  @keyframes rotateBg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  position: absolute;
  width: 100%;
  height: 100%;
  animation: rotateBg 30s linear infinite;
  opacity: 0.4;
  background-color: transparent;
`;

export const Circle = styled.div`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: 100vw;
  height: 100vw;
  background: radial-gradient(
    circle,
    #eb5c20 0%,
    rgba(235, 92, 32, 0) 60%
  );
  filter: blur(30px);
`;
