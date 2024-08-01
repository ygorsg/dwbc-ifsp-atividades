function exibirNotas(nomeAluno, nota1, nota2) {
  var pesoNota1 = nota1 * 0.6;
  var pesoNota2 = nota2 * 0.4;
  var notaFinal = pesoNota1 + pesoNota2;
  alert(`Nome do aluno: ${nomeAluno}\nNota 1: ${nota1}\nNota 2: ${nota2}`);
  alert(`Nome do aluno: ${nomeAluno}\nNota final: ${notaFinal}`);
}

var aluno1 = {
  nomeAluno: "João da Silva",
  nota1: 7,
  nota2: 8.5
}

var aluno2 = {
  nomeAluno: "Maria de Souza",
  nota1: 9,
  nota2: 6.3
}

var aluno3 = {
  nomeAluno: "José Santos",
  nota1: 2,
  nota2: 6.7
}

var aluno4 = {
  nomeAluno: "Ana Oliveira",
  nota1: 10,
  nota2: 9.2
}

var aluno5 = {
  nomeAluno: "Pedro Almeida",
  nota1: 5,
  nota2: 7.5
}

exibirNotas(aluno1.nomeAluno, aluno1.nota1, aluno1.nota2);
exibirNotas(aluno2.nomeAluno, aluno2.nota1, aluno2.nota2);
exibirNotas(aluno3.nomeAluno, aluno3.nota1, aluno3.nota2);
exibirNotas(aluno4.nomeAluno, aluno4.nota1, aluno4.nota2);
exibirNotas(aluno5.nomeAluno, aluno5.nota1, aluno5.nota2);