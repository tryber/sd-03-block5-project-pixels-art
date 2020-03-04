const quadrados = document.getElementsByTagName('td');
let corSelecionada = 'black';
let colors = document.getElementsByClassName("color");
const botaoLimpa = document.getElementById('clear-board');
const corShow = document.querySelector("#mostraSelecao");


// sessionStorage.setItem('color', 'black');

function start() {
    for (const tintas of colors) {
      tintas.addEventListener("click", function(e) {
        for (let e = 0; e < colors.length; e += 1) {
          colors[e].classList.remove('selected')
        };
        e.target.classList.add('selected');
        const paletaSelecionada = document.querySelector("#" + event.target.id);
        const corDaPaletaSelecionada = window
          .getComputedStyle(paletaSelecionada)
          .getPropertyValue("background-color");
        corSelecionada = corDaPaletaSelecionada;
        corShow.style.background = corDaPaletaSelecionada;
      });
    }
  }

// let selectionPalette = function(e) {
//   corSelecionada = window
//    .getComputedStyle( e.target )
//    .getPropertyValue( 'background-color' );
  // for (let i = 0; i < colors.length; i += 1) {
  //   corSelecionada[i].classList.remove('selected');
  // };
  // e.target.classList.add('selected');
// };

function paint() {
    for (const pixel of quadrados)
        pixel.addEventListener('click', function () {
            pixel.style.background = corSelecionada;
        });
}
function clear() {
    for (const tudo of quadrados)
    botaoLimpa.addEventListener('click', function() {
        tudo.style.background = 'white'
    });
}
start();
paint();
clear();
selectionPalette();

// onePalette[0].classList.add('selected');
// sessionStorage.setItem('color', onePalette[0].style.backgroundColor);
// for (let i = 0; i < allPalettes; i += 1) {
//   defineColorPalette();
//   onePalette[i].addEventListener('click', function () {
//     document.querySelector('.selected').classList.remove('selected');
//     onePalette[i].classList.add('selected');
//     sessionStorage.setItem('color', onePalette[i].style.backgroundColor);
//   });
// }