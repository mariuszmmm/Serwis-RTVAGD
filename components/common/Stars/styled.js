import styled, { css } from "styled-components";
import StarIcon from "../../../public/icons/star.svg";

export const StarsWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 2px;
  ${({ $center }) => $center && css`
    width: 90px;
    margin: 0 0 2px;  

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      width: 68px;
      height: 12px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      width: 52px;  
      height: 8px;  
    }
  `} 
`;

export const Star = styled(StarIcon)`
  width: fit-content;
  height: fit-content;
  color: ${({ theme, $active }) =>
    $active ? theme.color.start_1 : theme.color.start_2};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 0;
    margin-bottom: 2px;
  }
`;