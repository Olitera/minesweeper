// import Cell from "./components/cell.js";
import Field from "./components/field.js";

const body = document.querySelector('body');

const character = document.createElement('div');
character.className = "character";

const mineContainer = document.createElement('div');
mineContainer.className = 'time-container';

const mineText = document.createElement('p');
mineText.className = "time-text";
mineText.innerText = 'Number of mines';
mineContainer.append(mineText);

const mine = document.createElement('div');
mine.className = "mine";
mineContainer.append(mine);

character.append(mineContainer);


const flagContainer = document.createElement('div');
flagContainer.className = 'time-container';

const flagText = document.createElement('p');
flagText.className = "time-text";
flagText.innerText = 'Number of flags';
flagContainer.append(flagText);

const flag = document.createElement('div');
flag.className = "flag-number";
flagContainer.append(flag);

character.append(flagContainer);



const size = document.createElement('select');
size.className = 'size';
size.innerText = 'Size';

const sSmall = document.createElement('option');
sSmall.value = 10;
sSmall.innerText = 'easy';
const sMedium = document.createElement('option');
sMedium.value = 15;
sMedium.innerText = 'medium';
const sBig = document.createElement('option');
sBig.value = 25;
sBig.innerText = 'hard';
size.append(sSmall);
size.append(sMedium);
size.append(sBig);
character.append(size);

const mineVaryation = document.createElement('input');
mineVaryation.className = 'mine-var';
mineVaryation.type = 'number';
mineVaryation.min = '10';
mineVaryation.max = '99';
mineVaryation.value = '10';
character.append(mineVaryation);

body.append(character);

// const intervalID = setInterval(() => {
//   const currentTime = 1 + +time.innerText;
//   time.innerText = `${currentTime}`;
// }, 1000);
// restart.addEventListener('click', ()=>clearInterval(intervalID));

const remark = document.createElement('div');
remark.className = 'remark';
const remarkText = document.createElement('p');
remark.append(remarkText);
body.append(remark);

const option = document.createElement('div');
option.className = "option";

const sound = document.createElement('button');
sound.className = 'sound';
sound.innerText = 'Sound';
option.append(sound);

const timeContainer = document.createElement('div');
timeContainer.className = 'time-container';

const timeText = document.createElement('p');
timeText.className = "time-text";
timeText.innerText = 'Game duration';
timeContainer.append(timeText);

const time = document.createElement('div');
time.className = "time";
timeContainer.append(time);

option.append(timeContainer);


const moveContainer = document.createElement('div');
moveContainer.className = 'time-container';

const moveText = document.createElement('p');
moveText.className = "move-text";
moveText.innerText = 'Number of clicks';
moveContainer.append(moveText);

const move = document.createElement('div');
move.className = "move";
moveContainer.append(move);

option.append(moveContainer);




const theme = document.createElement('button');
theme.className = 'theme';
theme.innerText = 'Theme';
const link = document.getElementById("theme-link");


theme.addEventListener('click', changeTheme);

function changeTheme() {
  const lightTheme = "light.css";
  const darkTheme = "dark.css";
  let currTheme = link.getAttribute("href");
  // let theme = '';

  if (currTheme === lightTheme) {
    currTheme = darkTheme;
    // theme = "dark";
  }
  else {
    currTheme = lightTheme;
    // theme = "light";
  }
  link.setAttribute("href", currTheme);
}

option.append(theme);
body.append(option);

const result = document.createElement('button');
result.className = 'result';
result.innerText = 'Result';
body.append(result);

function viewResult() {
  table.classList.toggle('flex');
}

result.addEventListener('click', viewResult);

const table = document.createElement('div');
table.className = 'table';
const tableHeader = document.createElement('div');
tableHeader.className = 'table-header';
const headerTitles = ['duration', 'clicks', 'size', 'mines'];
for (let i = 0; i < 4; i++) {
  const headerCell = document.createElement('div');
  headerCell.className = 'header-cell';
  headerCell.innerText = headerTitles[i]
  tableHeader.append(headerCell);
}
table.append(tableHeader);
// console.log(table);
const tableBody = document.createElement('div');
tableBody.className = 'table-body';
for (let i = 0; i < 10; i++) {
const tableLine = document.createElement('div');
tableLine.className = 'table-line';
tableBody.append(tableLine);
for (let i = 0; i < 4; i++) {
  const tableCell = document.createElement('div');
  tableCell.className = 'table-cell';
  tableLine.append(tableCell);
}  
}
table.append(tableBody);
console.log(table);

body.append(table);

const buttonCont = document.createElement('div');
buttonCont.className = 'button-container';

const restart = document.createElement('button');
restart.className = 'restart';
restart.innerText = 'New game';
buttonCont.append(restart);
restart.addEventListener('click', () => { 
  field.game.innerHtml = ""; field.updateField(); 
  buttonCont.style.display = 'none';
});


const contin = document.createElement('button');
contin.className = 'continue';
contin.innerText = 'Continue game';
buttonCont.append(contin);
contin.addEventListener('click', () => {
  const a=JSON.parse(localStorage.getItem('matrix'));
  console.log(a);
  field.updateField(null, a)
  buttonCont.style.display = 'none';
})

// buttonCont.append(table);



const fieldContainer = document.createElement('div');
fieldContainer.className = 'field-container';
option.before(fieldContainer);

const field = new Field;
field.createField(buttonCont);
// fieldContainer.append(buttonCont);

console.log (`
  Score: 170/180
+ layout, design, responsive UI: +10
+ at the beginning state of the game, the frame has size 10x10 and is filled with unopened cells. Should be 10 mines on field by default: +10
+ when user click on cells - it should be opened and marked as one of the following state: empty cell, cell with number, or cell with mine: +10
+ the game should end when the player reveals all cells that do not contain mines (win) or clicks on mine (lose) and related message is displayed at the end of the game: +10
+ mines are placed after the first move, so that user cannot lose on the first move. +20
+ user can mark “mined” cells using flags so as not to accidentally open them displaying the number of mines remaining and displaying number of used flags: +10
+ the game should use color coding (using numbers and colors) to indicate the number of mines surrounding a revealed cell: +10
+ the game can be restarted without reloading the page: +10
+ game duration and number of clicks are displayed: +15
+ when user opens a square that does not touch any mines, it will be empty and the adjacent squares will automatically open in all directions until reaching squares that contain numbers: +15
+ sound accompaniment (on/off) when clicking on cell and at the end of the game: +10
+ implement ability to change the size (easy - 10x10, medium - 15x15, hard - 25x25) and number of mines for each size of the field (from 10 to 99): +20
+ implemented saving the latest 10 results using LocalStorage: +10
- implemented saving the state of the game: 0
+ option to choose different themes for the game board (dark/light themes): +10
`)


