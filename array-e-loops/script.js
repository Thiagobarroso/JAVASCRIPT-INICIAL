// ARRAY

var videoGames = ["Playstation", "XBOX", "Nitendo"];
console.log(videoGames[0]);

// MÉTODOS E PROPRIEDADES DE UMA ARRAY

var videoGames = ["Switch", "PS4", "XBox"];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push("3DS"); // Adiciona ao final da array
videoGames.length; // 3

/*Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente*/

//FOR LOOP
for (let n = 0; n <= 10; n++) {
  console.log(n);
}

/* O for loop possui 3 partes, início, condição e incremento*/

// WHILE LOOP

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console

var videoGames = ["Playstation", "XBOX", "Nitendo"];
for (let item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "XBOX") {
    break;
  }
}

//FOREACH
/*forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)*/

var videoGames = ["Switch", "PS4", "XBox", "3DS"];
videoGames.forEach(function (item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente

//EXCERCICIOS

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilVenceu = ["1959", "1962", "1970", "1994", "2002"];
console.log(brasilVenceu);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

brasilVenceu.forEach(function (ano) {
  console.log(`O brasil ganhou a copa de ${ano}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (let item = 0; item < frutas.length; item++) {
  console.log(frutas[item]);
  if (frutas[item] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
