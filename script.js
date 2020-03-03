let actualColor = 'black';

function setColor(color) {
    actualColor = color
}

function paintPixel(id) {
    let paintedPixel = document.getElementById(id);
    paintedPixel.style.backgroundColor = actualColor;
    paintedPixels.classList.add("selected");

}

function clearBoard() {
    let limpaQuadro = 'white';
    document.querySelector('.pixel').style.backgroundColor = limpaQuadro;
}