
function menuToggle() {
    let menuButton = document.querySelector('.menu')
    let closeButton = document.querySelector('.close')
    let mobileMenu = document.querySelector('.mobile-menu')

    menuButton.classList.toggle('hidden');
    closeButton.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
}

// Event listener to hide the menu when the user starts scrolling
var prevScrollPos = window.scrollY;
window.addEventListener('scroll', function () {
    let currentScrollPos = window.scrollY;
    let mobileMenu = document.querySelector('.mobile-menu');

    if (prevScrollPos < currentScrollPos && !mobileMenu.classList.contains('hidden')) {
        menuToggle();
    }
    prevScrollPos = currentScrollPos;
});
