const corSelected = document.getElementsByClassName('selected')[0];
const paleta = document.getElementsByClassName('color');
const pixel = document.getElementsByClassName('pixel');
const clear = document.getElementById('clear-board');

function limpa() {
  for (let i = 0; i < pixel.length; i =+ 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

clear.addEventListener('click', limpa);
