// ===============================
// FJ1 Website JavaScript
// ===============================

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = this.getAttribute("href");

        if (target.startsWith("#")) {

            e.preventDefault();

            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Active Menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// Product Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// Add To Cart Button
const buttons = document.querySelectorAll(".card button");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.innerHTML = "✔ Added";

        btn.style.background = "#16a34a";

        setTimeout(() => {

            btn.innerHTML = "Add To Cart";

            btn.style.background = "#1e63ff";

        }, 1500);

    });

});

// Reveal Animation
const reveals = document.querySelectorAll(
    ".card,.benefits div,.about,.hero-content,.hero-left,.hero-right"
);

function reveal() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;
        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 80) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// Counter Animation (Future Ready)

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const update = () => {

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 100;

        if (c < target) {

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(update, 20);

        } else {

            counter.innerText = target;

        }

    };

    update();

});

// Scroll To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show-top");

    } else {

        topBtn.classList.remove("show-top");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// Loading Animation

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("✅ FJ1 Website Loaded Successfully");