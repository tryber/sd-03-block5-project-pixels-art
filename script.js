function mudaSelected() {
  var element, name, arr;
  element = document.getElementById("black");
  name = "selected";
  arr = element.className.split(" ");
  if (arr.indexOf(name) == -1) {
    element.className += " " + name;
  }
}

mudaSelected()
