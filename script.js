window.onload = function () {
    this.sessionStorage.setItem("uColor", "black")
    let colorArray = ["black", "red", "green", "blue"]
    let palColor = document.getElementsByClassName("color")
    for (let i = 0; i < colorArray.length; i+=1) {
        palColor[i].style.backgroundColor = colorArray[i];
        palColor[i].addEventListener('click', function () {
            let selected = document.getElementsByClassName("selected")
            selected[0].classList.remove("selected")
            let bgcolor = palColor[i].style.backgroundColor
            sessionStorage.setItem("uColor", bgcolor)
            palColor[i].classList.add("selected")
            console.log(palColor[i].classList)
        })
    }

    let pixels = document.getElementsByClassName("pixel")

    for (let x = 0; x < pixels.length; x+=1) {


        pixels[x].addEventListener('click', function () {
            let coloring = sessionStorage.getItem("uColor")
            pixels[x].style.backgroundColor = coloring;
        })

    }

    let clear = document.getElementById("clear-board")

    clear.addEventListener('click', function(){
        for (let y = 0; y < pixels.length; y+=1){
            pixels[y].style.backgroundColor = "white"
        }
    })

    let size = document.getElementById("board-size");
    let generate = document.getElementById("generate-board");
    let board = document.getElementById("pixel-board");

    

    generate.addEventListener('click', function(){
        console.log (size.value)
        let appPixels = (size.value*size.value) - pixels.length;
        console.log (appPixels)
        let multiplier = parseInt(size.value)+0.5;
        console.log (multiplier)
        let newDimensions = (40 * multiplier) + "px";
        console.log (newDimensions)
        board.style.height = newDimensions;
        console.log (board.style.height)
        board.style.width = newDimensions;
        console.log (board.style.width);
        

        for (let z = 0; z<appPixels; z+=1){
            let addPixel = document.createElement("div");
            addPixel.className = "pixel";
            board.appendChild(addPixel);
        }

        for (let x = 0; x < pixels.length; x+=1) {


            pixels[x].addEventListener('click', function () {
                let coloring = sessionStorage.getItem("uColor")
                pixels[x].style.backgroundColor = coloring;
            })
    
        }
    })



}