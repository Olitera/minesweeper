// import Cell from "./components/cell.js";
import Field from "./components/field.js";

const body = document.querySelector('body');

const character = document.createElement('div');
character.className = "character";

const timeText = document.createElement('p');
timeText.className = "time-text";
timeText.innerText = 'Game duration';
character.append(timeText);

const time = document.createElement('div');
time.className = "time";
character.append(time);

const moveText = document.createElement('p');
moveText.className = "move-text";
moveText.innerText = 'Number of clicks';
character.append(moveText);

const move = document.createElement('div');
move.className = "move";
character.append(move);

const restart = document.createElement('button');
restart.className = 'restart';
restart.innerText = 'New game';
character.append(restart);
restart.addEventListener('click', () => {field.game.innerHtml="";field.updateField();});

body.append(character);

const intervalID = setInterval(()=>{
  const currentTime = 1 +  +time.innerText;
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

const mineText = document.createElement('p');
mineText.className = "time-text";
mineText.innerText = 'Number of mines';
option.append(mineText);

const mine = document.createElement('div');
mine.className = "mine";
option.append(mine);

const flagText = document.createElement('p');
flagText.className = "time-text";
flagText.innerText = 'Number of flags';
option.append(flagText);

const flag = document.createElement('div');
flag.className = "flag-number";
option.append(flag);

const theme = 

body.append(option);

const field = new Field;
field.createField();





// console.log (`
// -design, responsive UI
// -the game should end when the player reveals all cells that do not contain mines (win) or clicks on mine (lose) and related message is displayed at the end of the game
// -sound accompaniment (on/off) 
// -option to choose different themes for the game board (dark/light themes)
// `)


