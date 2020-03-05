let selectedColor = "black";

function changeColor(id) {
  document.getElementById(id).style.backgroundColor = selectedColor;
}

function changeColorClick(newColor) {
  selectedColor = newColor;
  document.querySelector(".selected").classList.remove("selected");
  document.getElementById(newColor).classList.add("selected");
}