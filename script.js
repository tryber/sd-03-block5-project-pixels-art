// Variaveis constantes

const paletaCores = ["black","red","blue","green"]

// elementos

let divCores = document.querySelectorAll(".color")
console.log(divCores)
console.log(divCores[0])

let pixel = document.querySelectorAll(".pixel")
console.log(pixel)

// funções

function setDeCores(){
    for (let i = 0; i<divCores.length; i+=1) {
        divCores[i].style.backgroundColor = paletaCores[i]
    }
}

function setCorPadrao(){
    divCores[0].classList.add("selected")
    divCores[0].style.backgroundColor = "black"
}

// execução de Funções ao carregar a página

setDeCores()
setCorPadrao()


