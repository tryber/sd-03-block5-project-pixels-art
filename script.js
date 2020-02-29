const pixel_board = document.getElementById('pixel-board');
const pixels = document.querySelectorAll('.pixel');
let selected = document.getElementsByClassName('selected');
let colors_pallet = document.querySelectorAll('.color');

  for (let i = 0; i < colors_pallet.length; i++) {

    colors_pallet[i].addEventListener('click', function(){

      for (let i = 0; i < colors_pallet.length; i++) {
        if (colors_pallet[i].classList.contains('selected')) {
          colors_pallet[i].className = 'color';
        }
      }
      colors_pallet[i].className = 'color selected';

    });
  }
  

//Criando pixels
for (let i = 0; i < 25; i++) {
  let newdiv = document.createElement('div');
  newdiv.className = 'pixel';
  pixel_board.append(newdiv);
}

