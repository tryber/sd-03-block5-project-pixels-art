let selectedColor = "black";
let colectSelector = document.querySelector(".selected").classList
let colectClickedOnPallet = document.getElementById(newColor).classList

function changeColor(id) {
  document.getElementById(id).style.backgroundColor = selectedColor;
}

function changeColorClick(newColor) {
  selectedColor = newColor;
  colectSelector.remove("selected");
  colectClickedOnPallet.add("selected");
}