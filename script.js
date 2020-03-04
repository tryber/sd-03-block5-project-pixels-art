window.onload = function() {
  let colorBlack = document.getElementsByClassName("black")[0];
  let colorRed = document.getElementsByClassName("red")[0];
  let colorBlue = document.getElementsByClassName("blue")[0];
  let colorGreen = document.getElementsByClassName("green")[0];
  let pixel = document.querySelectorAll(".pixel");
  let buttonClear = document.querySelector(".limpando-quadro");
  let buttonSize = document.querySelector(".aumentando-quadro");
  let inputNumber = document.querySelector(".input1");
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

  function clearBoard() {
    for (let i = 0; i < document.querySelectorAll(".pixel").length; i++){
      document.querySelectorAll(".pixel")[i].style.backgroundColor = "white";
    }
  }
  buttonClear.addEventListener("click", clearBoard);

  function resizeBoard() {
      resizeLines();
      resizeColums();
    }

  function resizeLines () {
    if(parseInt(inputNumber.value) < 5) {
      inputNumber.value = 5;
      lines();
    }
    else if(parseInt(inputNumber.value) > 50) {
      inputNumber.value = 50;
      lines();
    } else{
      lines();
    }
  }

  function resizeColums() {
    if(parseInt(inputNumber.value) < 5) {
      inputNumber.value = 5;
      colums();
    }
    else if(parseInt(inputNumber.value) > 50) {
      inputNumber.value = 50;
      colums();
    } else{
      colums();
    }
  }
  buttonSize.addEventListener("click", resizeBoard);

  function colums() {
    for (let i = 0; i < 5; i++){
      coluna = document.createElement("td");
      coluna.classList.add("pixel");
      document.getElementsByClassName("body-pixel")[0].children[i];
      for (let j = 0; j < parseInt(inputNumber.value) - 5; j++){
        document.getElementsByClassName("body-pixel")[0].children[i].appendChild(coluna.cloneNode())
      }
    }
  }

  function lines() {
    for (let i = 0; i < parseInt(inputNumber.value) - 5; i++){
      linha = document.createElement("tr");
      coluna = document.createElement("td");
      coluna.classList.add("pixel");
      document.getElementsByClassName("body-pixel")[0].appendChild(linha);
      for(let j = 0; j < parseInt(inputNumber.value); j++){
        document.getElementsByClassName("body-pixel")[0].lastChild.appendChild(coluna.cloneNode());
      }
    }
  }


}