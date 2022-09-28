function areaQuadrada(lado) {
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

/* CALLBACK */
addEventListener("click", function () {
  console.log("oi");
});

//////////////////////////////////////////////

function terceiraIdade(idade) {
  if (typeof idade !== "Number") {
    return "digite um valor numerico";
  } else if (idade >= 60) {
    console.log("É idoso");
    return true;
  } else {
    console.log("não é idoso");
    return false;
  }
}

console.log(terceiraIdade(49));
