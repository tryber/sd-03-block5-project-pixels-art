//variaveis
let ultimaCorEscolhida = null;

// elementos

const divCores = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
const limpaTudo = document.querySelector('#clear-board');
const gerarQuadro = document.querySelector('#generate-board');
const paleta = document.querySelector('#color-palette');

// funções

function arrumarClasseCss(ultimaCor, refCorAtual) {
  divCores[ultimaCor].classList.remove('selected');
  divCores[refCorAtual].classList.add('selected');
}

function colorir(event) {
  event.target.style.backgroundColor = corEscolhida;
}

function construirTabela(qtdLinCol) {
  const tabela = document.createElement('table');
  tabela.setAttribute('id', 'pixel-board');
  tabela.setAttribute('class', 'tabela');
  for (let i = 0; i < qtdLinCol; i += 1) {
    const linha = tabela.insertRow(i);
    for (let j = 0; j < qtdLinCol; j += 1) {
      const coluna = linha.insertCell(j);
      coluna.setAttribute('class', 'pixel');
    }
  }
  return tabela;
}

function criarPaleta() {
  const vetor = ['black'];
  for (let i = 0; i < 3; i += 1) {
    const rgbA = Math.floor(Math.random() * 255);
    const rgbB = Math.floor(Math.random() * 255);
    const rgbC = Math.floor(Math.random() * 255);
    vetor.push(`rgb(${rgbA.toString()},${rgbB.toString()},${rgbC.toString()})`);
  }
  return vetor;
}

function limparTabela() {
  const pixel = document.querySelectorAll('.pixel');
  corEscolhida = 'white';
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = corEscolhida;
  }
}

function setLocalStorage(refCorAtual) {
  localStorage.clear();
  localStorage.setItem('color', refCorAtual);
  ultimaCorEscolhida = parseInt(localStorage.getItem('color',10));
}

function setDeCores() {
  for (let i = 0; i < divCores.length; i += 1) {
    divCores[i].style.backgroundColor = paletaCores[i];
  }
}

function setDefaultParamLinCol(qtdLinCol) {
  if (qtdLinCol < 5) {
    qtdLinCol = 5;
  } else if (qtdLinCol > 50) {
    qtdLinCol = 50;
  }
  return qtdLinCol;
}

function setCorPadrao() {
  divCores[0].classList.add('selected');
  divCores[0].style.backgroundColor = 'black';
  localStorage.clear();
  localStorage.setItem('color', '0');
  ultimaCorEscolhida = parseInt(localStorage.getItem('color',10));
}

function pintarPixel(pixel) {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', colorir);
  }
}

function refazerTabela() {
  // primeiro remove a tabela default
  document.querySelector('#pixel-board').remove();

  // segundo verifica o parametro passado pelo user e arruma default(checa se e menor que 5 ou maior que 50)
  let qtdLinCol = parseInt(document.querySelector('#board-size').value);
  qtdLinCol = setDefaultParamLinCol(qtdLinCol);

  // constroi nova tabela de acordo com o que o user definiu
  let tabela = construirTabela(qtdLinCol);

  // inserir nova tabela no documento
  paleta.insertAdjacentElement('afterend', tabela);

  // chamar função pintarPixel novamente para reler a nova tabela
  let pixel = document.querySelectorAll('.pixel');
  pintarPixel(pixel);
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

limpaTudo.addEventListener('click', limparTabela);
gerarQuadro.addEventListener('click', refazerTabela);

// Criar paleta de cores aleatória
const paletaCores = criarPaleta();


// execução de Funções ao carregar a página

setDeCores();
setCorPadrao();
pintarPixel(pixel);
let corEscolhida = paletaCores[0];

