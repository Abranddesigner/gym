/*=========================================
        FJ1 WELLNESS SCRIPT
        OPTIMIZED PART 1
=========================================*/

/*========== SELECTORS ==========*/

const $ = (e)=>document.querySelector(e);
const $$ = (e)=>document.querySelectorAll(e);

const header = $(".header");
const menu = $(".menu");
const menuBtn = $(".menu-btn");

const productGrid = $(".product-grid");
const showBtn = $("#showProducts");

const topBtn = $("#topBtn");

const slides = $$(".slide");

let currentSlide = 0;
let slider = null;

/*=========================================
            HERO SLIDER
=========================================*/

function showSlide(index){

    slides.forEach(slide=>slide.classList.remove("active"));

    if(slides[index]){

        slides[index].classList.add("active");

    }

}

function nextSlide(){

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

}

function startSlider(){

    if(slides.length<=1) return;

    clearInterval(slider);

    slider=setInterval(nextSlide,3000);

}

function stopSlider(){

    clearInterval(slider);

}

if(slides.length){

    showSlide(0);

    startSlider();

    const sliderBox=$(".slider");

    if(sliderBox){

        sliderBox.addEventListener("mouseenter",stopSlider);

        sliderBox.addEventListener("mouseleave",startSlider);

    }

}

/*=========================================
            MOBILE MENU
=========================================*/

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        menu.classList.toggle("show");

        menuBtn.classList.toggle("active");

    });

}

$$(".menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("show");

        menuBtn.classList.remove("active");

    });

});

/*=========================================
            SEE MORE
=========================================*/

if(showBtn){

    showBtn.addEventListener("click",()=>{

        productGrid.classList.add("show-all");

        showBtn.style.display="none";

    });

}

/*=========================================
        PRODUCT DISABLE CLICK
=========================================*/

$$(".product-card").forEach(card=>{

    card.addEventListener("click",(e)=>{

        e.preventDefault();

    });

});

/*=========================================
        SCROLL TO TOP
=========================================*/

if(topBtn){

    topBtn.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

}

/*=========================================
        SMOOTH MENU SCROLL
=========================================*/

const navLinks = $$(".menu a");
const sections = $$("section[id]");

navLinks.forEach(link=>{

    link.addEventListener("click",function(e){

        const href=this.getAttribute("href");

        if(href.startsWith("#")){

            e.preventDefault();

            const target=$(href);

            if(target){

                window.scrollTo({

                    top:target.offsetTop-65,

                    behavior:"smooth"

                });

            }

        }

    });

});

/*=========================================
        HEADER + ACTIVE MENU + TOP BUTTON
=========================================*/

window.addEventListener("scroll",()=>{

    const scroll=window.scrollY;

    /* Header Shadow */

    if(header){

        header.classList.toggle("scrolled",scroll>20);

    }

    /* Top Button */

    if(topBtn){

        topBtn.style.display=scroll>300?"flex":"none";

    }

    /* Active Menu */

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.offsetHeight;

        if(scroll>=top && scroll<top+height){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

},{passive:true});

/*=========================================
        SCROLL ANIMATION
=========================================*/

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:.08
});

$$(
`
.product-card,
.benefit-card,
.pure-box,
.stat-card,
.about-left,
.about-right,
.trusted-text,
.footer-box,
.footer-feature div
`
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

/*=========================================
        WINDOW RESIZE
=========================================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth>768){

        menu.classList.remove("show");

        menuBtn.classList.remove("active");

    }

});

/*=========================================
        PAGE LOAD
=========================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

    if(header){

        header.classList.remove("loading");

    }

});

/*=========================================
        PAGE VISIBILITY
=========================================*/

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        stopSlider();

    }else{

        startSlider();

    }

});

/*=========================================
        PRODUCT QUANTITY
=========================================*/

const minus=$(".minus");
const plus=$(".plus");
const quantity=$("#quantity");

if(minus && plus && quantity){

    minus.addEventListener("click",()=>{

        let value=parseInt(quantity.value)||1;

        if(value>1){

            quantity.value=value-1;

        }

    });

    plus.addEventListener("click",()=>{

        let value=parseInt(quantity.value)||1;

        quantity.value=value+1;

    });

}

/*=========================================
        IMAGE OPTIMIZATION
=========================================*/

/* Hero Slider ko lazy load mat karo */

$$(".product-card img,.about img,.pure-right img,.footer img").forEach(img=>{

    img.loading="lazy";

    img.decoding="async";

});

/*=========================================
        PREVENT IMAGE DRAG
=========================================*/

$$("img").forEach(img=>{

    img.setAttribute("draggable","false");

});

/*=========================================
        PERFORMANCE
=========================================*/

window.addEventListener("pageshow",()=>{

    if(slides.length){

        showSlide(currentSlide);

    }

});

/*=========================================
        SMOOTH BUTTON
=========================================*/

$$(".btn").forEach(btn=>{

    btn.style.willChange="transform";

});

/*=========================================
        PRELOAD COMPLETE
=========================================*/

document.documentElement.style.scrollBehavior="smooth";

/*=========================================
        FINAL MESSAGE
=========================================*/

const buyBtn = document.getElementById("buyNowBtn");

if (buyBtn) {

    buyBtn.addEventListener("click", function (e) {

        e.preventDefault();

        const qty = document.getElementById("quantity").value;

        const productName = document.querySelector(".product-content h1").innerText;

        const message =
`Hello FJ1 Wellness Nutrition,

I want to order:

Product : ${productName}
Quantity : ${qty}

Please share payment details.`;

        window.open(
            "https://wa.me/918440048355?text=" +
            encodeURIComponent(message),
            "_blank"
        );

    });

}

console.log("%cFJ1 Wellness Loaded Successfully 🚀",
"color:#fff;background:#005BFF;padding:8px 14px;border-radius:5px;font-size:13px;");
