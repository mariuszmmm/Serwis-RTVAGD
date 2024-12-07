import styled, { css } from "styled-components";

export const SubNavWrapper = styled.div`
  position: absolute;
    transform: translateX(-15%);
    max-height: 0;
    opacity: 0;
    overflow-x: hidden;
    z-index: 1010;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    transition-delay: 0.05s;

    ${({ $show }) => $show && css`
      transition: max-height 0s; 
      opacity: 1;
      max-height: 215px;  
    `}; 
`;