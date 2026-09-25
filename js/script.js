/* =========================================================
   WEBSTORE INC
   CART + CAROUSEL + SEARCH
   ========================================================= */

(function () {

    "use strict";

    
    /* =====================================================
       WHEN PAGE LOADS
       ===================================================== */

    document.addEventListener("DOMContentLoaded", function () {

        /* =================================================
           MINI CART DROPDOWN TOGGLE LOGIC
           ================================================= */

        const cartTrigger = document.getElementById("cartTrigger") || document.querySelector(".cart-trigger");
        const miniCartDropdown = document.getElementById("miniCartDropdown") || document.querySelector(".mini-cart-dropdown");

        if (cartTrigger && miniCartDropdown) {
            cartTrigger.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
                miniCartDropdown.classList.toggle("active");
            });

            // Close mini-cart dropdown when clicking outside
            document.addEventListener("click", function (e) {
                if (!miniCartDropdown.contains(e.target) && !cartTrigger.contains(e.target)) {
                    miniCartDropdown.classList.remove("active");
                }
            });
        }

        /* =================================================
   HOME PAGE CATEGORY CARDS
   ================================================= */

const categoryCards =
    document.querySelectorAll(".category-card[data-category]");

categoryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const category =
            card.getAttribute("data-category");

        if (!category) {
            return;
        }

        if (category === "all") {

            window.location.href =
                "shop.html";

        } else {

            window.location.href =
                "shop.html?category=" +
                encodeURIComponent(category);

        }

    });

});

/* =================================================
   HOME + SHOP PRODUCT DETAILS
   ================================================= */

document.addEventListener(
    "click",
    function (event) {

        /*
           Ignore clicks on buttons,
           wishlist hearts and links.
        */

        if (
            event.target.closest(
                "button, .wishlist-icon, .fav-btn, a"
            )
        ) {
            return;
        }


        /*
           Find the product card
        */

        const card =
            event.target.closest(
                ".product-card"
            );


        if (!card) {
            return;
        }


        /*
           Get product information
        */

        const titleElement =
            card.querySelector(
                "h4, h3, h2, .product-title"
            );


        if (!titleElement) {
            return;
        }


        const title =
            titleElement.textContent.trim();


        /*
           If Shop JS catalog exists,
           find the exact product.
        */

        let productId = null;


        if (
            typeof products !==
            "undefined"
        ) {

            const product =
                products.find(
                    function (item) {

                        return (
                            item.title.trim() ===
                            title
                        );

                    }
                );


            if (product) {

                productId =
                    product.id;

            }

        }


        /*
           If card already has data-id,
           use it.
        */

        if (!productId) {

            productId =
                card.getAttribute(
                    "data-id"
                );

        }


        /*
           If product found,
           open details page.
        */

        if (productId) {

            window.location.href =
                "product-details.html?id=" +
                encodeURIComponent(
                    productId
                );

        }

    }
);

        /* =================================================
           SEARCH BAR TOGGLE & FILTER LOGIC
           ================================================= */

        const headerSearchToggle = document.getElementById("headerSearchToggle");
        const searchOverlayBar = document.getElementById("searchOverlayBar") || document.getElementById("searchOverlay");
        const closeSearchBtn = document.getElementById("closeSearchBtn") || document.getElementById("closeSearch");
        const productSearchInput = document.getElementById("productSearchInput") || document.getElementById("searchInput");
        const productSearchBtn = document.getElementById("productSearchBtn");

        // Open Search Overlay
        if (headerSearchToggle && searchOverlayBar) {
            headerSearchToggle.addEventListener("click", function (e) {
                e.preventDefault();
                searchOverlayBar.classList.remove("hidden");
                searchOverlayBar.classList.add("active");
                if (productSearchInput) {
                    productSearchInput.focus();
                }
            });
        }

        // Close Search Overlay
        if (closeSearchBtn && searchOverlayBar) {
            closeSearchBtn.addEventListener("click", function () {
                searchOverlayBar.classList.add("hidden");
                searchOverlayBar.classList.remove("active");
            });
        }

        // Live Product Search Functionality
        function executeSearch() {
            if (!productSearchInput) return;
            const query = productSearchInput.value.toLowerCase().trim();
            const cards = document.querySelectorAll(".product-card");

            cards.forEach(function (card) {
                const titleEl = card.querySelector("h4");
                const titleText = titleEl ? titleEl.textContent.toLowerCase() : "";

                if (titleText.includes(query)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        }

        if (productSearchInput) {
            productSearchInput.addEventListener("input", executeSearch);
            productSearchInput.addEventListener("keypress", function (e) {
                if (e.key === "Enter") {
                    e.preventDefault();
                    executeSearch();
                }
            });
        }

        if (productSearchBtn) {
            productSearchBtn.addEventListener("click", executeSearch);
        }


        /* =================================================
           CAROUSEL BUTTONS
           ================================================= */

        const carousels = document.querySelectorAll(".carousel-wrapper");

        carousels.forEach(function (carousel) {

            const container = carousel.querySelector(".carousel-container");
            const previous = carousel.querySelector(".prev-btn");
            const next = carousel.querySelector(".next-btn");

            if (!container) {
                return;
            }

            if (next) {
                next.addEventListener("click", function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    container.scrollBy({ left: 320, behavior: "smooth" });
                });
            }

            if (previous) {
                previous.addEventListener("click", function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    container.scrollBy({ left: -320, behavior: "smooth" });
                });
            }
        });

        /* =================================================
           INITIAL CART
           ================================================= */

        console.log("WebStore cart & search initialized.");

    });

})();