const burger = document.getElementById('burger');
const nav = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    // Alternar menú
    nav.classList.toggle('nav-active');

    // Animación de hamburguesa
    burger.classList.toggle('toggle');
});

// Cerrar menú al hacer clic en un enlace (para móviles)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
    });
});