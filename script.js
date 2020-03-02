//Projeto de limpeza de codigo:
// for (x = 0; x < 5; x++){
//     for (p = 0; p < 5; p++){
//     let Cpixel = document.createElement("tr")
//     Cpixel.className = "pixel"
//     document.getElementById("pixelBody").appendChild(Cpixel)
//     }
// }

let paleta = document.getElementById("color-palette")

let paletaCor = document.getElementsByClassName("color")

let black = document.getElementsByClassName("color")[0]
let red = document.getElementsByClassName("color")[1]
let green = document.getElementsByClassName("color")[2]
let blue = document.getElementsByClassName("color")[3]

function selected(x){
    for (let i = 0; i < paletaCor.length; i++){
    paletaCor[i].classList.remove("selected")
    }
    x.classList.add("selected")
}

black.addEventListener("click", selected(black))
red.addEventListener("click", selected(red))
