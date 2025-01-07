import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px; // Redus pentru mobil
  background-color: #f4f6f9;
  font-family: "Arial", sans-serif;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 24px; // Adaptat pentru dimensiuni mai mici pe mobil
  color: #333;
  margin-bottom: 20px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  width: 90%;
  max-width: 500px;
  padding: 12px;
  margin: 10px 0;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #007bff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; // Redus pentru mobil
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px; // Redus pentru mobil
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Link = styled.a`
  font-size: 16px; // Adaptat pentru mobil
  color: #007bff;
  text-decoration: none;
  margin-top: 15px;
  margin-bottom: 15px;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

export const ResultText = styled.p`
  margin-top: 20px;
  font-size: 21px; // Adapted for mobile
  color: #333;
  font-weight: bold;
  text-align: center;
  margin-top: 55px;
`;

export const FileUploadButton = styled.input`
  padding: 8px;
  margin: 10px 0;
  background-color: #f4f4f4;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e4e4e4;
  }
`;

export const TableContainer = styled.div`
  width: 90%;
  overflow-x: auto; // Activates scroll on small devices
  margin: 20px auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  max-width: 100%; // Ensures table is not wider than its container
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledTh = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 2px solid #ccc;
`;

export const StyledTd = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;
