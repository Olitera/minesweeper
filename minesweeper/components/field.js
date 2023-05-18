import Cell from "./cell.js";
function onClick(cell){
cell.cellElement.innerText = cell.value;
      cell.cellElement.classList.add('open');



      switch (cell.value) {
        case 0:
          cell.cellElement.innerText = '';
          break;
        case 1:
          cell.cellElement.classList.add('blue');
          break;
        case 2:
          cell.cellElement.classList.add('green');
          break;
        case 3:
          cell.cellElement.classList.add('red');
          break;
      }

      if (cell.isBomb) {
        cell.cellElement.innerText = '';
        cell.cellElement.style.backgroundImage = `url('./assets/bomb.svg')`;
        alert('Game over. Try again');
      }
    }
class Field {
  clickCount = 0;
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
    this.clickCount = 0;
    document.querySelector('.move').innerText = this.clickCount;
    this.game.innerText = '';
    this.updateFieldSize(number);
    this.cellMatrix = this.createMatrix(this.matrix);
    this.game.addEventListener('click', (event) => this.onFieldClick(event)
    // {
    //   console.log(event.target);
    //   this.cellMatrix.forEach((el,i) => {
    //     el.forEach((e,j)=>{ 
          
    //       if(e.cellElement === event.target) {
    //         onClick(e);
    //         if(!e.isOpen){
    //           this.clickCount = this.clickCount + 1;
    //         }
    //         e.isOpen = true;
    //         console.log(this.clickCount);
    //         document.querySelector('.move').innerText = this.clickCount;
    //       }
    //     })
    //   });
    // }
    )
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


  onFieldClick(event){
    
    console.log(event.target);
      this.cellMatrix.forEach((el,i) => {
        el.forEach((e,j)=>{ 
          
          if(e.cellElement === event.target) {
            if(e.isBomb && this.clickCount === 0) {
              console.log('BOMB!!!')
              this.game.removeEventListener('click', (event) => this.onFieldClick(event));
              this.updateField();
          
            } else {
              onClick(e);
              if(!e.isOpen){
                this.clickCount = this.clickCount + 1;
              }
              e.isOpen = true;
              console.log(this.clickCount);
              document.querySelector('.move').innerText = this.clickCount;
            }

            
            
          }
        })
      });
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


