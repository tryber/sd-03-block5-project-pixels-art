// Cores selecionaveis
const paleta = [
    document.getElementById('preto').backgroundColor = "black",
    document.getElementById('vermelho').backgroundColor = "red",
    document.getElementById('roxo').backgroundColor = "purple",
    document.getElementById('cyano').backgroundColor = "darkCyan",
]
const cor = document.querySelectorAll('.color');

for (let i in paleta.length){
    cor[i].style.backgroundColor = paleta[i];
}

cor[0].classList.add('selected');
sessionStorage.setItem('color', cor[0].style.backgroundColor);

for (let indice in paleta.length) {
    cor[indice].addEventeListener('click', function () {
        document.querySelector('.selected').classList.remove('.selected');
        cor[indice].classList.add('.selected');
        sessionStorage.setItem('color', cor[indice].style.backgroundColor);
    })
}

const caixasBranca = document.querySelectorAll('.pixel');
const caixa = document.querySelectorAll('.pixel');

for (let i in caixasBranca.length) {
    caixa[i].addEventeListener('click', function () {
        caixa[i].style.backgroundColor = sessionStorage.color;
    });
}
























/* // Classe que seleciona a cor
let select = document.getElementsByClassName('selected')[0];

// Pixels brancos
const caixasBranca = document.querySelectorAll('.pixel').length;

corPreta.addEventListener('click', function () {
    select.value = "black";
    alert(select.innerHTML.length + 1);
})

corVermelha.addEventListener('click', function () {
    select.value = "red";
    alert(select.innerHTML.length + 1);
})

corRoxa.addEventListener('click', function () {
    corRoxa.value = "purple"
    alert(corRoxa.value);
})

corCyan.addEventListener('click', function () {
    corCyan.value = "darkCyan"
    alert(corCyan.value);
}) */
