window.onload = function() {
  let colorBlack = document.getElementsByClassName("black")[0];
  let colorRed = document.getElementsByClassName("red")[0];
  let colorBlue = document.getElementsByClassName("blue")[0];
  let colorGreen = document.getElementsByClassName("green")[0];
  let pixel = document.querySelectorAll(".pixel");
  let mouseColor = "black";

  for (let i = 0; i < pixel.length; i++){
    pixel[i].addEventListener("click", function() {
      pixel[i].style.backgroundColor = mouseColor})
  }    
  // for (let i of pixel){
  //  i.addEventListener("click", (event) =>{
  //    event.target.style.backgroundColor = mouseColor})
  //    console.log(event)
  // }

  // pixel.forEach(element => element.addEventListener("click", () => element.style.backgroundColor = mouseColor))
  

  function anyColor(color) {
    mouseColor = color;
  }

  colorBlack.addEventListener("click",() => {
    anyColor("black");
    for (let i = 0; i < document.querySelectorAll(".color").length; i++) {
      document.querySelectorAll(".color")[i].classList.remove("selected");
    }
    colorBlack.classList.add("selected");
    })

  colorRed.addEventListener("click", () => {
    anyColor("red");
    for (let i = 0; i < document.querySelectorAll(".color").length; i++) {
      document.querySelectorAll(".color")[i].classList.remove("selected");
    }
    colorRed.classList.add("selected");
  });

  colorBlue.addEventListener("click",() => {
    anyColor("blue")
    for (let i = 0; i < document.querySelectorAll(".color").length; i++) {
      document.querySelectorAll(".color")[i].classList.remove("selected");
    }
    colorBlue.classList.add("selected");
  });

  colorGreen.addEventListener("click", () => {
    anyColor("green");
    for (let i = 0; i < document.querySelectorAll(".color").length; i++) {
      document.querySelectorAll(".color")[i].classList.remove("selected");
    }
    colorGreen.classList.add("selected");
  });

  
  
}