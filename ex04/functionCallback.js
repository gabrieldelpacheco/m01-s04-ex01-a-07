const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Informe o primeiro número."));
let numero2 = Number(prompt("Informe o segundo número."));

function adicao(numero1, numero2, functionAnonymous) {
    let soma = numero1 + numero2;
    functionAnonymous(soma);
}

functionAnonymous = function(soma) {
    console.log(`O resultado da adição é, ${soma}`);
}

adicao(numero1, numero2, functionAnonymous);
