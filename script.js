let black = document.getElementById('black');
let yellow = document.getElementById('yellow');
let blue = document.getElementById('blue');
let red = document.getElementById('red');

window.addEventListener('load', selectBlack);

black.addEventListener('click', selectBlack);

yellow.addEventListener('click', selectYellow);

blue.addEventListener('click', selectBlue);

red.addEventListener('click', selectRed);

function selectBlack() {
    black.className = 'color selected';
    yellow.className = 'color';
    blue.className = 'color';
    red.className = 'color';
}

function selectYellow() {
    yellow.className = 'color selected';
    black.className = 'color';
    blue.className = 'color';
    red.className = 'color';
}

function selectBlue() {
    blue.className = 'color selected';
    black.className = 'color';
    yellow.className = 'color';
    red.className = 'color';
}

function selectRed() {
    red.className = 'color selected';
    black.className = 'color';
    yellow.className = 'color';
    blue.className = 'color';
}