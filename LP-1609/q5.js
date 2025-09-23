let materias = [];  // Cria um array vazio chamado 'materias' para armazenar os dados das 8 matérias

// Loop para coletar informações de 8 matérias
for (let i = 0; i < 8; i++) {
    // Solicita ao usuário o nome da matéria e armazena no array
    let nome = prompt("Digite o nome da matéria " + (i + 1));  
    // Solicita ao usuário a nota da matéria e armazena no array
    let nota = prompt("Digite a nota da matéria " + (i + 1) + ":");  
    // Solicita ao usuário a frequência da matéria e armazena no array
    let frequencia = prompt("Digite a frequência (%) da matéria " + (i + 1));  
    // Adiciona um objeto com os dados da matéria no array 'materias'
    materias.push({nome: nome, nota: nota, frequencia: frequencia});  
}

let somaFrequencia = 0;  // Inicializa a variável para somar as frequências de todas as matérias

let contadorNotasAcimaMedia = 0;  // Inicializa o contador para contar quantas notas são acima de 60

// Loop para percorrer todas as matérias armazenadas no array
for (let i = 0; i < materias.length; i++) {
    // Converte a frequência para número e adiciona à soma total de frequências
    somaFrequencia += Number(materias[i].frequencia);  
    
    // Converte a nota para número e verifica se é maior que 60
    if (Number(materias[i].nota) > 60) {
        contadorNotasAcimaMedia++;  // Se a nota for maior que 60, incrementa o contador
    }
}

// Calcula a média das frequências dividindo a soma das frequências pelo número total de matérias
let mediaFrequencia = somaFrequencia / materias.length;

// Exibe no console a média das frequências das matérias com o símbolo de porcentagem
console.log("Média de frequência de todas as disciplinas: " + mediaFrequencia + "%");

// Exibe no console o número de matérias que têm notas acima de 60
console.log("Quantidade de notas acima da média (60%): " + contadorNotasAcimaMedia);
