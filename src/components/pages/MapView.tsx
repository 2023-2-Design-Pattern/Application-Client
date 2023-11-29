import React, { useEffect, useState } from "react";
import MapFirstStep from "../maps/MapFirstStep";
import styled from "styled-components";
import ItemBox from "../items/ItemBox";
import HpBar from "../gamestatus/HpBar";
import FailModal from "../gamestatus/FailModal";
import { useRecoilValue } from "recoil";
import { userNameAtom } from "../../utils/recoilVal";
import { getGameStart } from "../apis/setGame";
import { getAllItem } from "../../utils/request";
import SaveButton from "../gamestatus/SaveButton";
import InfoBox from "../gamestatus/InfoBox";
import SuccessModal from "../gamestatus/SuccessModal";

const MapView = () => {
  const [itemClicked, setItemClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState<getAllItem|undefined>(undefined);
  const [currentHealth, setCurrentHealth] = useState<number>(100);
  const [items, setItems] = useState<getAllItem[]>([]);
  const [mapArr, setMapArr] = useState<number[][]>([]);
  const [isdone, setIsDone] = useState(false);
  const userName = useRecoilValue(userNameAtom);
  const regex =  /[^0-9]/g;

  const getStart = async() => {
    console.log(userName);
    const response = await getGameStart(userName, 1);
    if(response === false) {
      console.log('error');
    } else {
      // const innerArray:number[] = [];
      console.log(response);
      setCurrentHealth(response.health);
      const gameBoardOnlyNumber:string = response.gameBoard.replace(regex, "");
      console.log(gameBoardOnlyNumber);
      const stringToArray = [...gameBoardOnlyNumber];
      console.log(stringToArray);

      let newArr:number[] = [];
      let cnt = 1;
      const test = [];
      for(let i=0;i<stringToArray.length;i++){
        newArr.push(Number(stringToArray[i]));
        if(cnt % 30 === 0){
          console.log(newArr);
          // setTest((test) => test.push(newArr));
          test.push(newArr);
          newArr = [];
          cnt = 0;
        }
        cnt ++;
      }
      console.log(test);
      setMapArr(test);
    }
  }

  useEffect(() => {
    getStart();
  }, []);


  return (
    <FlexRow>
      {
        currentHealth <= 0 && <FailModal setCurrentHealth={setCurrentHealth} />
      }
      {
        isdone === true && <SuccessModal />
      }
      {mapArr.length>0 &&
        <>
        <MapFirstStep 
        itemClicked={itemClicked}
        selectedItem={selectedItem}
        mapArr={mapArr}
        setMapArr={setMapArr}
        setItems={setItems}
        setItemClicked={setItemClicked}
        setSelectedItem={setSelectedItem}
        setCurrentHealth={setCurrentHealth}
        setIsDone={setIsDone} />
      <UtilWrapper>
        <InfoBox />
        <SaveButton
        mapArr={mapArr}
        currentHealth={currentHealth} />
        <HpBar currentHealth={currentHealth} />
        <ItemBox 
        items={items}
        itemClicked={itemClicked}
        selectedItem={selectedItem}
        setItems={setItems}
        setItemClicked={setItemClicked}
        setSelectedItem={setSelectedItem} />
        {
          selectedItem &&
          <ShowSelectedItem>
            <div>You Choose this item...</div>
            <img src={`/img/item-${selectedItem.itemId}.png`} />
            <div>So select Shining Point on Map to Broke the wall!</div>
          </ShowSelectedItem>
        }
      </UtilWrapper>
      </>}
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
