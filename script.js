window.onload = function () {
  let newColor = makeColor();
  let box = document.querySelector('.random').style.backgroundColor = newColor;


function makeColor() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 256);
        arr.push(num);
    }
    var newRbg = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
    return newRbg;
}
  let pixelColor = document.getElementsByClassName('pixel');
  let clearBoard =document.getElementById('clear-board');
  clearBoard.addEventListener('click',function(){
      for (let i = 0; i < pixelColor.length; i+=1) {
          pixelColor[i].style.backgroundColor = 'white';
        }
    })
    let generateBoard =document.getElementById(`generate-board`);
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
console.log("hey")