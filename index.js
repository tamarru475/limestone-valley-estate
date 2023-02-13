const staySlide = "stay__slideshow-slide";
const stayDot = "stay__slideshow-dot";
const gallerySlide = "gallery__slideshow-slide";
const galleryDot = "gallery__slideshow-dot";
const navButton = document.querySelector(".popupnav__button");
const navBackground = document.querySelector(".popupnav__background");
const navList = document.querySelector(".popupnav__nav");


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

function openPopupNav(button, background, list) {
    button.classList.toggle("popupnav__button_active");
    background.classList.toggle("popupnav__background_active");
    list.classList.toggle("popupnav__nav_active");
}

function closePopupNav(button, background, list) {
    button.classList.remove("popupnav__button_active");
    background.classList.remove("popupnav__background_active");
    list.classList.remove("popupnav__nav_active");
}

function togglePopupNav(button, background, list) {
    openPopupNav(button, background, list);
}

navButton.addEventListener("click", () => togglePopupNav(navButton, navBackground, navList));
navList.addEventListener("click", () => closePopupNav(navButton, navBackground, navList));