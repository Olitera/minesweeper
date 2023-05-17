class Cell {
  constructor(lineElement, value, isBomb) {
    this.lineElement = lineElement;
    this.value = value;
    this.isBomb =isBomb;
  }

  cellElement;

  createCell() {
    const squareInner = document.createElement('div');
    squareInner.className = 'square';
    this.lineElement.append(squareInner);
    this.cellElement = squareInner;
    this.cellElement.addEventListener('click',() => {
      
      this.cellElement.innerText = this.value;
      if(this.isBomb) {
        alert('bomb!');
      }
    });
  }
}

export default Cell;