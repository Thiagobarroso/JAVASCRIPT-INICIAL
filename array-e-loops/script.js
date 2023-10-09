const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);

            const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const primeirolink = document.querySelector('[href^="#"]');
console.log(primeirolink);

// EXCERCICIOS

// Retorne no console todas as imagens do site
const img2 = document.querySelectorAll("img");
console.log(img2);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem2 = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagem2);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroh2 = document.querySelector(".animais-descricao h2");
console.log(primeiroh2);

// Selecione o último p do site

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);

/////////////////////////////////////////////////
