const allPixels = document.querySelectorAll('.pixel').length;
const onePixel = document.querySelectorAll('.pixel');
const palette1 = document.querySelectorAll('.color')[0];
const palette2 = document.querySelectorAll('.color')[1];
const palette3 = document.querySelectorAll('.color')[2];
const palette4 = document.querySelectorAll('.color')[3];

palette1.style.backgroundColor = 'black';
palette2.style.backgroundColor = 'orange';
palette3.style.backgroundColor = 'purple';
palette4.style.backgroundColor = 'lightblue';

sessionStorage.setItem('color', 'black');
palette1.classList.add('selected');

palette1.addEventListener('click', function() {
  sessionStorage.setItem('color', palette1.style.backgroundColor);
});

palette2.addEventListener('click', function() {
  sessionStorage.setItem('color', palette2.style.backgroundColor);
});

palette3.addEventListener('click', function() {
  sessionStorage.setItem('color', palette3.style.backgroundColor);
});

palette4.addEventListener('click', function() {
  sessionStorage.setItem('color', palette4.style.backgroundColor);
});

for (let i = 0; i < allPixels; i++) {
  onePixel[i].addEventListener('click', function() {
    onePixel[i].style.backgroundColor = sessionStorage.color;
  });
}

let colors = document.querySelectorAll('.color');
for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', function() {
    document.querySelector('.selected').classList.remove('selected');
    colors[i].classList.add('selected');
  });
}
