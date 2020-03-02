  let selectedColor = window.getComputedStyle(document.querySelector('.selected'),null).getPropertyValue("background-color");


function getColor(e){
  selectedColor = window.getComputedStyle(e.target,null).getPropertyValue("background-color");
  console.log(selectedColor);
}

let colorNodes = document.getElementsByClassName("color");

for (node of colorNodes){
  console.log(node)
  node.addEventListener('click', getColor)
}
