const preto = document.getElementsByClassName('tdblack');
const amarelo = document.getElementsByClassName('tdyellow');
const azul = document.getElementsByClassName('tdblue');
const verde = document.getElementsByClassName('tdgreen');

const cores = [
    "black",
    "yellow",
    "blue",
    "green",
];

function limpar(){
   document.querySelectorAll('.pixel').style.backgroundColor = "rgb(255, 255, 255)";
}