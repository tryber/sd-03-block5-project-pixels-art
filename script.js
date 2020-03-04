let pixel_board = document.getElementById('pixel-board');
let colors_pallet = document.querySelectorAll('.color');
let pixels;

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
  
  //Criando quadro de pixels
  function board(number){

    if(number > 50){
      alert('Numero maior que 50 não é permitido.');
      return false;
    }

    let qtdPixelsFuturo = number ** 2;
    let qtdPixelsAtual = document.querySelectorAll('.pixel').length;
    
   pixel_board.style.width = (number*5) * 10 + "px";

   for (let i = 0; i < qtdPixelsFuturo; i++) {
     if( qtdPixelsAtual >=  number**2){
       break;
      }
      let newdiv = document.createElement('div');
      newdiv.className = 'pixel';
      pixel_board.append(newdiv);
    }


    while(document.querySelectorAll('.pixel').length > number**2){
      document.querySelector('.pixel').parentNode.removeChild(document.querySelector('.pixel'));
    }

    pixels = document.querySelectorAll('.pixel');
  
    [].forEach.call(pixels, pixel => {
      pixel.addEventListener('click', function(){
         pixel.style.backgroundColor = selected[0].getAttribute("id");
      });
    });

  }
  
  board(5);
  
  
let selected = document.getElementsByClassName('selected');


document.getElementById('clear-board').addEventListener('click', function(){
  [].forEach.call(pixels, pixel => {
      pixel.style.backgroundColor = 'white';
  });
});

document.getElementById('generate-board').addEventListener('click', function(){
  let qtdPixels = document.getElementById('board-size').value;
  board(qtdPixels);
});
