let colorSelector = document.getElementsByClassName('color');
let selectedColor;
let pixelColor = document.getElementsByClassName('pixel') 

sessionStorage.setItem('color', 'black');

// Seletor de cores - Paleta
let selectionPalette = function(e) {
    selectedColor = window.getComputedStyle( e.target ).getPropertyValue( 'background-color' )
    console.log(`a cor selecionada é ${selectedColor}`)
};

window.onload = function () {
  for (var i = 0; i < colorSelector.length; i++) {
    colorSelector[i].addEventListener('click', selectionPalette, false)
  }

  for (let i = 0; i < pixelColor.length; i += 1) {
    pixelColor[i].addEventListener('click', function () {
      pixelColor[i].style.backgroundColor = selectedColor;
    });
  }
}
