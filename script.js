let classColor = document.getElementsByClassName('color');
let classPixel = document.getElementsByClassName('pixel');
let setColor = 'black';

// sessionStorage.setItem('color', 'black');

// Seletor de cores - Paleta
let selectionPalette = function(event) {
    setColor = window.getComputedStyle( event.target ).getPropertyValue( 'background-color');

    for (let i = 0; i < classColor.length; i += 1) {
        classColor[i].classList.remove('selected');
    };
    console.log(setColor)
    event.target.classList.add('selected');
};

window.onload = function () {
    for (let i = 0; i < classColor.length; i++) {
        classColor[i].addEventListener('click', selectionPalette, false)
    }

    for (let i = 0; i < classPixel.length; i += 1) {
        classPixel[i].addEventListener('click', function () {
            classPixel[i].style.backgroundColor = setColor;
        });
    }
}