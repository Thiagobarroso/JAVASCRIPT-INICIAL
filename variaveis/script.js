const nome = "Thiago Barroso";
const idade = 28;
const possuiFaculdade = false;
console.log(nome, idade, possuiFaculdade);

///////////////////////////////
/*podemos declarar variaveis colocando somente uma vez o "const, var ou let"*/

const preco = 25;
quantidade = 5;
valorTotal = preco * quantidade;

console.log(valorTotal);

///////////////////////////////
/* HOSTING São movidas para cima do código, porém o valor atribuído não é movido.*/

console.log(nome);
var Nome = "André";
// Retorna undefined

var profissao = "Designer";
console.log(profissao);
// Retornar Designer

///////////////////////////
/* MUDAR O VALOR ATRIBUÍDO. É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const */

var Idade = 17;
Idade = 27;
console.log(Idade);

let Preco = 50;
Preco = 25;
console.log(Preco);

/////////////////////////////

/* EXCERCICIOS */

// Declarar uma variável com o seu nome
var excercicioNome = "Thiago";
console.log(excercicioNome);

// Declarar uma variável com a sua idade

var excercicioIdade = 27;
console.log(excercicioIdade);

// Declarar uma variável com a sua comida
// favorita e não atribuir valor

var ComidaFavorita;
console.log(ComidaFavorita);

// Atribuir valor a sua comida favorita

ComidaFavorita = "Strogonoff";
console.log(ComidaFavorita);

// Declarar 5 variáveis diferentes sem valores

var casa, jardim, sala, cozinha, banheiro;

console.log(casa, jardim, sala, cozinha, banheiro);
