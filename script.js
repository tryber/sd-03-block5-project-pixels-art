 function escolher_Cor(acao) {
  const cor = acao.target.style.backgroundColor;
  window.sessionStorage.setItem('color', cor);
}

function selecionar() {
  const ultima = document.getElementsByClassName('selected')[0];
  ultima.classList.remove('selected');
  acao.target.classList.add('selected');
}

function colocar_Cor(acao) {
  const selecionarCor = sessionStorage.color;
  acao.target.style.backgroundColor = selecionarCor;
}



function excluir_Quadrado() {
  const linhas = document.getElementsByTagName('tr');

  for (let index = (linhas.length - 1); index >= 0; index -= 1) {
    linhas[index].remove();
  }
}

function construir_Quadrado(usuario) {
  const estrutura = document.getElementById('pixel-board').firstElementChild;

  for (let index_Linha = 0; index_Linha < usuario; index_Linha += 1) {
    const linha = document.createElement('tr');
    linha.classList.add('quadrados');

    for (let index_Coluna = 0; index_Coluna < usuario; index_Coluna += 1) {
      const unidade = document.createElement('td');
      unidade.classList.add('pixel');

      linha.appendChild(unidade);
    }
    estrutura.appendChild(linha);
  }
}

function cor_Aleatoria() {
  const vermelho = String(Math.floor(Math.random() * 256));
  const azul = String(Math.floor(Math.random() * 256));
  const verde = String(Math.floor(Math.random() * 256));
 
  return (`rgb(${vermelho} , ${azul} , ${verde})`);
}

function entrar_Cor() {
  const cores = document.querySelectorAll('.color');

  for (let index = 0; index < cores.length; index += 1) {
    if (index > '0' && index < cores.length) {
      cores[index].style.backgroundColor = cor_Aleatoria();
    } else if (index === 0) {
      cores[index].style.backgroundColor = 'black';
    }
  }
}

window.onload = carregar();

function carregar() {
  const cores = document.getElementById('color-palette');
  cores.addEventListener('click', escolher_Cor);
  cores.addEventListener('click', selecionar);
  window.sessionStorage.setItem('color', 'black');

  const quadrado = document.getElementById('pixel-board');
  quadrado.addEventListener('click', colocar_Cor);

  entrar_Cor();
}