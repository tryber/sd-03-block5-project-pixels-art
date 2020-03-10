let a = document.getElementsByClassName('selected')[0];

const coresDisponiveis = document.getElementsByClassName('color');
for (let i = 0; i < coresDisponiveis.length; i += 1) {
  coresDisponiveis[i].addEventListener('click', function () {
    a.classList.remove('selected');
    coresDisponiveis[i].classList.add('selected');
    a = document.getElementsByClassName('selected')[0];
  });
}

const aplicaCor = document.getElementsByClassName('pixel');
for (let i = 0; i < aplicaCor.length; i += 1) {
  aplicaCor[i].addEventListener('click', function () {
    aplicaCor[i].style.backgroundColor = document.getElementsByClassName('selected')[0].id;
  });
}
