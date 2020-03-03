const allColors = document.getElementsByClassName('color');
let currentColor = 'black';

function getColor(color, option) {
    // Changes current color (for painting)
    let selectedColor = document.getElementById(option);
    currentColor = color;
    // Remove 'selected' class from all colors
    for (i in allColors) {
        allColors[i].className = 'color';
    }
    // Add 'selected' to current color
    selectedColor.classList.add('selected')
}

function paintPixel(id) {
    let clickedPixel = document.getElementById(id);
    clickedPixel.style.backgroundColor = currentColor;
}
