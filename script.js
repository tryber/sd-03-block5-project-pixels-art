let actualColor = 'black';


function setColor(color) {
    actualColor = color;

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
    console.log(a);
}