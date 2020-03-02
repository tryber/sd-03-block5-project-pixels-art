let cl = document.querySelectorAll('.color');
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