window.onload=function(){
    let cores = ['black','blue','red','yellow'];
    let paleta = document.getElementsByClassName('color');
    let pixelColor = document.getElementsByClassName('pixel');
    sessionStorage.setItem('Escolha','black');

    for (let i = 0; i < cores.length; i+=1) {
        paleta[i].style.backgroundColor = cores[i];
        paleta[i].addEventListener('click', function () {
        let selected = document.getElementsByClassName('selected');
        selected[0].classList.remove('selected');
        let corClicada = paleta[i].style.backgroundColor;
        sessionStorage.setItem('Escolha', corClicada);
        paleta[i].classList.add('selected');
        })
    }

    for (let i = 0; i < pixelColor.length; i+=1) {
        pixelColor[i].addEventListener('click', function () {
            pixelColor[i].style.backgroundColor = sessionStorage.getItem('Escolha');
        })
    } 

  
}
