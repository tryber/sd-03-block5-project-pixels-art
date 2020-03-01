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
    arrumarClasseCss(ultimaCorEscolhida,0)
    setLocalStorage("0")
})
divCores[1].addEventListener("click", function(event){
    corEscolhida = divCores[1].style.backgroundColor
    arrumarClasseCss(ultimaCorEscolhida,1)
    setLocalStorage("1")    
})
divCores[2].addEventListener("click", function(event){
    corEscolhida = divCores[2].style.backgroundColor
    arrumarClasseCss(ultimaCorEscolhida,2)
    setLocalStorage("2")
})
divCores[3].addEventListener("click", function(event){
    corEscolhida = divCores[3].style.backgroundColor
    arrumarClasseCss(ultimaCorEscolhida,3)
    setLocalStorage("3")
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

function arrumarClasseCss (ultimaCor,refCorAtual) {
    divCores[ultimaCor].classList.remove("selected")
    divCores[refCorAtual].classList.add("selected")
    // return alert("Removido classe selected do ultimo elemento e adicionado ao novo escolhido")
}

function setLocalStorage (refCorAtual) {
    localStorage.clear()
    localStorage.setItem("color",refCorAtual)
    ultimaCorEscolhida = parseInt(localStorage.getItem("color"))
    // return alert("Efetuado limpeza no storage e setado a cor escolhida")
}

// execução de Funções ao carregar a página

setDeCores()
setCorPadrao()



