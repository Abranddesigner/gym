/*=========================================
        HERO SLIDER
=========================================*/

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

if(slides.length){

    setInterval(nextSlide,4000);

}


/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");

const menu = document.querySelector(".menu");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("show");

});

}


/*=========================================
        SHOW ALL PRODUCTS
=========================================*/

const showBtn = document.getElementById("showProducts");

const products = document.querySelectorAll(".more-product");

if(showBtn){

showBtn.addEventListener("click",()=>{

products.forEach(product=>{

product.style.display="block";

});

showBtn.style.display="none";

});

}


/*=========================================
        SCROLL TO TOP
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*=========================================
        ACTIVE MENU
=========================================*/

const links = document.querySelectorAll(".menu a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(item=>{

item.classList.remove("active");

});

link.classList.add("active");

});

});


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

menu.classList.remove("show");

}

});

});


/*=========================================
        SCROLL ANIMATION
=========================================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:.15
});

document.querySelectorAll(

'.product-card,.benefit-card,.pure-box,.stat-card,.footer-feature div'

).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


/*=========================================
        HEADER SHADOW
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>20){

header.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

}else{

header.style.boxShadow="none";

}

});
