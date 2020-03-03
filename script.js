const backColor = document.querySelectorAll('.color');
const back = document.querySelectorAll('.color').length;

const pixeL = document.querySelectorAll('.pixel');
const tpixel = document.querySelectorAll('.pixel').length;

for (let i = 0; i < back; i++) {
    const cores = ['black', 'red', 'blue', 'green'];
    backColor[i].style.backgroundColor = cores[i];
}
backColor[0].classList.add('selected');

sessionStorage.setItem('color', backColor[0].style.backgroundColor);

for (let elemento = 0; elemento < back; elemento++) {
    backColor[elemento].addEventListener('click', function() {
        document.querySelector('.selected').classList.remove('selected');
        backColor[elemento].classList.add('selected');
        sessionStorage.setItem('color', backColor[elemento].style.backgroundColor)
    })
}

for (let cont = 0; cont < tpixel; cont++) {
    pixeL[cont].addEventListener('click', function() {
        pixeL[cont].style.backgroundColor = sessionStorage.color;
    })

}