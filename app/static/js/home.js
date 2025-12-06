
// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.journey-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    // Function to show slide
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Auto-advance slides every 5 seconds
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
    
    // Dot click events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
        if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
    });
});

  

// Set header to transparent on page load (overrides base white)
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.nav');
    const links = document.querySelectorAll('.nav-a');
    const logoText = document.querySelector('.logo-text'); 
    const logoImgage = document.querySelector('.logo-img');

    header.style.backgroundColor = 'transparent';
    
    links.forEach(link => {
      link.style.color = 'white';
    });

    if (logoText) {
        logoText.style.color = 'white';
    }

    if(logoImgage){
        logoImgage.src = logoWhiteUrl;
    }

    const homeLink = document.getElementById('home-nav-a');
    if (homeLink) {
        homeLink.style.cssText += `
            overflow: hidden !important;
            overflow-y: hidden !important;
            position: relative;
            height: auto;
            max-height: 40px;
            display: inline-flex;
            align-items: center;
        `;
    }
    
});

// Handle scroll: Change nav to white and links/logo to black after 5%
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;  
    const documentHeight = document.body.scrollHeight - window.innerHeight;  
    const scrollPercent = (scrollTop / documentHeight) * 100;  
    
    const nav = document.querySelector('.nav');
    const links = document.querySelectorAll('.nav-a');
    const logoText = document.querySelector('.logo-text');
    const logoImgage = document.querySelector('.logo-img');    
    
    if (scrollPercent > 3) {
        nav.style.backgroundColor = 'white';
        links.forEach(link => {
            link.style.color = 'black';
        });
        if (logoText) {
            logoText.style.color = 'black';
        }
        if(logoImgage){
            logoImgage.src = logoBlackUrl;
        }
    } else {
        nav.style.backgroundColor = 'transparent';
        links.forEach(link => {
            link.style.color = 'white';
        });
        if (logoText) {
            logoText.style.color = 'white';
        }
        if(logoImgage){
            logoImgage.src = logoWhiteUrl;
        }
    }
});




// ---------------- Memories Video play on hover logic ------------------ 
document.addEventListener('DOMContentLoaded', function() {
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach(card => {
        const video = card.querySelector('video');
        
        // Preload video metadata
        video.load();
        
        card.addEventListener('mouseenter', function() {
            // Add a small delay to ensure video is ready
            setTimeout(() => {
                video.play().catch(e => {
                    console.log('Video play failed:', e);
                    // Fallback: try with promise
                    video.play().then(() => {
                        console.log('Video playing successfully');
                    }).catch(err => {
                        console.log('Video play error:', err);
                    });
                });
            }, 100);
        });
        
        card.addEventListener('mouseleave', function() {
            video.pause();
            video.currentTime = 0;
        });
        
    });
});

