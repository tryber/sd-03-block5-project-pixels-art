let corselect;
let elementid = 'color1';
window.onload = function () {
  corselect = 'black';
  this.corAleatoria('color2');
  this.corAleatoria('color3');
  this.corAleatoria('color4');
};
const pixels = document.getElementsByClassName('pixel');
const color = document.getElementsByClassName('color');
const buttonDelete = document.getElementById('clear-board');
const tamanhoQuadro = document.getElementById('board-size');
const botaoTamanhoQuadro = document.getElementById('generate-board');

color[0].classList.add('selected');
buttonDelete.addEventListener('click', function () {
  let i = 0;

  for (;i < pixels.length;) {
    pixels[i].style.backgroundColor = 'rgb(255,255,255)';
    i += 1;
  }
});
let x = 0;
for (; x < color.length;) {
  color[x].addEventListener('click', function (event) {
    document.querySelector('.selected').classList.remove('selected');
    elementid = event.target.getAttribute('id');
    const element = document.getElementById(elementid);
    const style = window.getComputedStyle(element, '');
    event.target.classList.add('selected');
    corselect = style.getPropertyValue('background-color');
  });
  x += 1;
}
let i = 0;
for (; i < pixels.length;) {
  pixels[i].addEventListener('click', function (event) {
    switch (elementid) {
      case 'color1':
        event.target.style.backgroundColor = 'rgb(0,0,0)';
        break;
      case 'color2':
        event.target.style.backgroundColor = corselect;
        break;
      case 'color3':
        event.target.style.backgroundColor = corselect;
        break;
      case 'color4':
        event.target.style.backgroundColor = corselect;
        break;
      default :
        alert('Cor não selecionada !'); }});
  i += 1;
}
botaoTamanhoQuadro.addEventListener('click', function () {
  const quadroPixels = document.getElementById('pixel-board');
  let vezes = tamanhoQuadro.value;
  quadroPixels.innerHTML = '';
  if (vezes < 5) {
    vezes = 5;
  } else if (vezes > 50) {
    vezes = 50;
  }
  let i2 = 1;
  let j = 1;
  for (; i2 <= vezes;) {
  for (; j <= vezes;) {
      quadroPixels.appendChild(document.createElement('div')).setAttribute('class', 'pixel');
    j += 1;  }}
  i2 += 1;
});

function corAleatoria(id) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  this.document.getElementById(id).style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
}
