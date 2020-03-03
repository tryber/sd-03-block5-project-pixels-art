let black = document.querySelector("#black");
let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
let green = document.querySelector("#green");
let pixel = document.querySelectorAll(".pixel");
let mouseSelect = black;


black.addEventListener("click", function () {
  Cor("black");
  black.classList.add("selected");
});
red.addEventListener("click", function () {
  Cor("red");
  red.classList.add("selected");
});
blue.addEventListener("click", function () {
  Cor("blue")
  blue.classList.add("selected");
});
green.addEventListener("click", function () {
  Cor("green");
  green.classList.add("selected");
});

function selected(element) {
  element.style.backgroundColor = mouseSelect;
}

pixel.forEach(function selected(element) {
  element.addEventListener("click", function () { element.style.backgroundColor = mouseSelect })
});

function Cor(color) {
  mouseSelect = color;
}
