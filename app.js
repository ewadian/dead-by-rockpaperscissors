import { outcome } from './utils.js';

const spanEscaped = document.getElementById('escaped');
const spanSacrificed = document.getElementById('sacrificed');
const spanStandoff = document.getElementById('standoff');
const reset = document.getElementById('reset');
const meg = document.getElementById('meg');
const flashlight = document.getElementById('flashlight');
const pig = document.getElementById('pig');

let escaped = 0;
let sacrificed = 0;
let standoff = 0;

meg.addEventListener('click', ()=>{
    outcome('meg');
});

flashlight.addEventListener('click', ()=>{
    outcome('flashlight');
});

pig.addEventListener('click', ()=>{
    outcome('pig');
});

reset.addEventListener ('click', ()=>{
    escaped = 0;
    sacrificed = 0;
    standoff = 0;

    spanEscaped.textContent = escaped;
    spanSacrificed.textContent = sacrificed;
    spanStandoff.textContent = standoff;
});
