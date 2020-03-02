document.body.onload = adcElementos;
var colorPallet = document.getElementById("color-palette") 
var pixelBoard = document.getElementById("pixel-board") 

function adcElementos () {
    for(var i = 1; i <= 25; i++){
        // var pixelBoard = document.getElementById("pixel-board") 
        var pixelDiv = document.createElement("div")
        pixelDiv.className = "pixel"
        pixelDiv.id = `pixel` + `${i}`
        // pixelBoard.document.createElement("div")
        pixelBoard.appendChild(pixelDiv)
        console.log(`pixel` + `${i}`)
    }
}


var selectedColor = 'black';

function pickColor (e) {
    var idSelect = (e.target.id);
    var colorPicked = idSelect
    
    // idSelect.document.getElementById($"{`idSelect`}")
    alert(colorPicked);
}

function changeColor(e){
    var idSelect = (e.target.id);

    alert(idSelect)        
}


// document.addEventListener ('click', pickId)
// document.addEventListener ('click', changeColor)
colorPallet.addEventListener('click',pickColor)
pixelBoard.addEventListener('click',  changeColor)



