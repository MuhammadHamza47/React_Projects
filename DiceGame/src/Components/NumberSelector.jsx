import React, { useState } from "react";
import styled from "styled-components";
function NumberSelector() {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  
  return (
    <NumberSelecterContainer>
      <div className="flexN">
      {arrNumber.map((value, i) => (
        <Box
        isSelected={value === selectedNumber}
         key={i}
        onClick={() =>setSelectedNumber(value)}>{value}</Box>
      ))}
      </div>
      <p>Select Number</p>
    </NumberSelecterContainer>
  );
}

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  cursor: pointer;

  background-color: ${(props) => (props.isSelected? "black": "white")};
  color: ${(props) => (props.isSelected? "white": "black")};
`;

const NumberSelecterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flexN{
        display: flex;
        gap: 24px;
    }
    p{
            font-size: 24px;
            font-weight: 700px;
    }
    
`