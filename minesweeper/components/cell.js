// import Field from "./field.js";
class Cell {
  // isOpen = false;
  // isFlag = false;
  constructor(lineElement, value, isBomb, isOpen, isFlag) {
    this.lineElement = lineElement;
    this.value = value;
    this.isBomb = isBomb;
    this.isOpen = isOpen ?? false;
    this.isFlag = isFlag ?? false;
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