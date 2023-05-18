// import Cell from "./components/cell.js";
import Field from "./components/field.js";

const body = document.querySelector('body');

const character = document.createElement('div');
character.className = "character";
body.append(character);
const timeText = document.createElement('p');
timeText.className = "time-text";
timeText.innerText = 'Time';
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


const field = new Field;
field.createField();
// console.log(field.game);

const restart = document.createElement('button');
restart.className = 'restart';
restart.innerText = 'New game';
body.append(restart);
restart.addEventListener('click', () => {field.game.innerHtml="";field.updateField();});


