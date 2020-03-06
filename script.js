const cb = document.querySelectorAll('.color');
const b = document.querySelectorAll('.color').length;

const pixel = document.querySelectorAll('.pixel');
const qtpx = document.querySelectorAll('.pixel').length;

for (let i = 0; i < b; i++) {
    const cores = ['black', 'red', 'blue', 'green'];
 cb[i].style.backgroundColor = cores[i];
} cb[0].classList.add('selected');

sessionStorage.setItem('color', cb[0].style.backgroundColor);

for (let x = 0; x < b; x++) {
 cb[x].addEventListener('click', function() {
        document.querySelector('.selected').classList.remove('selected');
     cb[x].classList.add('selected');
        sessionStorage.setItem('color', cb[x].style.backgroundColor)
    })
}

for (let contador = 0; contador < qtpx; contador++) {
    pixel[contador].addEventListener('click', function() {
        pixel[contador].style.backgroundColor = sessionStorage.color;
    })

}
