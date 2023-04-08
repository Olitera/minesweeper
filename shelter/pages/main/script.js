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
  if (!!location.href.match(/#help/)) {
    helpInput.checked = true;
  }
})


const menu = document.querySelector('.burger-menu-form');
const burger = document.querySelector('.burger');

function newMenu() {
  menu.style.transform = 'translate(0vw)';
  burger.style.transform = 'rotate(90deg)';
}

burger.addEventListener('click', newMenu);

function closeMenu() {

  menu.style.transform = '';
  burger.style.transform = 'rotate(0deg)';
}

menu.addEventListener('click', closeMenu);

const card = document.querySelector('.card');
const modal = document.querySelector('.pets-modal');
const modalClose = document.querySelector('.modal-close');

function openModal() {
  modal.style.transform = 'translate(0vw)';
}

card.addEventListener('click', openModal);

function closeMod() {
  modal.style.transform = '';
}

modalClose.addEventListener('click', closeMod);

function closeModal(event) {
  if (event.target === modal) {
    modal.style.transform = '';
  }
}

modal.addEventListener('click', (event) => closeModal(event));

