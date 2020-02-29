function colorSelector(){
    let corSelecionada=event.srcElement;
    if(document.getElementsByClassName("cor1")[0]==corSelecionada){
        console.log("preto");
    }
    else if(document.getElementsByClassName("cor2")[0]==corSelecionada){
        console.log("vermelho");
    }
    else if(document.getElementsByClassName("cor3")[0]==corSelecionada){
        console.log("verde");
    }
    else if(document.getElementsByClassName("cor4")[0]==corSelecionada){
        console.log("azul");
    }
}