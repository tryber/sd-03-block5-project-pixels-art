window.onload = function() {

  sessionStorage.setItem('backgroundColor', 'black');

  let cores = document.getElementsByClassName('color');
  let cor = ["black","orange", "blue", "green"];

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

  const limpa = document.getElementById('botaolimpa');

  limpa.addEventListener('click', function() {
    for (let i = 0; i < pixel.length; i += 1)
    pixel[i].style.backgroundColor = 'white';
  })
};
