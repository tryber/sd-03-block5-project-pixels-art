let corSelected = document.getElementsByClassName("selected")[0];
let paleta = document.getElementsByClassName("color");
let pixel = document.getElementsByClassName("pixel");
let clear = document.getElementById("clear-board");

clear.addEventListener("click", limpa);



function limpa() {
  for (let i = 0; i < pixel.length; i++) {
    pixel[i].style.backgroundColor = "white";
  }
}
