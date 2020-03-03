window.onload = () => {
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
     document.getElementById("content").appendChild(tr);
}
function procreatetd () {
    let td = document.createElement("td")
    td.classList.add("pixel")
    td.addEventListener("click",function(){
        let select = document.querySelector(".selected")
        td.style.backgroundColor = getComputedStyle(select).backgroundColor;        
    })
     document.getElementById("content").lastChild.appendChild(td);
}
