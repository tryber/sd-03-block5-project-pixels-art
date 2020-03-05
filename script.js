let corPintura = 'color cor1 selected';
const paletteButons = document.getElementsByClassName('color ');
const pixelUnit = document.getElementsByClassName('pixel ');
const limpaQuadro = document.getElementById('clear-board');

const selecionaCor = function () {
  const corSelecionada = event.srcElement;
//  Limpa a seleção
  document.getElementsByClassName('cor1')[0].className = 'color cor1';
  document.getElementsByClassName('cor2')[0].className = 'color cor2';
  document.getElementsByClassName('cor3')[0].className = 'color cor3';
  document.getElementsByClassName('cor4')[0].className = 'color cor4';
//  Seleciona nova cor
  if (document.getElementsByClassName('cor1')[0] === corSelecionada) {
    corSelecionada.className += ' selected';
  } else if (document.getElementsByClassName('cor2')[0] === corSelecionada) {
    corSelecionada.className += ' selected';
  } else if (document.getElementsByClassName('cor3')[0] === corSelecionada) {
    corSelecionada.className += ' selected';
  } else if (document.getElementsByClassName('cor4')[0] === corSelecionada) {
    corSelecionada.className += ' selected';
  }
  corPintura = corSelecionada.className;
};

const pintaPixel = function () {
  const pixelSelecionado = event.srcElement;
  if (corPintura === 'color cor1 selected') {
    pixelSelecionado.style.backgroundColor = 'black';
  }
  if (corPintura === 'color cor2 selected') {
    pixelSelecionado.style.backgroundColor = 'red';
  }
  if (corPintura === 'color cor3 selected') {
    pixelSelecionado.style.backgroundColor = 'green';
  }
  if (corPintura === 'color cor4 selected') {
    pixelSelecionado.style.backgroundColor = 'blue';
  }
};

function limpa() {
  const quadro = document.getElementsByClassName('pixel ');
  for (let i = 0; i < quadro.length; i += 1) {
    quadro[i].style.backgroundColor = 'white';
  }
}

for (let i = 0; i < paletteButons.length; i += 1) {
  paletteButons[i].addEventListener('click', selecionaCor);
}

for (let j = 0; j < pixelUnit.length; j += 1) {
  pixelUnit[j].addEventListener('click', pintaPixel);
}

limpaQuadro.addEventListener('click', limpa);
