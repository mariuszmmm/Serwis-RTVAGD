import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: ${({ theme, $standardText }) => $standardText ? theme.color.white : theme.color.button};
  text-decoration: none;
  transition: filter  0.3s ease, color 0.2s ease;
  
  &:hover {
    filter: brightness(1.2);
      color: ${({ theme }) => theme.color.button};
  }

  h3 {
    margin-bottom: 0;
  }
`;