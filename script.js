// Nav Toggle Functionality
let menuButton = document.querySelector('.menu')
let closeButton = document.querySelector('.close')
let mobileMenu = document.querySelector('.mobile-menu')

function menuToggle(){
    menuButton.classList.toggle('hidden');
    closeButton.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
    // mobileMenu.classList.toggle('transform');
}
