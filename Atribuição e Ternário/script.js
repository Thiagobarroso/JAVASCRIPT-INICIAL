/* ATRIBUÍÇÃO*/

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x =    x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

var numero = 20;
var numero2 = 40;
numero += numero2;
console.log(numero);

/* OPERADOR TERNÁRIO*/

var idade = 18;
var naoehEvangelico = true;

var podeBeber =
  idade >= 18 && naoehEvangelico ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // pode beber

// condição ? true : false

// IF ABREVIADO

var possuiFaculdade = false;
if (possuiFaculdade) console.log("Possui Faculdade");
else console.log("não possui faculdade");

//ou

if (possuiFaculdade) console.log("Possui faculdade");
else console.log("não possui faculdade");

// EXCERCICIOS

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;
if (possuiCarro && possuiCasa) {
  console.log("dar credito");
} else {
  console.log("negar credito");
}
