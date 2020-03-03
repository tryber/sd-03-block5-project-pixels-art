let black = document.querySelector("#black");
let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
let green = document.querySelector("#green");
let pixel = document.querySelectorAll(".pixel");
let mouseSelect = black;


pixel.forEach(element => element.addEventListener("click", () => element.style.backgroundColor = mouseSelect))

function anyColor(color) {
  mouseSelect = color;
}
black.addEventListener("click", function() {
  anyColor("black");
  black.classList.add("selected");
});
red.addEventListener("click", () => {
  anyColor("red");
  red.classList.add("selected");
});
blue.addEventListener("click", () => {
  anyColor("blue")
  blue.classList.add("selected");
});
green.addEventListener("click", () => {
  anyColor("green");
  green.classList.add("selected");
});
function hehe(element) {
  element.style.backgroundColor = mouseSelect;
}


