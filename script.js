const welcomeButton = document.getElementById('welcome-button');
const aboutSection = document.getElementById('about');

welcomeButton.addEventListener('click', () => {
    aboutSection.scrollIntoView({ 
        block: 'start',
        behavior: 'smooth',
    });
})