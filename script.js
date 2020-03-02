window.onload = () => {
  // Faz com que cor Preta seja a escolhida ao carregar a página
  sessionStorage.setItem("SelectedColor", "black");

  // Faz com que a cor selecionada pelo usuário seja definida para colorir
  document.querySelectorAll('.color').forEach(element => element.addEventListener("click", (event) => {
    document.getElementsByClassName("selected")[0].classList.remove("selected");
    sessionStorage.setItem("SelectedColor", event.toElement.attributes.value.value);
    element.classList.add("selected")
  }));

  // Função que adiciona um listener para cada elemento com classe pixel que colore o pixel clicado
  const addListenerColor = () => document.querySelectorAll('.pixel').forEach(element => element.addEventListener("click", (event) => event.srcElement.style.backgroundColor = sessionStorage.getItem("SelectedColor")));

  // Adiciona o listener ao inicializar a página
  addListenerColor()

  // Adiciona listener que colore de branco todos os pixels da página
  document.getElementById("clear-board").addEventListener("click", () => document.querySelectorAll('.pixel').forEach(element => element.style.backgroundColor = "White"))


  document.getElementById('generate-board').addEventListener("click", () => {


    let size = document.getElementById('board-size').value;
    if(size>4 && size<51){
      document.querySelector('#pixel-board').remove()

      let board = document.createElement("table");
      board.id = "pixel-board";
      document.getElementById("board-div").appendChild(board)
      for (let c = 0; c < size; c++) {
        let line = document.createElement("tr");
        document.getElementById('pixel-board').appendChild(line)
        for (let d = 0; d < size; d++) {
          let pixel = document.createElement("td");
          pixel.className = "pixel";
          document.getElementsByTagName('tr')[c].appendChild(pixel)
        }

        addListenerColor()
      };
    }
  });
}
