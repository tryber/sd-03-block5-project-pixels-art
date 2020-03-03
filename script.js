const coresArr = document.getElementById('coresArr').childNodes[1]

function mudaSelected() {
  const name = "selected";
  const arr = coresArr.className.split(" ");
  if (arr.indexOf(name) == -1) {
    coresArr.className += " " + name;
  }
}

mudaSelected()
