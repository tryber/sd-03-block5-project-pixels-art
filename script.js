
const blocospixel = document.getElementsByClassName('pixel');
const limparblocos = document.getElementById('clear-board');
const palleteid = document.getElementById('pallete');

let corselecionada = "";

// funcao para limpar os blocos
function limpar() {
    for (const a of blocospixel)
        limparblocos.addEventListener('click', function () {
            a.style.background = 'white'
        });
}


palleteid.addEventListener("click", function (e) {
    console.log(e);
    const target = e.target;
    //console.log("o tras no target", target);
    if (target.matches("td.color.primeiracaixa.selected")) {
        corselecionada = "black";
        console.log(corselecionada);
    } else if (target.matches("td.color.segundacaixa")) {
        corselecionada = "blue";
        console.log(corselecionada);
    } else if (target.matches("td.color.terceiracaixa")) {
        corselecionada = "green";
        console.log(corselecionada);
    } else if (target.matches("td.color.quartacaixa")) {
        corselecionada = "yellow";
        console.log(corselecionada);
    }
})

// funcao para pintar os blocos
function paint() {
    for (const p of blocospixel)
        p.addEventListener('click', function () {
            p.style.background = corselecionada;
        });
}

paint();
limpar();






