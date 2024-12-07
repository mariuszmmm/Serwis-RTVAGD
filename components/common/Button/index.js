import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.black};
  padding: 15px 30px;
  margin: 0;
  font-size: clamp(0.7rem, 2vw, 1.4rem);
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-weight: 600;
  min-width: max-content;  

  &:hover {
    background-color: ${({ theme }) => theme.color.buttonHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.button};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.buttonDisabled};
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 10px 15px;
    border-radius: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 10px;
  }
`;