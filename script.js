window.onload = function (){
    sessionStorage.setItem("backgroundColor", "black");
    
    let cor = document.getElementsByClassName('color');
    let cores = ["black", "green", "yellow", "blue"];

    for (let i = 0; i < cor.length; i += 1) {
        cor[i].style.backgroundColor = cores[i];
        cor[i].addEventListener("click",function(){
        let corAtual = cores[i];
        sessionStorage.setItem("backgroundColor", corAtual)
        let corSelecionada = document.getElementsByClassName("selected")
        corSelecionada[0].classList.remove("selected")
        cor[i].classList.add("selected")       
        })
    }
    let pixels = document.getElementsByClassName('pixel');

    for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].addEventListener("click", function(){
        pixels[i].style.backgroundColor = sessionStorage.getItem("backgroundColor")
        })
    }
}