import React from "react";
import styled from "styled-components";
import Canvas from "../canvas/Canvas";
import { MapArr } from "./mapData";

const MapFirstStep = () => {
  return (
    <Wrapper>
      {MapArr.map((row) => {
        return (
          <RowFlex>
            {row.map((element) => {
              if (element === 0) {
                return <Box color="red"> </Box>;
              } else if (element === 2) {
                return <Box color="whitesmoke"> </Box>;
              } else if (element === 3) {
                return <Box color="blue"> </Box>;
              } else if (element === 4) {
                return <Box color="yellow"> </Box>;
              } else if (element === 5) {
                return <Box color="green"> </Box>;
              } else if (element === 9) {
                return <Box color="white"> </Box>;
              } else {
                return <Box color="black"> </Box>;
              }
            })}
          </RowFlex>
        );
      })}
      <Canvas />
    </Wrapper>
  );
};

export default MapFirstStep;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Box = styled.div<{ color: string }>`
  display: flex;
  width: 28px;
  height: 28px;
  background-color: ${(props) => props.color || "white"};
`;
