/*Array, é um grupo de valores, geralemnte relacionados. servem para guardarmos diferentes valores em uma única variável*/

var numbers = [05, 04, 03, 04, 02, 10, 12];
console.log(
  numbers.sort(function (a, b) {
    if (a > b) return -1;
  })
);
/*numbers.sort(function (a, b) {
    return a - b;
  })*/

///////////////////////////////////////////

var frutas = [
  "bananas",
  "acerola",
  "açai",
  "maça",
  "caju",
  "morango",
  "abacaxi",
];
console.log(
  frutas.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  })
);

////////////////////////////////////////

var videoGames = ["Switch", "PS4", "xbox"];
console.log(videoGames[0]);

var funcionarios = ["Thiago", "Weligton", "Patrick", "Italo"];
var ultimofuncionario = funcionarios.pop();
var addfuncionario = funcionarios.push("Felipe");
console.log(funcionarios);

/* LOOOPS */
/*FOR LOOP*/
for (let num = 0; num <= 100; num = num + 5) {
  console.log(num);
}

/*FOR LOOP - 1 A 1*/

for (let numero = 0; numero <= 100; numero++) {
  console.log(numero);
}

/*WHILE LOOP*/

let i = 0;
while (i < 10) {
  console.log(i);
  i = i + 2; //poderia ser de um a um: i++
}

//////////////////////////////////////
/*LO0P COM ARRAY E BREAK*/

var games = ["Switch", "PS4", "xbox"];

for (var item = 0; item < games.length; item++) {
  console.log(games[item]);
  if (games[item] === "PS4") {
    break;
  }
}

/*FOREACH*/
var frutas = ["banana", "maça", "laranja", "uva", "abaxaxi"];

frutas.forEach(function (fruta) {
  console.log(fruta);
});

/////// EXCERCICICOS  /////////

// crie um array com os anos que o Brasil ganhou a copa
var brasilCampeao = ["1959", "1970", "1994", "2002"];

//interaja com o array utilizando um loop, para mostras no consegue a mensagem
// o Brasil ganhou a copa de ano

for (var ano = 0; ano < brasilCampeao.length; ano++) {
  console.log(`O brasil ganhou a copa em ${brasilCampeao[ano]}`);
}

//interaja com um loop nas frutas abaixo e pare ao chegar em pera

var frutas2 = ["banana", "maça", "Pera", "Uva", "melancia"];
for (var ind = 0; ind < frutas2.length; ind++) {
  console.log(frutas2[ind]);
  if (frutas2[ind] === "Pera") {
    break;
  }
}

// coloque a ultima fruta da array acima em uma variável
//sem remover a mesma do array

var ultimaForma = frutas2[frutas2.length - 1];
console.log(ultimaForma);
