let preto = document.querySelector("#tdblack");
let amarelo = document.querySelector("#tdyellow");
let azul = document.querySelector("#tdblue");
let verde = document.querySelector("#tdgreen");
let pixel = document.querySelectorAll(".td");
let mouseSelect = "preto";

if (typeof (Storage) != undefined) {
  Cor("preto")
}

preto.addEventListener("click", function () {
  Cor("preto");
  preto.classList.add("selecionado");
});
amarelo.addEventListener("click", function () {
  Cor("amarelo");
  amarelo.classList.add("selecionado");
});
azul.addEventListener("click", function () {
  Cor("selecionado")
  azul.classList.add("selecionado");
});
verde.addEventListener("click", function () {
  Cor("verde");
  verde.classList.add("verde");
});

function selecao(element) {
  element.style.backgroundColor = mouseSelect;
}

pixel.forEach(function selected(element) {
  element.addEventListener("click", function () { element.style.backgroundColor = mouseSelect })
});

function Cor(color) {
  mouseSelect = color;
}