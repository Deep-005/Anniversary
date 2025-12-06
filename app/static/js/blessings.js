document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const book = document.getElementById('book');
    const mobileSwipeHint = document.querySelector('.mobile-swipe-hint');
    
    // Papers
    const papers = [
        document.getElementById('p1'),
        document.getElementById('p2'),
        document.getElementById('p3')
    ];
    
    // State variables
    let currentLocation = 1;
    const numOfPapers = papers.length;
    const maxLocation = numOfPapers + 1;
    let isMobile = window.innerWidth <= 768;
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Initialize
    updateButtonStates();
    checkMobileView();
    
    // Event Listeners
    prevBtn.addEventListener('click', goPrevPage);
    nextBtn.addEventListener('click', goNextPage);
    
    // Touch events for mobile swipe
    book.addEventListener('touchstart', handleTouchStart, { passive: true });
    book.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Click events for desktop book interaction
    book.addEventListener('click', handleBookClick);
    
    // Window resize for responsive behavior
    window.addEventListener('resize', handleResize);
    
    // Functions
    function handleResize() {
        isMobile = window.innerWidth <= 768;
        checkMobileView();
    }
    
    function checkMobileView() {
        if (isMobile) {
            // Hide buttons on mobile
            prevBtn.classList.add('hidden');
            nextBtn.classList.add('hidden');
            if (mobileSwipeHint) mobileSwipeHint.style.display = 'flex';
        } else {
            // Show buttons on desktop
            prevBtn.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
            if (mobileSwipeHint) mobileSwipeHint.style.display = 'none';
            updateButtonStates();
        }
    }
    
    function handleTouchStart(event) {
        if (!isMobile) return;
        touchStartX = event.changedTouches[0].screenX;
    }
    
    function handleTouchEnd(event) {
        if (!isMobile) return;
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentLocation < maxLocation) {
                // Swipe left - go next
                goNextPage();
            } else if (diff < 0 && currentLocation > 1) {
                // Swipe right - go prev
                goPrevPage();
            }
        }
    }
    
    function handleBookClick(event) {
        // Desktop click to flip (click on right/left edges)
        if (isMobile) return;
        
        const rect = book.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const bookWidth = rect.width;
        
        // Click on right 20% for next
        if (clickX > bookWidth * 0.8 && currentLocation < maxLocation) {
            goNextPage();
        }
        // Click on left 20% for previous
        else if (clickX < bookWidth * 0.2 && currentLocation > 1) {
            goPrevPage();
        }
    }
    
    function openBook() {
        book.style.transform = 'translateX(50%)';
        if (!isMobile) {
            prevBtn.style.transform = 'translateX(-180px)';
            nextBtn.style.transform = 'translateX(180px)';
        }
    }
    
    function closeBook(isAtBeginning) {
        if (isAtBeginning) {
            book.style.transform = 'translateX(0%)';
        } else {
            book.style.transform = 'translateX(100%)';
        }
        
        if (!isMobile) {
            prevBtn.style.transform = 'translateX(0px)';
            nextBtn.style.transform = 'translateX(0px)';
        }
    }
    
    function goNextPage() {
        if (currentLocation < maxLocation) {
            switch(currentLocation) {
                case 1:
                    openBook();
                    papers[0].classList.add('flipped');
                    papers[0].style.zIndex = 3;
                    break;
                case 2:
                    papers[1].classList.add('flipped');
                    papers[1].style.zIndex = 3;
                    papers[0].style.zIndex = 2;
                    break;
                case 3:
                    papers[2].classList.add('flipped');
                    papers[2].style.zIndex = 3;
                    papers[1].style.zIndex = 2;
                    break;
                case 4:
                    closeBook(false);
                    break;
                default:
                    console.error('Unknown state');
            }
            currentLocation++;
            updateButtonStates();
        }
    }
    
    function goPrevPage() {
        if (currentLocation > 1) {
            switch(currentLocation) {
                case 2:
                    closeBook(true);
                    papers[0].classList.remove('flipped');
                    papers[0].style.zIndex = 3;
                    break;
                case 3:
                    papers[1].classList.remove('flipped');
                    papers[1].style.zIndex = 2;
                    papers[0].style.zIndex = 3;
                    break;
                case 4:
                    papers[2].classList.remove('flipped');
                    papers[2].style.zIndex = 2;
                    papers[1].style.zIndex = 3;
                    break;
                case 5:
                    openBook();
                    break;
                default:
                    console.error('Unknown state');
            }
            currentLocation--;
            updateButtonStates();
        }
    }
    
    function updateButtonStates() {
        if (isMobile) return; // No buttons on mobile
        
        // Previous button state
        if (currentLocation === 1) {
            prevBtn.classList.add('disabled');
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('disabled');
            prevBtn.classList.remove('hidden');
        }
        
        // Next button state
        if (currentLocation === maxLocation) {
            nextBtn.classList.add('disabled');
            nextBtn.classList.add('hidden');
        } else {
            nextBtn.classList.remove('disabled');
            nextBtn.classList.remove('hidden');
        }
    }
    
    // Keyboard navigation support (desktop only)
    document.addEventListener('keydown', function(e) {
        if (isMobile) return;
        
        if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            goPrevPage();
            e.preventDefault();
        } else if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
            goNextPage();
            e.preventDefault();
        }
    });
});