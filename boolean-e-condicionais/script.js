// CONDICIONAIS IF E ELSE

var possuiGraduacao = false;
var possuiDoutorado = false;
var ecasado = true;

if (possuiGraduacao) {
  console.log("Possui Graduacao");
} else if (possuiDoutorado) {
  console.log("não possui doutorado");
} else if (ecasado) {
  console.log("é casado");
} else {
  console.log("Não possui Graduacao");
}

//TRUTHY E FALSY

// Falsy
if (false)
  if (0)
    if (NaN)
      if (null)
        if (undefined)
          if ("") if (true) if (1) if (" ") if ("andre") if (-5) if ({});

// OPERADOR LÓGICO DE NEGAÇÃO !

if (!true) if (!1) if (!"") if (!undefined) if (!!" ") if (!!""); // false

//OPERADORES DE COMPARAÇÃO

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true

// OPERADORES LÓGICOS &&

true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

if (true && true) {
  console.log("Verdadeiro");
} else {
}

var corFavorita = "nenhuma";

switch (corFavorita) {
  case "azul":
    console.log("Olhe para o céu");
    break;
  case "amarelo":
    console.log("Olhe para o sol");
    break;
  case "preto":
    console.log("Aprecie as estrelas");
    break;
  default:
    console.log(
      "Você não tem cor favorita? em pleno seculo 21. conhece o Elon Musk?"
    );
}

////// EXCERCICIOS

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var thiago = 27;
var bernardo = 8;

if (thiago > bernardo) {
  console.log("Thiago é mais velho que Bernardo");
} else if (thiago === bernardo) {
  console.log("Thiago e Bernardo tem a mesma idade");
} else {
  console.log("Thiago é mais novo que Bernardo");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; //true retorna 3
console.log(typeof expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("O Brasil é mais populoso que a china");
} else if (brasil === china) {
  console.log("O Brasil e a china tem a mesma população");
} else {
  console.log("O Brasil é menos populoso que a china");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
} // falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
