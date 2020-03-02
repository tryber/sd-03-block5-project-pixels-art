const pixels = 25;
var pixelBoard = document.querySelector("#pixel-board");
var createElemment = document.createElement("div");
var corOn = black;
var divColors = document.querySelector('#color-palette');
var qtdClass = document.querySelectorAll('.color');
var children = divColors.childNodes; //aqui pega as divs filhas que tem as cores

for(i = 0; i < pixels; i++ ){
    console.log(i)
    var createElemment = document.createElement("div");
    createElemment.setAttribute('class', 'pixel');
    pixelBoard.appendChild(createElemment);
}

for(i=0; i<4; i++){
    var getDiv = divColors.children[i];
    var getColor = divColors.children[i].id; //pega as cores
    console.log(qtdClass.length);
    
    getDiv.addEventListener('click', function clicouCor(){
            getColor
            console.log(getColor);



        });
    //console.log(divColors.children[i]);
    for(child in children){

    }
    

}