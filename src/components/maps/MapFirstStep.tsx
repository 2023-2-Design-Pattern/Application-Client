import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Canvas from "../canvas/Canvas";
import { MapArr } from "./mapData"; // axios GET -> 제거

interface MapFirstStepProps {
  itemClicked: boolean,
  setItemClicked: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectedItem: React.Dispatch<React.SetStateAction<number|undefined>>,
  setCurrentHealth: React.Dispatch<React.SetStateAction<number>>,
}

const MapFirstStep = (props:MapFirstStepProps) => {
  const [mapArr, setMapArr] = useState<number[][]>([]);

  useEffect(() => {
    // axios GET
    setMapArr(MapArr);
  }, []);

  return (
    <Wrapper>
      {mapArr.length > 0 ? ( // 비동기 get하면 제거 가능
        <>
          {mapArr.map((row) => {
            return (
              <RowFlex>
                {row.map((element) => {
                  if (element === 0) {
                    return <Box color="red"> </Box>;
                  } else if (element === 1) {
                    return <Box color="black"> </Box>;
                  } else if (element === 2) {
                    return <Box color="whitesmoke"> </Box>;
                  } else if (element === 3) {
                    return <Box color="black">
                      <img src={`/img/item-3.png`} />
                    </Box>;
                  } else if (element === 4) {
                    return <Box color="black">
                      <img src={`/img/item-4.png`} />
                    </Box>;
                  } else if (element === 5) {
                    return <Box color="black">
                      <img src={`/img/item-5.png`} />
                    </Box>;
                  } else if (element === 9) {
                    return <Box color="white"> </Box>;
                  } else {
                    return <Box color="green"> </Box>;
                  }
                })}
              </RowFlex>
            );
          })}
          <Canvas 
            mapArr={mapArr} 
            itemClicked={props.itemClicked} 
            setMapArr={setMapArr}
            setItemClicked={props.setItemClicked}
            setSelectedItem={props.setSelectedItem}
            setCurrentHealth={props.setCurrentHealth} />
        </>
      ) : null}
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
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color || "white"};
  & > img{
    width: 80%;
    object-fit: cover;
  }
`;
