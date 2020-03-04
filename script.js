const paletaDeCores = document.getElementById('color-palette');

function backgroundColorPaletaDeCores() {
  for (let i = 0; i < paletaDeCores.children.length; i += 1) {
    paletaDeCores.children[i].style.backgroundColor = paletaDeCores.children[i].id;
  }
}

backgroundColorPaletaDeCores();

const corPreta = document.getElementById('black');
const corVermelha = document.getElementById('red');
const corAzul = document.getElementById('blue');
const corVerde = document.getElementById('green');

corPreta.classList.add('selected');
let corSelecionada = document.querySelector('.selected');

function selecionarCor() {
  for (let i = 0; i < paletaDeCores.children.length; i += 1) {
    paletaDeCores.children[i].addEventListener('click', () => {
      for (let x = paletaDeCores.children.length - 1; x >= 0; x -= 1) {
        paletaDeCores.children[x].classList.remove('selected');
      }
      paletaDeCores.children[i].classList.add('selected');
      corSelecionada = document.querySelector('.selected');
    });
  }
}

selecionarCor();

let quadroDePixels = document.getElementById('pixel-board');

function backgroundColorQuadroDePixels() {
  quadroDePixels.addEventListener('click', (event) => {
    event.target.style.backgroundColor = corSelecionada.id;
  });
}

backgroundColorQuadroDePixels();

function apagaQuadroPixels() {
  const botaoApagaQuadro = document.getElementById('clear-board');
  botaoApagaQuadro.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'rgb(255, 255, 255)'
    }
  });
}

apagaQuadroPixels();

const tamanhoDoQuadroDePixels = document.getElementById('board-size');
const botaoGeradorDePixels = document.getElementById('generate-board');

function geradorQuadroDePixels() {
  botaoGeradorDePixels.addEventListener('click', () => {
    if (tamanhoDoQuadroDePixels.value < 5) {
      tamanhoDoQuadroDePixels.value = 5;
    } else if (tamanhoDoQuadroDePixels.value > 50) {
      tamanhoDoQuadroDePixels.value = 50;
    }
    quadroDePixels = document.getElementById('pixel-board');
    while (quadroDePixels.children.length > 0) {
      quadroDePixels.removeChild(quadroDePixels.children[0]);
    }
    for (let i = 0; i < Math.round(tamanhoDoQuadroDePixels.value); i += 1) {
      let tr = document.createElement('tr');
      quadroDePixels.appendChild(tr)
      for (let x = 0; x < Math.round(tamanhoDoQuadroDePixels.value); x += 1) {
        let td = document.createElement('td');
        td.classList.add('pixel');
        tr.appendChild(td);
      }
    }
    tamanhoDoQuadroDePixels.value = '';
  });
}

geradorQuadroDePixels();
