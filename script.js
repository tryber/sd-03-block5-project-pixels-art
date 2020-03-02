let black = document.querySelector("#black");
let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
let green = document.querySelector("green");


let corSelecionada = document.querySelector(".selected");

const pixel = document.querySelectorAll(".pixel");

sessionStorage.setItem('color', black)

/* function cor(indicador) {
  if (indicador === 1) {
    sessionStorage.setItem('color', black)
    black = "color selected black";
    corSelecionada = document.querySelector(".selected").style.backgroundColor;
  }
  else if (indicador === 2) {
    sessionStorage.setItem('color', red);
    red.className = 'color selected red';
    corSelecionada = document.querySelector(".selected").style.backgroundColor;
  }
  else if (indicador === 3) {
    sessionStorage.setItem('color', blue);
    blue.className = 'color selected blue';
    corSelecionada = document.querySelector(".selected").style.backgroundColor;
  }
  else if (indicador === 4) {
    sessionStorage.setItem('color', green);
    green.className = 'color selected green';
    corSelecionada = document.querySelector(".selected").style.backgroundColor;
  }
}

black.addEventListener('click', function () {
  cor(1)
});

red.addEventListener('click', function () {
  cor(2)
});

blue.addEventListener('click', function () {
  cor(3)
});

green.addEventListener('click', function () {
  cor(4)
});
 */

