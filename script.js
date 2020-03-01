// elementos

let divCores = document.querySelectorAll(".color")
console.log(divCores)

// funções

function setDeCores(){
    let preto = "rgb(0, 0, 0)"
    let vermelho = "rgb(255, 0, 0)"
    let azul = "rgb(0, 0, 255)"
    let verde = "rgb(0, 128, 0)"
    let paletaCores = [preto,vermelho,azul,verde]

    for (let i = 0; i<divCores.length; i+=1) {
        divCores[i].style.backgroundColor = paletaCores[i]
    }
}

// setCores na Paleta

setDeCores()

