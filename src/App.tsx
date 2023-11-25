import React from "react";
import styled from "styled-components";
import MapView from "./components/pages/MapView";
import ItemBox from "./components/items/ItemBox";

const App = () => {
  return (
    <FlexRow>
      <MapView />
      <ItemBox />
    </FlexRow>
  );
};

export default App;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
