window.onload= function(){
    let cor= document.querySelectorAll(".color")
    sessionStorage.setItem("Cor", "black")
    function trocaCor(){
        let tabela= document.querySelectorAll(".pixel")
        tabela=sessionStorage.getItem("cor").value
        function clique(){
        
        cor.style.backgroundColor = sessionStorage.getItem("cor").value
        }
        
        tabela.addEventListener("click", clique)
    }
    cor.addEventListener("click", trocaCor)
}