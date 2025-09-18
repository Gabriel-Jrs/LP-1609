let precos = [];

for (let i = 0; i < 5; i++) {
    let preco = prompt("Digite o reço do produto: " + (i + 1) );
    precos.push(preco);
}

let indiceMaiorPreco = 0;
for (let i = 1; i < precos.length; i++) {
    if (precos[i] > precos[indiceMaiorPreco]) {
        indiceMaiorPreco = i;
    }
}

console.log("O índice do produto mais caro é: " + indiceMaiorpreco);
console.log("O preço do poduto mais caro é: R$" + precos[indiceMaiorPreco]);
