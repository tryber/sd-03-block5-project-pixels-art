let palette = document.querySelectorAll(".color");
for (let i = 0; i < palette.length; i++) {
  palette[i].addEventListener("click", function() {
    document.querySelector(".selected").classList.remove("selected");
    palette[i].classList.add("selected");
  });
}

let pixel = document.querySelectorAll(".pixel");
for (let i = 0; i < pixel.length; i++) {
  pixel[i].addEventListener("click", function() {
    let pixelColor = document.querySelector(".selected");
    pixel[i].style.backgroundColor = pixelColor.id;
  });
}
