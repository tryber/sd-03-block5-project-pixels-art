//Projeto de limpeza de codigo:
// for (x = 0; x < 5; x++){
//     for (p = 0; p < 5; p++){
//     let Cpixel = document.createElement("tr")
//     Cpixel.className = "pixel"
//     document.getElementById("pixelBody").appendChild(Cpixel)
//     }
// }

const paleta = document.getElementById("color-palette")

const paletaCor = document.getElementsByClassName("color")

const selecionado = document.getElementsByClassName("selected")

const pixel = document.getElementsByClassName("pixel")

const black = document.getElementsByClassName("cor1")

function selected(s){
    for (let i = 0; i < paletaCor.length; i += 1)
    paletaCor[i].classList.remove("selected")
    const name = "selected"
    const array = paletaCor[s].className.split (" ")
    if (array.indexOf(name) === -1){
        paletaCor[s].className += " " + name
    }

    function paint() {
        let color = document.querySelector(".selected");
      
        event.target.style.backgroundColor = color.id;
      }
      
      for (i = 0; i < pixel.length; i += 1) {
        pixel[i].addEventListener("click", paint);
      }
}
/*function mudarCor(p){
    const arrayP = paletaCor[1].className.split (" ")

    pixel[p].style.backgroundColor = "arrayP[1].style.backgroundColor"
}*/