const header = document.querySelector("header");
const subheader = document.querySelector(".subheader");
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");
const slider = document.querySelector(".hero-slider");
const dots = document.querySelectorAll(".dot");
const heroNext = document.querySelector(".hero-next");
const heroPrev = document.querySelector(".hero-prev");
let currentIndex = 0;
let autoScroll;

if (header && subheader) {
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        const isScrolled = scrollPosition > 100;

        // Header Animation (Always Visible, but changes background when scrolling)
        if (scrollPosition > 50) {
            header.classList.add("sticky");
            header.style.background = "#ffffff"

            header.style.transform = "translateY(0)";
        } else {
            header.classList.remove("sticky");
            header.style.background = "transparent"; // Transparent when at the top
            header.style.boxShadow = "none";
            header.style.backdropFilter = "none";
        }

        // Subheader Animation (Appears smoothly when scrolled)
        if (isScrolled) {
            subheader.classList.add("show-subheader");
            subheader.style.transform = "translateY(0)";
            subheader.style.opacity = "1";
        } else {
            subheader.classList.remove("show-subheader");
            subheader.style.transform = "translateY(-20px)";
            subheader.style.opacity = "0";
        }
    });
}

// Mobile Menu Toggle
if (menu) {
    menu.onclick = () => {
        menu.classList.toggle("bx-x");
        navlist?.classList.toggle("open");
    };
}

window.onscroll = () => {
    menu?.classList.remove("bx-x");
    navlist?.classList.remove("open");
};
window.onscroll = () => {
    menu?.classList.remove("bx-x");
    navlist?.classList.remove("open");
};

// Scroll Reveal
if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
        distance: "30px",
        duration: 2600,
        reset: true,
    });
    sr.reveal(".some-class", { delay: 200, origin: "bottom" });
}

// Slider Functions
function jumpToSlide(index) {
    currentIndex = index;
    updateSlider();
    resetAutoScroll();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % dots.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    updateSlider();
}

function updateSlider() {
    if (!slider) return;
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[currentIndex]) {
        dots[currentIndex].classList.add("active");
    }
}

function startAutoScroll() {
    clearInterval(autoScroll); // Prevent multiple intervals
    autoScroll = setInterval(nextSlide, 3000);
}

function resetAutoScroll() {
    clearInterval(autoScroll);
    startAutoScroll();
}

if (heroNext) {
    heroNext.addEventListener("click", () => {
        nextSlide();
        resetAutoScroll();
    });
}

if (heroPrev) {
    heroPrev.addEventListener("click", () => {
        prevSlide();
        resetAutoScroll();
    });
}

startAutoScroll();
updateSlider();
