document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetClass = this.getAttribute('href').substring(1); // Neem de class-naam zonder de #
        const target = document.querySelector(`.${targetClass}`); // Selecteer het element met de bijbehorende class

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// JavaScript voor het openen en sluiten van het menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    var expanded = this.getAttribute('aria-expanded') === 'true' || false;

    this.setAttribute('aria-expanded', !expanded);
    menu.style.display = expanded ? 'none' : 'block';
});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul');

    // Voeg een klikgebeurtenis toe aan de menuknop
    menuToggle.addEventListener('click', function() {
        // Toggle de "open" klasse op de menuknop
        this.classList.toggle('open');
        // Toggle de "open" klasse op het navigatiemenu
        navList.classList.toggle('open');
    });
});
