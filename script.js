const pixel_board = document.getElementById('pixel-board');
const columns = document.querySelectorAll('.colum');


for (let i = 0; i < 25; i++) {
  let newdiv = document.createElement('div');
  newdiv.className = 'pixel';
  pixel_board.append(newdiv);
}

const pixels = document.querySelectorAll('.pixel');
console.log(pixels.length);