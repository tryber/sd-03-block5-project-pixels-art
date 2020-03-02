// Get each pallete position
const allColors = document.querySelectorAll('.color');
const pallete1 = document.querySelectorAll('.color')[0];
const pallete2 = document.querySelectorAll('.color')[1];
const pallete3 = document.querySelectorAll('.color')[2];
const pallete4 = document.querySelectorAll('.color')[3];
const clearAll = document.querySelectorAll('#clear-board')[0];

// Set default selected color as black
sessionStorage.setItem('color', 'black');
allColors[0].className += ' selected';

// Set collors initially
pallete1.style.backgroundColor = 'black';
pallete2.style.backgroundColor = 'red';
pallete3.style.backgroundColor = 'blue';
pallete4.style.backgroundColor = 'grey';

// Color selector
pallete1.addEventListener('click', function() {
  sessionStorage.setItem('color', 'black');
  for (let i = 0; i < allColors.length; i += 1) {
    if (i === 0) {
      allColors[i].className += ' selected';
    } else {
      allColors[i].className = 'color';
    }
  }
});
pallete2.addEventListener('click', function() {
  sessionStorage.setItem('color', 'red');
  for (let i = 0; i < allColors.length; i += 1) {
    if (i === 1) {
      allColors[i].className += ' selected';
    } else {
      allColors[i].className = 'color';
    }
  }
});
pallete3.addEventListener('click', function() {
  sessionStorage.setItem('color', 'blue');
  for (let i = 0; i < allColors.length; i += 1) {
    if (i === 2) {
      allColors[i].className += ' selected';
    } else {
      allColors[i].className = 'color';
    }
  }
});
pallete4.addEventListener('click', function() {
  sessionStorage.setItem('color', 'grey');
  for (let i = 0; i < allColors.length; i += 1) {
    if (i === 3) {
      allColors[i].className += ' selected';
    } else {
      allColors[i].className = 'color';
    }
  }
});

// Pixel detection
const getPixel = document.querySelectorAll('.pixel');
const pixelSize = document.querySelectorAll('.pixel').length;

// Set initial pixel colors to white
for (let i = 0; i < pixelSize; i += 1) {
  getPixel[i].style.backgroundColor = 'white';
}

for (let i = 0; i < pixelSize; i += 1) {
  getPixel[i].addEventListener('click', function() {
    getPixel[i].style.backgroundColor = sessionStorage.color;
  });
}

// Clear all pixels
clearAll.addEventListener('click', function() {
  for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = 'white';
  }
})