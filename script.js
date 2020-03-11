window.onload=function(){
    let cores = ['black',aleatorio(),aleatorio(),aleatorio()];
    let paleta = document.getElementsByClassName('color');
    let pixelColor = document.getElementsByClassName('pixel');
    let clearBoard =document.getElementById('clear-board');
    let generateBoard =document.getElementById(`generate-board`);

    sessionStorage.setItem('Escolha','black');

    function aleatorio(){
        let simbolo = `0123456789ABCDEF`;
        let ale = `#`;
        for(var i=0;i<6;i++){
            ale += simbolo[Math.floor(Math.random()*16)];
        }
        return ale;
    }

    for (let i = 0; i < cores.length; i+=1) {
        paleta[i].style.backgroundColor = cores[i];
        paleta[i].addEventListener('click', function () {
        let selected = document.getElementsByClassName('selected');
        selected[0].classList.remove('selected');
        let corClicada = paleta[i].style.backgroundColor;
        sessionStorage.setItem('Escolha', corClicada);
        paleta[i].classList.add('selected');
        })
    }

    for (let i = 0; i < pixelColor.length; i+=1) {
        pixelColor[i].addEventListener('click', function () {
            pixelColor[i].style.backgroundColor = sessionStorage.getItem('Escolha');
        })
    } 

    clearBoard.addEventListener('click',function(){
        for (let i = 0; i < pixelColor.length; i+=1) {
            pixelColor[i].style.backgroundColor = 'white';
        } 
    })

    generateBoard.addEventListener('click',function(){
        let n = document.getElementById('board-size').value;
        document.querySelectorAll('.linha').forEach(e => e.remove());
        if(n<5){
            n = 5;
        }
        else if(n>50){
            n = 50;
        }
        for(let i=0;i<n;i++){
            let addDiv = document.createElement('div');
            addDiv.className = 'linha'
            document.getElementById('pixel-board').appendChild(addDiv);
            for(let j=0;j<n;j++){
                let addDiv2 = document.createElement('div');
                addDiv2.className = 'pixel';
                addDiv2.addEventListener('click', function () {
                    addDiv2.style.backgroundColor = sessionStorage.getItem('Escolha');
                })
                document.getElementsByClassName('linha')[i].appendChild(addDiv2);
                }  
            }
    })

}
