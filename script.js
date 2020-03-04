window.onload= function(){
   caneta ="black"
   let valor= document.getElementsByClassName("generate-board")[0];
   let tamanho= document.getElementsByClassName("board-size")[0];
   function gerarTabela(){
      if(tamanho.value<5 || tamanho.value>50){
         window.alert("OPS, insira um valor entre 5 e 50")
      }else{
         for (let i=0; i<tamanho.value;i++){
            let sec = document.createElement("section");
            sec.classList.add("tab")
            document.getElementsByClassName("tabela")[0].appendChild(sec)
            for(let  g=0; g<tamanho.value;g++){
               let linhaCreada= document.getElementsByClassName("tab")[i]
               let linha=document.createElement("div")
               linha.addEventListener("click", function(){
                  linha.style.backgroundColor=caneta
               })
               linha.classList.add("pixel")
               linhaCreada.appendChild(linha)
            }
         }
      }
   }
   valor.addEventListener("click", gerarTabela)
   
   
//   let apBotao= document.getElementsByClassName("generate-board")[0];
//   let apTb= document.getElementsByClassName("tabela")
//   function apagaTabela(){
//      apBotao.parentNode.removeChild(apTb)
//
//   }
//   apBotao.addEventListener("click", apagaTabela)
}
function setcaneta(pixel){
   caneta=pixel
 }
function trocaCor(selected){
   selected.style.backgroundColor=caneta;
}
