/*=========================================
        FJ1 WELLNESS SCRIPT
        PART 1
=========================================*/

/*=========================================
        HERO SLIDER
=========================================*/

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let sliderInterval = null;

function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    if (slides[index]) {

        slides[index].classList.add("active");

    }

}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

function startSlider() {

    if (slides.length <= 1) return;

    clearInterval(sliderInterval);

    sliderInterval = setInterval(nextSlide, 4000);

}

function stopSlider() {

    clearInterval(sliderInterval);

}

if (slides.length) {

    showSlide(0);

    startSlider();

    const slider = document.querySelector(".slider");

    if (slider) {

        slider.addEventListener("mouseenter", stopSlider);

        slider.addEventListener("mouseleave", startSlider);

    }

}

/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("show");

        menuBtn.classList.toggle("active");

    });

}

/* Close Menu */

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        if (menu) {

            menu.classList.remove("show");

        }

        if (menuBtn) {

            menuBtn.classList.remove("active");

        }

    });

});

/*=========================================
        SEE MORE PRODUCTS
=========================================*/

const showBtn = document.getElementById("showProducts");
const productGrid = document.querySelector(".product-grid");

if (showBtn && productGrid) {

    showBtn.addEventListener("click", () => {

        productGrid.classList.add("show-all");

        showBtn.style.display = "none";

    });

}

/*=========================================
        DISABLE PRODUCT CLICK
=========================================*/

document.querySelectorAll(".product-card").forEach(card => {

    card.style.cursor = "default";

    card.addEventListener("click", function(e){

        e.preventDefault();

        e.stopPropagation();

    });

});

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
        SMOOTH MENU SCROLL
=========================================*/

const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        }

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

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

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (

            window.scrollY >= top &&
            window.scrollY < top + height

        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

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
        PAGE LOAD
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    if (slides.length) {

        showSlide(0);

    }

});

/*=========================================
        SCROLL ANIMATION
=========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(`
.product-card,
.benefit-card,
.pure-box,
.stat-card,
.about-left,
.about-right,
.trusted-text,
.footer-box,
.footer-feature div
`).forEach((el, index) => {

    el.classList.add("hidden");

    el.style.transitionDelay = `${index * 0.08}s`;

    observer.observe(el);

});

/*=========================================
        WINDOW RESIZE
=========================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 768 && menu) {

        menu.classList.remove("show");

    }

});

/*=========================================
        PAGE VISIBILITY
=========================================*/

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        stopSlider();

    } else {

        startSlider();

    }

});

/*=========================================
        PRODUCT QUANTITY
=========================================*/

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const quantity = document.getElementById("quantity");

if (minus && plus && quantity) {

    minus.addEventListener("click", () => {

        let value = parseInt(quantity.value);

        if (value > 1) {

            quantity.value = value - 1;

        }

    });

    plus.addEventListener("click", () => {

        let value = parseInt(quantity.value);

        quantity.value = value + 1;

    });

}

/*=========================================
        SMOOTH HOVER EFFECT
=========================================*/

document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll("button, .btn").forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/*=========================================
        IMAGE LAZY EFFECT
=========================================*/

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("loading", "lazy");

});

/*=========================================
        FINAL LOAD
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    updateHeader();

    if (slides.length) {

        showSlide(currentSlide);

    }

});

console.clear();

console.log("🚀 FJ1 Wellness Nutrition Loaded Successfully");
