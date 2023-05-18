import Cell from "./cell.js";


class Field {
  body = document.querySelector('body');
  game;
  fieldSize = 10;
  cellMatrix;
  

  createField() {
    this.game = document.createElement('div');
    this.game.className = 'game';
    this.body.append(this.game);
    this.updateField();
  }

  updateField(number) {
    this.game.innerText = '';
    this.updateFieldSize(number);
    this.cellMatrix = this.createMatrix(this.matrix);
  }



  updateFieldSize(number) {
    if(number) {
      this.fieldSize = number;  
    }
    this.createSquareArray();
  }

  createSquareArray() {
    this.matrix = Array.from(Array(this.fieldSize), () => Array.from({ length: 9 }, (_, index) => false).concat(Array.from({ length: 1 }, (_, index) => true)).sort(() => Math.random() - 0.5));
    return this.matrix;
  }

  createLine() {
    const square = document.createElement('div');
    square.className = 'line';
    this.game.append(square);
    return square;
  }

  createMatrix(array) {
    return array.map((line, i) => {
      // this.game.innerHtml = '';
      const lineElement = this.createLine();
      return line.map((el, j) => { 
        const cell = new Cell(lineElement, this.checkEl(i,j), el);
        cell.createCell();
        return cell;
      });
    })
  }

  checkEl(a, b) {
    let startI = a > 0 ? a - 1 : 0;
    let startJ = b > 0 ? b - 1 : 0;
    let finishI = a < this.matrix.length - 1 ? a + 1 : a;
    let finishJ = b < this.matrix[0].length - 1 ? b + 1 : b;
    let sum = 0;
    for (let i = startI; i <= finishI; i++) {
      for (let j = startJ; j <= finishJ; j++) {
        if (this.matrix[i][j] === true && (i !== a || j !== b)) {
          sum++;
        }
      }
    }
    return sum
  } 
}

export default Field;


