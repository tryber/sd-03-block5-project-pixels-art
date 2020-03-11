const palette = document.querySelectorAll('.color');
for (let i = 0; i < palette.length; i += 1) {
  palette[i].addEventListener('click', function() {
    document.querySelector('.selected').classList.remove('selected');
    palette[i].classList.add('selected');
  });
}

const pixel = document.querySelectorAll('.pixel');
for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', function() {
    let pixelColor = document.querySelector('.selected');
    pixel[i].style.backgroundColor = pixelColor.id;
  });
}

const clearButton = document.getElementById('clear-board');
function clear() {
  for (i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clear);
