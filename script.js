function randomColor() {
  let colorArray = document.querySelectorAll('.color');
  for (let j = 1; j < colorArray.length; j += 1){
    var letters = '0123456789ABCDEF';
    var newColor = '#';
    for (var i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    colorArray[j].style.backgroundColor = newColor;
    colorArray[j].id = newColor;
    }
  }
randomColor();

function eraseColors() {
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function selectColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

function pixelColor(event){
  let colorSquare = document.querySelector('.selected');
  let color = colorSquare.id;
  event.target.style.backgroundColor = color;
}

function createPixels() {
  let size = document.querySelector('#board-size').value;
  if (size < 5) {
    size = 5;
  }
  else if (size > 50) {
    size = 50;
  }
  for (let i = 0; i < size; i += 1){
    let newRow = document.createElement('div');
    newRow.className = 'row';
    document.getElementById('pixel-board').appendChild(newRow);
    for (let i = 0; i < size; i += 1){
      let newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newRow.appendChild(newPixel);
    }
  }
}

function changeBoardSize() {
  document.getElementById('pixel-board').innerHTML='';
  createPixels();
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', pixelColor);
  }
}

let colors = document.querySelectorAll('.color');
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', selectColor);
}

let pixels = document.querySelectorAll('.pixel');
for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', pixelColor);
}

let buttonErase = document.getElementById('clear-board');
buttonErase.addEventListener('click', eraseColors);

let buttonSize = document.getElementById('generate-board');
buttonSize.addEventListener('click', changeBoardSize);
