const hamburgerIcon = document.querySelector('.menu');

const toggleMenu = function() {
    const navBar = document.querySelector('.navbar');
    navBar.classList.toggle('open');
}

    hamburgerIcon.addEventListener('click', toggleMenu);