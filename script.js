let corAtual;
const pixels = document.querySelectorAll(".pixel");
const colorir = document.querySelectorAll(".color");
const optCores = ["black", "red", "orange", "yellow"];

for (let i = 0; i < colorir.length ; i++) {
    //cria o evento de click na lista colorir
    colorir[i].addEventListener("click", function porCor (event) {
        let clicado = colorir[i];
        if (clicado.classList.contains("selected")) {
            
        }
        corAtual = optCores[i];
        //subir corAtual para o sessionStorage
        localStorage.setItem("corAtual", corAtual);
    })

    //else {
        //Criar a classe selected;
        //colorir[i].classList.add("selected");
    //}
    //gravar cor
}

console.log(localStorage.getItem("corAtual"));
for (let i = 0; i < pixels.length; i++) {
    //cria o evento de click na lista pixels
    pixels[i].addEventListener("click", function px (event) {
        //alterar o background para o selacted
        let pxAtual = document.querySelectorAll("pixels[i]");
        //let corAtual = 
        //pixels[i].classList.add(corAtual);
        }
    )
}