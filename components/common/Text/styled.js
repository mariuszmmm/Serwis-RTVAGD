import styled, { css } from "styled-components";

export const StyledText = styled.p`
  grid-area: ${({ $subArea }) => $subArea ? "text_2" : "text"};
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  margin: 0 0 1rem;
  text-align: justify;
  text-justify: inter-word;
  

  ${({ $check, $cross, $list }) => ($check || $cross || $list) && css`
    list-style: none;  
    padding-left: 12px;
    
    li {
      position: relative;
      padding-left: 28px; 
    }

    li::before {
      position: absolute;
      margin: -2px 0 0 5px;

      ${({ $check }) => $check && css`
        content: "✔";
        top: 1px;
        left: -7px;
        font-size: 1.2em; 
        color: ${({ theme }) => theme.color.check};
      `};

      ${({ $cross }) => $cross && css`
        content: "❌";
        top: 4px;
        left: -10px;
        font-size: 1em; 
        color: ${({ theme }) => theme.color.cross};
     `};

      ${({ $list }) => $list && css`
        content: "-";
        top: 4px;
        left: 5px;
        font-size: 1em; 
     `};
    }
  `};
  
  ${({ $forReviews }) => $forReviews && css`
    font-style: italic;
    margin: 1rem 0;
  `}

  h3 {
    margin-top: 1rem;
    margin-bottom: 0;
  } 
`;

export const StyledSpan = styled(StyledText).attrs({ as: "span" })`
  margin: 0;
`;