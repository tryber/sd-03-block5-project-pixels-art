let currentColor = 'black';

function getColor(color, id) {
    // Changes current color (for painting)
    currentColor = color;
    // Remove 'selected' class from all colors on palette
    const allColors = document.getElementsByClassName('color');
    for (i in allColors) {
        allColors[i].className = 'color';
    }
    // Add 'selected' to current color on palette
    let selectedColor = document.getElementById(id);
    selectedColor.classList.add('selected')
}

const pixels = document.getElementsByClassName('pixel');

function paintPixel(i) {
    pixels[i].style.backgroundColor = currentColor;
}

function clearArt() {
    for (i in pixels) {
        pixels[i].style.backgroundColor = 'white';
    }
}
