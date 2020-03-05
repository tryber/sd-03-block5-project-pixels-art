let selectedColor = "black";

function changeColor(id) {
  document.getElementById(id).style.backgroundColor = selectedColor;
}

function changeColorClick(changeColor) {
  selectedColor = changeColor;
  document.querySelector(".selected").classList.remove("selected");
  document.getElementById(changeColor).classList.add("selected");
}   