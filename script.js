const pixels = document.querySelectorAll(".pixel");
const paletaDeCores = document.querySelectorAll(".color");
const cores = ["black", "paleta-2", "paleta-3", "paleta-4"];
const reset = document.querySelector("#clear-board");
const paletaDeCoresAtual = ["preta", "2", "3", "4"];
let cor = "black";
function geraCor() {
  const hexadecimais = "0123456789ABCDEF";
  let corAleatoria = "#";
  for (let i = 0; i < 6; i += 1) {
    corAleatoria += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return corAleatoria;
}
for (let i = 1; i <= 3; i += 1) {
  const corAleatoria = geraCor();
  paletaDeCores[i].style.backgroundColor = corAleatoria;
  cores[i] = corAleatoria;
}
function removerSelected() {
  for (let i = 0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].className = `color paleta-${paletaDeCoresAtual[i]}`;
  }
}
function selecionaCor() {
  for (let i = 0; i < 4; i += 1) {
    if (this.className === `color paleta-${paletaDeCoresAtual[i]}`) {
      removerSelected();
      this.className = `color paleta-${paletaDeCoresAtual[i]} selected`;
      cor = cores[i];
    }
  }
}
function atribuirCorAoPixel() {
  this.style.backgroundColor = cor;
}
for (let i = 0; i < paletaDeCores.length; i += 1) {
  paletaDeCores[i].addEventListener("click", selecionaCor);
}
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener("click", atribuirCorAoPixel);
}

reset.addEventListener("click", function resetarPixelBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].className = "pixel";
    pixels[i].style.backgroundColor = "white";
  }
});

const createTable = size => {
  document.querySelector("#pixel-board").innerHTML = "";
  for (let c = 0; c < size; c += 1) {
    const line = document.createElement("tr");
    document.getElementById("pixel-board").appendChild(line);
    for (let d = 0; d < size; d += 1) {
      const pixel = document.createElement("td");
      pixel.className = "pixel";
      document.getElementsByTagName("tr")[c].appendChild(pixel);
    }
  }
};
document.getElementById("generate-board").addEventListener("click", () => {
  let size = document.getElementById("board-size").value;
  if (size < 5) {
    size = 5;
  }
  if (size > 50) {
    size = 50;
  }
  createTable(size);
  addListenerColor();
});
