// Variaveis e constantes

const paletaCores = ["black","red","blue","green"]
let corEscolhida = null
let ultimaCorEscolhida = null

// elementos

let divCores = document.querySelectorAll(".color")
let pixel = document.querySelectorAll(".pixel")

// eventListeners

divCores[0].addEventListener("click", function(event){
    corEscolhida = divCores[0].style.backgroundColor
    divCores[ultimaCorEscolhida].classList.remove("selected")
    divCores[0].classList.add("selected")
    localStorage.clear()
    localStorage.setItem("color","0")
    ultimaCorEscolhida = parseInt(localStorage.getItem("color"))
})
divCores[1].addEventListener("click", function(event){
    corEscolhida = divCores[1].style.backgroundColor
    divCores[ultimaCorEscolhida].classList.remove("selected")
    divCores[1].classList.add("selected")
    localStorage.clear()
    localStorage.setItem("color","1")
    ultimaCorEscolhida = parseInt(localStorage.getItem("color"))    
})
divCores[2].addEventListener("click", function(event){
    corEscolhida = divCores[2].style.backgroundColor
    divCores[ultimaCorEscolhida].classList.remove("selected")
    divCores[2].classList.add("selected")
    localStorage.clear()
    localStorage.setItem("color","2")
    ultimaCorEscolhida = parseInt(localStorage.getItem("color")) 
})
divCores[3].addEventListener("click", function(event){
    corEscolhida = divCores[3].style.backgroundColor
    divCores[ultimaCorEscolhida].classList.remove("selected")
    divCores[3].classList.add("selected")
    localStorage.clear()
    localStorage.setItem("color","3")
    ultimaCorEscolhida = parseInt(localStorage.getItem("color"))    
})

// funções

function setDeCores(){
    for (let i = 0; i<divCores.length; i+=1) {
        divCores[i].style.backgroundColor = paletaCores[i]
    }
}

function setCorPadrao(){
    divCores[0].classList.add("selected")
    divCores[0].style.backgroundColor = "black"
    localStorage.clear()
    localStorage.setItem("color", "0")
    ultimaCorEscolhida = parseInt(localStorage.getItem("color"))
}

function pickPaletteColor() {
    console.log(corEscolhida)
}

// execução de Funções ao carregar a página

setDeCores()
setCorPadrao()
// setEventListener()



