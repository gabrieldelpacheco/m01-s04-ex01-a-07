let escolhaProduto = "";
let hortifruti = [];
let laticinios = [];
let carnes = [];
let peixes = [];
let aves = [];

do {
    escolhaProduto = prompt("Digite o número correpondente ao item que deseja comprar: \n(1) - hortifruti \n(2) - Latitínios \n(3) - Carnes \n(4) - Peixes \n(5) - Aves \n(6) - finalizar compra.");
    let quantidade = Number(prompt("Quantidade do item?"));
    if(escolhaProduto=1) {
        hortifruti.push(quantidade);
    } else {
        laticinios.push(quantidade);
    }
} while (escolhaProduto !== "6");

console.log(hortifruti);
console.log(laticinios);
console.log(carnes);
console.log(peixes);
console.log(aves);
