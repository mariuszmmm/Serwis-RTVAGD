import styled from "styled-components";

export const Title = styled.h1`
  margin: 60px 0;
  font-size: clamp(1.5rem, 5vw, 2.5rem);  
  text-align: center;
  line-height: 1.2;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 30px 0;
    font-size: 1.3rem;
  }

  span {
    color: ${({ theme }) => theme.color.check};
    margin-right: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-right: 0;
    span {
      display: none; 
    }
  }
`;