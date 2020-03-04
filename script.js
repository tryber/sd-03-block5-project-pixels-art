let colorSelector = document.getElementsByClassName('color');
let selectedColor = 'black';
let pixelColor = document.getElementsByClassName('pixel');
let clear = document.getElementById('clear-board');

sessionStorage.setItem('color', 'black');

// Seletor de cores - Paleta
let selectionPalette = function(e) {
    selectedColor = window.getComputedStyle( e.target ).getPropertyValue( 'background-color' )
    selectedColor = colorSelector.classList.add('selected');
    console.log(`a cor selecionada é ${selectedColor}`);
};

function clearBoard() {
  for (let i = 0; i < pixelColor.length; i += 1) {
    pixelColor[i].style.backgroundColor = 'white';
  };
}

window.onload = function () {
  for (let i = 0; i < colorSelector.length; i++) {
    colorSelector[i].addEventListener('click', selectionPalette, false)
  }

  for (let i = 0; i < pixelColor.length; i += 1) {
    pixelColor[i].addEventListener('click', function () {
      pixelColor[i].style.backgroundColor = selectedColor;
    });
  }

  clear.addEventListener('click', clearBoard());
}
