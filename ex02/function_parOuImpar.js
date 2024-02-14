const prompt = require ("prompt-sync")();

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

console.log(parOuImpar(prompt("Informe número: ")));