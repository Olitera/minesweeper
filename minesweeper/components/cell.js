// import Field from "./field.js";
class Cell {
  isOpen = false;
  isFlag = false;
  constructor(lineElement, value, isBomb) {
    this.lineElement = lineElement;
    this.value = value;
    this.isBomb = isBomb;
  }

  cellElement;

  createCell() {
    const squareInner = document.createElement('div');
    squareInner.className = 'square';
    this.lineElement.append(squareInner);
    this.cellElement = squareInner;
  }
  
}

export default Cell;