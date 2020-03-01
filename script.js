// variaveis Constantes

const preto = "rgb(0, 0, 0)"
const vermelho = "rgb(255, 0, 0)"
const azul = "rgb(0, 0, 255)"
const verde = "rgb(0, 128, 0)"


// elementos

let divCores = document.querySelectorAll(".color")
console.log(divCores)


// funções

function setDeCores(){
    let paletaCores = [preto,vermelho,azul,verde]
    for (let i = 0; i<divCores.length; i+=1) {
        divCores[i].style.backgroundColor = paletaCores[i]
    }
}

// execução de Funções

setDeCores()

