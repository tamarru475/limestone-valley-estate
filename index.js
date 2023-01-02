const staySlide = "stay__slideshow-slide";
const stayDot = "stay__slideshow-dot";
const gallerySlide = "gallery__slideshow-slide";
const galleryDot = "gallery__slideshow-dot"

let slideIndex = 1;
showSlides(slideIndex, staySlide, stayDot);
showSlides(slideIndex, gallerySlide, galleryDot);

// Next/previous controls
function changeSlide(n, slide, dot) {
    showSlides(slideIndex += n, slide, dot);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n, slide, dot) {
    let i;
    let slides = document.getElementsByClassName(slide);
    let dots = document.getElementsByClassName(dot);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



