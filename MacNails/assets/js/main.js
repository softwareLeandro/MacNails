// import { handleToTop } from './handleToTop.js';
import { toggleVisibility } from './toggleVisibility.js';

// ALTERNAR VISIBILIDADE COM O SCROLL
const btntop = document.querySelector('.top')
// ao evento de scroll ele chama a função que altera visibilidade do botao
window.addEventListener("scroll", (event) => {
    toggleVisibility(btntop, 'visivel')
})


// // Importa a função de toggleVisibility
// import { toggleVisibility } from './toggleVisibility.js';

// // ALTERNAR VISIBILIDADE COM O SCROLL
// const btntop = document.querySelector('.top');
// // Ao evento de scroll, ele chama a função que altera a visibilidade do botão
// window.addEventListener("scroll", (event) => {
//     toggleVisibility(btntop, 'visivel');
// });

// // ---- GALERIA LIGHTBOX ----

// const lightbox = document.getElementById('lightbox');
// const lightboxImg = document.getElementById('lightbox-img');
// const lightboxVideo = document.getElementById('lightbox-video');

// // Função para abrir imagens no lightbox
// document.querySelectorAll('.portfolio-imgs img').forEach(img => {
//     img.addEventListener('click', () => {
//         lightboxImg.src = img.src;
//         lightboxVideo.style.display = 'none';
//         lightboxImg.style.display = 'block';
//         lightbox.classList.add('active');
//     });
// });

// // Função para abrir vídeos no lightbox
// document.querySelectorAll('.portfolio-imgs video').forEach(video => {
//     video.addEventListener('click', () => {
//         lightboxImg.style.display = 'none';
//         lightboxVideo.src = video.querySelector('source').src;
//         lightboxVideo.style.display = 'block';
//         lightbox.classList.add('active');
//     });
// });

// // Função para fechar o lightbox
// function closeLightbox() {
//     lightbox.classList.remove('active');
//     lightboxImg.src = '';
//     lightboxVideo.src = '';
// }

// // Função de fechar lightbox quando o botão fechar for clicado
// document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
