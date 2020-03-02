document.getElementById("black").style.backgroundColor = document.getElementById("black").innerHTML
document.getElementById("green").style.backgroundColor = document.getElementById("green").innerHTML
document.getElementById("yellow").style.backgroundColor = document.getElementById("yellow").innerHTML
document.getElementById("red").style.backgroundColor = document.getElementById("red").innerHTML


// mudando as cores da paleta
let color = document.querySelector(".selected").innerHTML


let pixelSelected1 = document.getElementById("pixel1")
pixelSelected1.addEventListener("click", changeColor)

function changeColor() {
    pixelSelected1.style.backgroundColor = color
}
let pixelSelected2 = document.getElementById("pixel1")
pixelSelected2.addEventListener("click", changeColor)

function changeColor() {
    pixelSelected2.style.backgroundColor = color
}