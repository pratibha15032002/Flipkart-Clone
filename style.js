
let slideIndex = 1;
let autoSlideInterval; // To store the interval ID for auto-sliding

// Initialize the carousel when the script loads
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
    startAutoSlide(); // Start auto-sliding when the page loads
});

// Next/previous controls
function plusSlides(n) {
    stopAutoSlide(); // Stop auto-sliding when manual navigation occurs
    showSlides(slideIndex += n);
    startAutoSlide(); // Restart auto-sliding after a short delay
}

// Thumbnail image controls
function currentSlide(n) {
    stopAutoSlide(); // Stop auto-sliding when manual navigation occurs
    showSlides(slideIndex = n);
    startAutoSlide(); // Restart auto-sliding after a short delay
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    // Loop around if we go past the first or last slide
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove('fade'); // Remove fade class before re-adding
    }

    // Deactivate all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('fade'); // Add fade effect
    dots[slideIndex - 1].className += " active";
}

// --- Auto-sliding functionality ---

function startAutoSlide() {
    // Clear any existing interval to prevent multiple intervals running
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        plusSlides(1); // Go to the next slide
    }, 4000); // Change slide every 4 seconds (4000 milliseconds)
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}