
sessionStorage.setItem('SelectedColor', 'black');

const random255 = () => 0 + Math.floor((255 - 0) * Math.random());

const randomColor = () => `rgb(${random255()} ,${random255()} ,${random255()})`;

document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
for (let cont = 1; cont < document.querySelectorAll('.color').length; cont += 1) {
  document.querySelectorAll('.color')[cont].style.backgroundColor = randomColor();
}

document.querySelectorAll('.color').forEach((element) => element.addEventListener('click', (event) => {
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  sessionStorage.setItem('SelectedColor', event.target.style.backgroundColor);
  element.classList.add('selected');
}));

const addListenerColor = () => document.querySelectorAll('.pixel').forEach((element) => element.addEventListener('click', function (event) { event.srcElement.style.backgroundColor = sessionStorage.getItem('SelectedColor'); }));

document.getElementById('clear-board').addEventListener('click', () => document.querySelectorAll('.pixel').forEach(function (element) { element.style.backgroundColor = 'White'; }));

const createTable = (size) => {
  document.querySelector('#pixel-board').innerHTML = '';
  for (let c = 0; c < size; c += 1) {
    const line = document.createElement('tr');
    document.getElementById('pixel-board').appendChild(line);
    for (let d = 0; d < size; d += 1) {
      const pixel = document.createElement('td');
      pixel.className = 'pixel';
      document.getElementsByTagName('tr')[c].appendChild(pixel);
    }
  }
};

document.getElementById('generate-board').addEventListener('click', () => {
  let size = document.getElementById('board-size').value;
  if (size < 5) {
    size = 5;
  }
  if (size > 50) {
    size = 50;
  }
  createTable(size);
  addListenerColor();
});

createTable(5);

addListenerColor();
