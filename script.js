let corselect ;
let elementid ="black";

window.onload = function(){

    corselect = "black" ;
}  

let pixels = document.getElementsByClassName("pixel");
let color = document.getElementsByClassName("color");
let buttonDelete =document.getElementById("clear-board");
console.log("colors", color)

color[0].setAttribute("class","color selected");
buttonDelete.addEventListener("click",function(){
    for(i= 0; i <pixels.length; i++){   

     pixels[i].style.backgroundColor="rgb(255,255,255)"

    }

})

for(x= 0; x <color.length; x++){  
color[x].addEventListener("click",function(event){
      elementid = event.target.getAttribute("id");
   let element = document.getElementById(elementid);
   var style = window.getComputedStyle(element,"");
   corselect =style.getPropertyValue("background-color");
   console.log(elementid);
})
}

for(i= 0; i <pixels.length; i++){   
    
    pixels[i].addEventListener("click", function(event){
        switch (elementid) {
            case "color1":
                event.target.style.backgroundColor="rgb(0,0,0)";    
                break;
            case "color2":
                event.target.style.backgroundColor= corselect;
                break;
            case "color3":
                event.target.style.backgroundColor= corselect;
                break;
            case "color4":
                event.target.style.backgroundColor= corselect;
                break;
            }})

}