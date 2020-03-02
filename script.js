
c1 = document.getElementById("c1");
c1.addEventListener('click', cor1);

c2 = document.getElementById("c2");
c2.addEventListener('click', cor2);

c3 = document.getElementById("c3");
c3.addEventListener('click', cor3);

c4 = document.getElementById("c4");
c4.addEventListener('click', cor4);

function cor1(){
    let color = "black";
    return color;
}

function cor2(){
    let color = "red";
    return color;
}

function cor3(){
    let color = "blue";
    return color;
}

function cor4(){
    let color = "green";
    return color;
}

function paint(){
    for(i=1; i<=25; i++){
        pixel = document.getElementById(`p${i}`) //id="p1" 
        pixel.style.backgroundColor = cor1();
    }   
}
