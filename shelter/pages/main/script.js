console.log(`Score 100/100
Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14
блок <header>: +2
блок Not only: +2
блок About: +2
блок Our Friends: +2
блок Help: +2
блок In addition: +2
блок <footer>: +2
Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14
блок <header>: +2
блок Not only: +2
блок About: +2
блок Our Friends: +2
блок Help: +2
блок In addition: +2
блок <footer>: +2
Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14
блок <header>: +2
блок Not only: +2
блок About: +2
блок Our Friends: +2
блок Help: +2
блок In addition: +2
блок <footer>: +2
Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6
блок <header>: +2
блок Our Friends: +2
блок <footer>: +2
Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6
блок <header>: +2
блок Our Friends: +2
блок <footer>: +2
Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6
блок <header>: +2
блок Our Friends: +2
блок <footer>: +2
Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20
нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5
нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5
нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх: +5
нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх: +5
Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8
на странице Main: +4
на странице Pets: +4
При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4
Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется
Верстка обеих страниц валидная: +8
`)

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
