const allPixels = document.querySelectorAll('.pixel').length;
const onePixel = document.querySelectorAll('.pixel');
const allPalettes = document.querySelectorAll('.color').length;
const onePalette = document.querySelectorAll('.color');

function defineColorPalette() {
  for (i = 0; i < allPalettes; i++) {
    const colors = ['black', 'orange', 'purple', 'lightblue'];
    onePalette[i].style.backgroundColor = colors[i];
  }
}

sessionStorage.setItem('color', 'black');
onePalette[0].classList.add('selected');

for (let i = 0; i < allPalettes; i++) {
  defineColorPalette();
  onePalette[i].addEventListener('click', function() {
    document.querySelector('.selected').classList.remove('selected');
    onePalette[i].classList.add('selected');
    sessionStorage.setItem('color', onePalette[i].style.backgroundColor);
  });
}

for (let i = 0; i < allPixels; i++) {
  onePixel[i].addEventListener('click', function() {
    onePixel[i].style.backgroundColor = sessionStorage.color;
  });
}
