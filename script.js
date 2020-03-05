function limpa() {
    const quadro = document.getElementsByClassName('pixel ');
    for (let i = 0; i < quadro.length; i += 1) {
      quadro[i].style.backgroundColor = 'white';
    }
  }
  
  let corPintura = 'ctdblack selected';
  const selecionaCor = function () {
    const corSelecionada = event.srcElement;
    document.getElementsByClassName('tdblack')[0].className = 'color tdblack';
    document.getElementsByClassName('tdyellow')[0].className = 'color tdyellow';
    document.getElementsByClassName('tdblue')[0].className = 'color tdblue';
    document.getElementsByClassName('tdgreen')[0].className = 'color tdgreen';
    if (document.getElementsByClassName('tdblack')[0] === corSelecionada) {
      corSelecionada.className += ' selected';
    } else if (document.getElementsByClassName('tdyellow')[0] === corSelecionada) {
      corSelecionada.className += ' selected';
    } else if (document.getElementsByClassName('tdblue')[0] === corSelecionada) {
      corSelecionada.className += ' selected';
    } else if (document.getElementsByClassName('tdgreen')[0] === corSelecionada) {
      corSelecionada.className += ' selected';
    }
    corPintura = corSelecionada.className;
  };

  for (let i = 0; i < paletteButons.length; i += 1) {
    paletteButons[i].addEventListener('click', selecionaCor);
  }