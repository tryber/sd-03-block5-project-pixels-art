window.onload = () => {
  sessionStorage.setItem("SelectedColor", "black");
  document.querySelectorAll('.color').forEach(element => element.addEventListener("click", (event) => {
    document.getElementsByClassName("selected")[0].classList.remove("selected");
    sessionStorage.setItem("SelectedColor", event.toElement.attributes.value.value);
    document.getElementsByClassName(sessionStorage.getItem("SelectedColor") + "-bg")[0].classList.add("selected");
  }));
  const addListenerColor = () => document.querySelectorAll('.pixel').forEach(element => element.addEventListener("click", (event) => event.srcElement.style.backgroundColor = sessionStorage.getItem("SelectedColor")));
  addListenerColor()
  document.getElementById("clear-board").addEventListener("click", () => document.querySelectorAll('.pixel').forEach(element => element.style.backgroundColor = "White"))

  document.getElementById('generate-board').addEventListener("click", () => {
    document.querySelector('#pixel-board').remove()

    let board = document.createElement("div");
    board.id = "pixel-board";
    document.getElementById("board-div").appendChild(board)

    let size = document.getElementById('board-size').value;
    console.log(size)
    for (let c = 0; c < size; c++) {
      let line = document.createElement("div");
      line.className = "line";
      document.getElementById('pixel-board').appendChild(line)
      for (let d = 0; d < size; d++) {
        console.log(c)
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        console.log(document.getElementsByClassName('line')[c])
        document.getElementsByClassName('line')[c].appendChild(pixel)
      }

      addListenerColor()
    };
  });
}
