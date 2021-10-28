// let n = prompt("Ingrese numero del 1 al 100 para sacar fibonacci ");

//capturamos evento
document.getElementById('btnID').addEventListener("click", function (e) {
    e.preventDefault();
    let n = document.getElementById('inputNumeroID').value;

    fibonacci(n);



})

//creamos funcion
function fibonacci(n) {
    let fib = [0, 1,];
    console.log(fib[0]);
    console.log(fib[1]);

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];

        console.log(fib[i]);

    }
    return fib;
}

//imprimiendo datos en el DOM

