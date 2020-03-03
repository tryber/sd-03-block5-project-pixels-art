// Cores selecionaveis
const paleta = [
    document.getElementById('preto').backgroundColor = 'black',
    document.getElementById('vermelho').backgroundColor = 'red',
    document.getElementById('roxo').backgroundColor = 'purple',
    document.getElementById('cyano').backgroundColor = 'darkCyan',
];
const cores = document.querySelectorAll('.color').length;
const cor = document.querySelectorAll('.color');

for (let i in paleta.length) {
    cor[i].style.backgroundColor = paleta[i];
}

cor[0].classList.add('selected');
sessionStorage.setItem('color', cor[0].style.backgroundColor);
for (let i = 0; i < cores; i += 1) {
    cor[i].addEventListener('click', function () {
        document.querySelector('.selected').classList.remove('selected');
        cor[i].classList.add('selected');
        sessionStorage.setItem('color', cor[i].style.backgroundColor);
    });
}

const caixasBranca = document.querySelectorAll('.pixel').length;
const caixa = document.querySelectorAll('.pixel');

for (let i = 0; i < caixasBranca; i += 1) {
    caixa[i].addEventListener('click', function () {
        caixa[i].style.backgroundColor = sessionStorage.color;
    });
}
