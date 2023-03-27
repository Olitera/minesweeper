console.log(`Score 100/100
Страница Main (60)
Проверка верстки +7
верстка страницы валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ . +4
Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью. Если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований
логотип в хедере состоит из текстовых элементов +1
страница содержит ровно один элемент <h1> +1
добавлен favicon +1
Вёрстка соответствует макету +35
блок <header> +5
блок Not only +5
блок About +5
блок Our Friends +5
блок Help +5
блок In addition +5
блок <footer> +5
Требования к css +6
для позиционирования элементов блока Help использована сеточная верстка (flexbox или grid) +2
при уменьшении масштаба страницы браузера или увеличении ширины страницы (>1280px) вёрстка размещается по центру, а не сдвигается в сторону и не растягивается по всей ширине +2
фоновый цвет тянется на всю ширину страницы +2
Интерактивность элементов +12
элемент About the Shelter в навигации подсвечен и неинтерактивен, остальные элементы навигации интерактивны +2
каждая карточка питомцем в блоке Our Friends интерактивна при наведении на любую область этой карточки +2
плавная прокрутка по якорям +2
выполняются все ссылочные связи согласно Перечню ссылочных связей для страницы Main +2
выполнена интерактивность ссылок и кнопок. Интерактивность заключается не только в изменении внешнего вида курсора, например, при помощи свойства cursor: pointer, но и в использовании и других визуальных эффектов, например, изменение цвета фона или цвета шрифта, согласно стайлгайду в макете. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +2
обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике, не влияющее на соседние элементы +2

Страница Pets (40)
Проверка верстки +7
верстка страницы валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ . +4
Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью. Если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований
логотип в хедере состоит из текстовых элементов +1
страница содержит ровно один элемент <h1> +1
добавлен favicon +1
Вёрстка соответствует макету +15
блок <header> +5
блок Our Friends +5
блок <footer> +5
Требования к css +4
при уменьшении масштаба страницы браузера или увеличении ширины страницы (>1280px) вёрстка размещается по центру, а не сдвигается в сторону и не растягивается по всей ширине +2
фоновый цвет тянется на всю ширину страницы +2
Интерактивность элементов +14
элемент Our pets в навигации подсвечен и неинтерактивен, остальные элементы навигации интерактивны +2
доступные кнопки пагинации (вправо) активны, недоступные (влево) - неактивны (disabled) +2
каждая карточка с питомцем в блоке Our Friends интерактивна при наведении на любую область этой карточки +2
плавная прокрутка по якорям +2
выполняются все ссылочные связи согласно Перечню ссылочных связей для страницы Pets +2
выполнена интерактивность ссылок и кнопок. Интерактивность заключается не только в изменении внешнего вида курсора, например, при помощи свойства cursor: pointer, но и в использовании и других визуальных эффектов, например, изменение цвета фона или цвета шрифта, согласно стайлгайду в макете. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +2
обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике, не влияющее на соседние элементы +2`)

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
