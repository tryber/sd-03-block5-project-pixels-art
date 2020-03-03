
let selecionado = document.querySelectorAll('.color')[0];
window.addEventListener("load",function(s){
            adicioarSelected(selecionado);
});

window.addEventListener("click", function(s){ 
        if(verificarMatriz(s.toElement)){
            aplicarCorSelecionada(s.toElement,selecionado.style.backgroundColor);
        }
        if(verificarPaleta(s.toElement)){
            removerSelected(selecionado);
            guardarElementCorSelecionada(s.toElement);
            adicioarSelected(selecionado);
        }
    });

function verificarPaleta(elemento){
     return elemento.classList.contains("color");
}   
function verificarMatriz(elemento){
     return elemento.classList.contains("pixel");
}
function guardarElementCorSelecionada(elemento){
     selecionado = elemento;
}
function removerSelected(elemento){
     elemento.classList.remove("selected");
}
function adicioarSelected(elemento){
    elemento.classList.add("selected");
}   
function aplicarCorSelecionada(elemento,cor){
    console.log("essa é cor "+cor);
      elemento.style.backgroundColor = cor;
}
let botaoLimpar = document.getElementById("clear-board");
botaoLimpar.addEventListener("click",function(s){
    limparPixeis();
});
function limparPixeis(){
    console.log("aui");
    let pixeis = document.querySelectorAll('.pixel');
    for(let i=0;i<pixeis.length;i++){
         pixeis[i].style.backgroundColor = "white";
    }
}