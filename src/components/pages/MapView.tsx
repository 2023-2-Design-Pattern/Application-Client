import React, { useState } from "react";
import MapFirstStep from "../maps/MapFirstStep";
import styled from "styled-components";
import ItemBox from "../items/ItemBox";
import HpBar from "../gamestatus/HpBar";
import FailModal from "../gamestatus/FailModal";

const MapView = () => {
  const [itemClicked, setItemClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number|undefined>(undefined);
  const [currentHealth, setCurrentHealth] = useState<number>(100);
  return (
    <FlexRow>
      {
        currentHealth <= 0 && <FailModal />
      }
      <MapFirstStep 
        itemClicked={itemClicked}
        setItemClicked={setItemClicked}
        setSelectedItem={setSelectedItem}
        setCurrentHealth={setCurrentHealth} />
      <UtilWrapper>
        <HpBar currentHealth={currentHealth} />
        <ItemBox 
        itemClicked={itemClicked}
        selectedItem={selectedItem}
        setItemClicked={setItemClicked}
        setSelectedItem={setSelectedItem} />
        {
          selectedItem &&
          <ShowSelectedItem>
            <div>You Choose this item...</div>
            <img src={`/img/item-${selectedItem}.png`} />
            <div>So select Shining Point on Map to Broke the wall!</div>
          </ShowSelectedItem>
        }
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
  width: 500px;
  flex-direction: column;
  gap: 20px;
`

const ShowSelectedItem = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  width: 90%;
  align-items: center;
  font-size: 20px;
  flex-wrap: wrap;
  & > img{
    width: 15%;
  }
`