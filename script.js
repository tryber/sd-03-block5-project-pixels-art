const coresArr = document.getElementsByClassName("color");
const pixel = document.getElementsByClassName("pixel");
const clear = document.getElementById("clear-board");

pixel[3].style.backgroundColor = "red";

function mudaSelected(c) {
  const name = "selected";
  const arr = coresArr[c].className.split(" ");
  if (arr.indexOf(name) === -1) {
    coresArr[c].className += " " + name;
  }
}

function tiraSelected() {
  for (let i = 0; i < coresArr.length; i += 1)
    coresArr[i].classList.remove("selected");
}

mudaSelected(0);
