let filmes = [];

for(let i=0; i<6; i++){
  filmes.push({
    nome: prompt("Nome do filme " + (i+1)),
    nota: prompt("Nota do filme " + (i+1))
  });
}

for(let i=0; i<100; i++){
  let op = prompt("a) Imprimir filme\nb) Avaliar filme\nc) Alterar filme\nd) Finalizar");
  if(op==="a"){
    let idx = prompt("Índice (0 a 5):");
    if(idx>=0 && idx<6) console.log(filmes[idx].nome, filmes[idx].nota);
    else console.log("Índice inválido");
  }
  else if(op==="b"){
    let idx = prompt("Índice (0 a 5):");
    if(idx>=0 && idx<6){
      let n = prompt("Nova nota:");
      filmes[idx].nota += n;
      console.log("Nota atualizada: " + filmes[idx].nota);
    } else console.log("Índice inválido");
  }
  else if(op==="c"){
    let idx = prompt("Índice (0 a 5):");
    if(idx>=0 && idx<6){
      filmes[idx].nome = prompt("Novo nome:");
      filmes[idx].nota = prompt("Nova nota:");
      console.log("Dados atualizados");
    } else console.log("Índice inválido");
  }
  else if(op==="d"){
    for(let j=0; j<6; j++) console.log(j + ": " + filmes[j].nome + " - " + filmes[j].nota);
    break;
  }
  else console.log("Opção inválida");
}
