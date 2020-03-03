const paletaDeCores = document.getElementById('color-palette');

function backgroundColorPaletaDeCores() {
  for (let i = 0; i < paletaDeCores.children.length; i += 1) {
    paletaDeCores.children[i].style.backgroundColor = paletaDeCores.children[i].id;
  }
}

backgroundColorPaletaDeCores();
