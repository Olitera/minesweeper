const optionDiv = document.querySelector('.option');
const cardsTextArray = ['Pet food', 'Transportation', 'Toys', 'Bowls and cups', 'Shampoos', 'Vitamins', 'Medicines', 'Collars / leashes', 'Sleeping areas'];

const cardInner = `<div class="option-card-foto"></div>
<h4 class="header-4">Pet food</h4>`;

for (let i = 0; i < cardsTextArray.length; i++) {
  const divElement = document.createElement('div');

  divElement.className = `option-card option-card-${i + 1}`;
  divElement.innerHTML = cardInner;
  const textElement = divElement.querySelector('.header-4');
  textElement.innerHTML = cardsTextArray[i];
  optionDiv.append(divElement);
}
