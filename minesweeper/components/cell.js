// import Field from "./field.js";
class Cell {
  isOpen = false;
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
    let count = 0;
    // this.cellElement.addEventListener('click', () => {
    //   this.cellElement.innerText = this.value;
    //   this.cellElement.classList.add('open');

    //   count++

    //   switch (this.value) {
    //     case 0:
    //       this.cellElement.innerText = '';
    //       break;
    //     case 1:
    //       this.cellElement.classList.add('blue');
    //       break;
    //     case 2:
    //       this.cellElement.classList.add('green');
    //       break;
    //     case 3:
    //       this.cellElement.classList.add('red');
    //       break;
    //   }

    //   if (this.isBomb) {
    //     this.cellElement.innerText = '';
    //     this.cellElement.style.backgroundImage = `url('./assets/bomb.svg')`;
    //     alert('Game over. Try again');
    //   }
    // })

    console.log(count);
    

    this.cellElement.addEventListener('mousedown', (event)=> {
      event.preventDefault();
      if(event.button == 2) {
        console.log(event.button, this.cellElement);
        this.cellElement.classList.toggle('flag');
      }
    })
    

  }
}

export default Cell;