import Link from "next/link";
import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  user-select: none; 

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 0 10px;
  }
`;

export const NavList = styled.ul`
  background-color: ${({ theme }) => theme.color.primary};
  position: relative;
  list-style-type: none;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 0;
  gap: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: 3px;
  }

  ::-webkit-scrollbar {
    display: none; 
  }

  ${({ $subNav }) => $subNav && css`
    flex-direction: column;
    align-items: stretch;
    padding: 5px;
  `}
`;

export const ListItem = styled.li`
  font-size: clamp(0.3rem, 1.8vw, 0.9rem);
  margin: 0 2px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 0 1px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 0;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  padding: 8px 10px;
  margin: 8px 0;
  transition: background-color 0.3s ease;
  display: flex;
  border-radius: 5px;

 
  ${({ $disabled }) => $disabled && css`
    cursor: auto;
  `}

  ${({ $subNav }) => $subNav && css`
    margin: 2px 0;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 5px 3px;
    border-radius: 2px;
    margin: 5px 0;

    ${({ $subNav }) => $subNav && css`
      margin: 0;
    `}
  }

  ${({ $active }) => $active && css`
    background-color: ${({ theme }) => theme.color.emperor};
  `};

  &:hover {
    background-color: ${({ theme }) => theme.color.emperor};
    ${({ $disabled }) => $disabled && css`
      background-color: ${({ theme }) => theme.color.primary};
    `};
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  font-size: clamp(0.5rem, 2.5vw, 1.3rem);
  font-weight: bold;
  padding-right: 5px;
  display: flex;
  /* flex-direction: row-reverse; */
  align-items: center;
  gap: 10px;
`;
