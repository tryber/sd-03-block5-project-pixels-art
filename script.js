window.onload = function() {
  let colorBlack = document.getElementsByClassName("black")[0];
  let colorRed = document.getElementsByClassName("red")[0];
  let colorBlue = document.getElementsByClassName("blue")[0];
  let colorGreen = document.getElementsByClassName("green")[0];
  let pixel = document.querySelectorAll(".pixel");
  pixel.forEach(element => element.addEventListener("click", () => element.style.backgroundColor = mouseColor))
  let mouseColor = "";

  function anyColor(color) {
    mouseColor = color;
  }

  colorBlack.addEventListener("click",() => {
    anyColor("black");
    colorBlack.classList.add("selected");
  });

  colorRed.addEventListener("click", () => {
    anyColor("red");
    colorRed.classList.add("selected");
  });

  colorBlue.addEventListener("click",() => {
    anyColor("blue")
    colorBlue.classList.add("selected");
  });

  colorGreen.addEventListener("click", () => {
    anyColor("green");
    colorGreen.classList.add("selected");
  });

  function hehe(element) {
    element.style.backgroundColor = mouseColor;
  }
  
  
}