// // import { handleToTop } from './handleToTop.js';
// import { toggleVisibility } from './toggleVisibility.js';

// // ALTERNAR VISIBILIDADE COM O SCROLL
// const btntop = document.querySelector('.top')
// // ao evento de scroll ele chama a função que altera visibilidade do botao
// window.addEventListener("scroll", (event) => {
//     toggleVisibility(btntop, 'visivel')
// })


// main.js

import { toggleVisibility } from './toggleVisibility.js';
import { handleToTop } from './handleToTop.js';
import { detectLanguage } from './detectLanguage.js';

// Chamar a função de detecção de idioma logo após carregar a página
document.addEventListener("DOMContentLoaded", () => {
    detectLanguage();
});

// Seleciona o botão de "Voltar ao topo"
const btntop = document.querySelector('.top');

// Chama a função que alterna a visibilidade com base no scroll
window.addEventListener("scroll", () => {
    toggleVisibility(btntop, 'visivel');
});

// Chama a função para o comportamento de "Voltar ao topo" quando o botão for clicado
handleToTop(btntop);
