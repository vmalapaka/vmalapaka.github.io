const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

function setHeaderState() {
    header.classList.toggle('is-scrolled', window.scrollY > 16);
}

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

const sections = [...document.querySelectorAll('main section[id]')];

function updateActiveLink() {
    const visibleSections = sections.filter((section) => window.scrollY >= section.offsetTop - 120);
    const current = visibleSections[visibleSections.length - 1];

    navLinks.forEach((link) => {
        link.classList.toggle('active', current && current.id === link.getAttribute('href').slice(1));
    });
}

updateActiveLink();
window.addEventListener('scroll', updateActiveLink, { passive: true });
