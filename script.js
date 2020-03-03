let corBlack = document.getElementsByClassName("color")[0].style.backgroundColor = "Black";
let corBlack1 = document.getElementById('preto');

let corRed = document.getElementsByClassName("color")[1].style.backgroundColor = "red";
let corRed1 = document.getElementById('vermelho');

let corBlue = document.getElementsByClassName("color")[2].style.backgroundColor = "blue";
let corBlue1 = document.getElementById('azul');

let corGreen = document.getElementsByClassName("color")[3].style.backgroundColor = "green";
let corGreen1 = document.getElementById('verde');

let select = document.getElementsByClassName('selected');
let selecionaCor = document.getElementById('color-pallette');

let pixelBoard = document.getElementById('pixel-board');
let piXel = document.getElementsByClassName('pixel');

corBlack1.addEventListener('click', function() {
    let corpreta = corBlack;
    corBlack1.classList.add('selected');
    corRed1.classList.remove('selected');
    corBlue1.classList.remove('selected');
    corGreen1.classList.remove('selected');
    console.log(corpreta);

})

corRed1.addEventListener('click', function() {
    let corVermelha = corRed;
    corRed1.classList.add('selected');
    corBlack1.classList.remove('selected');
    corBlue1.classList.remove('selected');
    corGreen1.classList.remove('selected');
    console.log(corVermelha);

})
corBlue1.addEventListener('click', function() {
    let corazul = corBlue;
    corBlue1.classList.add('selected');
    corRed1.classList.remove('selected');
    corBlack1.classList.remove('selected');
    corGreen1.classList.remove('selected');
    console.log(corAzul);

})

corGreen1.addEventListener('click', function() {
    let corverde = corGreen;
    corGreen1.classList.add('selected');
    corRed1.classList.remove('selected');
    corBlack1.classList.remove('selected');
    corBlue1.classList.remove('selected');
})