const matrizPixels = document.getElementsByTagName('td');
const cor1 = document.getElementById('cor01');
const cor2 = document.getElementById('cor02');
const cor3 = document.getElementById('cor03');
const cor4 = document.getElementById('cor04');

function selectCor() {
  /*  Para que tenha apenas uma cor com a classe 'selecionada', é necessário procurar a que tem 
  essa classe e remover antes para depois atribuir a classe à nova cor clicada.*/
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  this.classList.add('selected');
}

cor1.addEventListener('click', selectCor);
cor2.addEventListener('click', selectCor);
cor3.addEventListener('click', selectCor);
cor4.addEventListener('click', selectCor);
//  Colocando diretamente no HTML o evento onclick=(selectCor()) não funcionou

function geraRGB() {
  return (Math.floor(Math.random() * 256));
}

function geraPaleta() {
  cor2.style.backgroundColor = `rgb(${geraRGB()},${geraRGB()},${geraRGB()})`;
  cor3.style.backgroundColor = `rgb(${geraRGB()},${geraRGB()},${geraRGB()})`;
  cor4.style.backgroundColor = `rgb(${geraRGB()},${geraRGB()},${geraRGB()})`;
}

window.onload = function () { geraPaleta(); adicionaInteracao()};

function pixelPaint() {
  //  O elemento this neste caso se refere ao elemento (HTML) que chamou a função
  this.style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

function adicionaInteracao() {
  for (let i = 0; i < matrizPixels.length; i += 1) {
    matrizPixels[i].addEventListener('click', pixelPaint);
  }
}

//  Função que exclui a tabela anterior e gera uma nova no local
function geraGrade() {
  const dimensao = document.getElementById('board-size').value;
  if (dimensao > 4 && dimensao < 50) {
    document.getElementById('pixel-board').remove(self);
    const tabelaGerada = document.createElement('table');
    tabelaGerada.id = 'pixel-board';
    for (let numlinha = 0; numlinha < dimensao; numlinha += 1) {
      let linha = tabelaGerada.insertRow(numlinha);
      for (let numcoluna = 0; numcoluna < dimensao; numcoluna += 1) {
        linha.insertCell(numcoluna);
        linha.className = 'pixel';
      }
    }
    document.getElementsByClassName('grade')[0].appendChild(tabelaGerada);
    adicionaInteracao();
  } else {
    alert('Esqueci de falar, tem que estar entre 5 e 50!!');
  }
}

function limpaGrade() {
  for (let i = 0; i < matrizPixels.length; i += 1) {
    matrizPixels[i].style.backgroundColor = 'white';
  }
}
