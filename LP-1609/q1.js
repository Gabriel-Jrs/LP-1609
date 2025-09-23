let precos = [];  // Cria um array vazio para armazenar os preços dos produtos

// Loop para solicitar o preço de 5 produtos
for (let i = 0; i < 5; i++) {
    // Solicita ao usuário o preço do produto e converte para número
    let preco = Number(prompt("Digite o preço do produto: " + (i + 1) ));
    // Adiciona o preço do produto no array 'precos'
    precos.push(preco);
}

let indiceMaiorPreco = 0;  // Inicializa a variável 'indiceMaiorPreco' com o valor 0 (primeiro produto como o mais caro)

// Loop para percorrer o array de preços a partir do segundo produto (índice 1)
for (let i = 1; i < precos.length; i++) {
    // Se o preço do produto atual for maior que o preço do produto mais caro encontrado até agora
    if (precos[i] > precos[indiceMaiorPreco]) {
        // Atualiza o índice do produto mais caro
        indiceMaiorPreco = i;
    }
}

// Exibe no console o índice do produto mais caro
console.log("O índice do produto mais caro é: " + indiceMaiorPreco);
// Exibe no console o preço do produto mais caro, usando o índice obtido
console.log("O preço do produto mais caro é: R$" + precos[indiceMaiorPreco]);
