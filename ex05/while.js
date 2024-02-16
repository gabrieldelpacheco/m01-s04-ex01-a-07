const prompt = require("prompt-sync")();

let contador = 1;
let notaRuim = 0;
let notaBom = 0;
let notaExelente = 0;

while (contador <= 4) {
    let resposta = Number(prompt("Sobre o seriado Stranger Things\n1(Ruim)\n2(Bom) \n3(Exelente)"));

    switch (resposta) {
        case 1: 
            notaRuim += 1; 
            break;
        case 2:
            notaBom += 1;
            break;
            case 3: 
            notaExelente += 1;
            break;
        default:
            console.log("Não existe essa opção!");
            break;
        }
        contador ++
    }
    console.log(`Quantidades que deram nota ruim ${notaRuim}`);
    console.log(`Quantidades que deram nota ruim ${notaBom}`);
    console.log(`Quantidades que deram nota ruim ${notaExelente}`);