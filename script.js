let corBlackSelected ;
window.onload = function(){
corBlackSelected = true ;
}  

pixels = document.getElementsByClassName("pixel")




for(i= 0; i <pixels.length; i++){   
    
    pixels[i].addEventListener("click", function(event){
        if(corBlackSelected){
         event.target.style.backgroundColor = "rgb(0,0,0)"

        }

    })
  
}




