const pixel_board = document.getElementById('pixel-board');


for (let i = 1; i <= 25; i++) {
    let newdiv = document.createElement('div');
    newdiv.className = 'pixel';
    pixel_board.append(newdiv);
    
    if (i%5 == 0) {
      let br = document.createElement('br');
      pixel_board.append(br) 
    }
}
