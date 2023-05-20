// import Cell from "./components/cell.js";
import Field from "./components/field.js";

const body = document.querySelector('body');

const character = document.createElement('div');
character.className = "character";
body.append(character);
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

const field = new Field;
field.createField();

const intervalID = setInterval(()=>{
  const currentTime = 1 +  +time.innerText;
  time.innerText = `${currentTime}`;
}, 1000);

window.addEventListener('click', ()=>clearInterval(intervalID));

const sound = document.createElement('button');
sound.className = 'sound';
sound.innerText = 'Sound';
body.append(sound);




// console.log (`
// -design, responsive UI
// -the game should end when the player reveals all cells that do not contain mines (win) or clicks on mine (lose) and related message is displayed at the end of the game
// -mines are placed after the first move, so that user cannot lose on the first move
// -user can mark “mined” cells using flags so as not to accidentally open them displaying the number of mines remaining and displaying number of used flags
// -game duration and number of clicks are displayed
// -sound accompaniment (on/off) when clicking on cell and at the end of the game
// -option to choose different themes for the game board (dark/light themes)
// `)


