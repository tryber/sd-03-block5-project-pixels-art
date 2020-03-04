window.onload = () => {
    paletter();
    let n=5;
for (let i=0;i<n;i++){
    procreatetr();
    for(let j=0;j<n;j++){
     procreatetd();   
    }
}

}
function procreatetr () {
    let tr = document.createElement("tr")
     document.getElementById("pixel-board").appendChild(tr);
}
function procreatetd () {
    let td = document.createElement("td")
    td.classList.add("pixel")
    td.addEventListener("click",function(){
        let select = document.querySelector(".selected")
        td.style.backgroundColor = getComputedStyle(select).backgroundColor;        
    })
     document.getElementById("pixel-board").lastChild.appendChild(td);
}
function paletter (){
    let pal = document.getElementsByClassName("color")
    for(let i=0;i<pal.length;i++){
        pal[i].addEventListener("click",function(){
            if(pal[i].classList.length===2){
                for(let j=0;j<pal.length;j++){
                    if(i===j){
                        pal[j].classList.add("selected")
                    }
                    else {
                        pal[j].classList.remove("selected")
                    }
                }
            }
        })
    }
}