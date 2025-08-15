// mobile-menu.js
document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.getElementById('burgerButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const closeMobileMenu = document.getElementById('closeMobileMenu');

    function openMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('active');
        }
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('hidden');
        }
        document.body.style.overflow = 'hidden'; 
    }

    function closeMenu() {
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('active');
        }
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.add('hidden');
        }
        document.body.style.overflow = '';
    }

    if (burgerButton) {
        burgerButton.addEventListener('click', openMenu);
    }

    if (closeMobileMenu) {
        closeMobileMenu.addEventListener('click', closeMenu);
    }

    document.addEventListener('click', (event) => {
        const isMenuActive = mobileMenu && !mobileMenu.classList.contains('hidden');
        if (isMenuActive &&
            !event.target.closest('#mobileMenu') &&
            !event.target.closest('#burgerButton')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            closeMenu();
        }
    });
});