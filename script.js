const cor1 = document.querySelector('.cor1');
const cor2 = document.querySelector('.cor2');
const cor3 = document.querySelector('.cor3');
const cor4 = document.querySelector('.cor4');

function selectColor(indicador) {
  if (indicador === 1) {
    cor1.className = 'color selected cor1';
    cor2.className = 'color cor2';
    cor3.className = 'color cor3';
    cor4.className = 'color cor4';
  } else if (indicador === 2) {
    cor1.className = 'color cor1';
    cor2.className = 'color selected cor2';
    cor3.className = 'color cor3';
    cor4.className = 'color cor4';
  } else if (indicador === 3) {
    cor1.className = 'color cor1';
    cor2.className = 'color cor2';
    cor3.className = 'color selected cor3';
    cor4.className = 'color cor4';
  } else if (indicador === 4) {
    cor1.className = 'color cor1';
    cor2.className = 'color cor2';
    cor3.className = 'color cor3';
    cor4.className = 'color selected cor4';
  }
}

cor1.addEventListener('click', function() {
  selectColor(1);
});

cor2.addEventListener('click', function() {
  selectColor(2);
});

cor3.addEventListener('click', function() {
  selectColor(3);
});

cor4.addEventListener('click', function() {
  selectColor(4);
});
