let corPintura = 'color cor1 selected';

function colorSelector() {
  let corSelecionada=event.srcElement;
//Limpa a seleção
  document.getElementsByClassName("cor1")[0].className = "color cor1";
  document.getElementsByClassName("cor2")[0].className = "color cor2";
  document.getElementsByClassName("cor3")[0].className = "color cor3";
  document.getElementsByClassName("cor4")[0].className = "color cor4";
//Seleciona nova cor
  if(document.getElementsByClassName("cor1")[0] === corSelecionada){
     corSelecionada.className = corSelecionada.className +" selected";
  }
  else if(document.getElementsByClassName("cor2")[0] === corSelecionada){
     corSelecionada.className = corSelecionada.className +" selected";
  }
  else if(document.getElementsByClassName("cor3")[0] === corSelecionada){
     corSelecionada.className = corSelecionada.className +" selected";
  }
  else if(document.getElementsByClassName("cor4")[0] === corSelecionada){
     corSelecionada.className = corSelecionada.className +" selected";
  }
  corPintura = corSelecionada.className;
}

function pintaCorSelecionada() {
  let pixelSelecionado=event.srcElement;
  if(corPintura=="color cor1 selected"){
     pixelSelecionado.style.backgroundColor="black";
  }
  if(corPintura=="color cor2 selected"){
     pixelSelecionado.style.backgroundColor="red";
  }
  if(corPintura=="color cor3 selected"){
     pixelSelecionado.style.backgroundColor="green";
  }
  if(corPintura=="color cor4 selected"){
     pixelSelecionado.style.backgroundColor="blue";
  }
}
