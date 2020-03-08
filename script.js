const pixels = document.querySelectorAll('.pixel');
const paleta = document.querySelectorAll('.color');
const cores = ['black', 'paleta-2', 'paleta-3', 'paleta-4'];
const reset = document.querySelector('#clear-board');
const paletaAtual = ['preta', '2', '3', '4'];
let cor = 'black';
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
function atribuirCorAoPixel() {
  this.style.backgroundColor = cor;
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
}
reset.addEventListener('click', resetarPixelBoard);