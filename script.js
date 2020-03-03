window.onload = function() {
    let selectedColorPalette = document.getElementsByClassName("selected")[0];
    let pickedColor;


    //Padrão incial cor preta;
    pickedColor = window.getComputedStyle(selectedColorPalette, null).backgroundColor;

    //Remove a classe Selected e depois Adiciona classe 'selected' na cor da paleta selecionada e armazena a cor selected na pickedColor
    document.querySelectorAll('.color').forEach(element =>
        element.addEventListener("click", event => {
            document.getElementsByClassName("selected")[0].classList.remove("selected");
            element.classList.add("selected");
            pickedColor = window.getComputedStyle(element, null).backgroundColor;
            console.log('color picked:' + pickedColor)
        })
    );




    //Adiciona funcionalidade de colorir o pixel com a cor selecionada
    document.querySelectorAll('.pixel').forEach(element => {
        element.addEventListener("click", event => {
            element.style.backgroundColor = pickedColor;
        })

    });

    //
    function clear() {
        document.querySelectorAll('.pixel').forEach(element => {
            element.style.backgroundColor = 'white';
        });
    }
    document.getElementById('btn-clear').addEventListener('click', clear);




}