/*function areaQuadrada(lado) {
  return (lado * lado) / 2;
}
console.log(areaQuadrada(10));

/////////////////////////////////////////

function pi() { 
  return 3.14;
}

var total = pi() * 5;
var arredondado = parseFloat(total.toFixed(5));
console.log(arredondado);

////////////////////////////////////////////

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  var imcArredondado = parseFloat(imc.toFixed(2));
  return imcArredondado;
}

////////////////////////////////////////////

function corFavorida(cor) {
  if (cor === "Azul") {
    return "Você gosta do céu";
  } else if (cor === "Verde") {
    return "Você gosta da Floresta";
  } else {
    return "Você não gosta de cores";
  }
}
console.log(corFavorida("Verde"));

//////////////////////////////////////////////
*/
/* CALLBACK */
addEventListener("click", function () {
  console.log("oi");
});

//////////////////////////////////////////////

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Digite um valor numerico";
  } else if (idade >= 60) {
    return "Você é Idoso";
  } else {
    return "Você não é idoso";
  }
}

console.log(terceiraIdade(60));

////////////////////////////////////////////

function aindaNaoFui(paisesVisitados) {
  totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados}`;
}

console.log(aindaNaoFui(50));

///////////////////// EXCERCICIOS ////////////////////////,

// Crie uma função para verificar se um valor é Truthy
function verificar(possivelResultado) {
  return !!possivelResultado;
}
console.log(verificar(""));

// Crie uma função matemática que retorne o perímetro de um quadrado

function areaQuadrada2(lado2) {
  return lado2 * 4;
}
console.log(areaQuadrada2(10));

// Crie uma função que retorne o seu nome completo

function nomeCompleto1(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto1("Thiago", "Barroso"));

// Crie uma função que verifica se um número é par
function numeroPar(valor2) {
  if (valor2 % 2 === 0) {
    console.log("O numero é par");
  } else {
    console.log("O número impar");
  }
}
console.log(numeroPar(1000));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function retorneTipo(dados) {
  return typeof dados;
}
console.log(retorneTipo(false));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Thiago Barroso");
});

/*function addEventListener('scroll' function nomeCompleto1(){
  console.log("Thiago")})*/

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

///////////////////////////////
function areaQuadrada(lado) {
  return lado + lado;
}

console.log(areaQuadrada(20));
