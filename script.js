const coresArr = document.getElementsByClassName("color");
const pixel = document.getElementsByClassName("pixel");
const clear = document.getElementById("clear-board");

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

function mudaCor(p) {
  pixel[p].style.backgroundColor = "black";
}

mudaSelected(0);

// function adicionaClass(cn, i) {
//   const name = cn, ;
//   const arr = coresArr[i].className.split(" ");
//   if (arr.indexOf(name) === -1) {
//     coresArr[i].className += " " + name;
//   }
// }

// adicionaClass(0)
