import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 160px 0 0;
  text-align: left;
  min-height: calc(100vh - 5vh);

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 120px 0 0;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;  
  padding: 0 20px 20px;
`;

export const ContactInfo = styled.div`
  margin-top: 30px;
`;

export const ContactText = styled.p`
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 4px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      gap: 5px;
    }

  span {
    font-weight: 600;

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      width: 100%;
    }
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.button};
  text-decoration: none;
  transition: filter  0.3s ease;

  &:hover {
    filter: brightness(1.2);
  }
`;


export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 600/450;
  margin: 50px 0 80px;
`;