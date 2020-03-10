document.body.onload = adcElementos;
var colorPallet = document.getElementById("color-palette")
var pixelBoard = document.getElementById("pixel-board")
var colorSelect = document.getElementsByClassName("selected")
selecCor = document.getElementById('black')
selecCor.classList.add("selected")
colorPicked = 'black'


function adcElementos() {
  for (var i = 1; i <= 25; i++) {
    var pixelDiv = document.createElement("div")
    pixelDiv.id = `pixel` + `${i}`
    pixelDiv.className = "pixel"
    pixelBoard.appendChild(pixelDiv)
  }
}

// function riscaTexto(event) {
//   var getId = event.target.id;
//   document.getElementById(getId).classList.toggle('completed');
// }

function pickColor(e) {
  var idSelect = (e.target.id);
  colorPicked = `${idSelect}`
  selecCor = document.getElementById(colorPicked) 
  document.querySelector('.selected').classList.remove('selected');
  document.getElementById(colorPicked).classList.add('selected');

  
  // selecCor.classList.add("selected")
  // var div = document.getElementById('colorPicked')
    
}

function changeColor(e) {
  var pixelSelected = (e.target.id)
  var box = document.getElementById(`${pixelSelected}`)
  box.style.backgroundColor = colorPicked;

}

colorPallet.addEventListener('click', pickColor)
pixelBoard.addEventListener('click', changeColor)
