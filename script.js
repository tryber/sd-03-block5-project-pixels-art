window.onload = function (){
  
  sessionStorage.setItem("backgroundColor", "black");

  let cor = document.getElementsByClassName("color");
  let cores = ["black","green","yellow","red"]

  for(let i = 0; i < cor.length; i += 1) {
    cor[i].style.backgroundColor = cores[i]
    cor[i].addEventListener("click",function(){
    let corAtual = cores[i];
    sessionStorage.setItem("backgroundColor", corAtual);
  
    });
  }
  let pixels = document.getElementsByClassName("pixel");
  for (let i = 0; i < pixels.length; i += 1){
      pixels[i].addEventListener("click",function(){
      pixels[i].style.backgroundColor = sessionStorage.getItem("backgroundColor");  


    })

  }




}
