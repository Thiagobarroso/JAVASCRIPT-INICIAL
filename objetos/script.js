/*Obejetos servem para organizar o código em pequenas partes reutilizáveis*/

var pessoa = {
  nome: "Thiago",
  sobrenome: "Barroso",
  idade: 27,
  profissao: "Programador",
  possuiFaculdade: true,
  saldoConta: function (salario, desconto) {
    return salario - desconto;
  },
  nomeSocial: function () {
    return this.nome + this.sobrenome;
  },

  nomeProfissao() {
    return this.profissao;
  },
};

console.log(pessoa.idade);
console.log(pessoa.saldoConta(7000, 2000));
console.log(pessoa.nomeSocial());
console.log(pessoa.nomeProfissao());

//////////////////////
