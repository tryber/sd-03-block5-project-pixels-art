sessionStorage.setItem('SelectedColor', 'black');
const rgbColor = () => 0 + Math.floor((255 - 0) * Math.random());
const rgbRandom = () => `rgb(${rgbColor()} ,${rgbColor()} ,${rgbColor()})`;

function erasePixel(event) {
  sessionStorage.setItem('SelectedColor', event.target.style.backgroundColor);
    for (let cont = 1; cont < 8; cont += 1) {
      document.querySelectorAll('.color')[cont].style.border = "1px solid black"; 
      document.querySelectorAll('.reloader')[0].style.border = "none";  
    }
  document.querySelectorAll('.eraser')[0].style.border = "2px solid green"; 
};

function reloadColors(event) {
  document.querySelectorAll('.color')[0].style.border = "3px solid green"; 
  document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
  for (let cont = 1; cont < 8; cont += 1) {
    document.querySelectorAll('.color')[cont].style.backgroundColor = rgbRandom();
    document.querySelectorAll('.color')[cont].style.border = "1px solid black";
    document.querySelectorAll('.eraser')[0].style.border = "none";
    document.querySelectorAll('.reloader')[0].style.border = "none";   
  }
  document.querySelectorAll('.reloader')[0].style.border = "2px solid green";
};

document.querySelectorAll('.color')
  .forEach((element) => element.addEventListener('click', (event) => {
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  sessionStorage.setItem('SelectedColor', event.target.style.backgroundColor);
  element.classList.add('selected');
  for (let cont = 0; cont < 8; cont += 1) {
    document.querySelectorAll('.color')[cont].style.border = "1px solid black"; 
    document.querySelectorAll('.eraser')[0].style.border = "none"; 
    document.querySelectorAll('.reloader')[0].style.border = "none"; 
  }
event.target.style.border = "3px solid green" 
}));


const addListenerColor = () => document.querySelectorAll('.pixel').forEach((element) => element.addEventListener('click', function (event) { event.srcElement.style.backgroundColor = sessionStorage.getItem('SelectedColor'); }));

document.getElementById('clear-board').addEventListener('click', () => document.querySelectorAll('.pixel').forEach(function (element) { element.style.backgroundColor = 'White'; }));


const pixelBoard = (pixelsQtd) => {
  document.querySelector('#pixel-board').innerHTML = '';
  for (let c = 0; c < pixelsQtd; c += 1) {
    const line = document.createElement('tr');
    document.getElementById('pixel-board').appendChild(line);
    for (let d = 0; d < pixelsQtd; d += 1) {
      const pixel = document.createElement('td');
      pixel.className = 'pixel';
      document.getElementsByTagName('tr')[c].appendChild(pixel);
    }
  }
};

document.getElementById('generate-board').addEventListener('click', () => {
  let pixelsQtd = document.getElementById('board-size').value;
  if (pixelsQtd < 5) {
    pixelsQtd = 5;
    alert("Quantidade mínima = 5 Pixels !")
  }
  else if (pixelsQtd > 50) {
    pixelsQtd = 50;
    alert("Quantidade máxima = 50 Pixels !")
  }
  pixelBoard(pixelsQtd);
  addListenerColor();
});

reloadColors(event)
pixelBoard(5);
addListenerColor();
