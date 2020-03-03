let cor = 'black';
const blocos = document.getElementsByClassName('pixel');
const paleta = document.getElementsByClassName('color');
const clear = document.getElementById('clear-board');

//https://www.w3schools.com/jsref/event_target.asp
//https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

function cls() {
  for (const a of blocos)
  clear.addEventListener('click', function() {
    a.style.background = 'white'
  });
}

function select() {
  for (const n of paleta) {
    n.addEventListener('click', function(e) {
      const pick = document.querySelector("#" + e.target.id);
      const selected = window.getComputedStyle(pick).getPropertyValue('background-color');
      cor = selected;

      c4 = document.getElementsByClassName('.selected');
      c5.style.backgroundColor = selected;
    });
  }
}

function paint() {
  for (const p of blocos)
      p.addEventListener('click', function () {
        p.style.background = cor;
  });
}

select();
paint();
cls();
