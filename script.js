const pixels = 25;
var pixelBoard = document.querySelector("#pixel-board");
var createElemment = document.createElement("div");
var corOn = black;
var corWhite = 'white';
var divColors = document.querySelector('#color-palette');
var qtdClass = document.querySelectorAll('.color');
var children = divColors.childNodes; //aqui pega as divs filhas que tem as cores


//criando os 25 pixels
for(i = 0; i < pixels; i++ ){
    console.log(i)
    var createElemment = document.createElement("div");
    createElemment.setAttribute('class', 'pixel');
    pixelBoard.appendChild(createElemment);
    var getPixel = pixelBoard.children[i];
    getPixel.className = 'pixel white';
    pixelBoard.children[i].parametro = i;
    pixelBoard.children[i].addEventListener('click', pintaCorSelecionada);
    console.log(getPixel);
}

function pintaCorSelecionada(testeparametro){

    var pixelAtual = testeparametro.currentTarget.parametro;
    pixelBoard.children[pixelAtual].className = ('pixel ' + corOn);
    console.log(pixelBoard.children[pixelAtual]);
}
//--


// const someInput = document.querySelector('button');
// someInput.addEventListener('click', myFunc, false);
// someInput.myParam = 'This is my parameter';
// function myFunc(evt)
// {
//   window.alert(evt.currentTarget.myParam);
// }


//criando eventlisneters dos pixels de selecionar cor
for(i=0; i<4; i++){
    var getDiv = divColors.children[i];
    var getColor = divColors.children[i].id; //pega as cores
    console.log(qtdClass.length);
    
    getDiv.addEventListener('click', function clicouCor(getColor){

            console.log(getColor);
        });
    //console.log(divColors.children[i]);
    for(child in children){
    }
}

var getDivBlack = divColors.children[0];
var getDivGreen = divColors.children[1];
var getDivBlue = divColors.children[2];
var getDivYellow = divColors.children[3];
var getColorBlack = divColors.children[0].id; //pega as cores
var getColorGreen = divColors.children[1].id;
var getColorBlue = divColors.children[2].id;
var getColorYellow = divColors.children[3].id;
var getClearAllDiv = document.querySelector('#clear');
console.log(qtdClass.length);

getDivBlack.addEventListener('click', function clicouCor(){
    setAllSimple();
    getDivBlack.className = "color selected";
    corOn = 'black';
});
getDivGreen.addEventListener('click', function clicouCor(){
    setAllSimple();
    getDivGreen.className = "color selected";
    corOn = 'green';
});
getDivBlue.addEventListener('click', function clicouCor(){
    setAllSimple();
    getDivBlue.className = "color selected";
    corOn = 'blue';
});
getDivYellow.addEventListener('click', function clicouCor(){
    setAllSimple();
    getDivYellow.className = "color selected";
    corOn = 'yellow';
});
getClearAllDiv.addEventListener('click', clearAll);



//seta todos apenas com color, sem selected
function setAllSimple(){
  //  for(i=0;i<4;i++){
    //console.log(getDivBlack.className);
        getDivBlack.className = "color";
        getDivGreen.className = "color";
        getDivBlue.className = "color";
        getDivYellow.className = "color";
  //  }
}
function clearAll(){
    for(i = 0; i < pixels; i++ ){
        pixelBoard.children[i].className = ('pixel ' + corWhite);
    }
}