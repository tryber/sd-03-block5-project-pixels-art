
let corPreta = document.querySelectorAll(".color")[0];
let corVermelho = document.querySelectorAll(".color")[1];
let corAzul = document.querySelectorAll(".color")[2];
let corVerde = document.querySelectorAll(".color")[3];
let selecionado = document.querySelector(".selected");
let pixels = document.querySelectorAll(".pixel");
let preto = "black", vermelho = "red", azul = "blue", verde = "green";


cor = preto; 

for(let i = 0; i < pixels.length; i++){
    pixels[i].addEventListener("click", function(){
        console.log(pixels[i]);
        pixels[i].className = "pixel" + " " + " " + cor; 
    });
}


