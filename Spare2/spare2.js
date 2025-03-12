


const header = document.querySelector("header");
const subheader = document.querySelector(".subheader");
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

if (header && subheader) {
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        const isScrolled = scrollPosition > 100;

        // Header Animation (Always Visible, but changes background when scrolling)
        if (scrollPosition > 50) {
            header.classList.add("sticky");
            header.style.background = "#ffffff";
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



document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

 // Add this to your shop.js file

// Product data
const products = {
    1: {
        name: "Banana Chips",
        price: "₱250.00",
        oldPrice: "",
        brand: "Dangal Foods",
        location: "Ilocos Region, Philippines",
        description: "Crispy and delicious banana chips made from locally sourced Saba bananas. Perfect for snacking or as a treat with your afternoon tea. Each pack contains 250g of premium quality chips.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(24 reviews)"
    },
    2: {
        name: "Dried Mangoes",
        price: "₱350.00",
        oldPrice: "",
        brand: "Cebu's Finest",
        location: "Cebu, Philippines",
        description: "Sweet and tangy dried mangoes from the sunny farms of Cebu. Made from Philippine carabao mangoes known for their exceptional sweetness. No preservatives or added sugar, just pure mango goodness in every bite.",
        images: ["banner2.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(42 reviews)"
    },
    3: {
        name: "Pili Nuts",
        price: "₱420.00",
        oldPrice: "₱500.00",
        brand: "Bicol Harvest",
        location: "Bicol Region, Philippines",
        description: "Premium pili nuts harvested from the volcanic soils of Bicol. These buttery, nutrient-rich nuts are hand-selected and lightly roasted to preserve their delicate flavor and nutritional benefits.",
        images: ["background.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(18 reviews)"
    },
    4: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    5: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    6: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    7: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    8: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    9: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    10: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    11: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    12: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    13: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    14: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    15: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    16: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    17: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    18: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    19: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    20: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    21: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    22: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    23: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    24: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    25: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    26: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    27: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    28: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    29: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    30: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    31: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    32: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    33: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    34: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    35: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    36: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    37: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    38: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    39: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    40: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    41: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    42: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    43: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    44: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    45: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    46: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    47: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    },
    48: {
        name: "Chocolate Tablea",
        price: "₱280.00",
        oldPrice: "",
        brand: "Davao Delights",
        location: "Davao, Philippines",
        description: "Authentic chocolate tablea made from single-origin cacao beans grown in Davao. Perfect for making traditional Filipino hot chocolate (tsokolate) or for baking. Each pack contains 200g of pure, unsweetened chocolate discs.",
        images: ["banner1.jpg", "banner1.jpg", "banner2.jpg", "background.jpg"],
        reviews: "(15 reviews)"
    }



};

document.addEventListener('DOMContentLoaded', function() {
    // Get modal element
    const modal = document.getElementById('productModal');
    
    // Get all product cards
    const productCards = document.querySelectorAll('.product-card');
    
    // Get close button
    const closeButton = document.querySelector('.close-modal');
    
    // Add click event to product cards
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            openProductModal(productId);
        });
    });
    
    // Open product modal function
    function openProductModal(productId) {
        const product = products[productId];
        if (!product) return;
        
        // Populate modal with product data
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalProductPrice').textContent = product.price;
        document.getElementById('modalOldPrice').textContent = product.oldPrice;
        document.getElementById('modalProductBrand').textContent = product.brand;
        document.getElementById('modalProductLocation').textContent = product.location;
        document.getElementById('modalProductDescription').textContent = product.description;
        document.getElementById('modalReviews').textContent = product.reviews;
        document.getElementById('modalProductImage').src = product.images[0];
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    // Close modal when clicking the close button
    closeButton.addEventListener('click', function() {
        closeModal();
    });
    
    // Close modal when clicking outside modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal function
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    // Thumbnail functionality
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main image
            document.getElementById('modalProductImage').src = this.src;
        });
    });
    
    // Quantity selector functionality
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const quantityInput = document.querySelector('.quantity-input');
    
    minusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        quantityInput.value = quantity + 1;
    });
    
    // Size selection functionality
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            sizeOptions.forEach(o => o.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
        });
    });
    
    // Add to cart functionality
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', function() {
        const product = document.getElementById('modalProductName').textContent;
        const size = document.querySelector('.size-option.active').textContent;
        const quantity = document.querySelector('.quantity-input').value;
        
        alert(`Added to cart: ${quantity} × ${product} (${size})`);
    });
    
    // Buy now functionality
    const buyNowBtn = document.querySelector('.buy-now-btn');
    buyNowBtn.addEventListener('click', function() {
        alert('Proceeding to checkout...');
    });
});

// Pagination Logic
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const numberBtns = document.querySelectorAll('.number-btn');
    
    // Show 5 products per page (adjust as needed)
    const productsPerPage = 12;
    let currentPage = 1;
    const totalPages = Math.ceil(productCards.length / productsPerPage);
    
    function showPage(pageNum) {
        // Calculate which products to show
        const startIndex = (pageNum - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        
        // Hide all products first
        productCards.forEach(card => {
            card.style.display = 'none';
        });
        
        // Show only current page products
        for (let i = startIndex; i < endIndex && i < productCards.length; i++) {
            productCards[i].style.display = 'block';
        }
        
        // Update active button state
        numberBtns.forEach(btn => {
            btn.classList.remove('active');
            if (parseInt(btn.dataset.page) === currentPage) {
                btn.classList.add('active');
            }
        });
        
        // Enable/disable prev/next buttons
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
        
        // Scroll to top of product section (optional)
        document.querySelector('.product-section').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Initialize first page
    showPage(currentPage);
    
    // Number button click
    numberBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            currentPage = parseInt(this.dataset.page);
            showPage(currentPage);
        });
    });
    
    // Previous button click
    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });
    
    // Next button click
    nextBtn.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });
});

