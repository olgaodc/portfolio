// Hamburger menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.navbar-list');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navigationMenu.classList.toggle('active');

})

document.querySelectorAll('.navbar-list-item').forEach(n => n.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navigationMenu.classList.remove('active');
}))



// Learn more button scrolls to about me section
const welcomeButton = document.getElementById('welcome-button');
const aboutSection = document.getElementById('about');

welcomeButton.addEventListener('click', () => {
    aboutSection.scrollIntoView({ 
        block: 'start',
        behavior: 'smooth',
    });
})

// Back to top button scrolls up
const backToTopButton = document.getElementById('back-to-top-button');
const navBar = document.getElementById('navbar');

backToTopButton.addEventListener('click', () => {
    navBar.scrollIntoView({ 
        block: 'start',
        behavior: 'smooth',
    });
})