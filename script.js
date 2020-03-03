const coresArr = document.getElementsByClassName("color");
const pixel = document.getElementsByClassName("pixel");
const clear = document.getElementById("clear-board");

function mudaSelected(c) {
  for (let i = 0; i < coresArr.length; i += 1) {
    coresArr[i].classList.remove("selected");
  }
  const name = "selected";
  const arr = coresArr[c].className.split(" ");
  if (arr.indexOf(name) === -1) {
    coresArr[c].className += " " + name;
  }
}

function limpaTela() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = "white";
  }
}

clear.addEventListener("click", limpaTela);

function paint() {
  let color = document.querySelector(".selected");

  event.target.style.backgroundColor = color.id;
}

for (i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener("click", paint);
}

mudaSelected(0);
