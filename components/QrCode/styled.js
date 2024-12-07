import styled, { css } from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`;

export const Wrpper = styled.div`
  position: absolute;
  background-color: white;
  z-index: 1000;
  cursor: pointer;
  top: 130px;
  right: 20px;  
  transform: translate(0, 0);
  border-radius: 2px;
  opacity: ${({ $loaded }) => ($loaded ? "0.8" : "0")};

  
  ${({ $hidden }) =>
    $hidden &&
    css`
      opacity: 0;
      pointer-events: none;
    `};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    top: 94px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    top: 84px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
    }
  }

  ${({ $isOpen }) =>
    $isOpen ?
      css`
      transition: top 0.4s ease-in-out, right 0.4s ease-in-out, transform 0.4s ease-in-out, border-radius 0.3s ease-in-out;
      transition-delay: 0s, 0s, 0s, 0.2s;    
      opacity: 1;
      top: 50vh;
      right: 50%;
      transform: translate(50%, -50%);
      border-radius: 20px;

      @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
        top: 50vh;
      }
    `: css`
        transition:  top 0.3s ease-in-out, right 0.3s ease-in-out, transform 0.3s ease-in-out, border-radius 0.2s ease-in-out, opacity 0.2s ease;
        transition-delay: 0.1s, 0.1s, 0.1s, 0.1s, 0s;
      `}; 
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin: 1px;
  max-width: 900px;
  max-height: 900px;
  width: 42px;
  height: 42px;

  ${({ $isOpen }) =>
    $isOpen ?
      css`
      transition: width 0.4s ease-in-out, height 0.4s ease-in-out, margin 0.4s ease-in-out;
      transition-delay: 0.1s, 0.1s, 0.1s;
      margin: 10px;
      width: 90vmin;
      height: 90vmin;
    `: css`
      transition: width 0.4s ease-in-out, height 0.4s ease-in-out, margin 0.4s ease-in-out;
      transition-delay: 0s, 0s, 0s;
    `}
`;

export const Text = styled.p`
transition: font-size 0.3s ease-in-out, margin 0.4s ease-in-out;
   ${({ $delay }) => ($delay ?
    css`
      font-size: 0.01rem;
      margin: 0;
    ` :
    css`
      font-size: 2rem;
      margin: 0 0 10px 0;

      @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
        font-size: 1.5rem;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        font-size: 1rem;
      }
    `)};
  color: black;
  text-align: center;
  font-weight: bold;
  z-index: 1;
`;
