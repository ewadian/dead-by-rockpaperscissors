import { didUserWin, getRandomMove } from './utils.js';

const playButton = document.getElementById('play');
const spanEscaped = document.getElementById('escaped');
const spanSacrificed = document.getElementById('sacrificed');
const spanStandoff = document.getElementById('standoff');
const error = document.getElementById('error');
const result = document.getElementById('result');

let escaped = 0;
let sacrificed = 0;
let standoff = 0;

playButton.addEventListener ('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    if (!selected) {
        return error.classList.remove('hidden');
    }

    error.classList.add('hidden');
    const userChoice = selected.value;
    const actualChoice = getRandomMove();

    if (userChoice === actualChoice){
        standoff++;
        result.textContent = `It was a draw... maybe someone rage quit?`;
    } else if (didUserWin(userChoice, actualChoice) === 'escaped'){
        escaped++;
        result.textContent = `rank up! they really thought they could outplay you with ${actualChoice}?`;
    } else {
        sacrificed++;
        result.textContent = `rekt by ${actualChoice}.`;
    }

    spanEscaped.textContent = escaped;
    spanSacrificed.textContent = sacrificed;
    spanStandoff.textContent = standoff;
});
