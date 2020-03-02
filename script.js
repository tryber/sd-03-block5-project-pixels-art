let actualColor = 'black';

function setColor(color) {
    actualColor = color
}


function paintPixel(id) {
    document.getElementById(id).style.backgroundColor = actualColor;
}