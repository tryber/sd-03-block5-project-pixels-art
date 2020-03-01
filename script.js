window.onload = function(){
    let colorArray = ["black", "red", "green", "blue"]
    let palColor = document.getElementsByClassName("color")
    for (let i = 0; i<colorArray.length; i++){
        palColor[i].style.backgroundColor = colorArray[i];
    }

 

}