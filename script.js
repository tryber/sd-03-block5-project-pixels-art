const pixels = document.querySelectorAll('.pixel');
const paleta = document.querySelectorAll('.color');
const cores = ['paleta-preta', 'paleta-2', 'paleta-3', 'paleta-4'];
const reset = document.querySelector('.botao');
const paletaAtual = ['preta', '2', '3', '4'];
let cor = 'paleta-preta';
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
  this.className = `pixel ${cor}`;
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
  }
}
reset.addEventListener('click', resetarPixelBoard);
