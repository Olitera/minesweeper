import Cell from './cell.js';

function onClick(cell) {
  const remark = document.querySelector('.remark');
  const remarkText = document.querySelector('.remark p');
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
    cell.cellElement.style.backgroundImage = `url('./assets/mine.svg')`;
    cell.cellElement.style.backgroundColor = 'red';
    remarkText.innerText = 'Game over. Try again';
    remarkText.style.color = 'red';
    remark.style.display = 'flex';
  }
}
class Field {
  body = document.querySelector('body');
  sound = document.querySelector('.sound');
  move = document.querySelector('.move');
  time = document.querySelector('.time');
  mine = document.querySelector('.mine');
  size = document.querySelector('.size');
  remark = document.querySelector('.remark');
  remarkText = document.querySelector('.remark p');
  mineVaryation = document.querySelector('.mine-var');
  flagNumber = document.querySelector('.flag-number');
  game;
  fieldSize = 10;
  cellMatrix;
  clickCount = 0;
  gameTime = 0;
  minesCount = 10;
  flagCount = 0;
  timeout;
  audioClick = new Audio('./assets/click.mp3');
  audioEnd = new Audio('./assets/gameOver.mp3');
  audioWin = new Audio('./assets/win.mp3');

  createField() {
    this.game = document.createElement('div');
    this.game.className = 'game';
    this.body.append(this.game);
    this.updateField();
  }

  updateField(number) {
    this.clickCount = 0;
    this.move.innerText = this.clickCount;
    this.gameTime = 0;
    this.time.innerText = this.gameTime;
    // this.minesCount = 10;
    this.mine.innerText = this.minesCount;
    this.flagCount = 0;
    this.flagNumber.innerText = this.flagCount;

    this.game.innerText = '';
    this.game.removeEventListener('click', this.onFieldClick);
    this.game.removeEventListener('contextmenu', this.onFieldClick);
    this.size.removeEventListener('change', (e) => this.updateField(+this.size.value));
    this.mineVaryation.removeEventListener('change', () => {
      this.minesCount = this.mineVaryation.value
      this.mine.innerText = this.minesCount - this.flagCount;
    });
    this.updateFieldSize(number);
    this.cellMatrix = this.createMatrix(this.matrix);
    this.game.addEventListener('click', this.onFieldClick);
    this.game.addEventListener('contextmenu', this.onFieldClick);
    this.size.addEventListener('change', (e) => this.updateField(+this.size.value));
    this.mineVaryation.addEventListener('change', () => {
      this.minesCount = this.mineVaryation.value
      this.mine.innerText = this.minesCount - this.flagCount;
    });



    localStorage.setItem('matrix', JSON.stringify(this.cellMatrix));
  }

  updateFieldSize(number) {
    if (number) {
      this.fieldSize = number;
    }
    this.createSquareArray();
  }

  createSquareArray() {
    // this.matrix = Array.from(Array(this.fieldSize), () => Array.from({ length: this.fieldSize - 1}, (_, index) => false).concat(Array.from({ length: 1 }, (_, index) => true)).sort(() => Math.random() - 0.5));
    const arr = Array(+this.mineVaryation.value).fill(true).concat(Array(this.fieldSize ** 2 - +this.mineVaryation.value).fill(false)).sort(() => Math.random() - 0.5);
    this.matrix = [[]];
    let st = 0;
    arr.forEach((el, i) => {
      if (i % this.fieldSize === 0 && i !== 0) {
        this.matrix.push([]);
        st++;
      }
      this.matrix[st].push(el);
    })
    console.log(this.matrix);
    return this.matrix;
  }


  onFieldClick = (event) => {
    this.cellMatrix.forEach((el, i) => {
      el.forEach((e, j) => {
        if (e.cellElement === event.target) {
          event.preventDefault();
          if (event.button == 2 && !e.isOpen) {
            e.cellElement.classList.toggle('flag');
            e.isFlag = !e.isFlag;
            if (!e.isFlag) {
              this.flagCount--;
            } else {
              this.flagCount++;
            }
            this.flagNumber.innerText = this.flagCount;
            this.mine.innerText = this.minesCount - this.flagCount > 0 ? this.minesCount - this.flagCount : 0;
          } else if (event.button == 0 && event.type === 'click' && !e.isFlag) {
            this.clickFunction(i, j);
            if (e.isBomb) {
              this.showBombs();
            }
            for (let i = 0; i < 9000; i++) {
              this.openFreeCells();
            }
          }
        }
      })
    });
  }

  openFreeCell(e) {
    if (!e.isOpen && !e.isFlag && !e.isBomb) {
      onClick(e);
      e.isOpen = true;
    }
  }

  openFreeCells() {
    this.cellMatrix.forEach((el, i) => {
      el.forEach((e, j) => {
        if (e.isOpen && e.value === 0 && !e.isBomb) {
          this.checkFree(i, j);
        }
      })
    });

  }

  showBombs() {
    if (this.clickCount > 1) {
      this.cellMatrix.forEach((el, i) => {
        el.forEach((e, j) => {
          if (e.isBomb) {
            e.cellElement.style.backgroundImage = `url('./assets/bomb.svg')`
          }
          if (e.isFlag && !e.isBomb) {
            e.cellElement.style.backgroundColor = 'red';
          }
        })
      })
    }
  }


  clickFunction(i, j) {
    const e = this.cellMatrix[i][j];
    if (e.isBomb && this.clickCount === 0) {
      console.log('first BOMB!!!')
      this.updateField();
      this.clickFunction(i, j);
    } else {
      onClick(e);
      if (!e.isOpen) {
        this.clickCount = this.clickCount + 1;
        if (!e.isBomb) {
          this.audioClick.play();
        } else {
          this.audioEnd.play();
        }
        this.sound.addEventListener('click', () => {
          this.audioClick.volume = this.audioClick.volume > 0 ? 0 : 1;
          this.audioEnd.volume = this.audioEnd.volume > 0 ? 0 : 1;
          this.audioWin.volume = this.audioWin.volume > 0 ? 0 : 1;
        })
      }
      e.isOpen = true;
      this.move.innerText = this.clickCount;
      if (this.cellMatrix.flat().filter((el) => !el.isBomb && el.isOpen).length === this.fieldSize ** 2 - this.minesCount) {
        this.remarkText.innerText = 'Try again';
        this.remarkText.style.color = 'black';
        this.remark.style.display = 'flex';
        this.audioWin.play();
        this.game.removeEventListener('click', this.onFieldClick);
        this.game.removeEventListener('contextmenu', this.onFieldClick);
        this.size.removeEventListener('change', (e) => this.updateField(+this.size.value));
        this.mineVaryation.removeEventListener('change', () => {
          this.minesCount = this.mineVaryation.value
          this.mine.innerText = this.minesCount - this.flagCount;
        });
      }
    }
  }

  createLine() {
    const square = document.createElement('div');
    square.className = 'line';
    this.game.append(square);
    return square;
  }

  createMatrix(array) {
    return array.map((line, i) => {
      const lineElement = this.createLine();
      return line.map((el, j) => {
        const cell = new Cell(lineElement, this.checkEl(i, j), el);
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

  checkFree(a, b) {
    let startI = a > 0 ? a - 1 : 0;
    let startJ = b > 0 ? b - 1 : 0;
    let finishI = a < this.matrix.length - 1 ? a + 1 : a;
    let finishJ = b < this.matrix[0].length - 1 ? b + 1 : b;
    for (let i = startI; i <= finishI; i++) {
      for (let j = startJ; j <= finishJ; j++) {
        this.openFreeCell(this.cellMatrix[i][j]);
      }
    }
  }

}

export default Field;


