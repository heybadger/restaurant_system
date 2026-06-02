/* ===== OPTIONAL ENHANCEMENTS ===== */

// 1. Smooth scroll to section on nav click
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 2. Highlight active section in navigation
const sections = document.querySelectorAll('.menu-section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.background = '';
        link.style.color = 'white';
        
        if (link.getAttribute('href') === `#${current}`) {
            link.style.background = 'var(--primary)';
            link.style.color = 'white';
        }
    });
});

// 3. Add current year to footer automatically
const yearSpan = document.querySelector('.year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// 4. Console welcome message
console.log('%c🍽️ The Rustic Table', 'font-size: 24px; color: #d4a574; font-weight: bold;');
console.log('%cWelcome to our restaurant!', 'font-size: 14px; color: #666;');