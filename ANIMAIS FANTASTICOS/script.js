const img = document.querySelectorAll("img");

let item = 0;

img.forEach(function () {
  console.log(item++);
});

//////////////////////////

img.forEach((imgs, index) => {
  console.log(imgs, index);
});

///// EXCERCICIOS

// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console

const paragrafo = document.querySelectorAll("p");
paragrafo.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console

paragrafo.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((item) => {
  item.classList.add("ativo");
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});

itensMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll("img");
imgs.forEach((item) => {
  const possuiAlt = item.hasAttribute("alt");
  console.log(imgs, possuiAlt);
});

// Modifique o href do link externo no menu

const linkExterno = document.querySelector('.menu a[href^="https://"]');
linkExterno.setAttribute("href", "https://facebook.com");

const primeiroh2 = document.querySelector("h2");
console.log(primeiroh2);

const rect = primeiroh2.getBoundingClientRect();
if (rect.top <= 0) {
  console.log("Passou");
}

const small = window.matchMedia("(max-width: 600px)").matches;

if (small) {
  console.log("Está em mobile");
} else {
  console.log("está em disposivo desktop");
}

// EXCERCICIOS

// Verifique a distância da primeira imagem
// em relação ao topo da página

const sectionImg = document.querySelector("img");
console.log(sectionImg.offsetTop);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((item) => {
    soma += item.offsetWidth;
  });

  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

imagens.forEach(() => {
  console.log(imagensrect.width);
});

//const larguraImg = imagens.getBoundingClientRect();

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
