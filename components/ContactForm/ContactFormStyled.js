import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  margin: 0 0 50px;
  text-align: left;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 0 0 30px;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: clamp(0.5rem, 2.5vw, 1rem);
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.border};
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: clamp(0.5rem, 2.5vw, 1rem);
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.border};
  min-height: 150px;
  resize: vertical; 
`;
