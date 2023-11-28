import CharacterImage from "../../assets/kirby.png";

interface Position {
  x: number;
  y: number;
}

enum Direction {
  DOWN = 0,
  UP = 1,
  LEFT = 2,
  RIGHT = 3,
}

const SIZE = 28;

class Character {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null = null;
  private position: Position = { x: 56, y: 196 };

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.ctx!.fillRect(0, 0, canvas.width, canvas.height);
    this.runAnimationFrame();
  }

  private runAnimationFrame() {
    this.draw();
    requestAnimationFrame(this.runAnimationFrame.bind(this));
  }

  private draw() {
    const { x, y } = this.position;

    const image = new Image();
    image.src = CharacterImage;

    if (!this.ctx || !image) {
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(image, x, y, SIZE, SIZE);
  }

  handleArrowKeyDown(
    mapArr: number[][],
    setMapArr: React.Dispatch<React.SetStateAction<number[][]>>,
    setCurrentHealth: React.Dispatch<React.SetStateAction<number>>,
  ) {
    const distance = SIZE;
    const ArrowKeys = [
      {
        code: "38",
        string: "ArrowUp",
        direction: Direction.UP,
        movement: { x: 0, y: -distance },
        isMoveable: () => this.position.y > 0,
      },
      {
        code: "40",
        string: "ArrowDown",
        direction: Direction.DOWN,
        movement: { x: 0, y: distance },
        isMoveable: () => this.position.y < this.canvas.height - SIZE,
      },
      {
        code: "39",
        string: "ArrowRight",
        direction: Direction.RIGHT,
        movement: { x: distance, y: 0 },
        isMoveable: () => this.position.x < this.canvas.width - SIZE,
      },
      {
        code: "37",
        string: "ArrowLeft",
        direction: Direction.LEFT,
        movement: { x: -distance, y: 0 },
        isMoveable: () => this.position.x > 0,
      },
    ];

    const handler = (e: KeyboardEvent) => {
      for (let i = 0; i < ArrowKeys.length; i++) {
        const { code, string, movement, isMoveable } = ArrowKeys[i];
        if ([code.toString(), string].includes(e.key) && isMoveable()) {
          const newX = (this.position.x + movement.x) / SIZE;
          const newY = (this.position.y + movement.y) / SIZE;
          try {
            if (
              mapArr[newY][newX] == 3 ||
              mapArr[newY][newX] == 4 ||
              mapArr[newY][newX] == 5
            ) {
              // item 인벤토리 추가
              mapArr[newY][newX] = 1;
              setMapArr([...mapArr]); // re-render
              this.position.x = newX * SIZE;
              this.position.y = newY * SIZE;
            } else if (mapArr[newY][newX] != 0) {
              if(mapArr[newY][newX] === 2){
                setCurrentHealth((currentHealth) => currentHealth-5);
                console.log('눈을 밟았다!');
              }
              this.position.x = newX * SIZE;
              this.position.y = newY * SIZE;
            }
            setCurrentHealth((currentHealth) => currentHealth-0.5);
          } catch (e) {
            console.log(e);
          }
        }
      }
    };

    return (e: KeyboardEvent) => handler(e);
  }

  getWallPosition = (mapArr:number[][], setMapArr: React.Dispatch<React.SetStateAction<number[][]>>) => {
    const indexX = (this.position.x)/SIZE;
    const indexY = (this.position.y)/SIZE;
    console.log(indexY, indexX);
    // const possibleArr = [];
    if(mapArr[indexY+1][indexX] === 0) {mapArr[indexY+1][indexX] = 100}
    if(mapArr[indexY-1][indexX] === 0) {mapArr[indexY-1][indexX] = 100}
    if(mapArr[indexY][indexX+1] === 0) {mapArr[indexY][indexX+1] = 100}
    if(mapArr[indexY][indexX-1] === 0) {mapArr[indexY][indexX-1] = 100}
    // console.log(possibleArr);
    setMapArr([...mapArr]); 

    // return possibleArr;
  }

  removeWallPostiion = (mapArr:number[][], setMapArr: React.Dispatch<React.SetStateAction<number[][]>>) => {
    for(let i=0;i<25;i++){
      for(let j=0;j<30;j++){
        if (mapArr[i][j] === 100) {
          mapArr[i][j] =0
        }
      }
    }
    setMapArr([...mapArr]);
  }

  handleOnClickWall(
    mapArr: number[][],
    setMapArr: React.Dispatch<React.SetStateAction<number[][]>>,
    setItemClicked: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedItem: React.Dispatch<React.SetStateAction<number|undefined>>,
  ){
    const handler = (e: MouseEvent) => {
      // const x = e.clientX - (this.canvas.offsetLeft+this.canvas.clientLeft)
      // const y = e.clientY - (this.canvas.offsetTop+this.canvas.clientTop)
      const x = e.offsetX
      const y = e.offsetY
      const newX = Math.floor(x/SIZE);
      const newY = Math.floor(y/SIZE);

      console.log(newY, newX);

      try {
        if (mapArr[newY][newX] === 100) {
          mapArr[newY][newX] = 1
          for(let i=0;i<25;i++){
            for(let j=0;j<30;j++){
              if (mapArr[i][j] === 100) {
                mapArr[i][j] =0
              }
            }
          }
          setMapArr([...mapArr]);
          setItemClicked(false);
          setSelectedItem(undefined);
        }
      } catch (e) {
        console.log(e);
      }
    }
    return (e: MouseEvent) => handler(e);
  }
}
export default Character;
