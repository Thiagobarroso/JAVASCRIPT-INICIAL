//  EXCERCICIOS

// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const titulo = document.querySelector("h1");
console.log(titulo.classList[0]);

// Retorne a linguagem do navegador

const linguagem = document.querySelector("html");
console.log(linguagem.lang);

// Retorne a largura da janela
const largura = window.innerWidth;
console.log(largura); 
