const allPixels = document.querySelectorAll('.pixel').length;
const onePixel = document.querySelectorAll('.pixel');
const allPalettes = document.querySelectorAll('.color').length;
const onePalette = document.querySelectorAll('.color');

function defineColorPalette() {
  for (let i = 0; i < allPalettes; i += 1) {
    const colors = ['black', 'orange', 'purple', 'blue'];
    onePalette[i].style.backgroundColor = colors[i];
  }
}

onePalette[0].classList.add('selected');
sessionStorage.setItem('color', onePalette[0].style.backgroundColor);

for (let i = 0; i < allPalettes; i += 1) {
  defineColorPalette();
  onePalette[i].addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    onePalette[i].classList.add('selected');
    sessionStorage.setItem('color', onePalette[i].style.backgroundColor);
  });
}

for (let i = 0; i < allPixels; i += 1) {
  onePixel[i].addEventListener('click', function () {
    onePixel[i].style.backgroundColor = sessionStorage.color;
  });
}
