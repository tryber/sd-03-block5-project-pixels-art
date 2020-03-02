document.body.onload = adcElementos;

function adcElementos () {
    for(var i = 1; i <= 25; i++){
        var pixelBoard = document.getElementById("pixel-board") 
        var pixelDiv = document.createElement("div")
        pixelDiv.className = "pixel"
        pixelDiv.id = `pixel` + `${i}`
        // pixelBoard.document.createElement("div")
        pixelBoard.appendChild(pixelDiv)
        console.log(`pixel` + `${i}`)
    }
}

var selectedColor = 'black';

function pickId (e) {
    var idSelect = (e.target.id);
    alert(idSelect);
}

function changeColor(){
    selectedColor = idSelect.getElementById.style.backgroundColor;
}


document.addEventListener ('click', pickId)
document.addEventListener ('click', changeColor)



