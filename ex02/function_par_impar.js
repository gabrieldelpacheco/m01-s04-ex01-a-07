const prompt = require("prompt-sync")();

function parImpar(numero) {
    let resultado = numero % 2;
    if (resultado === 0) {
    return console.log(`O número informado ${numero} é par.`);
    } else {
    return console.log(`O número informado ${numero} é impar.`);
    }
}

console.log("Descubra se o número é PAR ou IMPAR.");
let numero = Number(prompt("Informe um número: "));

parImpar(numero);