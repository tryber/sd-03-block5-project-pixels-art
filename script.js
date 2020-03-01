let corActual = "black"
let x = document.querySelector('.pixel');
function aplicaCorAtual(id) {
  let caixasPixelBoard = document.querySelector('.' + id);
  caixasPixelBoard.style.backgroundColor = corActual;
}
function selecionaPreto(id) {
  corActual = "black"
}

function selecionaAmarelo(id) {
  corActual = "yellow"
}
function selecionaAzul(id) {
  corActual = "blue"
}
function selecionaVerde(id) {
  corActual = "green"
}

// for (let i = 0; i < x.length[i]; i++) {
//   if (caixasPixelBoard) {
//     x[i] = aplicaCorAtual;
//   }
// }