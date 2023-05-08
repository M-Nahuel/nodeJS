
function sumar(a,b) {
    console.log(a+b);
}

setTimeout(sumar, 2000, 5, 6);


function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setImmediate()');
setImmediate(mostrarTema, 'Node.js');
console.log('Despues de setImmediate()');


setInterval(mostrarTema, 1500, 'Node.js');


