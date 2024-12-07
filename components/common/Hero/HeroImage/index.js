import styled from "styled-components";

export const HeroImage = styled.img`  
  width: 30vw;
  height: auto;
  max-width: 600px;

  filter: drop-shadow(10px 10px 15px rgba(40, 40, 40, 0.7))
          drop-shadow(0px 20px 30px rgba(40, 40, 40, 0.4));
  transition: transform 0.2s ease-out, filter 0.2s ease-out;

  &:hover {
    transform: scale(101%);
    filter: drop-shadow(10px 10px 15px rgba(255, 140, 0, 0.7));
  }

  @media(orientation: portrait) {
    width: clamp(30vw, 59vw, 520px);
    max-width: 520px;
  }
`;