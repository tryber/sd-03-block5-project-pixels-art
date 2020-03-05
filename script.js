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
  for (i = 0; i < pixels.length; i++) {  
    pixels[i].style.backgroundColor = 'rgb(255,255,255)';
  }
});

for (x = 0; x < color.length; x++) {
  color[x].addEventListener('click', function (event) {
  document.querySelector('.selected').classList.remove('selected');
  elementid = event.target.getAttribute('id');
  let element = document.getElementById(elementid);
  var style = window.getComputedStyle(element,'');
  event.target.classList.add('selected');
  corselect =style.getPropertyValue('background-color');
  console.log(event.target);
})
}

for(i= 0; i <pixels.length; i++){   
    
    pixels[i].addEventListener("click", function(event){
        switch (elementid) {
            case "color1":
                event.target.style.backgroundColor="rgb(0,0,0)";    
                break;
            case "color2":
                event.target.style.backgroundColor= corselect;
                break;
            case "color3":
                event.target.style.backgroundColor= corselect;
                break;
            case "color4":
                event.target.style.backgroundColor= corselect;
                break;
            }})

}

botaoTamanhoQuadro.addEventListener("click", function(){
  let quadroPixels = document.getElementById("pixel-board")
  let vezes = tamanhoQuadro.value;
  quadroPixels.innerHTML="";
  if(vezes < 5 ){
   vezes = 5 ;
   }else if(vezes > 50){
   vezes = 50;
  }
  for(i=1; i <=vezes; i++){
  for(j=1; j<=vezes; j++){
   quadroPixels.appendChild(document.createElement("div")).setAttribute("class","pixel");
  }}
})

function corAleatoria(id){
    let r = Math.floor(Math.random()*256);          
    let g = Math.floor(Math.random()*256);          
    let b = Math.floor(Math.random()*256);          
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    this.document.getElementById(id).style.background = rgb;
    

}