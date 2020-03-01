paletaCor01 = document.getElementById("cor01");
paletaCor02 = document.getElementById("cor02");
paletaCor03 = document.getElementById("cor03");
paletaCor04 = document.getElementById("cor04");

paletaCor01.addEventListener('click', selectColor(paletaCor01));
paletaCor02.addEventListener('click', selectColor(paletaCor02));
paletaCor03.addEventListener('click', selectColor(paletaCor03));
paletaCor04.addEventListener('click', selectColor(paletaCor04));
let matrizPixels = document.getElementsByTagName("td");

for (let i in matrizPixels)
    matrizPixels[i].addEventListener('click', pixelPaint(matrizPixels[i]));

function selectColor(paletaSelecionada) {
    document.getElementsByClassName("selected")[0].classList.remove('selected');
    paletaSelecionada.classList.add('selected');
    console.log("Selecionada a paleta " + paletaSelecionada);
    }

function pixelPaint(quadrado) {
    let corSelecionada = document.getElementsByClassName("selected")[0].style.backgroundColor;
    quadrado.style.backgroundColor = corSelecionada;
    console.log("Quadrado pintado com a cor " + corSelecionada);
}