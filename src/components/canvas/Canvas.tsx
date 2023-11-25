import React, { useEffect } from "react";
import styled from "styled-components";
import Character from "./Character";
import useCanvas from "./useCanvas";

const WIDTH = 840;
const HEIGHT = 700;

const Canvas = ({}) => {
  let charcter: Character | null = null;

  const canvasRef = useCanvas(async (canvas) => {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    charcter = new Character(canvas);
    document.addEventListener("keydown", charcter.hadleArrowKeyDown());
  });

  useEffect(() => {
    return () => {
      charcter &&
        document.removeEventListener("keydown", charcter.hadleArrowKeyDown());
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
