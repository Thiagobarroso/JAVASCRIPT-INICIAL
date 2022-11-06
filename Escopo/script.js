// Variáveis declaradas dentro de funções nao são acessadas fora das mesmas.
// exemplo:
var carro = "Fusca";

console.log(carro);
function mostrarCarro() {
  console.log(carro);
}
