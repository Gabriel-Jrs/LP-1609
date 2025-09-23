let materias = [];  // Cria um array vazio para armazenar os dados das matérias

// Loop para coletar informações de 8 matérias
for (let i = 0; i < 8; i++) {
    let nome = prompt("Digite o nome da matéria " + (i + 1));  // Solicita o nome da matéria
    let nota = prompt("Digite a nota da matéria " + (i + 1) + ":");  // Solicita a nota da matéria
    let frequencia = prompt("Digite a frequência (%) da matéria " + (i + 1));  // Solicita a frequência da matéria
    materias.push({nome: nome, nota: nota, frequencia: frequencia});  // Adiciona um objeto com os dados no array materias
}

let somaFrequencia = 0;  // Variável para armazenar a soma de todas as frequências

let contadorNotasAcimaMedia = 0;  // Contador para as notas que forem maiores que 60

// Loop para percorrer todas as matérias cadastradas
for (let i = 0; i < materias.length; i++) {
    somaFrequencia += Number(materias[i].frequencia);  // Soma a frequência da matéria atual (convertendo para número)
    
    // Verifica se a nota da matéria é maior que 60
    if (Number(materias[i].nota) > 60) {
        contadorNotasAcimaMedia++;  // Incrementa o contador se a nota for maior que 60
    }
}

// Calcula a média das frequências dividindo a soma total pelo número de matérias
let mediaFrequencia = somaFrequencia / materias.length;

// Exibe a média das frequências no console com o símbolo de porcentagem
console.log("Média de frequência de todas as disciplinas: " + mediaFrequencia + "%");

// Exibe a quantidade de notas que foram acima da média (60)
console.log("Quantidade de notas acima da média (60%): " + contadorNotasAcimaMedia);
