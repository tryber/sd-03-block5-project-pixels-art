function mudaParaVermelho(td) {
    td.style.backgroundColor = "#FF0F0F";
}

function mudaParaAmarelo(td) {
    td.style.backgroundColor = "#FFFA00";
}

function mudaParaAzul(td) {
    td.style.backgroundColor = "0000ff";
}

function mudaParaPreto(td) {
    td.style.backgroundColor = "000000";
}
window.onload = function(){

    let section =  document.querySelector("#color-palette");
    section.addEventListener('click', function(event){
        let selectedColor = document.querySelector(".selected1");
        selectedColor.innerText = event.target.className;
        classList.remove("selected");
        selectedColor.classList.add("selected");
    });
        
}
