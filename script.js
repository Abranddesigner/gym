// ===============================
// HERO SLIDER
// ===============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
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

setInterval(nextSlide,4000);


// ===============================
// SCROLL TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="flex";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// STICKY HEADER SHADOW
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 20){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

    }

    else{

        header.style.boxShadow="0 2px 15px rgba(0,0,0,.06)";

    }

});


// ===============================
// ACTIVE MENU
// ===============================

const menuLinks=document.querySelectorAll(".menu a");

menuLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        menuLinks.forEach(item=>{

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});


// ===============================
// MOBILE MENU
// ===============================

const mobileBtn=document.querySelector(".mobile-menu");

const menu=document.querySelector(".menu");

mobileBtn.addEventListener("click",()=>{

    menu.classList.toggle("show");

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ===============================
// FADE ANIMATION
// ===============================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".product-card,.benefit-card,.service-card,.stat-box,.pure-box").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});
