import React from "react";
import MapFirstStep from "../maps/MapFirstStep";
import styled from "styled-components";
import ItemBox from "../items/ItemBox";

const MapView = () => {
  return (
    <FlexRow>
      <MapFirstStep />
      <ItemBox />
    </FlexRow>
  );
};

export default MapView;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;