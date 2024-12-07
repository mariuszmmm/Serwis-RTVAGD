import styled from "styled-components";
import { imageUrls } from "../../utils/urls";

export const ItemWrapper = styled.blockquote`
  margin: 0 0 20px;
  background-color: white;
  color: black;
  border-radius: 15px;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
`;

export const Avatar = styled.div`
  position: relative;
  width: clamp(3rem, 6vw, 4rem);
  height: clamp(3rem, 6vw, 4rem);
  aspect-ratio: 1/1;
  margin-right: 15px;
`;

export const Data = styled.div`
  width: 100%;
  text-align: left;
  font-size: clamp(0.8rem, 2.5vw, 1rem);
  position: relative;
`;

export const Author = styled.h3`
  margin: 0 0 3px;
  padding: 0 25px 0 0;
  font-weight: bold;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  line-height: 1.4em;

  &::after {
    content: "";
    display: block;
    width: clamp(1.1rem, 2.5vw, 1.5rem);
    height: clamp(1.1rem, 2.5vw, 1.5rem); 
    background-image: url('${imageUrls.logoGoogle}');
    background-size: cover; 
    position: absolute;
    top: 0;
    right: 0; 
  }
`;