let operador = null;
function insert(num, op = false) {
    var numero = document.querySelector('.tela').innerText;
    console.log(numero, num)
    document.querySelector('.tela').innerText = numero + num
    if (op) {
        operador = num;
        console.log(operador)
    }
}

function clean () {
    document.querySelector('.tela').innerHTML = "";
}

function back () {
    console.log ('chegou aqui')
    var resultado = document.getElementById('resulttela').innerText;
    document.getElementById('resulttela').innerHTML = resultado.substring(0, resultado.length -1);
    console.log( document.getElementById('resulttela').innerText);
}
 
function calc () {
    const calc = document.getElementById('resulttela').innerText;
    const numeros = calc.split(operador);
    let resultado = 0;
    if(operador === '-')resultado = parseInt(numeros[0])-parseInt(numeros[1])
    if(operador === '+')resultado = parseInt(numeros[0])+parseInt(numeros[1])
    if(operador === '*')resultado = parseInt(numeros[0])*parseInt(numeros[1])
    if(operador === '÷')resultado = parseInt(numeros[0])/parseInt(numeros[1])
    if(operador === '%')resultado = parseInt(numeros[0])%parseInt(numeros[1])
                
    document.querySelector('.tela').innerText = resultado;
}