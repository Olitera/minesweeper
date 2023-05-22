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
    case 4:
      cell.cellElement.classList.add('purple');
      break;
    case 5:
      cell.cellElement.classList.add('yellow');
      break;
    case 6:
      cell.cellElement.classList.add('pink');
      break;
    case 7:
      cell.cellElement.classList.add('orange');
      break;
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
  fieldContainer = document.querySelector('.field-container');
  buttonContainer = document.querySelector('.button-container');
  game;
  fieldSize = 10;
  cellMatrix;
  clickCount = 0;
  gameTime = 0;
  minesCount = 10;
  flagCount = 0;
  timer;
  currentTime;
  audioClick = new Audio('./assets/click.mp3');
  audioEnd = new Audio('./assets/gameOver.mp3');
  audioWin = new Audio('./assets/win.mp3');
  

  createField(buttoncontainer) {
    const option = document.querySelector('.option'); 
    this.game = document.createElement('div');
    this.game.className = 'game';
    this.fieldContainer.append(this.game);
    this.fieldContainer.append(buttoncontainer);
    this.updateField();
    this.fillTable(this.getDataFromLS());
  }

  updateField(number, matrix) {
    this.stopTimer();
    this.remark.style.display = 'none';
    this.clickCount = 0;
    this.move.innerText = this.clickCount;
    this.gameTime = 0;
    this.time.innerText = this.gameTime;
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
    if(matrix){
      this.cellMatrix = this.reloadMatrix(matrix);
    } else {
      this.cellMatrix = this.createMatrix(this.matrix);
    }
    this.game.addEventListener('click', this.onFieldClick);
    this.game.addEventListener('contextmenu', this.onFieldClick);
    this.size.addEventListener('change', (e) => this.updateField(+this.size.value));
    this.mineVaryation.addEventListener('change', () => {
      if (this.mineVaryation.value < 10) {
        this.mineVaryation.value = 10;
      } else if (this.mineVaryation.value > 99) {
        this.mineVaryation.value = 99;
      }
      this.minesCount = this.mineVaryation.value;
      this.mine.innerText = this.minesCount - this.flagCount;
      this.updateField();
    });
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
    return this.matrix;
  }


  onFieldClick = (event) => {
    if (this.clickCount === 0) {
      this.startTimer();
    }
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
            this.gameTime = reset();
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
    localStorage.setItem('matrix', JSON.stringify(this.cellMatrix));
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
            e.cellElement.style.backgroundColor = '#e49191';
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
      // IF LOOSE
      if (e.isBomb) {
        e.cellElement.innerText = '';
        e.cellElement.style.backgroundImage = `url('./assets/mine.svg')`;
        e.cellElement.style.backgroundColor = 'red';
        this.remarkText.innerText = 'Game over. Try again';
        this.remarkText.style.color = 'red';
        this.remark.style.display = 'flex';
        this.stopTimer();
        this.game.removeEventListener('click', this.onFieldClick);
        this.game.removeEventListener('contextmenu', this.onFieldClick);
        this.size.removeEventListener('change', (e) => this.updateField(+this.size.value));
        this.mineVaryation.removeEventListener('change', () => {
          this.minesCount = this.mineVaryation.value
          this.mine.innerText = this.minesCount - this.flagCount;
        });
      }

      //IF WIN
      if (this.cellMatrix.flat().filter((el) => !el.isBomb && el.isOpen).length === this.fieldSize ** 2 - this.minesCount) {
        console.log(this.time, this.time.innerText)
        this.remarkText.innerText = `Hooray! You found all mines in ${this.gameTime} seconds and ${this.clickCount} moves!`;
        this.remarkText.style.color = 'black';
        this.remark.style.display = 'flex';
        this.audioWin.play();
        this.saveResult(this.gameTime, this.clickCount, this.fieldSize, this.minesCount);
        this.stopTimer();
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

  reloadMatrix(array) {
    return array.map((line, i) => {
      const lineElement = this.createLine();
      return line.map((el, j) => {
        const cell = new Cell(lineElement, el.value, el.isBomb, el.isOpen, el.isFlag);
        cell.createCell();
        if(cell.isOpen) {
          onClick(cell);
        }
        if(cell.isFlag) {
          cell.cellElement.classList.add('flag');
        }
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

  startTimer() {
    this.timer = setInterval(() => {
      this.gameTime = 1 + +this.time.innerText;
      this.time.innerText = `${this.gameTime}`;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  getDataFromLS() {
    const dataFromLS = JSON.parse(localStorage.getItem('saves'));
    return dataFromLS ?? [];
  }

  saveResult(t, c, s, m) {
    let arr =[t,c,s,m];
    const massiv = this.getDataFromLS();
    massiv.push(arr);
    if (massiv.length > 10) {
      massiv.shift();
    }
    localStorage.setItem('saves', JSON.stringify(massiv));
    this.fillTable(massiv);
  }

  fillTable(data) {
    const lines = document.querySelectorAll('.table-line');
    if(data && data[0] && data[0].length > 0) {
      data.forEach((el,j)=> {
        el.forEach((element, i)=>{
          lines[j].children[i].innerText = element;
        })
      })
  }
  }
}

function reset() {
  const time = document.querySelector('.time');
  return time.innerText;
}

export default Field;


