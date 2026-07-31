/*=========================================
            HERO SLIDER
=========================================*/

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let sliderInterval = null;

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

function startSlider(){

    if(slides.length <= 1) return;

    sliderInterval = setInterval(nextSlide,4000);

}

function stopSlider(){

    clearInterval(sliderInterval);

}

if(slides.length){

    showSlide(0);

    startSlider();

    const slider = document.querySelector(".slider");

    slider.addEventListener("mouseenter",stopSlider);

    slider.addEventListener("mouseleave",startSlider);

}

/*=========================================
            MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if(menuBtn && menu){

    menuBtn.addEventListener("click",()=>{

        menu.classList.toggle("show");

        menuBtn.classList.toggle("active");

    });

}

/*=========================================
        SEE MORE PRODUCTS
=========================================*/

const showBtn = document.getElementById("showProducts");
const productGrid = document.querySelector(".product-grid");

if (showBtn && productGrid) {

    showBtn.addEventListener("click", () => {

        productGrid.classList.toggle("show-all");

        if (productGrid.classList.contains("show-all")) {

            showBtn.innerText = "SHOW LESS";

            document.querySelector("#products").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        } else {

            showBtn.innerText = "SEE MORE";

            document.querySelector("#products").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}

/*=========================================
        SCROLL TO TOP
=========================================*/

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/*=========================================
        ACTIVE MENU + SMOOTH SCROLL
=========================================*/

const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href.startsWith("#")) {

            const target = document.querySelector(href);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

        if (menu) {

            menu.classList.remove("show");

        }

    });

});

/*=========================================
        AUTO ACTIVE SECTION
=========================================*/

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});

/*=========================================
        SCROLL ANIMATION
=========================================*/

const animatedElements = document.querySelectorAll(`
    .product-card,
    .benefit-card,
    .pure-box,
    .stat-card,
    .about-left,
    .about-right,
    .trusted-text,
    .footer-box,
    .footer-feature div
`);

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});

/*=========================================
        FADE ANIMATION DELAY
=========================================*/

animatedElements.forEach((element, index) => {

    element.style.transitionDelay = `${index * 0.08}s`;

});

/*=========================================
        HEADER SHADOW
=========================================*/

const header = document.querySelector(".header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();

/*=========================================
        PAGE LOAD ANIMATION
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    showSlide(0);

});

/*=========================================
        RESIZE FIX
=========================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 768 && menu) {

        menu.classList.remove("show");

    }

});

/*=========================================
        PERFORMANCE
=========================================*/

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        stopSlider();

    } else {

        startSlider();

    }

});

console.log("FJ1 Wellness Nutrition Website Loaded Successfully ✅");

/* Product Quantity */

const minus=document.querySelector(".minus");
const plus=document.querySelector(".plus");
const quantity=document.getElementById("quantity");

if(minus && plus && quantity){

minus.onclick=()=>{

if(quantity.value>1){

quantity.value--;

}

};

plus.onclick=()=>{

quantity.value++;

};

}
