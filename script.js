document.body.onload = adcElementos;

function adcElementos () {
    for(var i = 1; i <= 25; i++){
        var pixelBoard = document.getElementById("pixel-board") 
        var pixelDiv = document.createElement("div")
        pixelDiv.className = "pixel"
        pixelDiv.id = `pixel` + `${i}`
        // pixelBoard.document.createElement("div")
        pixelBoard.appendChild(pixelDiv)
        console.log(`pixel` + `${i}`)
    }
}
// var pixelBoard = document.getElementById("pixel-board")
// for(var i = 1; i <= 25; i++){ 
//     // var pix1 = document.createElement(`"div"pixel + ${i}`);
//     pixelBoard.document.createElement("div")
//     // pix1.className = 'pixel';
//     // pix1.
//     // pixels.className = 'pixel';
//     // pixelsPlace.appendChild(pix1);
//     console.log(i)
// 