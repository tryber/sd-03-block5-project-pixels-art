function limpa() {
    const quadro = document.getElementsByClassName('pixel ');
    for (let i = 0; i < quadro.length; i += 1) {
      quadro[i].style.backgroundColor = 'white';
    }
  }
  