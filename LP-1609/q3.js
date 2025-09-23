let fitaRNA = [];

// Pede ao usuário para digitar 10 bases de RNA e armazena na lista, convertendo para maiúsculas
for (let i = 0; i < 10; i++) {
    let base = prompt("Digite a base da fita de RNA " + (i + 1));
    fitaRNA.push(base.toUpperCase());
}

let complemento = [];

// Para cada base da fita original, adiciona a base complementar de RNA na nova lista
for (let i = 0; i < fitaRNA.length; i++) {
    if (fitaRNA[i] === "A") {
        complemento.push("U");  // A emparelha com U
    } else if (fitaRNA[i] === "U") {
        complemento.push("A");  // U emparelha com A
    } else if (fitaRNA[i] === "C") {
        complemento.push("G");  // C emparelha com G
    } else if (fitaRNA[i] === "G") {
        complemento.push("C");  // G emparelha com C
    } else {
        complemento.push("?");  // Base inválida
    }
}

// Imprime no console a sequência complementar, base por base
console.log("Sequência complementar:");
for (let i = 0; i < complemento.length; i++) {
    console.log(complemento[i]);
}

