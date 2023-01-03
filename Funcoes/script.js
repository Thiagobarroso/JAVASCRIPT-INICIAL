function areaQuadrada(lado) {
  return lado * lado;
}
console.log(areaQuadrada(5));

function ativo() {
  console.log("Função ativa");
}
ativo();

////////////////////////////////

function imc(peso, altura) {
  return peso / altura ** 2;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Olhe para o ceú";
  } else if (cor === "verde") {
    return "Olhe para a floresta";
  } else if (cor === "amarelo") {
    return "Olhe para o Sol";
  } else {
    return "Só escolheu cores bosta, tenha bom gosto dá proxima vez";
  }
}
console.log(corFavorita("verde"));

function mostrarConsole() {
  console.log("Clicou");
}
addEventListener("click", mostrarConsole);

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor digite sua idade em numero";
  } else if (idade >= 60) {
    return "Você é Idoso";
  } else {
    return "você não é idoso";
  }
}

console.log(terceiraIdade("thiago"));

////////////////////////////////////////////////

// Crie uma função para verificar se um valor é Truthy
function istruthy(verificar) {
  return !!verificar;
}

console.log(istruthy("thiago"));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quadrado(lado) {
  return lado + lado + lado + lado;
}

console.log(quadrado(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Thiago", "barroso"));

// Crie uma função que verifica se um número é par

function numeroPar(num) {
  if (num % 2 === 0) {
    return "esse numero é par";
  } else {
    return "Esse numero é impar";
  }
}

console.log(numeroPar(30));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(valor) {
  return typeof valor;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("thiago");
});

// Corrija o erro abaixo
const totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
jaVisitei(20);
