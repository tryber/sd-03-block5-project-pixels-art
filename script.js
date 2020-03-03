let colorSelector = document.getElementsByClassName('color');
let selectedColor;

// Seletor de cores - Paleta
let selectionPalette = function(e) {
    selectedColor = e.target.style.backgroundColor
    console.log(`a cor selecionada é ${selectedColor}`)
};

window.onload = function () {
  for (var i = 0; i < colorSelector.length; i++) {
    colorSelector[i].addEventListener('click', selectionPalette, false)
  }
}
