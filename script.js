let pixels = document.querySelectorAll('.pixel');
const paleta = document.querySelectorAll('.color');
const cores = ['black', 'paleta-2', 'paleta-3', 'paleta-4'];
const botao = document.querySelectorAll('.botao');
const paletaAtual = ['preta', '2', '3', '4'];
const board = document.querySelectorAll('.board')[0];
let cor = 'black';
function atribuirCorAoPixel() {
  this.style.backgroundColor = cor;
}
function criarPixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.addEventListener('click', atribuirCorAoPixel);
  return pixel;
}
function geraCor() {
  const hexadecimais = '0123456789ABCDEF';
  let corAleatoria = '#';
  for (let i = 0; i < 6; i += 1) {
    corAleatoria += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return corAleatoria;
}
for (let i = 1; i <= 3; i += 1) {
  const corAleatoria = geraCor();
  paleta[i].style.backgroundColor = corAleatoria;
  cores[i] = corAleatoria;
}
function removerSelected() {
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].className = `color paleta-${paletaAtual[i]}`;
  }
}
function selecionaCor() {
  for (let i = 0; i < 4; i += 1) {
    if (this.className === `color paleta-${paletaAtual[i]}`) {
      removerSelected();
      this.className = `color paleta-${paletaAtual[i]} selected`;
      cor = cores[i];
    }
  }
}
for (let i = 0; i < paleta.length; i += 1) {
  paleta[i].addEventListener('click', selecionaCor);
}
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', atribuirCorAoPixel);
}
function resetarPixelBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].className = 'pixel';
    pixels[i].style.backgroundColor = 'white';
  }
  removerSelected();
  paleta[0].className = `color paleta-${paletaAtual[0]} selected`;
  cor = 'black';
}
function alterarQuadro() {
  let novoTamanho = document.querySelectorAll('.tamanho')[0].value;
  if (novoTamanho > 50) {
    novoTamanho = 50;
  }
  else if (novoTamanho < 5) {
    novoTamanho = 5;
  }
  if (novoTamanho * novoTamanho > pixels.length) {
    for (let i = 0; i < (novoTamanho * novoTamanho) - pixels.length; i += 1) {
      board.style.height = (novoTamanho * 40) + (novoTamanho * 2) + 'px';
      board.style.width = (novoTamanho * 40) + (novoTamanho * 2) + 'px';
      if (pixels.length <= 50) {
        const novoPixel = criarPixel();
        board.appendChild(novoPixel);
      }
    }
  }
  else {
    for (let i = 0; i < pixels.length - (novoTamanho * novoTamanho); i += 1) {
      pixels[i].remove();
    }
    board.style.height = (novoTamanho * 40) + (novoTamanho * 2) + 'px';
    board.style.width = (novoTamanho * 40) + (novoTamanho * 2) + 'px';
  }
  pixels = document.querySelectorAll('.pixel');
  resetarPixelBoard();
}
botao[1].addEventListener('click', alterarQuadro);
botao[0].addEventListener('click', resetarPixelBoard);
