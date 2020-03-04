/*function mudaParaVermelho(td) {
  td.style.backgroundColor = "#FF0F0F";
}

function mudaParaAmarelo(td) {
  td.style.backgroundColor = "#FFFA00";
}

function mudaParaAzul(td) {
  td.style.backgroundColor = "#0000ff";
}

function mudaParaPreto(td) {
  td.style.backgroundColor = "#000000";
}
*/


  const section = document.querySelectorAll('.color');
  for (let i = 0; i < section.length; i+=1){
  section[i].addEventListener('click', function (event){
    const selectedColor = document.querySelector('.selected1');
    selectedColor.innerText = event.target.className;
    document.querySelector('.selected').classList.remove('selected');
    section[i].classList.add('selected');
  }) 
};
const cor = document.querySelector('.selected').backgroundColor;
const celula = document.querySelectorAll('.pixel');
for (let i = 0; i < celula.length; i+=1){
celula[i].addEventListener('click', function(){
celula[i].style.backgroundColor = cor;
});
};
