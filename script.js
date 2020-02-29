let corPintura="";

function colorSelector(){
    let corSelecionada=event.srcElement;
//Limpa a seleção
    document.getElementsByClassName("cor1")[0].className="color cor1";
    document.getElementsByClassName("cor2")[0].className="color cor2";
    document.getElementsByClassName("cor3")[0].className="color cor3";
    document.getElementsByClassName("cor4")[0].className="color cor4";
//Seleciona nova cor
    if(document.getElementsByClassName("cor1")[0]==corSelecionada){
        corSelecionada.className=corSelecionada.className +" selected";
    }
    else if(document.getElementsByClassName("cor2")[0]==corSelecionada){
        corSelecionada.className=corSelecionada.className +" selected";
    }
    else if(document.getElementsByClassName("cor3")[0]==corSelecionada){
        corSelecionada.className=corSelecionada.className +" selected";
   }
    else if(document.getElementsByClassName("cor4")[0]==corSelecionada){
        corSelecionada.className=corSelecionada.className +" selected";
    }
    corPintura=corSelecionada.className;
}

function pintaCorSelecionada(){
    let pixelSelecionado=event.srcElement;
    if(corPintura=="color cor4 selected"){
        pixelSelecionado.style.backgroundColor="blue";
    }
}
