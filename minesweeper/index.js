import Cell from "./components/cell.js";

const body = document.querySelector('body');

const character = document.createElement('div');
character.className = "character";
body.append(character);
const timeText = document.createElement('p');
timeText.className = "time-text";
timeText.innerText = 'Time';
character.append(timeText);
const time = document.createElement('div');
time.className = "time";
character.append(time);
const moveText = document.createElement('p');
moveText.className = "move-text";
moveText.innerText = 'Number of clicks';
character.append(moveText);
const move = document.createElement('div');
move.className = "move";
character.append(move);

// const game = document.createElement('div');
// game.className = 'game';
// body.append(game);

const restart = document.createElement('button');
restart.className = 'restart';
restart.innerText = 'New game';
body.append(restart);
restart.addEventListener('click', );

const squareArray = Array.from(Array(10), () => Array.from({ length: 9 }, (_, index) => false).concat(Array.from({ length: 1 }, (_, index) => true)).sort(() => Math.random() - 0.5));

function createLine() {
  const square = document.createElement('div');
  square.className = 'line';
  game.append(square);
  return square;
}
// console.log(squareArray);

function minesweeper(matrix) {
  function checkEl(a, b) {
    let startI = a > 0 ? a - 1 : 0;
    let startJ = b > 0 ? b - 1 : 0;
    let finishI = a < matrix.length - 1 ? a + 1 : a;
    let finishJ = b < matrix[0].length - 1 ? b + 1 : b;
    let sum = 0;
    for (let i = startI; i <= finishI; i++) {
      for (let j = startJ; j <= finishJ; j++) {
        if (matrix[i][j] === true && (i !== a || j !== b)) {
          sum++;
        }
      }
    }
    return sum
  }
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push(new Array());
    for (let j = 0; j < matrix[i].length; j++) {
      arr[i].push(checkEl(i, j));
    }
  }
  // console.log(arr);
  return arr
}

const cellMatrix = minesweeper(squareArray).map((line, i) => {
  game.innerHtml = '';
  const lineElement = createLine();
  return line.map((el, j) => { 
    const cell = new Cell(lineElement, el, squareArray[i][j]);
    cell.createCell();
    return cell;
  });
})

// cellMatrix[5][5].cellElement.innerText = cellMatrix[5][5].value;
console.log(cellMatrix);
