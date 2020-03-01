// Get each pallete position
const pallete1 = document.querySelectorAll(".color")[0]
const pallete2 = document.querySelectorAll(".color")[1]
const pallete3 = document.querySelectorAll(".color")[2]
const pallete4 = document.querySelectorAll(".color")[3]

// Set collors initially
pallete1.style.backgroundColor = 'black';
pallete2.style.backgroundColor = 'red';
pallete3.style.backgroundColor = 'blue';
pallete4.style.backgroundColor = 'grey';

// Set default selected color as black
sessionStorage.setItem('color', 'black')

// Color selector
pallete1.addEventListener('click', function(event) {
  sessionStorage.setItem('color', 'black')
})
pallete2.addEventListener('click', function(event) {
  sessionStorage.setItem('color', 'red')
})
pallete3.addEventListener('click', function(event) {
  sessionStorage.setItem('color', 'blue')
})
pallete4.addEventListener('click', function(event) {
  sessionStorage.setItem('color', 'grey')
})


// Pixel detection
const getPixel = document.querySelectorAll(".pixel");
const pixelSize = document.querySelectorAll(".pixel").length;

// Set initial pixel colors to white
for (let i = 0; i < pixelSize; i++) {
  getPixel[i].style.backgroundColor = 'white';
}

for (let i = 0; i < pixelSize; i++) {
  getPixel[i].addEventListener('click', function(event) {
    getPixel[i].style.backgroundColor = sessionStorage.color;
  })
}