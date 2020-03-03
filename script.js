let actualColor = 'black';

function setColor(color) {
    actualColor = color
}


function paintPixel(id) {
    document.getElementById(id).style.backgroundColor = actualColor;
}

function clearBoard() {
    let limpaQuadro = 'white';
    document.querySelector('.pixel').style.backgroundColor = limpaQuadro;
}