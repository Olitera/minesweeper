console.log(` 105/110
Реализация burger menu на обеих страницах: +26
при ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка: +2
при нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов: +4
высота адаптивного меню занимает всю высоту экрана: +2
при повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно: +4
бургер-иконка создана при помощи html+css, без использования изображений: +2
ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню: +2
при клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно: +2
расположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая: +2
область, свободная от бургер-меню, затемняется: +2
страница под бургер-меню не прокручивается: +4
Реализация слайдера-карусели на странице Main: +34
при нажатии на стрелки происходит переход к новому блоку элементов: +4
смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется): +4
слайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек: +4
при переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана (3 для 1280px, 2 для 768px, 1 для 320px): +4
каждый новый слайд содержит псевдослучайный набор карточек животных, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:
в текущем блоке слайда карточки с питомцами не повторяются: +4
в следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде: +4
сохраняется только одно предыдущее состояние. Т.е. при последовательном переходе два раза влево, а потом два раза вправо, мы получим набор карточек, отличный от исходного: +4
при каждой перезагрузке страницы формируется новая последовательность карточек: +2
генерация наборов карточек происходит на основе 8 объектов с данными о животных: +2
при изменении ширины экрана (от 1280px до 320px и обратно), слайдер перестраивается и работает без перезагрузки страницы (набор карточек при этом может как изменяться, так и оставаться тем же, скрывая лишнюю или добавляя недостающую, и сохраняя при этом описанные для слайдера требования): +2, слайдер без перезагрузки страницы работает только на основных расширениях
Реализация пагинации на странице Pets: +34
при перезагрузке страницы всегда открывается первая страница пагинации: +2
при нажатии кнопок > или < открывается следующая или предыдущая страница пагинации соответственно: +2
при нажатии кнопок >> или << открывается последняя или первая страница пагинации соответственно: +2
при открытии первой страницы кнопки << и < неактивны: +2
при открытии последней страницы кнопки > и >> неактивны: +2
в кружке по центру указан номер текущей страницы. При переключении страниц номер меняется на актуальный: +2
каждая страница пагинации содержит псевдослучайный набор питомцев, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:
при загрузке страницы формируется массив из 48 объектов питомцев. Каждый из 8 питомцев должен встречаться ровно 6 раз: +4
при каждой перезагрузке страницы формируется новый массив со случайной последовательностью: +4
карточки питомцев не должны повторяться на одной странице: +4
при переключении страницы данные меняются (для >1280px меняется порядок карточек, для остальных - меняется набор и порядок карточек): +4
при неизменных размерах области пагинации, в том числе размерах окна браузера, и без перезагрузки страницы, возвращаясь на страницу под определенным номером, контент на ней всегда будет одинаков. Т.е. карточки питомцев будут в том же расположении, что и были до перехода на другие страницы: +2
общее количество страниц при ширине экрана 1280px - 6, при 768px - 8, при 320px - 16 страниц: +2
при изменении ширины экрана (от 1280px до 320px и обратно), пагинация перестраивается и работает без перезагрузки страницы (страница может оставаться той же или переключаться, при этом сформированный массив - общая последовательность карточек - не обновляется, сохраняются все остальные требования к пагинации): +2, массив обновляется, пагинация работает на основных расширениях
Реализация попап на обеих страницах: +12
попап появляется при нажатии на любое место карточки с описанием конкретного животного: +2
часть страницы вне попапа затемняется: +2
при открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным: +2
при нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается, при этом при нажатии на сам попап ничего не происходит: +2
кнопка с крестиком интерактивная: +2
окно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом: +2
`)

const body = document.querySelector('body');

// Work input and ancor
const helpInput = document.getElementById('help-shelter');

document.addEventListener('DOMContentLoaded', () => {
  if (!!location.href.match(/#help/)) {
    helpInput.checked = true;
  }
})


// option cards constructor in section help
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


// cards constructor from json in slider and modal constructor
const containerDiv = document.querySelectorAll('.cards-container');
const modal = document.querySelector('.pets-modal');
const modalInner = document.querySelector('.pets-modal-inner');
const modalClose = document.querySelector('.modal-close');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider-inner');
const cardsOuter = document.querySelsecond = document.querySelector('.cards-container-outer');
const first = document.querySelectorAll('.first');
const second = document.querySelector('.second');

// let sortArray;
let globalData;
let currentArray;
let prevArray;
let count = 1;
let columnGap = 90;
let currentPosition = 0;
let leftPosition = 0;
let slidesCount = 3;
let experimentalData = Array(8).fill(0).map((el, i) => i);
let isBackClicked = false;
let isNextClicked = false;
let currentScreenSize;

const cardInner = `<div class="card-foto"></div>
<h4 class="header-4"></h4>
<button class="button">Learn more</button>`;

fetch('../pets.json')
  .then(response => response.json())
  .then((data) => {
    globalData = data;
    checkArray(data);
    currentArray = createNextArray();
    const currentData = currentArray.map((el) => data[el]);

    containerDiv.forEach(el => {
      createCards(currentData, el);
    });

    leftPosition = -cardsOuter.clientWidth - columnGap;
    cardsOuter.style.left = `${(leftPosition)}px`;
  })

function createNextArray() {
  let arr = [];
  if (!!currentArray) {
    experimentalData.forEach(el => {
      if (!currentArray.includes(el)) {
        arr.push(el);
      }
    });
    arr.sort(() => Math.random() - 0.5);
  } else {
    arr = experimentalData.map(el => el).sort(() => Math.random() - 0.5);
  }
  arr.length = slidesCount;
  return arr;
}

// function cloneCard(container) {
//   const cloneItem = container.cloneNode(true);
//   cardsOuter.appendChild(cloneItem);
//   // const cloneItem2 = container.cloneNode(true);
//   // container.before(cloneItem2);
// }

function createCards(dataArray, parrent) {
  // console.log(parrent);
  // dataArray.forEach(el => console.log(el.name));
  parrent.innerHTML = '';

  for (let i = 0; i < dataArray.length; i++) {
    const cardElement = document.createElement('div');
    cardElement.className = `card`;
    cardElement.innerHTML = cardInner;
    const textElement = cardElement.querySelector('.header-4');
    textElement.innerHTML = dataArray[i].name;
    const fotoElement = cardElement.querySelector('.card-foto');
    fotoElement.style.backgroundImage = `url('${dataArray[i].img}')`;
    parrent.appendChild(cardElement);
    cardElement.addEventListener('click', () => openModal(dataArray[i]));
  }
}

function prevSlide() {
  if (!isNextClicked) {
    prevArray = currentArray;
    currentArray = createNextArray();
  } else {
    isNextClicked = false;
    let state = currentArray.map(el => el);
    currentArray = prevArray.map(el => el);
    prevArray = state;
  }

  isBackClicked = true;
  count--;
  const currentData = currentArray.map((el) => globalData[el]);
  const prevData = prevArray.map((el) => globalData[el]);

  if (count === 0) {
    first.forEach(el => {
      createCards(currentData, el);
    })
    createCards(prevData, second)
  }

  if (count === -1) {
    count = 1;
    leftPosition = -currentPosition - 2 * (cardsOuter.clientWidth + columnGap);
    cardsOuter.style.left = `${leftPosition}px`;
    first.forEach(el => {
      createCards(prevData, el);
    })
    createCards(currentData, second);
  }

  currentPosition = currentPosition + cardsOuter.clientWidth + columnGap;
  cardsOuter.style.translate = `${currentPosition}px`;
}

arrowLeft.addEventListener('click', prevSlide);

function nextSlide() {
  if (!isBackClicked) {
    prevArray = currentArray;
    currentArray = createNextArray();
  } else {
    let state = currentArray.map(el => el);
    currentArray = prevArray.map(el => el);
    prevArray = state;
    isBackClicked = false;
  }

  isNextClicked = true;
  count++;
  const currentData = currentArray.map((el) => globalData[el]);
  const prevData = prevArray.map((el) => globalData[el]);

  if (count === 2) {
    first.forEach(el => {
      createCards(currentData, el);
    })
    createCards(prevData, second)
  } else if (count === 3) {
    count = 1;
    leftPosition = -currentPosition;
    cardsOuter.style.left = `${leftPosition}px`;
    first.forEach(el => {
      createCards(prevData, el);
    })
    createCards(currentData, second)
  }

  currentPosition = currentPosition - cardsOuter.clientWidth - columnGap;
  cardsOuter.style.translate = `${currentPosition}px`;
}

arrowRight.addEventListener('click', nextSlide);





function openModal(modalData) {
  const image = document.querySelector('.modal-foto');
  const namePet = document.querySelector('.pet-name');
  const kind = document.querySelector('.kind');
  const breed = document.querySelector('.breed');
  const description = document.querySelector('.pet-description');
  const age = document.querySelector('.age');
  const inoculation = document.querySelector('.inoculations');
  const disease = document.querySelector('.diseases');
  const parasite = document.querySelector('.parasites');

  image.style.backgroundImage = `url('${modalData.img}')`;
  namePet.innerText = modalData.name;
  kind.innerText = modalData.type;
  breed.innerText = modalData.breed;
  description.innerText = modalData.description;
  age.innerText = modalData.age;
  inoculation.innerText = modalData.inoculations;
  disease.innerText = modalData.diseases;
  parasite.innerText = modalData.parasites;

  modal.style.transform = 'translate(-100vw)';
  body.style.overflow = "hidden";
}

function closeMod() {
  modal.style.transform = '';
  body.style.overflow = "";
}

modalClose.addEventListener('click', closeMod);

function closeModal(event) {
  if (event.target === modal) {
    modal.style.transform = '';
  }
  document.body.style.overflow = "";
}

modal.addEventListener('click', (event) => closeModal(event));



// burger menu
const menu = document.querySelector('.burger-menu-form');
const burger = document.querySelector('.burger');
let menuStatus = 'close';

function newMenu() {
  menu.style.transform = 'translate(-100vw)';
  burger.style.transform = 'rotate(90deg)';
  body.style.overflow = "hidden";
  menuStatus = 'open';
}

function closeMenu() {
  menu.style.transform = '';
  burger.style.transform = 'rotate(0deg)';
  body.style.overflow = "";
  menuStatus = 'close';
}

burger.addEventListener('click', () => {
  if (menuStatus === 'close') {
    newMenu()
  }
  else {
    closeMenu()
  }
});

menu.addEventListener('click', closeMenu);

function checkArray(data) {
 
  // console.log(data, window.innerWidth)
  if(window.innerWidth >= '1280') {
    // currentScreenSize = 'large';
    slidesCount = 3;
    columnGap = 90;
  } else if (window.innerWidth < '1280' && window.innerWidth >= '768') {
    // currentScreenSize = 'medium';
    slidesCount = 2;
    columnGap = 40;
  } else if (window.innerWidth < '767') {
    // currentScreenSize = 'small';
    slidesCount = 1;
    columnGap = 0;

  }
  // console.log(window.innerWidth >= '1279' && currentScreenSize !== 'large', globalArray, currentScreenSize)
  // return globalArray;
  currentArray = createNextArray();
    const currentData = currentArray.map((el) => data[el]);

    containerDiv.forEach(el => {
      createCards(currentData, el);
    });
  leftPosition = -cardsOuter.clientWidth - columnGap;
  cardsOuter.style.left = `${(leftPosition)}px`;
  cardsOuter.style.translate = '';
}

window.addEventListener('resize', ()=>{
  checkArray(globalData);
})





