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

const quadroDePixels = document.getElementById('pixel-board');

function backgroundColorQuadroDePixels() {
  quadroDePixels.addEventListener('click', (event) => {
    event.target.style.backgroundColor = corSelecionada.id;
  });
}

backgroundColorQuadroDePixels();

const pixels = document.querySelectorAll('.pixel');

function apagaQuadroPixels() {
  const botaoApagaQuadro = document.getElementById('clear-board');
  botaoApagaQuadro.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'rgb(255, 255, 255)'
    }
  });
}

apagaQuadroPixels();
