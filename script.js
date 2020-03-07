
const selecOne = document.querySelectorAll('.pixel').length;
const selecTwo = document.querySelectorAll('.pixel');
const selecThree = document.querySelectorAll('.color').length;
const selecFour = document.querySelectorAll('.color');

function colorDef() {
  for (let i = 0; i < selecThree; i += 1) {
    const colors = ['black', 'red', 'green', 'blue'];
    selecFour[i].style.backgroundColor = colors[i];
    sessionStorage.setItem('color', selecFour[0].style.backgroundColor);
}
}

for (let i = 0; i < selecThree; i += 1) {
  colorDef();
  selecFour[i].addEventListener('click', function () {
  sessionStorage.setItem('color', selecFour[i].style.backgroundColor);
  });
}

for (let i = 0; i < selecOne; i += 1) {
  selecTwo[i].addEventListener('click', function () {
    selecTwo[i].style.backgroundColor = sessionStorage.color;
  });
}
