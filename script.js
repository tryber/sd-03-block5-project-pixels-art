
let selectedColor = window.getComputedStyle(document.querySelector('.selected'),null).getPropertyValue("background-color");


function getColor(e){


  selectedColor = window.getComputedStyle(e.target,null).getPropertyValue("background-color");
  e.target.className = "color selected"
}

function setColor(e){
  e.target.style.backgroundColor = selectedColor;

}

let colorNodes = document.getElementsByClassName("color");
let boardNodes = document.getElementsByClassName("pixel");

for (node of colorNodes){
  node.addEventListener('click', getColor)
}
for (pixel of boardNodes){
    pixel.addEventListener('click', setColor)
  }
