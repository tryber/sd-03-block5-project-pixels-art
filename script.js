function randomColor() {
  const colorArray = document.querySelectorAll('.color');
  for (let j = 1; j < colorArray.length; j += 1) {
    const letters = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i += 1) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    colorArray[j].style.backgroundColor = newColor;
    colorArray[j].id = newColor;
  }
}
randomColor();

function eraseColors() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function selectColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

function pixelColor(event) {
  const colorSquare = document.querySelector('.selected');
  const color = colorSquare.id;
  event.target.style.backgroundColor = color;
}

function createPixels() {
  let size = document.querySelector('#board-size').value;
  if (size < 5) {
    size = 5;
  } else if (size > 50) {
    size = 50;
  }
  for (let i = 0; i < size; i += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'row';
    document.getElementById('pixel-board').appendChild(newRow);
    for (let k = 0; k < size; k += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newRow.appendChild(newPixel);
    }
  }
}

function changeBoardSize() {
  document.getElementById('pixel-board').innerHTML = '';
  createPixels();
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', pixelColor);
  }
}

const colors = document.querySelectorAll('.color');
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', selectColor);
}

const pixels = document.querySelectorAll('.pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', pixelColor);
}

const buttonErase = document.getElementById('clear-board');
buttonErase.addEventListener('click', eraseColors);

const buttonSize = document.getElementById('generate-board');
buttonSize.addEventListener('click', changeBoardSize);
