// Add this JavaScript to handle the mobile menu toggle
const nav = document.querySelector(".nav");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
});

navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove("openNav");
  });
});



// ---------------- Create audio element ----------------------
const audio = new Audio();
audio.src = 'path/to/your/romantic-music.mp3'; 
audio.loop = true;

// Get the button element
const audioBtn = document.getElementById('audio');

// Add click event listener
audioBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        audioBtn.innerHTML = '<i class="fa fa-pause"></i> Pause Music';
        audioBtn.classList.add('playing');
    } else {
        audio.pause();
        audioBtn.innerHTML = '<i class="fa fa-music"></i> Play Music';
        audioBtn.classList.remove('playing');
    }
});

document.head.appendChild(style);