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

/*WHILE LOOP*/

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
