let fitaRNA = [];

for (let i = 0; i < 10; i++) {
    let base = prompt("Digite a base da fita de RNA " + (i + 1));
    fitaRNA.push(base.toUpperCase());
}

let complemento = [];

for (let i = 0; i < fitaRNA.length; i++) {
    if (fitaRNA[i] === "A") {
        complemento.push("U");
    } else if (fitaRNA[i] === "U") {
        complemento.push("A");
    } else if (fitaRNA[i] === "C") {
        complemento.push("G");
    } else if (fitaRNA[i] === "G") {
        complemento.push("C");
    } else {
        complemento.push("?");
    }
}

console.log("Sequência complementar:");
for (let i = 0; i < complemento.length; i++) {
    console.log(complemento[i]);
}
