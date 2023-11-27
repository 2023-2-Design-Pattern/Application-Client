import React from "react";
import MapFirstStep from "../maps/MapFirstStep";
import styled from "styled-components";
import ItemBox from "../items/ItemBox";
import HpBar from "../gamestatus/HpBar";

const MapView = () => {
  return (
    <FlexRow>
      <MapFirstStep />
      <UtilWrapper>
        <HpBar />
        <ItemBox />
      </UtilWrapper>
    </FlexRow>
  );
};

export default MapView;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
`;

const UtilWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`