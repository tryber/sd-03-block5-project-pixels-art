sessionStorage.setItem('backgroundColor', 'black');

function corAleatoria () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const cor = `rgb(${r}, ${g}, ${b})`;
  return cor;
}

const cores = document.getElementsByClassName('color');
const cor = ['black', corAleatoria(), corAleatoria(), corAleatoria()];

for (let i = 0; i < cores.length; i += 1) {
  cores[i].style.backgroundColor = cor[i];

  cores[i].addEventListener('click', function () {
    const corAtual = cor[i];
    sessionStorage.setItem('backgroundColor', corAtual);
    const mudaSelected = document.getElementsByClassName('selected');
    mudaSelected[0].classList.remove('selected');
    cores[i].classList.add('selected');
  });
  }

const pixel = document.getElementsByClassName('pixel');

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', function () {
    pixel[i].style.backgroundColor = sessionStorage.getItem('backgroundColor');
  });
}

const limpa = document.getElementById('clear-board');

limpa.addEventListener('click', function () {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  };
});
