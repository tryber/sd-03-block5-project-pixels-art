
sessionStorage.color = 'black'
let n = 5;
function makeGrid(tamanho) {
  const onde = document.getElementById('pixel-board');
  onde.appendChild(document.createElement('table'))
  for (let i = 0; i < tamanho; i++) {
    let row = document.createElement('tr');
    const table = document.getElementsByTagName('table')[0]
    row.id = 'row_' + JSON.stringify(i);

    table.appendChild(row)
    for (let j = 0; j < tamanho; j++) {
      let dot = document.createElement('td')
      dot.className = 'pixel';
      dot.id = 'pixel_' + i + '_' + j
      let tr = document.getElementsByTagName('tr')[i]
      tr.appendChild(dot)
    }
  }
}
makeGrid(n)
const buttons = document.getElementsByTagName('button')

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {

    for (let b = 0; b < buttons.length; b++) {
      buttons[b].classList.remove('selected')
    } buttons[i].classList.add('selected')
    const selectedColor = buttons[i].style.backgroundColor;
    sessionStorage.color = selectedColor;
  })
}
const pix = document.getElementsByClassName('pixel');

for (let i = 0; i < pix.length; i++) {
  pix[i].addEventListener('click', function () {
    pix[i].style.backgroundColor = sessionStorage.color;
  })
}
document.getElementById('clear-board').addEventListener('click', function () {
  for (let i = 0; i < pix.length; i++) {
    pix[i].style.backgroundColor = 'white'
  }
})
const size = document.getElementById('board-size');
document.getElementById('generate-board').addEventListener('click', function(){
 n = Number(size.value)
 console.log(n, size.value)
 document.getElementsByTagName('table')[0].remove()
 makeGrid(n)
 for (let i = 0; i < pix.length; i++) {
  pix[i].addEventListener('click', function () {
    pix[i].style.backgroundColor = sessionStorage.color;
  })
}
sessionStorage.color = 'black'
})
