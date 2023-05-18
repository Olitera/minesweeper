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
    this.game.innerHtml = '';
    this.updateFieldSize(number);
    // this.createSquareArray();
    // this.createLine();
    // console.log(this.createMinesweeper(this.createSquareArray()));
    this.cellMatrix = this.createMatrix(this.createSquareArray());
  }



  updateFieldSize(number) {
    if(number) {
      this.fieldSize = number;  
    }
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
      console.log(array, line)
      const lineElement = this.createLine();
      return line.map((el, j) => { 
        console.log(i,j, array, this.checkEl(i,j));
        const cell = new Cell(lineElement, this.checkEl(i,j), el);
        console.log(cell)
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

  // createMinesweeper(matrix) {
  //   function checkEl(a, b) {
  //     let startI = a > 0 ? a - 1 : 0;
  //     let startJ = b > 0 ? b - 1 : 0;
  //     let finishI = a < matrix.length - 1 ? a + 1 : a;
  //     let finishJ = b < matrix[0].length - 1 ? b + 1 : b;
  //     let sum = 0;
  //     for (let i = startI; i <= finishI; i++) {
  //       for (let j = startJ; j <= finishJ; j++) {
  //         if (matrix[i][j] === true && (i !== a || j !== b)) {
  //           sum++;
  //         }
  //       }
  //     }
  //     return sum
  //   }
    
  //   return this.createMatrix(matrix); 
  //   // let arr = [];
  //   // for (let i = 0; i < matrix.length; i++) {
  //   //   arr.push(new Array());
  //   //   for (let j = 0; j < matrix[i].length; j++) {
  //   //     arr[i].push(checkEl(i, j));
  //   //   }
  //   // }
  //   // console.log(arr);
  //   // return arr
  // }
}

export default Field;


