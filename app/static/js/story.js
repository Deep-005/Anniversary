
// -------------------- Scroll animations --------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Timeline item animations
    const timelineItems = document.querySelectorAll('.timeline-item');
            
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Smooth scroll for navigation
    document.querySelector('.scroll-indicator').addEventListener('click', function() {
        window.scrollTo({
            top: document.querySelector('.timeline-section').offsetTop,
            behavior: 'smooth'
        });
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.story-hero');
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});