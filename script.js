const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");

function selectColor(indicador) {
  if (indicador === 1) {
    color1.className = "color selected color1";
    color2.className = "color color2";
    color3.className = "color color3";
    color4.className = "color color4";
  } else if (indicador === 2) {
    color1.className = "color color1";
    color2.className = "color selected color2";
    color3.className = "color color3";
    color4.className = "color color4";
  } else if (indicador === 3) {
    color1.className = "color color1";
    color2.className = "color color2";
    color3.className = "color selected color3";
    color4.className = "color color4";
  } else if (indicador === 4) {
    color1.className = "color color1";
    color2.className = "color color2";
    color3.className = "color color3";
    color4.className = "color selected color4";
  }
}

color1.addEventListener("click", function() {
  selectColor(1);
});

color2.addEventListener("click", function() {
  selectColor(2);
});

color3.addEventListener("click", function() {
  selectColor(3);
});

color4.addEventListener("click", function() {
  selectColor(4);
});
