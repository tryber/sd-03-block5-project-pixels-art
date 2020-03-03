
let selecionado = document.querySelectorAll('.color')[0];
window.addEventListener("load",function(s){
   selecionado.classList.add("selected");
});


/*window.addEventListener("click", function(s){
    console.log(s.toElement.style.backgroundColor+" pai "+s.toElement.parentNode.parentNode.parentNode.getAttribute("class"));
    });*/