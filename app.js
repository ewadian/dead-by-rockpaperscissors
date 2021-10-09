import { outcome } from './utils.js';

const meg = document.getElementById('meg');
const flashlight = document.getElementById('flashlight');
const pig = document.getElementById('pig');

meg.addEventListener('click', ()=>{
    outcome('meg');
});

flashlight.addEventListener('click', ()=>{
    outcome('flashlight');
});

pig.addEventListener('click', ()=>{
    outcome('pig');
});


let rules = document.getElementById('rules');
let rulesButton = document.getElementById('rules-button');
let close = document.getElementsByClassName('close')[0];


rulesButton.onclick = function() {
    rules.style.display = 'block';
};

close.onclick = function() {
    rules.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === rules) {
        rules.style.display = 'none';
    }
};