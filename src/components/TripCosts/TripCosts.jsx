import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
  PageContainer,
  Title,
  ImagesContainer,
  Image,
  Button,
  Link,
  ResultText,
  TableContainer,
  StyledTable,
  StyledTh,
  StyledTd,
} from "./TripCosts.style.js";

export const TripCosts = () => {
  const [startingLocation, setStartingLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [result, setResult] = useState("");
  const [tableData, setTableData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [finalCost, setFinalCost] = useState(0);

  const handleFileUpload = (e) => {
    setShowTable(false);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const bstr = event.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      if (data.length > 0) {
        setTableData(data);
        calculateFinalCost(data);
      }
    };
    reader.readAsBinaryString(file);
  };

  const calculateFinalCost = (data) => {
    const costColumnIndex = 1; // Adjust this index to the correct column for costs
    const sum = data.slice(1).reduce((acc, row) => {
      const cost = parseFloat(row[costColumnIndex]); // Assuming costs are in a specific column
      return !isNaN(cost) ? acc + cost : acc;
    }, 0);
    setFinalCost(sum);
  };

  const handleShowTable = () => {
    setShowTable(true);
  };

  return (
    <PageContainer>
      <Title>Plan Your Journey</Title>
      <ImagesContainer>
        <Image
          src="https://raw.githubusercontent.com/ioanrazvanstanciu/Startup-Engineering-Project/refs/heads/main/images/pic1.jpeg"
          alt="Map 1"
        />
        <Image
          src="https://raw.githubusercontent.com/ioanrazvanstanciu/Startup-Engineering-Project/refs/heads/main/images/pic2.jpeg"
          alt="Map 2"
        />
      </ImagesContainer>
      <Link
        href="https://tollguru.com/toll-calculator-europe"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to the calculator
      </Link>
      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileUpload}
        style={{
          padding: "10px 20px",
          margin: "10px 0",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          color: "#fff",
          backgroundColor: "#007bff",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s",
          fontFamily: "Arial, sans-serif",
          fontSize: "12px",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
      />
      {tableData.length > 0 && (
        <Button onClick={handleShowTable}>Show Table with Toll Fees</Button>
      )}
      {showTable && tableData.length > 1 && (
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                {tableData[0].map((_, index) => (
                  <StyledTh key={index}>Column {index + 1}</StyledTh>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <StyledTd key={cellIndex}>{cell}</StyledTd>
                  ))}
                </tr>
              ))}
            </tbody>
          </StyledTable>
          {finalCost > 0 && (
            <ResultText>
              The final cost is: {finalCost.toFixed(2)} RON
            </ResultText>
          )}
        </TableContainer>
      )}
    </PageContainer>
  );
};

export default TripCosts;
