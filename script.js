const openMenuButton = document.getElementById('open-menu');
const menu = document.getElementById('menu');
const menuOverlay = document.getElementById('menu-overlay');

openMenuButton.addEventListener('click', () => {
    menu.style.left = '0';
    menuOverlay.style.display = 'block';
});

menuOverlay.addEventListener('click', () => {
    menu.style.left = '-250px';
    menuOverlay.style.display = 'none';
});