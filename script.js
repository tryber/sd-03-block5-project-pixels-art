// elementos

let divCores = document.querySelectorAll(".color")
console.log(divCores)
console.log(divCores[0])

let pixel = document.querySelectorAll(".pixel")
console.log(pixel)


// set da Paleta 

divCores[0].style.backgroundColor = "black"
divCores[1].style.backgroundColor = "red"
divCores[2].style.backgroundColor = "blue"
divCores[3].style.backgroundColor = "green"

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

// setDeCores()
setCorPadrao()


