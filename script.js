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

    document.getElementById('pixel-board').remove();
    const pixel_board = document.createElement('article');
    pixel_board.id = 'pixel-board';
    document.getElementById('main').appendChild(pixel_board);

    if(number > 50 || number < 5){
      alert('Numero minimo: 5, numero máximo: 50');
      return false;
    }

   pixel_board.style.width = (number*5) * 10 + "px";

   for (let i = 0; i < number ** 2; i++) {
      let newdiv = document.createElement('div');
      newdiv.className = 'pixel';
      pixel_board.appendChild(newdiv);
    }

    pixels = document.querySelectorAll('.pixel');
  
    [].forEach.call(pixels, pixel => {
      pixel.addEventListener('click', () =>{
        pixel.style.backgroundColor = selected[0].getAttribute("id");
      });
    });

  }
  
  board(5);
  
  
let selected = document.getElementsByClassName('selected');


document.getElementById('clear-board').addEventListener('click', () => {
  [].forEach.call(pixels, pixel => {
      pixel.style.backgroundColor = 'white';
  });
});

document.getElementById('generate-board').addEventListener('click',() => {
  let qtdPixels = document.getElementById('board-size').value;
  board(qtdPixels);
});
