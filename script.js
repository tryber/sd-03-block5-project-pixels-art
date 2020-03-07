let cl = document.querySelectorAll('.color');
let pixel = document.querySelectorAll('.pixel');
let blackp = document.querySelector('.black');
let bluep = document.querySelector('.blue');
let redp = document.querySelector('.red');
let greenp = document.querySelector('.green');
let pixelBoard = document.querySelector('#pixel-board');
//selecionar a cor criando uma class
for (let i = 0; i < cl.length; i++) {
  
  cl[i].addEventListener('click', () => {

    for (let i = 0; i < cl.length; i++) {
        if (blackp.classList.contains('selected')) {
          blackp.className = 'color black';
        }if (bluep.classList.contains('selected')) {
          bluep.className = 'color blue';
        }if (redp.classList.contains('selected')) {
          redp.className = 'color red';
        }if (greenp.classList.contains('selected')) {
          greenp.className = 'color green';
        }
      }
      cl[i].className += ' selected';  

    });
  }

  for (let i = 0; i < pixel.length; i++) {

    pixel[i].addEventListener('click', () => {
      if(blackp.classList.contains('selected')) {
        pixel[i].style.backgroundColor = 'black';
      } if(bluep.classList.contains('selected')) {
        pixel[i].style.backgroundColor = 'blue';
      } if(redp.classList.contains('selected')) {
        pixel[i].style.backgroundColor = 'red';
      } if(greenp.classList.contains('selected')) {
        pixel[i].style.backgroundColor = 'green';
      }
  
      });
    }