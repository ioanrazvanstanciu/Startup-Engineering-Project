import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f4f6f9;
  font-family: "Arial", sans-serif;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem; // Redus pentru a se potrivi pe ecrane mai mici
  color: #333;
  margin-bottom: 20px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 90%; // Lățime procentuală pentru adaptabilitate
  max-width: 500px; // Limita maximă pentru ecrane mai mari
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap; // Wrap images on smaller screens
`;

export const Image = styled.img`
  width: 100%; // Ajustează la 100% în containerul său
  max-width: 400px; // Limita maximă pentru a evita supradimensionarea
  height: auto; // Păstrează proporțiile imaginii
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Link = styled.a`
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

export const ResultText = styled.p`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
  text-align: center;
`;
