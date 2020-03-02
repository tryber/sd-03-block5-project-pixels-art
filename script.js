let black = document.getElementById('black');
let yellow = document.getElementById('yellow');
let blue = document.getElementById('blue');
let red = document.getElementById('red');
let pixelArr = document.getElementsByClassName('pixel');

for (i = 0; i < pixelArr.length; i += 1) {
    pixelArr[i].addEventListener('click', paint);
    
    function paint(pixelArr, color) {
    pixelArr[i].style.backgroundColor = color;}
}

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


if (black.classname = 'color selected') {
    color = 'black';
}

else if (yellow.classname = 'color selected') {
    color = 'yellow'
}

else if (blue.classname = 'color selected') {
    color = 'blue'
}

else {
    color = 'red'
}