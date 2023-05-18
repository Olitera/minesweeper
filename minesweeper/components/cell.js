class Cell {
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
    this.cellElement.addEventListener('click', () => {
      this.cellElement.innerText = this.value;
      this.cellElement.classList.add('open');
      console.log(this.value);

      switch (this.value) {
        case 0:
          this.cellElement.innerText = '';
          break;
        case 1:
          this.cellElement.classList.add('blue');
          break;
        case 2:
          this.cellElement.classList.add('green');
          break;
      }

      if (this.isBomb) {
        alert('Game over. Try again');
      }
    });
  }
}

export default Cell;