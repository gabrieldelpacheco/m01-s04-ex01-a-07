let numeros = [2,10,60,20];

let soma = numeros.reduce((total, numero)=> {
    return total+numero
},0);
console.log(soma);

let media = (soma) => {
    return soma/numeros.length
};
console.log(media(soma));