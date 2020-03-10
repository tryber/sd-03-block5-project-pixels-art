let coresDisponiveis = document.querySelectorAll('.color');
for (let i = 0; i < coresDisponiveis.length; i += 1) {
    coresDisponiveis[i].addEventListener('click', function() {
        document.querySelector('.selected').classList.remove('selected');
        coresDisponiveis[i].classList.add('selected');
    });
}

let aplicaCor = document.querySelectorAll('.pixel');
for (let i = 0; i < aplicaCor.length; i += 1) {
    aplicaCor[i].addEventListener('click', function() {
        aplicaCor[i].style.backgroundColor = document.querySelector('.selected').id;
    });
}
