window.onload = () => {
    paletter();
    procreator(5);
    shuffler();
    document.getElementById("generate-board").addEventListener("click",generator); 
    document.getElementById("clear-board").addEventListener("click",clearer);
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

function clearer (){
    let pixer = document.getElementById("clear-board");
    let put = document.querySelectorAll(".pixel"); 
    for(let i in put){
    put[i].style.backgroundColor = getComputedStyle(pixer).backgroundColor;
    }
}

function generator(){
    let gener = document.getElementById("board-size");
    if(gener.value!=="") {
        if(parseInt(gener.value)<5 || parseInt(gener.value) > 50){
            destroyer();
            procreator(5);
        }
        else {
            destroyer();
            procreator(parseInt(gener.value));
        }
    }
        event.preventDefault();
}
 

function procreator (n){
    for (let i=0;i<n;i++){
        procreatetr();
        for(let j=0;j<n;j++){
         procreatetd();   
            }
        }
}


function destroyer() {
let des = document.getElementById("pixel-board");
des.innerHTML="";
}
function shuffler(){
    let shu = Math.floor(Math.random()*256);
    document.getElementsByClassName("color")[1].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    document.getElementsByClassName("color")[2].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    document.getElementsByClassName("color")[3].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}