import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: #f4f6f9;
  font-family: "Arial", sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
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
  width: 300px;
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
`;

export const Image = styled.img`
  width: 400px;
  height: 300px;
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
