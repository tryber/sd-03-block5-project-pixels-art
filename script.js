// Get each pallete position
let allColors = document.querySelectorAll('.color');
let pallete1 = document.querySelectorAll('.color')[0];
let pallete2 = document.querySelectorAll('.color')[1];
let pallete3 = document.querySelectorAll('.color')[2];
let pallete4 = document.querySelectorAll('.color')[3];
let clearAll = document.querySelectorAll('#clear-board')[0];
let allPixels = document.querySelectorAll('.pixel');
let getButton = document.querySelectorAll('button')[1];
let getInput = document.querySelector('input');

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
let getPixel = document.querySelectorAll('.pixel');
let pixelSize = document.querySelectorAll('.pixel').length;

// Set initial pixel colors to white
for (let i = 0; i < pixelSize; i += 1) {
  getPixel[i].style.backgroundColor = 'white';
}

function detectarCores() {
  for (let i = 0; i < pixelSize; i += 1) {
    console.log(pixelSize);
    getPixel[i].addEventListener('click', function() {
      getPixel[i].style.backgroundColor = sessionStorage.color;
    });
  }
}
detectarCores();


// Clear all pixels
clearAll.addEventListener('click', function() {
  for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = 'white';
  }
});

function criaClique(event) {
  event.target.style.backgroundColor = sessionStorage.color;
}

// Validate number between 5 and 50
function verificarValidez() {
  console.log(event.target.innerText);
  if (getInput.value < 5) {
    alert('Valor menor que 5, considerar 5 como padrão');
  } else if (getInput.value > 50) {
    alert('Valor maior que 50, considerar 50 como padrão.');
  } else {
    getPixelBoard.innerHTML = '';
    let numCaixas = getInput.value * getInput.value;
    for (let i = 0; i < numCaixas; i += 1) {
      let createDiv = document.createElement('div');
      createDiv.className = 'pixel';
      getPixelBoard.appendChild(createDiv);
      createDiv.addEventListener('click', criaClique);
    }
    getPixel = document.querySelectorAll('.pixel');
    getPixelBoard.style.height = getInput.value * 40 + 'px';
    getPixelBoard.style.width = getInput.value * 42 + 'px';
  }
}

// Create your own pixels
let getPixelBoard = document.querySelectorAll('section')[1];
getButton.addEventListener('click', verificarValidez);
