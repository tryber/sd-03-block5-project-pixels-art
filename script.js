const pixels = 25;
var pixelBoard = document.querySelector("#pixel-board");
var createElemment = document.createElement("div");


for(i = 0; i < pixels; i++ ){
    console.log(i)
    var createElemment = document.createElement("div");
    createElemment.setAttribute('class', 'pixel');
    pixelBoard.appendChild(createElemment);
}

