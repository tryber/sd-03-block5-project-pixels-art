function choseColor(event) {
  const color = event.target.style.backgroundColor;
  window.sessionStorage.setItem('color', color);
}

function Selected() {
  const last = document.getElementsByClassName('selected')[0];
  last.classList.remove('selected');
  event.target.classList.add('selected');
}

function insertColor(event) {
  const selectedColor = sessionStorage.color;
  event.target.style.backgroundColor = selectedColor;
}

function clearBoard() {
  const board = document.querySelectorAll('td');

  for (const i of board) {
    i.style.backgroundColor = 'white';
  }
}


function removeSquare() {
  const rows = document.getElementsByTagName('tr');

  for (let index = (rows.length - 1); index >= 0; index -= 1) {
    rows[index].remove();
  }
}

function makeSquare(N) {
  const tbody = document.getElementById('pixel-board').firstElementChild;

  for (let indexRow = 0; indexRow < N; indexRow += 1) {
    const row = document.createElement('tr');
    row.classList.add('column');

    for (let indexColumnUnit = 0; indexColumnUnit < N; indexColumnUnit += 1) {
      const unit = document.createElement('td');
      unit.classList.add('pixel');

      row.appendChild(unit);
    }
    tbody.appendChild(row);
  }
}

function squareSize() {
  let size = document.getElementById('board-size').value;
  if (size < 5) {
    size = 5;
  } else if (size > 50) {
    size = 50;
  }
  removeSquare();
  makeSquare(size);
}

function randonColor() {
  const red = String(Math.floor(Math.random() * 256));
  const green = String(Math.floor(Math.random() * 256));
  const blue = String(Math.floor(Math.random() * 256));
  return (`rgb(${red} , ${green}  , ${blue})`);
}

function setInitialColor() {
  const colors = document.querySelectorAll('.color');

  for (let i = 0; i < colors.length; i += 1) {
    if (i >= '0' && i < colors.length) {
      colors[i].style.backgroundColor = randonColor();
    } else if (i === 0) {
      colors[i].style.backgroundColor = 'black';
    }
  }
}

function LOADED() {
  const colorsParent = document.getElementById('color-palette');
  colorsParent.addEventListener('click', choseColor);
  colorsParent.addEventListener('click', Selected);
  window.sessionStorage.setItem('color', 'black');

  const square = document.getElementById('pixel-board');
  square.addEventListener('click', insertColor);

  const clear = document.getElementById('clear-board');
  clear.addEventListener('click', clearBoard);

  const scale = document.getElementById('generate-board');
  scale.addEventListener('click', squareSize);

  setInitialColor();
}

window.onload = LOADED();
