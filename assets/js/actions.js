function calcular() {
    var num1 = document.getElementById('num1').value 
    var num2 = document.getElementById('num2').value

    var soma = parseInt(num1) + parseInt(num2)

    document.getElementById('resultado').innerText = soma
}

document.getElementById('btncalcular').addEventListener('click', calcular)

function mudarCorFundo() {
    const cores = ["#195e63", "#3e838c", "#8ebdb6", "#7f135f", "#fff"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}

document.getElementById('btncor').addEventListener('click', mudarCorFundo);

window.onload = function() {
    alert("Seja Bem-Vindo ao meu site!");
};



