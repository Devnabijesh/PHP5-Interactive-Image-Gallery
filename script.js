// Collect all image sources from the gallery
const images = document.querySelectorAll('.gallery-item img');
const imageSources = Array.from(images).map(img => img.src);

let currentIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = imageSources[currentIndex];
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

function changeImage(direction) {
    currentIndex += direction;
    
    // Loop back around if bounds are exceeded
    if (currentIndex < 0) {
        currentIndex = imageSources.length - 1;
    } else if (currentIndex >= imageSources.length) {
        currentIndex = 0;
    }
    
    lightboxImg.src = imageSources[currentIndex];
}

// Close lightbox when clicking outside the content box
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});