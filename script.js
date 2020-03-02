const allPixels = document.querySelectorAll(".pixel").length;
const onePixel = document.querySelectorAll(".pixel");
const pallete1 = document.querySelectorAll(".color")[0];
const pallete2 = document.querySelectorAll(".color")[1];
const pallete3 = document.querySelectorAll(".color")[2];
const pallete4 = document.querySelectorAll(".color")[3];

pallete1.style.backgroundColor = "black";
pallete2.style.backgroundColor = "orange";
pallete3.style.backgroundColor = "purple";
pallete4.style.backgroundColor = "lightblue";

sessionStorage.setItem("color", "black");
pallete1.classList.add("selected");

pallete1.addEventListener("click", function() {
  sessionStorage.setItem("color", "black");
});

pallete2.addEventListener("click", function() {
  sessionStorage.setItem("color", "orange");
});

pallete3.addEventListener("click", function() {
  sessionStorage.setItem("color", "purple");
});

pallete4.addEventListener("click", function() {
  sessionStorage.setItem("color", "lightblue");
});

for (let i = 0; i < allPixels; i++) {
  onePixel[i].addEventListener("click", function() {
    onePixel[i].style.backgroundColor = sessionStorage.color;
  });
}

let colors = document.querySelectorAll(".color");
for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", function() {
    document.querySelector(".selected").classList.remove("selected");
    colors[i].classList.add("selected");
  });
}

/* let colors = document.querySelectorAll(".color");
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener("click", function() {
    document.querySelector(".selected").classList.remove("selected");
    colors[i].classList.add("selected");
  });
} */
