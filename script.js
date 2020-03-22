window.onload = function() {
  let cores = ['black',colorGenerate(),colorGenerate(),colorGenerate()];
  let colors = document.getElementsByClassName('color');
  let pixelColor = document.getElementsByClassName('pixel');
  let clearBoard =document.getElementById('clear-board');
  let generateBoard =document.getElementById(`generate-board`);

  sessionStorage.setItem('Escolha','black');

  function colorGenerate(){
    let rand = `#`;
    for(var i=0;i<6;i++){
  rand += simbolo[Math.floor(Math.random()*16)];
    }
    return rand;
  }
  for (let i = 0; i < cores.length; i+=1) {
    colors[i].style.backgroundColor = cores[i];
    colors[i].addEventListener('click', function () {
        let selected = document.getElementsByClassName('selected');
        selected[0].classList.remove('selected');
        let corClicada = colors[i].style.backgroundColor;
        sessionStorage.setItem('Escolha', corClicada);
        colors[i].classList.add('selected');
    })
  }
  for (let i = 0; i < pixelColor.length; i+=1) {
    pixelColor[i].addEventListener('click', function () {
        pixelColor[i].style.backgroundColor = sessionStorage.getItem('Escolha');
    })
  }
  

}