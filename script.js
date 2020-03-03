
let corPreta = document.querySelectorAll(".color")[0];
let corVermelho = document.querySelectorAll(".color")[1];
let corAzul = document.querySelectorAll(".color")[2];
let corVerde = document.querySelectorAll(".color")[3];
let selecionado = document.querySelector(".selected");
let pixels = document.querySelectorAll(".pixel");
let paleta = document.querySelectorAll(".color");
let cores = ["black", "red", "blue", "green"];
cor = "black"; 

function removerSelected(){
    for(let i = 0; i < paleta.length; i++){
        paleta[i].className = "color";
    
    }
}

for(let i = 0; i < paleta.length; i++){
    paleta[i].addEventListener("click", function(){
        console.log(paleta[i]);
        removerSelected();
        paleta[i].className = "color " + "selected";
            cor = cores[i];
    });
}
   
for(let i = 0; i < pixels.length; i++){
    pixels[i].addEventListener("click", function(){
        console.log(pixels[i]);
        pixels[i].className = "pixel" + " " + " " + cor; 
    });
}


