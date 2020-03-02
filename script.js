function cor1() {
  const color = 'black';
  return color;
}

function cor2() {
  const color = 'red';
  return color;
}

function cor3() {
  const color = 'blue';
  return color;
}

function cor4() {
  const color = 'green';
  return color;
}

// function paint() {
//   for (let i=1; i<=25; i++) {
//     const pixel = document.getElementById(`p${i}`);
//     pixel.style.backgroundColor = cor1();
//   }
// }

const c1 = document.getElementById('c1');
c1.addEventListener('click', cor1);

const c2 = document.getElementById('c2');
c2.addEventListener('click', cor2);

const c3 = document.getElementById('c3');
c3.addEventListener('click', cor3);

const c4 = document.getElementById('c4');
c4.addEventListener('click', cor4);

const tam = document.getElementById('board-size');
tam.addEventListener('change', ctam);

function ctam() {
  p1 = document.getElementsByClassName('pixel');
  for (i=0; i<25; i+=1) {
    p1[i].style.width = tam.value+"px";
    p1[i].style.height = tam.value+"px";
  }
}
