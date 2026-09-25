/* =========================================================
   WEBSTORE INC
   PRODUCT DETAILS
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       GET PRODUCT ID FROM URL
    ===================================================== */

    const params =
        new URLSearchParams(
            window.location.search
        );

    const productId =
        Number(
            params.get("id")
        );


    /* =====================================================
       WAIT FOR SHOP CATALOG
    ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            if (
                typeof products ===
                "undefined"
            ) {

                console.error(
                    "Product catalog not found."
                );

                return;

            }


            const product =
                products.find(
                    function (item) {

                        return (
                            Number(item.id) ===
                            productId
                        );

                    }
                );


            if (!product) {

                showProductNotFound();

                return;

            }


            renderProductDetails(
                product
            );

            renderRelatedProducts(
                product
            );

            initializeProductTabs();

            initializeQuantity();

            initializeImageModal();

        }
    );


    /* =====================================================
       PRODUCT NOT FOUND
    ===================================================== */

    function showProductNotFound() {

        const container =
            document.querySelector(
                ".product-details-container"
            );

        if (!container) {
            return;
        }

        container.innerHTML = `

            <div
                style="
                    width:100%;
                    text-align:center;
                    padding:100px 20px;
                "
            >

                <h1>
                    Product not found
                </h1>

                <p>
                    Sorry, this product is no longer
                    available.
                </p>

                <a
                    href="shop.html"
                    style="
                        display:inline-block;
                        margin-top:25px;
                        padding:14px 25px;
                        background:#ff9900;
                        color:#111;
                        text-decoration:none;
                        border-radius:6px;
                        font-weight:700;
                    "
                >
                    BACK TO SHOP
                </a>

            </div>

        `;

    }


    /* =====================================================
       RENDER PRODUCT
    ===================================================== */

    function renderProductDetails(
        product
    ) {

        const title =
            document.getElementById(
                "productTitle"
            );

        const price =
            document.getElementById(
                "productPrice"
            );

        const oldPrice =
            document.getElementById(
                "productOldPrice"
            );

        const mainImage =
            document.getElementById(
                "mainProductImage"
            );

        const sale =
            document.getElementById(
                "detailSale"
            );

        const productIdElement =
            document.getElementById(
                "productId"
            );


        /* TITLE */

        if (title) {

            title.textContent =
                product.title;

        }


        /* PRICE */

        if (price) {

            price.textContent =
                "$" +
                Number(
                    product.price
                ).toFixed(2);

        }


        /* OLD PRICE */

        if (oldPrice) {

            if (product.oldPrice) {

                oldPrice.textContent =
                    "$" +
                    Number(
                        product.oldPrice
                    ).toFixed(2);

                oldPrice.style.display =
                    "block";

            } else {

                oldPrice.textContent = "";

                oldPrice.style.display =
                    "none";

            }

        }


        /* SALE */

        if (sale) {

            sale.style.display =
                product.sale
                    ? "inline-block"
                    : "none";

        }


        /* MAIN IMAGE */

        if (mainImage) {

            mainImage.src =
                product.image;

            mainImage.alt =
                product.title;

            mainImage.onerror =
                function () {

                    this.onerror = null;

                    this.src =
                        "images/logo.png";

                };

        }


        /* PRODUCT ID */

        if (productIdElement) {

            productIdElement.textContent =
                product.id;

        }


        /* CATEGORY */

        const categoryName =
            formatCategory(
                product.category
            );


        const categoryLink =
            document.getElementById(
                "productCategoryLink"
            );

        if (categoryLink) {

            categoryLink.textContent =
                categoryName;

            categoryLink.href =
                "shop.html?category=" +
                encodeURIComponent(
                    product.category
                );

        }


        /* BREADCRUMB CATEGORY */

        const breadcrumbCategory =
            document.getElementById(
                "breadcrumbCategory"
            );

        if (breadcrumbCategory) {

            breadcrumbCategory.textContent =
                categoryName;

            breadcrumbCategory.href =
                "shop.html?category=" +
                encodeURIComponent(
                    product.category
                );

        }


        /* BREADCRUMB PRODUCT */

        const breadcrumbProduct =
            document.getElementById(
                "breadcrumbProduct"
            );

        if (breadcrumbProduct) {

            breadcrumbProduct.textContent =
                product.title;

        }


        /* DESCRIPTION */

        const shortDescription =
            document.getElementById(
                "productShortDescription"
            );

        const fullDescription =
            document.getElementById(
                "fullProductDescription"
            );


        const description =
            createDescription(
                product
            );


        if (shortDescription) {

            shortDescription.textContent =
                description.short;

        }


        if (fullDescription) {

            fullDescription.innerHTML =
                description.full;

        }


        /* THUMBNAILS */

        renderThumbnails(
            product
        );


        /* ADD TO CART */

        const addButton =
            document.getElementById(
                "detailAddCart"
            );


        if (addButton) {

            addButton.onclick =
                function () {

                    addProductToCart(
                        product
                    );

                };

        }


        /* WISHLIST */

        initializeDetailWishlist(
            product
        );


        /* PAGE TITLE */

        document.title =
            product.title +
            " - WebStore Inc";

    }


    /* =====================================================
       CATEGORY NAME
    ===================================================== */

    function formatCategory(
        category
    ) {

        const names = {

            auto:
                "Auto & Tires",

            clothing:
                "Clothing",

            electronics:
                "Electronics",

            home:
                "Home & Appliances",

            industrial:
                "Industrial & Scientific",

            office:
                "Office Supplies",

            patio:
                "Patio & Garden",

            personal:
                "Personal Care",

            sports:
                "Sports & Outdoors"

        };


        return (
            names[category] ||
            "Other"
        );

    }


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    function createDescription(
        product
    ) {

        const category =
            formatCategory(
                product.category
            );


        return {

            short:
                "Quality " +
                category.toLowerCase() +
                " product selected for everyday use.",

            full:
                `
                <p>
                    <strong>
                        ${escapeHTML(product.title)}
                    </strong>
                </p>

                <p>
                    This product is part of the
                    ${escapeHTML(category)}
                    collection at WebStore Inc.
                </p>

                <p>
                    Product price:
                    <strong>
                        $${Number(product.price).toFixed(2)}
                    </strong>
                </p>

                <p>
                    Browse more products from this
                    category using the category link above.
                </p>
                `

        };

    }


    /* =====================================================
       THUMBNAILS
    ===================================================== */

    function renderThumbnails(
        product
    ) {

        const container =
            document.getElementById(
                "productThumbnails"
            );


        if (!container) {
            return;
        }


        container.innerHTML = "";


        /*
           At the moment your master catalog
           contains one image per product.

           So use the main product image
           as the first thumbnail.
        */

        const images = [
            product.image
        ];


        images.forEach(
            function (image, index) {

                const thumbnail =
                    document.createElement(
                        "button"
                    );

                thumbnail.type =
                    "button";

                thumbnail.className =
                    "product-thumbnail";

                if (index === 0) {

                    thumbnail.classList.add(
                        "active"
                    );

                }


                thumbnail.innerHTML = `

                    <img
                        src="${escapeAttribute(image)}"
                        alt="${escapeAttribute(product.title)}"
                    >

                `;


                thumbnail.addEventListener(
                    "click",
                    function () {

                        document
                            .querySelectorAll(
                                ".product-thumbnail"
                            )
                            .forEach(
                                function (item) {

                                    item.classList.remove(
                                        "active"
                                    );

                                }
                            );


                        thumbnail.classList.add(
                            "active"
                        );


                        const mainImage =
                            document.getElementById(
                                "mainProductImage"
                            );


                        if (mainImage) {

                            mainImage.src =
                                image;

                        }

                    }
                );


                container.appendChild(
                    thumbnail
                );

            }
        );

    }

    /* =====================================================
   PRODUCT IMAGE GALLERY
===================================================== */

function renderThumbnails(product) {

    const container =
        document.getElementById(
            "productThumbnails"
        );

    const mainImage =
        document.getElementById(
            "mainProductImage"
        );

    const previousButton =
        document.getElementById(
            "galleryPrev"
        );

    const nextButton =
        document.getElementById(
            "galleryNext"
        );


    if (
        !container ||
        !mainImage
    ) {
        return;
    }


    /*
       Use multiple images if available.

       If a product does not have an
       images array, use its main image.
    */

    let images = [];

    if (
        Array.isArray(product.images) &&
        product.images.length > 0
    ) {

        images = [
            ...product.images
        ];

    } else if (
        product.image
    ) {

        images = [
            product.image
        ];

    }


    /*
       Remove empty image paths.
    */

    images =
        images.filter(
            function (image) {

                return (
                    typeof image === "string" &&
                    image.trim() !== ""
                );

            }
        );


    if (
        images.length === 0
    ) {
        return;
    }


    let currentImageIndex = 0;


    /*
       Show selected image.
    */

    function showImage(index) {

        if (
            index < 0 ||
            index >= images.length
        ) {
            return;
        }


        currentImageIndex = index;


        mainImage.src =
            images[currentImageIndex];


        /*
           Update active thumbnail.
        */

        document
            .querySelectorAll(
                ".product-thumbnail"
            )
            .forEach(
                function (thumbnail, thumbnailIndex) {

                    thumbnail.classList.toggle(
                        "active",
                        thumbnailIndex ===
                        currentImageIndex
                    );

                }
            );


        /*
           Update arrow visibility.
        */

        if (previousButton) {

            previousButton.style.display =
                images.length > 1
                    ? "flex"
                    : "none";

        }


        if (nextButton) {

            nextButton.style.display =
                images.length > 1
                    ? "flex"
                    : "none";

        }

    }


    /*
       Create thumbnails.
    */

    container.innerHTML = "";


    images.forEach(
        function (image, index) {

            const thumbnail =
                document.createElement(
                    "button"
                );


            thumbnail.type =
                "button";


            thumbnail.className =
                "product-thumbnail";


            if (
                index === 0
            ) {

                thumbnail.classList.add(
                    "active"
                );

            }


            thumbnail.innerHTML = `

                <img
                    src="${escapeAttribute(image)}"
                    alt="${escapeAttribute(product.title)}"
                    onerror="
                        this.onerror=null;
                        this.src='images/logo.png';
                    "
                >

            `;


            thumbnail.addEventListener(
                "click",
                function () {

                    showImage(index);

                }
            );


            container.appendChild(
                thumbnail
            );

        }
    );


    /*
       Previous arrow.
    */

    if (previousButton) {

        previousButton.onclick =
            function () {

                if (
                    images.length <= 1
                ) {
                    return;
                }


                currentImageIndex--;

                if (
                    currentImageIndex < 0
                ) {

                    currentImageIndex =
                        images.length - 1;

                }


                showImage(
                    currentImageIndex
                );

            };

    }


    /*
       Next arrow.
    */

    if (nextButton) {

        nextButton.onclick =
            function () {

                if (
                    images.length <= 1
                ) {
                    return;
                }


                currentImageIndex++;

                if (
                    currentImageIndex >=
                    images.length
                ) {

                    currentImageIndex = 0;

                }


                showImage(
                    currentImageIndex
                );

            };

    }


    /*
       Show first image.
    */

    showImage(0);

}

    /* =====================================================
       QUANTITY
    ===================================================== */

    function initializeQuantity() {

        let quantity = 1;


        const quantityValue =
            document.getElementById(
                "quantityValue"
            );

        const minus =
            document.getElementById(
                "quantityMinus"
            );

        const plus =
            document.getElementById(
                "quantityPlus"
            );


        if (minus) {

            minus.addEventListener(
                "click",
                function () {

                    if (quantity > 1) {

                        quantity--;

                        quantityValue.textContent =
                            quantity;

                    }

                }
            );

        }


        if (plus) {

            plus.addEventListener(
                "click",
                function () {

                    quantity++;

                    quantityValue.textContent =
                        quantity;

                }
            );

        }


        window.getProductQuantity =
            function () {

                return quantity;

            };

    }


    /* =====================================================
       ADD PRODUCT TO CART
    ===================================================== */

    function addProductToCart(
        product
    ) {

        /*
           Use your existing canonical
           WebStore cart key.
        */

        const CART_KEY =
            "webstore_cart";


        let cart = [];


        try {

            cart =
                JSON.parse(
                    localStorage.getItem(
                        CART_KEY
                    )
                ) || [];

        } catch (error) {

            cart = [];

        }


        const quantity =
            typeof window.getProductQuantity ===
            "function"
                ? window.getProductQuantity()
                : 1;


        const existingIndex =
            cart.findIndex(
                function (item) {

                    return String(
                        item.id
                    ) === String(
                        product.id
                    );

                }
            );


        if (
            existingIndex !==
            -1
        ) {

            cart[
                existingIndex
            ].quantity =
                Number(
                    cart[
                        existingIndex
                    ].quantity || 1
                ) + quantity;

        } else {

            cart.push({

                id:
                    product.id,

                name:
                    product.title,

                title:
                    product.title,

                price:
                    Number(
                        product.price
                    ),

                image:
                    product.image,

                quantity:
                    quantity,

                category:
                    product.category

            });

        }


        localStorage.setItem(
            CART_KEY,
            JSON.stringify(
                cart
            )
        );


        /*
           Tell the existing cart
           system that the cart changed.
        */

        window.dispatchEvent(
            new CustomEvent(
                "webstore:cart-updated"
            )
        );


        /*
           Update header if your
           cart.js exposes the function.
        */

        if (
            typeof updateHeaderCart ===
            "function"
        ) {

            updateHeaderCart();

        }


        if (
            typeof renderCartPage ===
            "function"
        ) {

            renderCartPage();

        }


        const button =
            document.getElementById(
                "detailAddCart"
            );


        if (button) {

            const originalText =
                button.textContent;


            button.textContent =
                "ADDED TO CART ✓";


            setTimeout(
                function () {

                    button.textContent =
                        originalText;

                },
                1200
            );

        }

    }


    /* =====================================================
       WISHLIST
    ===================================================== */

    function initializeDetailWishlist(
        product
    ) {

        const button =
            document.getElementById(
                "detailWishlist"
            );


        if (!button) {
            return;
        }


        const icon =
            button.querySelector(
                "i"
            );


        function getWishlist() {

            try {

                return JSON.parse(
                    localStorage.getItem(
                        "webstore_wishlist"
                    )
                ) || [];

            } catch (error) {

                return [];

            }

        }


        function updateHeart() {

            const wishlist =
                getWishlist();


            const exists =
                wishlist.some(
                    function (item) {

                        return String(
                            item.id
                        ) === String(
                            product.id
                        );

                    }
                );


            if (exists) {

                button.classList.add(
                    "active"
                );

                icon.className =
                    "fas fa-heart";

            } else {

                button.classList.remove(
                    "active"
                );

                icon.className =
                    "far fa-heart";

            }

        }


        updateHeart();


        button.addEventListener(
            "click",
            function () {

                let wishlist =
                    getWishlist();


                const index =
                    wishlist.findIndex(
                        function (item) {

                            return String(
                                item.id
                            ) === String(
                                product.id
                            );

                        }
                    );


                if (index !== -1) {

                    wishlist.splice(
                        index,
                        1
                    );

                } else {

                    wishlist.push({

                        id:
                            product.id,

                        title:
                            product.title,

                        price:
                            "$" +
                            Number(
                                product.price
                            ).toFixed(2),

                        image:
                            product.image

                    });

                }


                localStorage.setItem(
                    "webstore_wishlist",
                    JSON.stringify(
                        wishlist
                    )
                );


                updateHeart();

            }
        );

    }


    /* =====================================================
       RELATED PRODUCTS
    ===================================================== */

    function renderRelatedProducts(
        currentProduct
    ) {

        const container =
            document.getElementById(
                "relatedProducts"
            );


        if (!container) {
            return;
        }


        const related =
            products
                .filter(
                    function (product) {

                        return (
                            product.category ===
                            currentProduct.category &&
                            Number(product.id) !==
                            Number(currentProduct.id)
                        );

                    }
                )
                .slice(0, 6);


        container.innerHTML = "";


        related.forEach(
            function (product) {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "related-product-card";


                card.innerHTML = `

                    ${
                        product.sale
                            ?
                            `
                            <span
                                class="badge-sale"
                                style="
                                    position:absolute;
                                    top:15px;
                                    left:15px;
                                    background:#CC0C39;
                                    color:white;
                                    padding:7px 10px;
                                    border-radius:4px;
                                    font-size:11px;
                                    font-weight:700;
                                "
                            >
                                SALE
                            </span>
                            `
                            :
                            ""
                    }


                    <img
                        src="${escapeAttribute(product.image)}"
                        alt="${escapeAttribute(product.title)}"
                        onerror="
                            this.onerror=null;
                            this.src='images/logo.png';
                        "
                    >


                    <h3>
                        ${escapeHTML(product.title)}
                    </h3>


                    <div class="related-price">
                        $${Number(product.price).toFixed(2)}
                    </div>


                    <button
                        type="button"
                        class="related-add-cart"
                    >
                        ADD TO CART
                    </button>

                `;


                /*
                   Clicking image/title/card
                   opens that product.
                */

                card.addEventListener(
                    "click",
                    function (event) {

                        if (
                            event.target.closest(
                                ".related-add-cart"
                            )
                        ) {

                            return;

                        }


                        window.location.href =
                            "product-details.html?id=" +
                            encodeURIComponent(
                                product.id
                            );

                    }
                );


                const addButton =
                    card.querySelector(
                        ".related-add-cart"
                    );


                addButton.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        event.stopPropagation();

                        addProductToCart(
                            product
                        );

                    }
                );


                container.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       TABS
    ===================================================== */

    function initializeProductTabs() {

        const tabs =
            document.querySelectorAll(
                ".product-tab"
            );


        tabs.forEach(
            function (tab) {

                tab.addEventListener(
                    "click",
                    function () {

                        const target =
                            tab.getAttribute(
                                "data-tab"
                            );


                        tabs.forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                        document
                            .querySelectorAll(
                                ".product-tab-content"
                            )
                            .forEach(
                                function (content) {

                                    content.classList.remove(
                                        "active"
                                    );

                                }
                            );


                        tab.classList.add(
                            "active"
                        );


                        if (
                            target ===
                            "description"
                        ) {

                            document
                                .getElementById(
                                    "descriptionTab"
                                )
                                .classList.add(
                                    "active"
                                );

                        }


                        if (
                            target ===
                            "reviews"
                        ) {

                            document
                                .getElementById(
                                    "reviewsTab"
                                )
                                .classList.add(
                                    "active"
                                );

                        }

                    }
                );

            }
        );

    }


    /* =====================================================
       IMAGE MODAL
    ===================================================== */

    function initializeImageModal() {

        const expand =
            document.getElementById(
                "imageExpandBtn"
            );

        const modal =
            document.getElementById(
                "imageModal"
            );

        const modalImage =
            document.getElementById(
                "modalProductImage"
            );

        const close =
            document.getElementById(
                "closeImageModal"
            );

        const mainImage =
            document.getElementById(
                "mainProductImage"
            );


        if (
            !expand ||
            !modal ||
            !modalImage ||
            !close ||
            !mainImage
        ) {

            return;

        }


        expand.addEventListener(
            "click",
            function () {

                modalImage.src =
                    mainImage.src;

                modal.classList.add(
                    "active"
                );

            }
        );


        close.addEventListener(
            "click",
            function () {

                modal.classList.remove(
                    "active"
                );

            }
        );


        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    modal
                ) {

                    modal.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    /* =====================================================
       SECURITY
    ===================================================== */

    function escapeHTML(
        value
    ) {

        if (
            value === undefined ||
            value === null
        ) {

            return "";

        }


        return String(value)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }


    function escapeAttribute(
        value
    ) {

        return escapeHTML(
            value
        );

    }

})();