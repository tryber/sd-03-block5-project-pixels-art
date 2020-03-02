function choseColor(event) {
  const color = event.target.classList[1];
  window.sessionStorage.setItem('color', color);
}

function Selected() {
  const last = document.getElementsByClassName('selected')[0];
  last.classList.remove('selected');
  event.target.classList.add('selected');
}

function insertColor(event) {
  const classColor = sessionStorage.color;
  event.target.style.backgroundColor = classColor;
}

function LOADED() {
  const colorsParent = document.getElementById('color-palette');
  colorsParent.addEventListener('click', choseColor);
  colorsParent.addEventListener('click', Selected);
  window.sessionStorage.setItem('color', 'black');

  const square = document.getElementById('pixel-board');
  square.addEventListener('click', insertColor);
}

window.onload = LOADED();
