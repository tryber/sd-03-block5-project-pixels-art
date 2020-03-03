const quadrados = document.getElementsByTagName('td');
let corSelecionada = 'black';
const botaoLimpa = document.getElementById('clear-board');

function iniciar() {
    const colors = document.getElementsByClassName("color");
    const corShow = document.querySelector("#mostraSelecao"); 
    for (const tintas of colors) {
      tintas.addEventListener("click", function(event) {
        const paletaSelecionada = document.querySelector("#" + event.target.id);
        const corDaPaletaSelecionada = window
          .getComputedStyle(paletaSelecionada)
          .getPropertyValue("background-color");
        corSelecionada = corDaPaletaSelecionada;
        corShow.style.background = corDaPaletaSelecionada;
      });
    }
  }
function pinta() {
    for (const pixel of quadrados)
        pixel.addEventListener('click', function () {
            pixel.style.background = corSelecionada;
        });
}
function apaga() {
    for (const tudo of quadrados)
    botaoLimpa.addEventListener('click', function() {
        tudo.style.background = 'white'
    });
}
pinta();
iniciar();
apaga();