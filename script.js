let actualColor = 'black';

function setColor(color, id) {
    actualColor = color;
    document.querySelector('.selected').classList.remove('selected');
    document.getElementById(id).classList.add('selected');

}

function paintPixel(id) {
    let paintedPixel = document.getElementById(id);
    paintedPixel.style.backgroundColor = actualColor;
}

function clearBoard() {
    let a = document.querySelectorAll('.pixel');
    for (i = 0; i < a.length; i++) {
        a[i].style.backgroundColor = 'white';
    }
}