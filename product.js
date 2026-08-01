/*=========================================
        GET PRODUCT
=========================================*/

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products[productId];

if(product){

document.title = product.name + " | FJ1 Wellness Nutrition";

/* Image */

document.querySelector(".product-image img").src = product.image;

document.querySelector(".product-image img").alt = product.name;

/* Category */

document.querySelector(".product-category").innerText = product.category;

/* Name */

document.querySelector(".product-content h1").innerText = product.name;

/* Price */

document.querySelector(".price").innerText = product.price;

/* Description */

document.querySelector(".product-description").innerText =
product.description;

/* Rating */

const rating=document.querySelector(".rating span");

if(rating){

rating.innerText=`(${product.rating})`;

}

/* Product Features */

const featureBox=document.querySelector(".product-features");

featureBox.innerHTML="";

product.features.forEach(item=>{

featureBox.innerHTML+=`

<div class="feature-item">

<i class="fa-solid fa-circle-check"></i>

<span>${item}</span>

</div>

`;

});

}

/*=========================================
        QUANTITY
=========================================*/

const minusBtn = document.querySelector(".qty-minus");
const plusBtn = document.querySelector(".qty-plus");
const quantity = document.getElementById("quantity");

if(minusBtn && plusBtn && quantity){

    minusBtn.addEventListener("click",()=>{

        let value = parseInt(quantity.value);

        if(value > 1){

            quantity.value = value - 1;

        }

    });

    plusBtn.addEventListener("click",()=>{

        let value = parseInt(quantity.value);

        quantity.value = value + 1;

    });

}

/*=========================================
        BUY NOW
=========================================*/

const buyBtn = document.getElementById("buyNow");

if(buyBtn){

buyBtn.addEventListener("click",(e)=>{

e.preventDefault();

const qty = quantity.value;

const message = `Hello FJ1 Wellness Nutrition,

I want to order.

Product : ${product.name}

Price : ${product.price}

Quantity : ${qty}

Please share payment details.`;

window.open(

`https://wa.me/917014745787?text=${encodeURIComponent(message)}`,

"_blank"

);

});

}

/*=========================================
        EXTRA INFO
=========================================*/

const extraBox = document.querySelector(".product-extra");

if(extraBox && product.extra){

extraBox.innerHTML="";

product.extra.forEach(item=>{

extraBox.innerHTML += `

<p>

<i class="${item.icon}"></i>

${item.text}

</p>

`;

});

}

/*=========================================
        BENEFITS
=========================================*/

const benefitsGrid=document.querySelector(".benefits-grid");

if(benefitsGrid && product.benefits){

benefitsGrid.innerHTML="";

product.benefits.forEach(item=>{

benefitsGrid.innerHTML += `

<div class="benefit-card">

<i class="${item.icon}"></i>

<h3>${item.title}</h3>

<p>${item.text}</p>

</div>

`;

});

}

/*=========================================
        NUTRITION TABLE
=========================================*/

const nutritionTable = document.querySelector(".nutrition-table tbody");

if(nutritionTable && product.nutrition){

nutritionTable.innerHTML = "";

product.nutrition.forEach(item=>{

nutritionTable.innerHTML += `

<tr>

<th>${item.name}</th>

<td>${item.value}</td>

</tr>

`;

});

}

/*=========================================
        HOW TO USE
=========================================*/

const usageText = document.querySelector(".usage-text");

if(usageText && product.usage){

usageText.innerHTML = product.usage;

}

/*=========================================
        STORAGE
=========================================*/

const storageList = document.querySelector(".storage-list");

if(storageList && product.storage){

storageList.innerHTML = "";

product.storage.forEach(item=>{

storageList.innerHTML += `

<li>

<i class="fa-solid fa-circle-check"></i>

<span>${item}</span>

</li>

`;

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

if(header){

if(window.scrollY > 20){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

}

});

/*=========================================
        INVALID PRODUCT
=========================================*/

if(!product){

document.querySelector(".product-wrapper").innerHTML = `

<div style="width:100%;text-align:center;padding:100px 20px;">

<h2>Product Not Found</h2>

<p>The product you are looking for is unavailable.</p>

<a href="index.html" class="btn">

Back to Home

</a>

</div>

`;

}
