window.onload = function changeColor() {
  let newColor = makeColor();
  let box = document.querySelector('.random').style.backgroundColor = newColor;
}

function makeColor() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 256);
        arr.push(num);
    }
    var newRbg = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
    return newRbg;
}
console.log("hey")