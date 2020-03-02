// Variaveis e constantes

const paletaCores = ['black', 'red', 'blue', 'green'];
let corEscolhida = paletaCores[0];
let ultimaCorEscolhida = null;

// elementos

const divCores = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');

// funções

function setDeCores() {
  for (let i = 0; i < divCores.length; i += 1) {
    divCores[i].style.backgroundColor = paletaCores[i];
  }
}

function setCorPadrao() {
  divCores[0].classList.add('selected');
  divCores[0].style.backgroundColor = 'black';
  localStorage.clear();
  localStorage.setItem('color', '0');
  ultimaCorEscolhida = parseInt(localStorage.getItem('color', 10)); 
}

function arrumarClasseCss(ultimaCor, refCorAtual) {
  divCores[ultimaCor].classList.remove('selected');
  divCores[refCorAtual].classList.add('selected');
//   return alert("Removido classe selected do ultimo elemento e adicionado ao novo escolhido")
}

function setLocalStorage(refCorAtual) {
  localStorage.clear();
  localStorage.setItem('color', refCorAtual);
  ultimaCorEscolhida = parseInt(localStorage.getItem('color', 10));
//   return alert("Efetuado limpeza no storage e setado a cor escolhida")
}

function pintarPixel() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', function () {
      pixel[i].style.backgroundColor = corEscolhida;
    });
  }
}

// eventListeners

divCores[0].addEventListener('click', function () {
  corEscolhida = divCores[0].style.backgroundColor;
  arrumarClasseCss(ultimaCorEscolhida, 0);
  setLocalStorage('0');
});

divCores[1].addEventListener('click', function () {
  corEscolhida = divCores[1].style.backgroundColor;
  arrumarClasseCss(ultimaCorEscolhida, 1);
  setLocalStorage('1');
});

divCores[2].addEventListener('click', function () {
  corEscolhida = divCores[2].style.backgroundColor;
  arrumarClasseCss(ultimaCorEscolhida, 2);
  setLocalStorage('2');
});

divCores[3].addEventListener('click', function () {
  corEscolhida = divCores[3].style.backgroundColor;
  arrumarClasseCss(ultimaCorEscolhida, 3);
  setLocalStorage('3');
});

// execução de Funções ao carregar a página

setDeCores();
setCorPadrao();
pintarPixel();
