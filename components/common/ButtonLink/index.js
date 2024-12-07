import styled, { css } from "styled-components";
import { Button } from "../Button";

export const ButtonLink = styled(Button).attrs({ as: "a" })`
  display: inline-block;
  margin: 0 0 60px;



  /* ${({ $hero, $submit }) => ($hero || $submit) && css`
    margin: 0;
  `}; */

  ${({ $opinia }) => $opinia && css`
    position: absolute;
    top: 67px;
    right: 20px;
    padding: 8px 15px;
    font-size: clamp(0.3rem, 1.6vw, 0.9rem);
    font-weight: 600;
    margin: 15px 0;
    opacity: 1;
    transition:  opacity 0.1s ease;
  
    ${({ $hidden }) => $hidden && css`
        opacity: 0;
        pointer-events: none;
    `}; 

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      margin: 0;
      padding: 5px 10px;
      top: 60px;
    };
    
    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      top: 56px;
    }
  `}
`;
