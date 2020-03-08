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
for (let i = 0; i < paleta.length; i += 1) {
  paleta[i].addEventListener('click', function () {
    removerSelected();
    paleta[i].className = `color paleta-${paletaAtual[i]} selected`;
    cor = cores[i];
  });
}
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function () {
    pixels[i].className = `pixel ${cor}`;
  });
}
function resetarPixelBoard() {
  for (let i = 0; i < pixels.length; i += 1){
    pixels[i].className = 'pixel';
  }
}
reset.addEventListener('click', resetarPixelBoard);
