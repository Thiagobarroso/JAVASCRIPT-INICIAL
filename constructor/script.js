function Carro(marcaAtribuido, corAtribuido, modeloAtribuido) {
  (this.marca = marcaAtribuido),
    (this.cor = corAtribuido),
    (this.modelo = modeloAtribuido);
}

const honda = new Carro();
honda.modelo = "Civic";
honda.marca = "honda";

const fiat = new Carro("Fiat", "Vermelho", "Uno");

console.log(fiat);
console.log(honda);

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2("Mazda", 5000);

console.log(mazda);
