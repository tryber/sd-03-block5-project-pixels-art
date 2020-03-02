//Inicia Variáveis
let selectElement =document.querySelector('.selected');
let selectedColor = window.getComputedStyle(selectElement,null).getPropertyValue("background-color");
let colorNodes = document.getElementsByClassName("color");
let boardNodes = document.getElementsByClassName("pixel");

//inicia funções
function clearBoard() {
  for (pixel of boardNodes){
    pixel.style.backgroundColor = 'white';
  }
}

function getColor(e){

  selectElement.className = "color";
  selectElement = e.target;
  selectedColor = window.getComputedStyle(e.target,null).getPropertyValue("background-color");
  e.target.className = "color selected"
}

function setColor(e){
  e.target.style.backgroundColor = selectedColor;

}

function randomColor() {
  let color = Math.floor(Math.random()*16777215).toString(16);

  return "#" + color;

}


//adiciona event listeners nos botões
for (node of colorNodes){
  node.addEventListener('click', getColor)
}
for (pixel of boardNodes){
    pixel.addEventListener('click', setColor)
  }

//escolhe cores aleatórias para as outras paletas
document.getElementById("blue").style.backgroundColor = randomColor();
document.getElementById("red").style.backgroundColor = randomColor();
document.getElementById("green").style.backgroundColor = randomColor();





