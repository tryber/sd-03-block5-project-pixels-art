let colorSelector = document.getElementsByClassName('color');
let selectedColor;
const pixelColor = document.getElementsByClassName('pixel');
let i = 0;

sessionStorage.setItem('color', 'black');

// Seletor de cores - Paleta
const selectionPalette = function (e) {
  selectedColor = window.getComputedStyle(e.target).getPropertyValue('background-color')
};

window.onload = function () {
  for (i < colorSelector.length; i+= 1) {
    colorSelector[i].addEventListener('click', selectionPalette, false);
  };

  for (i < pixelColor.length; i += 1) {
    pixelColor[i].addEventListener('click', function () {
      pixelColor[i].style.backgroundColor = selectedColor;
    });
  };
}
