console.log(``)

const containerDiv = document.querySelector('.slider-inner');
const helpInput = document.getElementById('help-shelter');
const cardTextArray = ['Katrine', 'Jennifer', 'Woody'];

const cardInner = `<div class="card-foto"></div>
<h4 class="header-4">Katrine</h4>
<button class="button">Learn more</button>`;

for (let i = 0; i < cardTextArray.length; i++) {
  const divElement = document.createElement('div');

  divElement.className = `card card-${i + 1}`;
  divElement.innerHTML = cardInner;
  const textElement = divElement.querySelector('.header-4');
  textElement.innerHTML = cardTextArray[i];
  containerDiv.append(divElement);
}


const optionDiv = document.querySelector('.option');
const optionCardTextArray = ['Pet food', 'Transportation', 'Toys', 'Bowls and cups', 'Shampoos', 'Vitamins', 'Medicines', 'Collars / leashes', 'Sleeping areas'];

const optionCardInner = `<div class="option-card-foto"></div>
<h4 class="header-4">Pet food</h4>`;

for (let i = 0; i < optionCardTextArray.length; i++) {
  const optionCard = document.createElement('div');

  optionCard.className = `option-card option-card-${i + 1}`;
  optionCard.innerHTML = optionCardInner;
  const optionTextElement = optionCard.querySelector('.header-4');
  optionTextElement.innerHTML = optionCardTextArray[i];
  optionDiv.append(optionCard);
}

document.addEventListener('DOMContentLoaded', () => {
  if(!!location.href.match(/#help/)) {
    helpInput.checked = true;
  }
})


const menu = document.querySelector('.burger-menu');
const burger = document.querySelector('.burger');

function newMenu() {
  menu.style.transform = 'translateX(0px)';
}

burger.addEventListener('click', newMenu);

function closeMenu() {
  menu.style.transform = '';
}

menu.addEventListener('click', closeMenu);

// function newLog() {
//   login.style.transform = 'translate(-100vw)';
// }

// logBut.addEventListener('click', newLog);
// account.addEventListener('click', newLog);

// function closeLog(event) {
//   if (event.target === login) {
//     login.style.transform = '';
//   }
// }

// login.addEventListener('click', (event) => closeLog(event));


