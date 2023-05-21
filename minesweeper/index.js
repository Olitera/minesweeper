// import Cell from "./components/cell.js";
import Field from "./components/field.js";

const body = document.querySelector('body');

const character = document.createElement('div');
character.className = "character";


const timeContainer = document.createElement('div');
timeContainer.className = 'time-container';

const timeText = document.createElement('p');
timeText.className = "time-text";
timeText.innerText = 'Game duration';
timeContainer.append(timeText);

const time = document.createElement('div');
time.className = "time";
timeContainer.append(time);

character.append(timeContainer);


const moveContainer = document.createElement('div');
moveContainer.className = 'time-container';

const moveText = document.createElement('p');
moveText.className = "move-text";
moveText.innerText = 'Number of clicks';
moveContainer.append(moveText);

const move = document.createElement('div');
move.className = "move";
moveContainer.append(move);

character.append(moveContainer);

const restart = document.createElement('button');
restart.className = 'restart';
restart.innerText = 'New game';
character.append(restart);
restart.addEventListener('click', () => { field.game.innerHtml = ""; field.updateField(); });

body.append(character);

const intervalID = setInterval(() => {
  const currentTime = 1 + +time.innerText;
  time.innerText = `${currentTime}`;
}, 1000);
// restart.addEventListener('click', ()=>clearInterval(intervalID));

const remark = document.createElement('div');
remark.className = 'remark';
const remarkText = document.createElement('p');
remark.append(remarkText);
body.append(remark);

const option = document.createElement('div');
option.className = "character";

const sound = document.createElement('button');
sound.className = 'sound';
sound.innerText = 'Sound';
option.append(sound);

const mineContainer = document.createElement('div');
mineContainer.className = 'time-container';

const mineText = document.createElement('p');
mineText.className = "time-text";
mineText.innerText = 'Number of mines';
mineContainer.append(mineText);

const mine = document.createElement('div');
mine.className = "mine";
mineContainer.append(mine);

option.append(mineContainer);


const flagContainer = document.createElement('div');
flagContainer.className = 'time-container';

const flagText = document.createElement('p');
flagText.className = "time-text";
flagText.innerText = 'Number of flags';
flagContainer.append(flagText);

const flag = document.createElement('div');
flag.className = "flag-number";
flagContainer.append(flag);

option.append(flagContainer);


const theme = document.createElement('button');
theme.className = 'theme';
theme.innerText = 'Theme';
// theme.style.dataTheme = "dark";
const link = document.getElementById("theme-link");


theme.addEventListener('click', changeTheme);

function changeTheme() {
  let lightTheme = "light.css";
  let darkTheme = "dark.css";

  let currTheme = link.getAttribute("href");
  let theme = "";

  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark";
  }
  else {
    currTheme = lightTheme;
    theme = "light";
  }

  link.setAttribute("href", currTheme);
}

option.append(theme);

body.append(option);

const field = new Field;
field.createField();





// console.log (`
// -the game should end when the player reveals all cells that do not contain mines (win) or clicks on mine (lose) and related message is displayed at the end of the game
// -sound accompaniment (on/off) 
// -option to choose different themes for the game board (dark/light themes)
// -implemented saving the latest 10 results using LocalStorage: +10
// -implemented saving the state of the game: +10
// -implement ability to change the size (easy - 10x10, medium - 15x15, hard - 25x25) and number of mines for each size of the field (from 10 to 99): 
// `)


