// nomeie 3 propriedades ou métodos de strings
/*var nome = "André";
fixed;
length;
slice;*/

function soma(x, y) {
  return x + y;
}
console.log(soma(5, 8));

///////////////////////////////////////////

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
videoGames[0];
