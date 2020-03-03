window.onload = function () {
    function backgroundColorCell() {
        for (let i = 0; i < 25; i++) {
            let pixelSelect = document.getElementsByTagName("td")[i];
            pixelSelect.addEventListener("click", function () {
                pixelSelect.style.backgroundColor = selectColor();
            })
        }
    }
    backgroundColorCell();
    function selectColor() {
        for (let i = 1; i <= 4; i++) {
            let colorcheck = document.getElementById("color" + i).checked;
            if (colorcheck) {
                let colorfinal = document.getElementById("color" + i).value;
                return colorfinal;
            }
        }
    }
    let refreshbtn = document.getElementById("clear-board");
    refreshbtn.addEventListener("click", function clickMouseLocation() {
        window.location.reload();
    })
}
