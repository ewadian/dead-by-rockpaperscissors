export function didUserWin(userChoice, actualChoice){
    if (userChoice === actualChoice) {
        return 'standoff';
    } else if (userChoice === 'pig' && actualChoice === 'meg') {
        return 'pig-beats-meg';
    } else if (userChoice === 'meg' && actualChoice === 'flashlight') {
        return 'meg-beats-flashlight';  
    } else if (userChoice === 'flashlight' && actualChoice === 'pig') {
        return 'flashlight-beats-pig';
    } else if (userChoice === 'meg' && actualChoice === 'pig'){
        return 'meg-loses-pig';
    } else if (userChoice === 'pig' && actualChoice === 'flashlight'){
        return 'pig-loses-flashlight';
    } else if (userChoice === 'flashlight' && actualChoice === 'meg'){
        return 'flashlight-loses-meg';
    }
}

export function getRandomMove(){
    return ['meg', 'pig', 'flashlight'][Math.floor(Math.random() * 3)];
}

// outcome logic function
const spanEscaped = document.getElementById('escaped');
const spanSacrificed = document.getElementById('sacrificed');
const spanStandoff = document.getElementById('standoff');
const imageBlind = document.getElementById('blind');
const imageDead = document.getElementById('dead');
const result = document.getElementById('result');

console.log(spanEscaped, spanSacrificed, spanStandoff);

let escaped = 0;
let sacrificed = 0;
let standoff = 0;

export function outcome(selected){

    const userChoice = selected;
    const actualChoice = getRandomMove();

    if (userChoice === actualChoice){
        standoff++;
        result.textContent = `It was a draw... maybe someone rage quit?`;

    } else if (didUserWin(userChoice, actualChoice) === 'pig-beats-meg'){
        escaped++;
        result.textContent = `computer ${actualChoice}. lol sucks to suck.`;
        imageDead.classList.remove('hidden');
        imageBlind.classList.add('hidden');

    } else if (didUserWin(userChoice, actualChoice) === 'meg-beats-flashlight'){
        escaped++;
        result.textContent = `computer ${actualChoice}. uh oh, meg found a flashlight...`;

    } else if (didUserWin(userChoice, actualChoice) === 'flashlight-beats-pig'){
        escaped++;
        result.textContent = `computer ${actualChoice}. If only they brought lightborn...`;
        imageBlind.classList.remove('hidden');
        imageDead.classList.add('hidden');

    } else if (didUserWin(userChoice, actualChoice) === 'meg-loses-pig'){
        sacrificed++;
        result.textContent = `computer ${actualChoice}. Rekt by pig.`;
        imageDead.classList.remove('hidden');
        imageBlind.classList.add('hidden');

    } else if (didUserWin(userChoice, actualChoice) === 'pig-loses-flashlight'){
        sacrificed++;
        result.textContent = `of course she has a ${actualChoice}. You should have brought lightborn.`;
        imageBlind.classList.remove('hidden');
        imageDead.classList.add('hidden');

    } else if (didUserWin(userChoice, actualChoice) === 'flashlight-loses-meg'){
        sacrificed++;
        result.textContent = `computer ${actualChoice}. Looks like Meg dropped her flashlight...`;
    }
    else {
        result.textContent = `error, try again.`;
    }

    spanEscaped.textContent = escaped;
    spanSacrificed.textContent = sacrificed;
    spanStandoff.textContent = standoff;
}
