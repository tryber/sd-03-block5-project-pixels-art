document.getElementById("black").style.backgroundColor = document.getElementById("black").innerHTML
document.getElementById("green").style.backgroundColor = document.getElementById("green").innerHTML
document.getElementById("yellow").style.backgroundColor = document.getElementById("yellow").innerHTML
document.getElementById("red").style.backgroundColor = document.getElementById("red").innerHTML


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