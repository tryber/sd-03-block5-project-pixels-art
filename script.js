let colorSelector = document.getElementsByClassName('color');
let selectedColor = 'black';
let pixelColor = document.getElementsByClassName('pixel');
let clear = document.getElementById('clear-board');
let boardSize = document.getElementById('board-size');
let inputSize = document.getElementById('generate-board');
let tr = document.getElementsByTagName('tr');
let td = document.getElementsByTagName('td');
let tabela = document.getElementsByTagName('table');

// Seletor de cores - Paleta
let selectionPalette = function(e) {
  selectedColor = window.getComputedStyle( e.target ).getPropertyValue( 'background-color' );
    // Class Selected
    for (let i = 0; i < colorSelector.length; i += 1) {
      colorSelector[i].classList.remove('selected');
    };
    console.log(`${selectedColor}`);
    
    e.target.classList.add('selected');
};

//Botão de limpar
function clearBoard() {
  for (let i = 0; i < pixelColor.length; i += 1) {
    pixelColor[i].style.backgroundColor = 'white';
  };
}

// Aumentar Tabela
function aumentaQuadro() {
  tabela[0].innerHTML = '';
  if (boardSize.value > 50) {
    boardSize.value = 50;
  } else if (boardSize.value < 5) {
    boardSize.value = 5;
  }
  for (let j = 0; j < boardSize.value; j += 1) {
    let trCriado = document.createElement('tr');
    tabela[0].appendChild(trCriado);
    for (let k = 0; k < boardSize.value; k += 1) {
      let tdCriado = document.createElement('td');
      tdCriado.className = 'pixel';
      trCriado.appendChild(tdCriado);
    }
  }
  initPaint()
}

function criaQuadro() {
  for (let i = 0; i < tr.length; i += 1) {
    tr[i].remove();
  }
}  

//Cores Aleatórias
function randomColor() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return (`rgb(${r} , ${g}  , ${b})`);
}

function carregarAleatorias() {
  for (let i = 0; i < colorSelector.length; i += 1) {
    if (i > '0' && i < colorSelector.length) {
      colorSelector[i].style.backgroundColor = randomColor();
    } else if (i === 0) {
      colorSelector[i].style.backgroundColor = 'black';
    }
  }
}

function initPaint(){
  for (let i = 0; i < pixelColor.length; i += 1) {
    pixelColor[i].addEventListener('click', function () {
      pixelColor[i].style.backgroundColor = selectedColor;
      pixelColor[i].style.borderColor = selectedColor;
    });
  }
}

window.onload = function () {
  sessionStorage.setItem('color', 'black');

  for (let i = 0; i < colorSelector.length; i++) {
    colorSelector[i].addEventListener('click', selectionPalette, false)
  }

  initPaint()

  clear.addEventListener('click', clearBoard);

  inputSize.addEventListener('click', aumentaQuadro);

  carregarAleatorias();
}
