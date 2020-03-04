let corselect;
let elementid = 'color1';
window.onload = function() {
  corselect = 'black';
  this.corAleatoria('color2');
  this.corAleatoria('color3');
  this.corAleatoria('color4');
}
let pixels = document.getElementsByClassName('pixel');
let color = document.getElementsByClassName('color');
let buttonDelete =document.getElementById('clear-board');
let tamanhoQuadro = document.getElementById('board-size');
let botaoTamanhoQuadro = document.getElementById('generate-board');

color[0].classList.add('selected');
buttonDelete.addEventListener('click',function (){
    let i =0 ;

  for(;i < pixels.length; i++) {
      pixels[i].style.backgroundColor='rgb(255,255,255)';
    }
});
let x =0 ;
for (; x < color.length; x++) {
  color[x].addEventListener('click', function (event) {
  document.querySelector('.selected').classList.remove('selected');
  elementid = event.target.getAttribute('id');
  let element = document.getElementById(elementid);
  let style = window.getComputedStyle(element, "");
  event.target.classList.add('selected');
  corselect =style.getPropertyValue("background-color");
  console.log(event.target);
});
}
let i = 0;
for(; i <pixels.length; i++){
  pixels[i].addEventListener('click', function (event) {
      switch (elementid) {
          case 'color1':
            event.target.style.backgroundColor = "rgb(0,0,0)";
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
                alert('Cor não selecionada !');
        }});
}
botaoTamanhoQuadro.addEventListener('click', function(){
  const quadroPixels = document.getElementById('pixel-board');
  let vezes = tamanhoQuadro.value;
  quadroPixels.innerHTML = '';
  if(vezes<5 ) {
    vezes = 5;
  } else if (vezes > 50) {
     vezes = 50;
   }
  let i = 1;
  let j=1;
  for (; i <= vezes; i++) {
  for (; j<= vezes; j++) {
    quadroPixels.appendChild(document.createElement('div')).setAttribute('class', 'pixel');
   }}
});

function corAleatoria(id) {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  const rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  this.document.getElementById(id).style.background = rgb;
}
