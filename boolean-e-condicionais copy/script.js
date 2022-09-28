var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("É Verdadeira");
} else if (possuiGraduacao) {
  console.log("é falsa");
} else {
  console.log("não possui graduação");
}

var nome = "Thiago";

if (nome) {
  console.log("Possui nome");
} else {
  console.log("Não possui");
}

/*Excercicios*/

let minhaIdade = 27;
let parenteIdade = 15;

if (minhaIdade > parenteIdade) {
  console.log("Sou mais velho");
} else if (minhaIdade === parenteIdade) {
  console.log("É Igual");
} else {
  console.log("sou mais novo");
}
/////////////////////////////////////////////////

var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

/////////////////////////////////////////////////

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

/////////////////////////////////////////////////

var Brasil = 207;
var China = 1340;

if (Brasil > China) {
  console.log("No Brasil tem, mais habitantes que na China");
} else {
  console.log("A população da China é maior que do o Brasil");
}
///////////////////////////////////////////////////

if ("gato" === "Gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

if ("gato" === "Gato" || 5 > 2) {
  console.log("gato" === "Gato");
} else {
  console.log("Falso");
}
