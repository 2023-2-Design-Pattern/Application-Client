import React, { useEffect, Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import Character from "./Character";
import useCanvas from "./useCanvas";

const WIDTH = 840;
const HEIGHT = 700;

import {} from "react";

// ...
interface Props {
  mapArr: number[][];
  itemClicked: boolean;
  setMapArr: Dispatch<SetStateAction<number[][]>>;
  setItemClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedItem: React.Dispatch<React.SetStateAction<number|undefined>>;
  setCurrentHealth: React.Dispatch<React.SetStateAction<number>>;
}

const Canvas = ({ mapArr, itemClicked, setMapArr, setItemClicked, setSelectedItem, setCurrentHealth}: Props) => {
  let charcter: Character | null = null;
  const [changecCharic, setChangedCharic] = useState<Character|null>(null);

  const canvasRef = useCanvas(async (canvas) => {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    charcter = new Character(canvas);
    setChangedCharic(charcter);
    document.addEventListener(
      "keydown",
      charcter.handleArrowKeyDown(mapArr, setMapArr, setCurrentHealth)
    );
    document.addEventListener(
      "click",
      charcter.handleOnClickWall(mapArr, setMapArr, setItemClicked, setSelectedItem)
    );
  });

  useEffect(() => {
    return () => {
      charcter &&
        document.removeEventListener(
          "keydown",
          charcter.handleArrowKeyDown(mapArr, setMapArr, setCurrentHealth)
        );
    };
  }, []);

  useEffect(() => {
    if(itemClicked === true) {
      // charcter && charcter.getWallPosition(mapArr, setMapArr);
      changecCharic && changecCharic.getWallPosition(mapArr,setMapArr);
    } else {
      changecCharic && changecCharic.removeWallPostiion(mapArr,setMapArr);
    }
  }, [itemClicked]);

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
