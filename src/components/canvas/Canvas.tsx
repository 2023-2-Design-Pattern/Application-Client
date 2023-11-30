import React, { useEffect, Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import Character from "./Character";
import useCanvas from "./useCanvas";

const WIDTH = 840;
const HEIGHT = 700;

import {} from "react";
import { getAllItem } from "../../utils/request";
import { useRecoilValue } from "recoil";
import { roundAtom, userNameAtom } from "../../utils/recoilVal";
import { wallBreakItem } from "../apis/item";

// ...
interface Props {
  mapArr: number[][];
  itemClicked: boolean;
  selectedItem: getAllItem|undefined;
  setMapArr: Dispatch<SetStateAction<number[][]>>;
  setItems: React.Dispatch<React.SetStateAction<getAllItem[]>>,
  setItemClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedItem: React.Dispatch<React.SetStateAction<getAllItem|undefined>>;
  setCurrentHealth: React.Dispatch<React.SetStateAction<number>>;
  setIsDone: React.Dispatch<React.SetStateAction<boolean>>;
}

const Canvas = ({ mapArr, itemClicked, selectedItem ,setMapArr, setItems, setItemClicked, setSelectedItem, setCurrentHealth, setIsDone}: Props) => {
  let charcter: Character | null = null;
  const userNameVal = useRecoilValue(userNameAtom);
  const round = useRecoilValue(roundAtom);
  const [changecCharic, setChangedCharic] = useState<Character|null>(null);
  const [isItemUsed, setIsItemUsed] = useState(false);

  const canvasRef = useCanvas(async (canvas) => {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    charcter = new Character(canvas);
    setChangedCharic(charcter);
    document.addEventListener(
      "keydown",
      charcter.handleArrowKeyDown(mapArr, userNameVal, round, setMapArr, setItems, setCurrentHealth, setIsDone)
    );
    document.addEventListener(
      "click",
      charcter.handleOnClickWall(mapArr, setMapArr, setIsItemUsed)
    );
  });

  useEffect(() => {
    return () => {
      charcter &&
        document.removeEventListener(
          "keydown",
          charcter.handleArrowKeyDown(mapArr, userNameVal, round, setMapArr, setItems, setCurrentHealth, setIsDone)
        );
    };
  }, []);

  useEffect(() => {
    if(itemClicked === true) {
      // charcter && charcter.getWallPosition(mapArr, setMapArr);
      changecCharic && changecCharic.getWallPosition(mapArr,setMapArr);
      console.log(selectedItem?.userGameItemId);
      // setItemGameId(() => selectedItem?.userGameItemId);
    } else {
      changecCharic && changecCharic.removeWallPostiion(mapArr,setMapArr);
    }
  }, [itemClicked]);

  const postItemUse = async() => {
    console.log(selectedItem);
    if (selectedItem !== undefined){
      console.log(selectedItem);
      const response = await wallBreakItem(userNameVal, round, selectedItem.userGameItemId);
      if(response === false){
        console.log('error!')
      } else {
        console.log(response.item);
        setItems(() => (response.items));
      }
    } else {
      console.log('no selected one');
    }
  }

  useEffect(() => {
    postItemUse();
    setSelectedItem(undefined);
    setItemClicked(false);
    setIsItemUsed(false);
  }, [isItemUsed===true]);


  return (
    <Wrapper>
      <canvas ref={canvasRef} />
    </Wrapper>
  );
};

export default Canvas;

const Wrapper = styled.div`
  border-radius: 15px;
  background: transparent;
  transition: all 0.1s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

