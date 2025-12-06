document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const book = document.getElementById('book');
        
    // Papers
    const papers = [
        document.getElementById('p1'),
        document.getElementById('p2'),
        document.getElementById('p3'),
        document.getElementById('p4'),
        document.getElementById('p5')
    ];
        
    // Business Logic
    let currentLocation = 1;
    const numOfPapers = papers.length;
    const maxLocation = numOfPapers + 1;
        
    // Event Listeners
    prevBtn.addEventListener('click', goPrevPage);
    nextBtn.addEventListener('click', goNextPage);
        
    // Functions
    function openBook() {
        book.style.transform = 'translateX(50%)';
        prevBtn.style.transform = 'translateX(-180px)';
        nextBtn.style.transform = 'translateX(180px)';
    }
        
    function closeBook(isAtBeginning) {
        if(isAtBeginning) {
            book.style.transform = 'translateX(0%)';
        } else {
            book.style.transform = 'translateX(100%)';
        }
            
        prevBtn.style.transform = 'translateX(0px)';
        nextBtn.style.transform = 'translateX(0px)';
    }
        
    function goNextPage() {
        if(currentLocation < maxLocation) {
            switch(currentLocation) {
                case 1:
                    openBook();
                    papers[0].classList.add('flipped');
                    papers[0].style.zIndex = 1;
                    break;
                case 2:
                    papers[1].classList.add('flipped');
                    papers[1].style.zIndex = 2;
                    break;
                case 3:
                    papers[2].classList.add('flipped');
                    papers[2].style.zIndex = 3;
                    break;
                case 4:
                    papers[3].classList.add('flipped');
                    papers[3].style.zIndex = 4;
                    break;
                case 5:
                    papers[4].classList.add('flipped');
                    papers[4].style.zIndex = 5;
                    closeBook(false);
                    break;
                default:
                    throw new Error('Unknown state');
            }
            currentLocation++;
        }
    }
        
    function goPrevPage() {
        if(currentLocation > 1) {
            switch(currentLocation) {
                case 2:
                    closeBook(true);
                    papers[0].classList.remove('flipped');
                    papers[0].style.zIndex = 5;
                    break;
                case 3:
                    papers[1].classList.remove('flipped');
                    papers[1].style.zIndex = 4;
                    break;
                case 4:
                    papers[2].classList.remove('flipped');
                    papers[2].style.zIndex = 3;
                    break;
                case 5:
                    papers[3].classList.remove('flipped');
                    papers[3].style.zIndex = 2;
                    break;
                case 6:
                    openBook();
                    papers[4].classList.remove('flipped');
                    papers[4].style.zIndex = 1;
                    break;
                default:
                    throw new Error('Unknown state');
            }
            currentLocation--;
        }
    }
});