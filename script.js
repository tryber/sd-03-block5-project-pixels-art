document.body.onload = adcElementos;
var colorPallet = document.getElementById("color-palette")
var pixelBoard = document.getElementById("pixel-board")
var colorSelect = document.getElementsByClassName("selected")
var colorPicked = 'black'

function adcElementos() {
  for (var i = 1; i <= 25; i++) {
    var pixelDiv = document.createElement("div")
    pixelDiv.id = `pixel` + `${i}`
    pixelDiv.className = "pixel"
    pixelBoard.appendChild(pixelDiv)
  }
}

function pickColor(e) {
  var idSelect = (e.target.id);
  colorPicked = `${idSelect}`
  var div = document.getElementById('colorPicked')
}

function changeColor(e) {
  var pixelSelected = (e.target.id)
  var box = document.getElementById(`${pixelSelected}`)
  box.style.backgroundColor = colorPicked;

}
colorPallet.addEventListener('click', pickColor)
pixelBoard.addEventListener('click', changeColor)
