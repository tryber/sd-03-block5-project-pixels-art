window.onload = function() {

  sessionStorage.setItem('backgroundColor', 'black');

  function corAleatoria () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let cor = `rgb(${r}, ${g}, ${b})`;
    return cor;
  }

  let cores = document.getElementsByClassName('color');
  let cor = ["black",corAleatoria(), corAleatoria(), corAleatoria()];

  for (let i = 0; i < cores.length; i += 1) {
    cores[i].style.backgroundColor = cor[i];
    cores[i].addEventListener('click', function() {
      const corAtual = cor[i];
      sessionStorage.setItem('backgroundColor', corAtual);

      const mudaSelected = document.getElementsByClassName('selected');
      mudaSelected[0].classList.remove('selected');
      cores[i].classList.add('selected');
    });
    }

  const pixel = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', function() {
      pixel[i].style.backgroundColor = sessionStorage.getItem('backgroundColor');
    });
  }

  const limpa = document.getElementById('clear-board');

  limpa.addEventListener('click', function() {
    for (let i = 0; i < pixel.length; i += 1)
    pixel[i].style.backgroundColor = 'white';
  })
};
