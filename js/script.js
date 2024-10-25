const btn_pesquisa = document.querySelector('.btn-pesquisa');
const btn_news = document.querySelector('.btn-news');

btn_pesquisa.addEventListener('click', () =>{
    window.location = 'pesquisar.html';
})

function gotoStatus(){
    window.location = 'minha-candidatura.html';
}

function gotoNews(){
    window.location = 'notice.html';
}

const drop = document.querySelector('.drop');

drop.addEventListener('click', () =>{
    drop.classList.toggle('roda');
})

const open_menu = document.getElementById('open-menu');
const close_menu = document.getElementById('close-menu');
const nav = document.querySelector('.nav');

close_menu.style.display = 'none';

open_menu.addEventListener('click', () =>{
    close_menu.style.display = 'block';
    open_menu.style.display = 'none';
    nav.classList.toggle('ativo');
})

close_menu.addEventListener('click', () =>{
    close_menu.style.display = 'none';
    open_menu.style.display = 'block';
    nav.classList.toggle('ativo');
})