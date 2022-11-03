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
/*EXCERCICIOS*/

// CRIE UM OBJETO COM OS SEUS DADOS PESSOAIS
//DEVE POSSUIR PELO MENOS DUAS PROPRIEDADES NOME E SOBRENOME

var dadosPessoais = {
  nome: "Thiago",
  sobrenome: "Barroso",
  idade: 27,
  profissao: "programador",
  possuiFilho: true,
  casado: true,
  //Crie um método no objeto anterior, que mostre o seu nome completo.
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome};`;
  },
};

console.log(dadosPessoais.nomeCompleto());

//modifique o valor da propriedade preço para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
console.log(carro.preco);

//crie um objeto de um cachorro que representa um labrador
//preto com 10 anos, que late ao ver um homem.

var cachorro = {
  raca: "labrado",
  idade: 10,
  cor: "preto",
  latir: function (pessoa) {
    if (pessoa === "homem") return "latir";
    else {
      return "nada";
    }
  },
};

console.log(cachorro.latir("homem"));

//////////////////////////////
/* TUDO É OBJETO */

var nome = 'Thiago'    
//.fixed, ele arredonda um number 
//length
//.slice


//nomei 5 propriedades ou método de elementos do don
var btn = document.querySelector('.btn');
btn.appendChild
btn.
