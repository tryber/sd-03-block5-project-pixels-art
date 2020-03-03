let actualColor = 'black';

function setColor(color) {
    actualColor = color
}

function paintPixel(id) {
    let paintedPixel = document.getElementById(id);
    paintedPixel.style.backgroundColor = actualColor;
}

function clearBoard() {
    let limpaQuadro = 'white';
    document.querySelector('.pixel').style.backgroundColor = limpaQuadro;
}