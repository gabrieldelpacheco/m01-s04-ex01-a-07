let produtos = [{
    'hortifruti': 0,
    'laticinios': 0,
    'carnes': 0,
    'peixes': 0,
    'aves': 0
}];
let escolhaProduto = "";
let maiorQuantidade = 0;
let chaveMaiorQuantidade = 0;


do {
    escolhaProduto = (prompt("O que deseja comprar:\n(1)Hortifruti \n(2)Laticínios \n(3)Carnes \n(4)Peixes \n(5)Aves \n(6)Fechar pedido"));
    switch (escolhaProduto) {
        case "1":
            let hortifruti = Number(prompt("Deseja compra quantos?"))
            produtos[0].hortifruti = hortifruti;
            console.log(produtos);
            break;
        case "2":
            let laticinios = Number(prompt("Deseja compra quantos?"))
            produtos[0].laticinios = laticinios;
            console.log(produtos);
            break;
        case "3":
            let carnes = Number(prompt("Deseja compra quantos?"))
            produtos[0].carnes = carnes;
            console.log(produtos);
            break;
        case "4":
            let peixes = Number(prompt("Deseja compra quantos?"))
            produtos[0].peixes = peixes;
            console.log(produtos);
            break;
        case "5":
            let aves = Number(prompt("Deseja compra quantos?"))
            produtos[0].aves = aves;
            console.log(produtos);
            break;
        case "6":
            // Encontrar o maior valor e a chave associada a ele
            for (let key in produtos[0]) {
                if (produtos[0].hasOwnProperty(key) && produtos[0][key] > maiorQuantidade) {
                    maiorQuantidade = produtos[0][key];
                    chaveMaiorQuantidade = key;
                }
            }
            console.log(`Obrigado pela preferência. O produto com maior quantidade é: ${chaveMaiorQuantidade}`);
            break;
        default:
            break;
    }
} while (escolhaProduto !== "6");

