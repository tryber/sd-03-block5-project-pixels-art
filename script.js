let selectedColor = "black";

function changeColor(id) {
  document.getElementById(id).style.backgroundColor = selectedColor;
}

function changeSelectedColor(newColor) {
  selectedColor = newColor;
}

function clearBoard() {
  let listaElem = document.querySelectorAll(".pixel");
  for (i = 0; i < listaElem.length; i++) {
    listaElem[i].style.backgroundColor = "white";
  }
}
