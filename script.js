let selectedColor = "black";

function changeColor(id) {
  document.getElementById(id).style.backgroundColor = selectedColor;
}
function changeSelectedColor(newColor) {
  selectedColor = newColor;
}
