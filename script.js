const cores = document.querySelectorAll('.color');
const cor1 = document.querySelector('.cor1');
const cor2 = document.querySelector('.cor2');
const cor3 = document.querySelector('.cor3');
const cor4 = document.querySelector('.cor4');

sessionStorage.setItem('color', 'black');

function selecionaCor(indicador) {
  if (indicador === 1) {
    sessionStorage.setItem('color', 'black');
    cor1.className = 'color selected cor1';
    cor2.className = 'color cor2';
    cor3.className = 'color cor3';
    cor4.className = 'color cor4';
  } else if (indicador === 2) {
    sessionStorage.setItem('color', 'rgba(13, 51, 84, 1)');
    cor1.className = 'color cor1';
    cor2.className = 'color selected cor2';
    cor3.className = 'color cor3';
    cor4.className = 'color cor4';
  } else if (indicador === 3) {
    sessionStorage.setItem('color', 'rgba(48, 188, 237, 1)');
    cor1.className = 'color cor1';
    cor2.className = 'color cor2';
    cor3.className = 'color selected cor3';
    cor4.className = 'color cor4';
  } else if (indicador === 4) {
    sessionStorage.setItem('color', 'rgba(252, 81, 48, 1)');
    cor1.className = 'color cor1';
    cor2.className = 'color cor2';
    cor3.className = 'color cor3';
    cor4.className = 'color selected cor4';
  }
}

cor1.addEventListener('click', function () {
  selecionaCor(1);
});

cor2.addEventListener('click', function () {
  selecionaCor(2);
});

cor3.addEventListener('click', function () {
  selecionaCor(3);
});

cor4.addEventListener('click', function () {
  selecionaCor(4);
});

const pixel = document.querySelectorAll('.pixel');

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', function () {
    pixel[i].style.backgroundColor = sessionStorage.color;
  })
}


const botaoLimpar = document.querySelector('#clear-board');

function limpaPixel() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

botaoLimpar.addEventListener('click', limpaPixel);
