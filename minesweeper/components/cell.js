class Cell {
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