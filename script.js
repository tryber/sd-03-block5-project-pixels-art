let corAtual;
const pixels = document.querySelectorAll('.pixel');
const colorir = document.querySelectorAll('.color');
const optCores = ['black', 'red', 'orange', 'yellow'];

for (let i = 0; i < colorir.length; i++) {
    // cria o evento de click na lista colorir
    colorir[i].addEventListener('click', function porCor(event) {
        // remove todas a classe selected existente
        for (let e = 0; e < colorir.length; e++) {
            colorir[e].classList.remove('selected');
        };
        // adiciona a classe salected no clicado
        event.target.classList.add('selected');
        // cria a cor atual
        corAtual = optCores[i];
        // sobe a corAtual para o localStorage
        localStorage.setItem('corAtual', corAtual);
    },);
}
corAtual = localStorage.getItem('corAtual');
for (let i = 0; i < pixels.length; i++) {
    // cria o evento de click na lista pixels
    pixels[i].addEventListener("click", function px(event) {
        // alterar o background para o selacted
        event.target.style.backgroundColor = corAtual;
    },);
}
