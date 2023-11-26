import React, { useEffect, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Character from "./Character";
import useCanvas from "./useCanvas";

const WIDTH = 840;
const HEIGHT = 700;

import {} from "react";
// ...
interface Props {
  mapArr: number[][];
  setMapArr: Dispatch<SetStateAction<number[][]>>;
}

const Canvas = ({ mapArr, setMapArr }: Props) => {
  let charcter: Character | null = null;

  const canvasRef = useCanvas(async (canvas) => {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    charcter = new Character(canvas);
    document.addEventListener(
      "keydown",
      charcter.handleArrowKeyDown(mapArr, setMapArr)
    );
  });

  useEffect(() => {
    return () => {
      charcter &&
        document.removeEventListener(
          "keydown",
          charcter.handleArrowKeyDown(mapArr, setMapArr)
        );
    };
  }, []);

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
