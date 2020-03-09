let corSelecionada = document.getElementsByClassName("selected");
let coresDisponiveis = document.getElementsByClassName("color");
let aplicaCor = document.getElementsByClassName("pixel");
let i;
let j;

for (i = 0; i < 4; i++) {
    function selecionaNovaCor () {
        corSelecionada.classList.remove("selected");
        coresDisponiveis[i].classList.add("selected");
    }
    coresDisponiveis[i].addEventListener("click", selecionaNovaCor);
    for (j = 0; j < 25; j++) {
        function preencheCor () {
            aplicaCor[j].style.backgroundColor = corSelecionada.innerHTML;
        }
        aplicaCor[j].addEventListener("click", preencheCor);
    }
}