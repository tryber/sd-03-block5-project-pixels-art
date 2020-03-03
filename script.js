let colorArr = document.getElementsByClassName('color');

let pixelArr = document.getElementsByClassName('pixel');

let clearBtn = document.getElementById('clear-board');

for (i = 0; i<colorArr.length; i+= 1) {
    colorArr[i].addEventListener('click', select);
}

for (i = 0; i < pixelArr.length; i += 1) {
    pixelArr[i].addEventListener('click', paint);
}

clearBtn.addEventListener('click', clear);

function select () {
    for (i = 0; i < colorArr.length; i+= 1) {
        colorArr[i].className = 'color';
    }
    event.target.className = 'color selected'
}

function paint() {
    let color = document.querySelector('.selected');
    
    event.target.style.backgroundColor = color.id;
}

function clear() {
    for (i = 0; i < pixelArr.length; i+= 1) {
        pixelArr[i].style.backgroundColor = 'white';
    }
}