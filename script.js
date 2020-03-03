
sessionStorage.color = 'black'
const n = 5;
function makeGrid(n) {
  const where = document.getElementById('pixel-board');
  where.appendChild(document.createElement('table'))
  for (let i = 0; i < n; i++) {
    let col = document.createElement('td');
    const table = document.getElementsByTagName('table')[0]
    col.id = 'col_' + JSON.stringify(i);

    table.appendChild(col)
    for (let j = 0; j < n; j++) {
      let row = document.createElement('div')
      row.className = 'pixel';
      row.id = 'pixel_' + i + '_' + j
      let td = document.getElementsByTagName('td')[i]
      td.appendChild(row)
    }
  }
}

makeGrid(n)
const buttons = document.getElementsByTagName('button')

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {

    for (let b = 0; b < buttons.length; b++ ){
      buttons[b].classList.remove('selected')
    } buttons[i].classList.add('selected')
    const selectedColor = buttons[i].style.backgroundColor;
    console.log(selectedColor);
    /*     for (let i in buttons){
          i.classList.remove("selected")}
          */
    sessionStorage.color = selectedColor;
    buttons[!i].classList.remove('selected')
  })
}
const pix = document.getElementsByClassName('pixel');

for (let i = 0; i < pix.length; i++) {
  pix[i].addEventListener('click', function () {
    pix[i].style.backgroundColor = sessionStorage.color;
    console.log(selectedColor)
  })
}
