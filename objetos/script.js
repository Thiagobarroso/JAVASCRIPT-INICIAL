var pessoa = {
  nome: "thiago",
  idade: 27,
  filhos: true,
  casado: true,
  profissao: "desempregado",
};

console.log(pessoa.filhos);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//EXCERCICIOS

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

let dadosPessoais = {
  nome: "Andressa",
  sobrenome: "Oliveira",
  idade: 27,
  casada: true,
  profissao: "Contadora",
  filhos: true,
};

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomecompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: "10 anos",
  latir(pessoa) {
    if (pessoa === "homem") {
      console.log("Latir");
    } else {
      console.log("fazer nada");
    }
  },
};
