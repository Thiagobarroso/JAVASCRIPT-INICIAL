/*07 tipos de dados*/

var nome = "Thiago"; //string
var idade = 28; // Number
var possuiFaculdade = true; //boolean
var time; //undefined
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

///////////////////////////

/*Verificar dados*/

var Nome = "Thiago", // String
  Idade = 27, //number
  possuiFaculdade = false; //boolean

console.log(typeof Nome, typeof Idade, typeof possuiFaculdade);

///////////////////////////

var nome = "André";
var sobrenome = "Rafael";
var nomeCompleto = nome + " " + sobrenome;

var gols = 1000;
var frase = "Romário fez " + gols + " gols";

/*TAMPLETE STRING*/
var gols = 1000;
var frase1 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String

////////////////////////////////////
/* EXCERCICIOS */

// Declare uma variável contendo uma string
var fraseQualquer = "Eu quero ser programador";
console.log(fraseQualquer);

// Declare uma variável contendo um número dentro de uma string
var numero = "288";
console.log(numero);

// Declare uma variável com a sua idade

var Idade = 27;
console.log(Idade);

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var nome = "Thiago ",
  sobreNome = "Barroso";
var nomeCompleto = `${nome} ${sobreNome}`;
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time

var frase = `It's "time"`;
console.log(frase);

// Verifique o tipo da variável que contém o seu nome

console.log(typeof nomeCompleto);
