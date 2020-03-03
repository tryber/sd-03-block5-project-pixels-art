const cor1 = document.querySelectorAll('.color')[0];
const cor2 = document.querySelectorAll('.color')[1];
const cor3 = document.querySelectorAll('.color')[2];
const cor4 = document.querySelectorAll('.color')[3];

sessionStorage.setItem('color', 'black');

cor1.style.backgroundColor = 'black';
cor2.style.backgroundColor = corAleatoria();
cor3.style.backgroundColor = corAleatoria();
cor4.style.backgroundColor = corAleatoria();

function selecionaCor(indicador) {
  if (indicador === 1) {
    sessionStorage.setItem('color', cor1.style.backgroundColor);
    cor1.className = 'color selected';
    cor2.className = 'color';
    cor3.className = 'color';
    cor4.className = 'color';
  } else if (indicador === 2) {
    sessionStorage.setItem('color', cor2.style.backgroundColor);
    cor1.className = 'color';
    cor2.className = 'color selected';
    cor3.className = 'color';
    cor4.className = 'color';
  } else if (indicador === 3) {
    sessionStorage.setItem('color', cor3.style.backgroundColor);
    cor1.className = 'color';
    cor2.className = 'color';
    cor3.className = 'color selected';
    cor4.className = 'color';
  } else if (indicador === 4) {
    sessionStorage.setItem('color', cor4.style.backgroundColor);
    cor1.className = 'color';
    cor2.className = 'color';
    cor3.className = 'color';
    cor4.className = 'color selected';
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
  });
}

const botaoLimpar = document.querySelector('#clear-board');

function limpaPixel() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

botaoLimpar.addEventListener('click', limpaPixel);

function corAleatoria(){
  const hexadecimais = '0123456789ABCDEF';
  let cor = '#';
  for (let i = 0; i < 6; i++ ) {
    cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}
