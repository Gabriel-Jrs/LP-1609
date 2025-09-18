let materias = [];

for (let i = 0; i < 8; i++) {
    let nome = prompt("Digite o nome da matéria " + (i + 1));
    let nota = prompt("Digite a nota da matéria " + (i + 1) + ":");
    let frequencia = prompt("Digite a frequência (%) da matéria " + (i + 1));
    materias.push({nome: nome, nota: nota, frequencia: frequencia});
}

let somaFrequencia = 0;
somaFrequencia=Number
let contadorNotasAcimaMedia = 0;
contadorNotasAcimaMedia=Number

for (let i = 0; i < materias.length; i++) {
    somaFrequencia += materias[i].frequencia;
    if (materias[i].nota > 60) {
        contadorNotasAcimaMedia++;
    }
}

let mediaFrequencia = somaFrequencia / materias.length;

console.log("Média de frequência de todas as disciplinas: " + mediaFrequencia + "%");
console.log("Quantidade de notas acima da média (60%): " + contadorNotasAcimaMedia);
