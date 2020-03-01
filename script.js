// variaveis Constantes

const preto = "rgb(0, 0, 0)"
const vermelho = "rgb(255, 0, 0)"
const azul = "rgb(0, 0, 255)"
const verde = "rgb(0, 128, 0)"
const paletaCores = [preto,vermelho,azul,verde]


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
    divCores[0].style.backgroundColor = preto
}



// execução de Funções ao carregar a página

setDeCores()
setCorPadrao()


