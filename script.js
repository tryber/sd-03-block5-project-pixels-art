let colorPallete = ["red", "blue", "green", "red", "orange", "grey"]


document.getElementById("black").style.backgroundColor = document.getElementById("black").innerHTML
let color1 = colorPallete[Math.floor(Math.random() * colorPallete.length)]
document.getElementById("green").style.backgroundColor = color1
document.getElementById("green").innerHTML = color1
let color2 = colorPallete[Math.floor(Math.random() * colorPallete.length)]
document.getElementById("red").style.backgroundColor = color2
document.getElementById("red").innerHTML = color2
let color3 = colorPallete[Math.floor(Math.random() * colorPallete.length)]
document.getElementById("yellow").style.backgroundColor = color3
document.getElementById("yellow").innerHTML = color3

// selecionando a cor preta
let color = document.querySelector(".selected").innerHTML

//selecionando as cores

let colorSelected = document.querySelectorAll(".color");

for (let i = 0; i < 4; i++) {

    colorSelected[i].addEventListener("click", changeSelection)

    function changeSelection() {
        document.querySelector(".selected").classList.remove("selected")
        colorSelected[i].classList.add("selected")
    }
}

//aplicando a cor

let pickPixel = document.getElementsByClassName("pixel")

for (let i = 0; i < 25; i++) {
    pickPixel[i].addEventListener("click", changeColor)

    function changeColor() {
        colorChange = document.getElementsByClassName("selected")[0].innerHTML
        pickPixel[i].style.backgroundColor = colorChange
    }
}

let button = document.querySelector(".clear-board")
button.addEventListener("click", cleanOut)


function cleanOut() {

    for (let i = 0; i < 25; i++) {

        document.getElementsByClassName("pixel")[i].style.backgroundColor = "white"
    }
}

//exercicio 12

let redefineButton = document.getElementById("generate-board")
redefineButton.addEventListener("click", defineSize)

function defineSize() {
    document.getElementById("pixel-board").innerHTML = "";
    let n = document.getElementById("board-size").value
    if (n <= 5) {
        n = 5
    }
    if (n >= 50) {
        n = 50
    }


    for (let i = 0; i < n; i++) {
        let divRow = document.createElement("div")
        divRow.className = "row"
        divRow.id = "row"
        document.getElementById("pixel-board").appendChild(divRow)
        for (let j = 0; j < n; j++) {
            let divColumn = document.createElement("div")
            divColumn.className = "pixel"
            divColumn.id = "pixel"
            divRow.appendChild(divColumn)

        }

    }

}