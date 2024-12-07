import styled from "styled-components";

export const SubTitle = styled.h2`
  grid-area: header;
  text-align: left;
  /* margin: 20px 0 10px; */
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 1.4;

  span {
    color: ${({ theme }) => theme.color.check};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding-top: 0;
  }
`;