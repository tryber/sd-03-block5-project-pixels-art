function choseColor(event) {
  let color = event.target.classList[1];
  window.sessionStorage.setItem('color', color);
}

function Selected() {
  let last = document.getElementsByClassName('selected')[0];
  last.classList.remove('selected');
  event.target.classList.add('selected');
}

function insertColor(event) {
  let classColor = sessionStorage.color;
  event.target.style.backgroundColor = classColor;
}
