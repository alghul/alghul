const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('menu');
const content = document.getElementById('content');

menuToggle.addEventListener('click', () => {
    menu.style.left = '0';
    content.style.marginLeft = '250px';
});

menuClose.addEventListener('click', () => {
    menu.style.left = '-250px';
    content.style.marginLeft = '0';
});