import styled, { css } from "styled-components";

export const SendInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s ease-in-out;
  z-index: -1;
  user-select: none;

  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
      width: calc(100% + 40px);
      height: calc(100% + 40px);
      transform: translate(-20px, -20px);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      background: rgba(50, 50, 50, 0.1);
      box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      transition: opacity 0.2s ease-in-out;
      z-index: 1;
    `}
`;

export const Info = styled.span`
  padding: 30px;
  margin-bottom: 20px;
  font-size: clamp(0.7rem, 2.5vw, 1.2rem);
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.black};
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 20px;
  }
`;
