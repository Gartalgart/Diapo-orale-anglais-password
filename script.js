const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideIndicator = document.getElementById('slide-indicator');

let currentSlide = 0;
const totalSlides = slides.length;

// Initialize
updateSlide(currentSlide);

function updateSlide(index) {
    // Bounds check
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;

    currentSlide = index;

    // Remove active class from all
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });

    // Update buttons state
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
    prevBtn.style.opacity = currentSlide === 0 ? '0.3' : '1';
    nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.3' : '1';

    // Update indicator
    slideIndicator.textContent = `${currentSlide + 1} / ${totalSlides}`;
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        updateSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        updateSlide(currentSlide - 1);
    }
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
