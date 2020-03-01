window.onload = function () {
    this.sessionStorage.setItem("uColor", "black")
    let colorArray = ["black", "red", "green", "blue"]
    let palColor = document.getElementsByClassName("color")
    for (let i = 0; i < colorArray.length; i++) {
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

    for (let x = 0; x < pixels.length; x++) {


        pixels[x].addEventListener('click', function () {
            let coloring = sessionStorage.getItem("uColor")
            pixels[x].style.backgroundColor = coloring;
        })

    }





}