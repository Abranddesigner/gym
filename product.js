/*=========================================
        QUANTITY
=========================================*/

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const quantity = document.getElementById("quantity");

if (minusBtn && plusBtn && quantity) {

    minusBtn.addEventListener("click", () => {

        let value = parseInt(quantity.value);

        if (value > 1) {
            quantity.value = value - 1;
        }

    });

    plusBtn.addEventListener("click", () => {

        let value = parseInt(quantity.value);

        quantity.value = value + 1;

    });

}

/*=========================================
        BUY NOW
=========================================*/

const buyNowBtn = document.getElementById("buyNow");

if (buyNowBtn) {

    buyNowBtn.addEventListener("click", function (e) {

        e.preventDefault();

        const productName =
            document.querySelector(".product-content h1").innerText;

        const qty = quantity.value;

        const message =
`Hello FJ1 Wellness Nutrition,

I want to order.

Product : ${productName}

Quantity : ${qty}

Please share payment details.`;

        window.open(
            `https://wa.me/917014745787?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    });

}

/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if(menuBtn && menu){

    menuBtn.addEventListener("click",()=>{

        menu.classList.toggle("show");

    });

    /* Close Menu After Click */

    document.querySelectorAll(".menu a").forEach(link=>{

        link.addEventListener("click",()=>{

            menu.classList.remove("show");

        });

    });

}

/*=========================================
        HEADER SHADOW
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 20){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/*=========================================
        PREVENT INVALID QUANTITY
=========================================*/

if(quantity){

    quantity.addEventListener("change",()=>{

        let value = parseInt(quantity.value);

        if(isNaN(value) || value < 1){

            quantity.value = 1;

        }

    });

}