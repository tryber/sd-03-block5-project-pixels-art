let cl = document.querySelectorAll('.color');
let pixel = document.querySelector('.pixel');
//selecionar a cor criando uma class
for (let i = 0; i < cl.length; i++) {

  cl[i].addEventListener('click', function(){

    for (let i = 0; i < cl.length; i++) {
        if (cl[i].classList.contains('selected')) {
          cl[i].className = 'color';
        }
      }
      cl[i].className = 'color selected';

    });
  }

  pixel.addEventListener("click", function() {
    pixel.style.backgroundColor = 'rgb(000, 000, 000)'
  })