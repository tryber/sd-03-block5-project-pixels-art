let divPale = document.getElementById('color-palette');
let corPreta = document.getElementById('preto');
let corVermelha = document.getElementById('vermelho');
let corRoxa = document.getElementById('roxo');
let corCyan = document.getElementById('cyano');

let select = document.getElementsByClassName('selected')[0];
let caixasBranca = document.querySelectorAll('pixel');

corPreta.addEventListener('click', function () {
    corPreta.value = "black";
    alert(corPreta.value);
})

corVermelha.addEventListener('click', function () {
    corVermelha.value = "red";
    alert(corVermelha.value);
})

corRoxa.addEventListener('click', function () {
    corRoxa.value = "purple"
    alert(corRoxa.value);
})

corCyan.addEventListener('click', function () {
    corCyan.value = "darkCyan"
    alert(corCyan.value);
})

switch (onclick) {
    case 'black':
        console.log('teste');
        break;

    case 'red':
        break;

    case 'purple':
        break;

    case 'blackcyan':
        break;
}