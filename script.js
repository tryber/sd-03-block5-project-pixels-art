const matrizPixels = document.getElementsByClassName('pixel');

for (let i = 0; i < 25; i += 1) {
  matrizPixels[i].addEventListener('click', pixelPaint);
}

function pixelPaint() {
  //  O elemento this neste caso se refere ao elemento (HTML) que chamou a função
  this.style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

function selectCor() {
  /*  Para que tenha apenas uma cor com a classe 'selecionada', é necessário procurar a que tem 
  essa classe e remover antes para depois atribuir a classe à nova cor clicada.*/
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  console.log("A cor selecionada é " + this.style.backgroundColor);
  this.classList.add('selected');
}

function geraGrade() {
  //Função que exclui a tabela anterior e gera uma nova no local
  var dimensao = document.getElementById("cxLinhasColunas").value;
  if (dimensao > 5 && dimensao < 50) {
    document.getElementById("pixel-board").remove(self);
    var tabelaGerada = document.createElement("table");
    tabelaGerada.classList.add("pixel-board");
    for (let numlinha = 0; numlinha < dimensao; numlinha++) {
      var linha = tabelaGerada.insertRow(numlinha);
      for (let numcoluna = 0; numcoluna < dimensao; numcoluna++)
        linha.insertCell(numcoluna);
    }
    document.body.appendChild(tabelaGerada);
  }
  else
    alert("Esqueci de falar, tem que estar entre 5 e 50!!");
}

document.getElementById('cor01').addEventListener('click', selectCor);
document.getElementById('cor02').addEventListener('click', selectCor);
document.getElementById('cor03').addEventListener('click', selectCor);
document.getElementById('cor04').addEventListener('click', selectCor);
//  Colocando no HTML o evento onclick=(selectCor()) não funcionou

function limpaGrade() {
  for (i = 0; i < 25; i += 1)
    matrizPixels[i].style.backgroundColor = "white";
}
