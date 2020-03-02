document.getElementById('cor01').addEventListener('click', selectCor);
document.getElementById('cor02').addEventListener('click', selectCor);
document.getElementById('cor03').addEventListener('click', selectCor);
document.getElementById('cor04').addEventListener('click', selectCor);
//Colocando no HTML não funcionou usando evento onclick=(selectCor()).

let i, matrizPixels = document.getElementsByClassName('pixel');

for (i = 0 ; i < 25 ; i+=1)
{
    matrizPixels[i].addEventListener('click', pixelPaint);
}

function pixelPaint() {
    //O elemento this neste caso se refere ao elemento (HTML) que chamou a função
    this.style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

function selectCor() {
    //Para que tenha apenas uma cor com a classe 'selecionada', é necessário procurar a que tem essa classe e remover antes para depois atribuir a classe à nova cor clicada.
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    console.log("A cor selecionada é " + this.style.backgroundColor);
    this.classList.add('selected');
}

function limpaGrade() {
    for (i = 0 ; i < 25 ; i+=1)
        matrizPixels[i].style.backgroundColor = "white";
}