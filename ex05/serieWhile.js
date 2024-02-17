const prompt = require("prompt-sync")();

let contador = 1;
let qualidadeRuim = 0;

while (contador <= 4) {
   let qualidade = prompt("O que achou da série Stranger Things \nRuim \nbom \nexelente?");
    if (qualidade == "ruim") {
        qualidadeRuim ++ ;
    }
    contador++;
}
console.log(qualidadeRuim);