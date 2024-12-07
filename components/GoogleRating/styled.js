import styled, { css } from "styled-components";
import Link from "next/link";

export const Wrpper = styled.div`
  position: absolute;
  top: 82px;
  left: 20px;
  opacity: 1;
  transition:  opacity 0.1s ease;

  ${({ $hidden }) => $hidden && css`
      opacity: 0;
      pointer-events: none;
  `};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    top: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    top: 56px;
  }
`;

export const StyledLink = styled(Link)`
  min-width: 132px;
  min-height: 36px;
  background-color: white;
  color: black;
  border-radius: 5px;
  display: grid ;
  grid-template-areas: 
   "logo text"
   "logo stars";
  align-items: center;
  justify-items: center;
  transition: opacity ease-out 0.2s;
  padding-right: 4px;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    min-width: 100px;
    min-height: 28px;
    top: 60px;
    border-radius: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    min-width: 60px;
    min-height: 22px;
    border-radius: 2px;
    top: 56px;
  }
`;

export const Text = styled.p`
  grid-area: text;
  font-size: 0.65rem;
  font-weight: 700;
  color: black;
  width: 100%;
  margin: 2px 0 0;
  text-align: center;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size:0.48rem;
    margin: 4px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size:0.36rem; 
    margin: 2px 0 0;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 32px;
  width: 32px;
  grid-area: logo;
  margin: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    height: 24px;
    width: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    height: 18px;
    width: 18px;
  }
`;