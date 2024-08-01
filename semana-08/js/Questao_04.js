class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return `${this.primeiroNome} ${this.segundoNome}`;
  }

  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao() {
    if (this.media() < 6) {
      return "Reprovado";
    } else {
      return "Aprovado";
    }
  }
}

const alunos = [
  new Aluno("João", "da Silva", 7, 8.5),
  new Aluno("Maria", "de Souza", 9, 6.3),
  new Aluno("José", "Santos", 2, 6.7),
  new Aluno("Ana", "Oliveira", 10, 9.2),
  new Aluno("Pedro", "Almeida", 5, 7.5)
]

function exibirNotas(aluno) {
  alert(`Nome Completo: ${aluno.nomeCompleto()}\nMédia: ${aluno.media()}\nSituação: ${aluno.situacao()}`);
}

for (let i = 0; i < alunos.length; i++) {
  exibirNotas(alunos[i]);
}