var i, 
paletaCor01 = document.getElementById('cor01'),
paletaCor02 = document.getElementById('cor02'),
paletaCor03 = document.getElementById('cor03'),
paletaCor04 = document.getElementById('cor04');

paletaCor01.addEventListener('click', selectCor1);
paletaCor02.addEventListener('click', selectCor2);
paletaCor03.addEventListener('click', selectCor3);
paletaCor04.addEventListener('click', selectCor4);

let matrizPixels = document.getElementsByClassName('pixel');

for (i = 0 ; i < 25 ; i+=1)
{
    matrizPixels[i].addEventListener('click', pixelPaint);
}


function pixelPaint() {
    let corSelecionada = document.getElementsByClassName('selected')[0].style.backgroundColor;
//    quadrado.style.backgroundColor = corSelecionada;
    console.log('Quadrado pintado com a cor ' + corSelecionada);
}

//Para que tenha apenas uma cor com a classe 'selecionada', é necessário procurar a que tem essa classe e remover antes para depois atribuir a classe à nova cor clicada.
function selectCor1() {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    console.log("A cor selecionada é a preta");
    paletaCor01.classList.add('selected');
}

function selectCor2() {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    console.log("A cor selecionada é a vermelha");
    paletaCor02.classList.add('selected');
}

function selectCor3() {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    console.log("A cor selecionada é a azul");
    paletaCor03.classList.add('selected');
}

function selectCor4() {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    console.log("A cor selecionada é a verde");
    paletaCor04.classList.add('selected');
}
