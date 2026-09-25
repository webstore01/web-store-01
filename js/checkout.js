/* =========================================================
   WEBSTORE INC.
   CHECKOUT JAVASCRIPT
   ========================================================= */


/* =========================================================
   MONEY FORMAT
   ========================================================= */

function checkoutFormatMoney(value) {

    value = Number(value) || 0;

    return "$" + value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

}


/* =========================================================
   GET CART
   ========================================================= */

function checkoutGetCart() {

    try {

        const savedCart =
            localStorage.getItem("webstoreCart");

        if (!savedCart) {
            return [];
        }

        const parsed =
            JSON.parse(savedCart);


        if (Array.isArray(parsed)) {
            return parsed;
        }


        if (
            parsed &&
            Array.isArray(parsed.items)
        ) {
            return parsed.items;
        }


        if (
            parsed &&
            Array.isArray(parsed.cart)
        ) {
            return parsed.cart;
        }


        if (
            parsed &&
            Array.isArray(parsed.products)
        ) {
            return parsed.products;
        }

    } catch (error) {

        console.error(
            "Checkout cart error:",
            error
        );

    }

    return [];

}


/* =========================================================
   PRODUCT IMAGE BY PRODUCT ID
   ========================================================= */

const checkoutImageById = {

    "favorite-1":
        "images/favorite-1.jpg",

    "favorite-2":
        "images/favorite-2.jpg",

    "favorite-3":
        "images/favorite-3.jpg",

    "favorite-4":
        "images/favorite-4.jpg",

    "favorite-5":
        "images/favorite-5.jpg",

    "favorite-6":
        "images/favorite-6.jpg",

    "favorite-7":
        "images/favorite-7.jpg",


    "deal-1":
        "images/deal-1.jpg",

    "deal-2":
        "images/deal-2.jpg",

    "deal-3":
        "images/deal-3.jpg",

    "deal-4":
        "images/deal-4.jpg",

    "deal-5":
        "images/deal-5.jpg",

    "deal-6":
        "images/deal-6.jpg",

    "deal-7":
        "images/deal-7.jpg",


    "arrival-1":
        "images/arrival-1.jpg",

    "arrival-2":
        "images/arrival-2.jpg",

    "arrival-3":
        "images/arrival-3.jpg",

    "arrival-4":
        "images/arrival-4.jpg",

    "arrival-5":
        "images/arrival-5.jpg",

    "arrival-6":
        "images/arrival-6.jpg",

    "arrival-7":
        "images/arrival-7.jpg"

};


/* =========================================================
   PRODUCT IMAGE BY NAME
   SECONDARY FALLBACK
   ========================================================= */

const checkoutImageByName = {

    "Dyson V12 Detect Slim Cordless Vacuum Cleaner":
        "images/favorite-4.jpg",

    "Cordless Vacuum Cleaner":
        "images/favorite-4.jpg",

    "Bose Home Speaker 500":
        "images/favorite-1.jpg",

    "Portable Newest Wireless Apple CarPlay":
        "images/favorite-2.jpg",

    "Miele Blizzard CX1 Cat & Dog Bagless Canister Vacuum":
        "images/favorite-3.jpg",

    "Portable SSD 4TB":
        "images/favorite-5.jpg",

    "Amazon Kindle E-Reader":
        "images/favorite-6.jpg",

    "SEIKO SRP J81 Men's Watch":
        "images/favorite-7.jpg",


    "SITKA Gear Mens Traverse Hunting Hoody":
        "images/deal-1.jpg",

    "THE NORTH FACE Wawona 4P Tent Green/Grey":
        "images/deal-2.jpg",

    "SEIKO SRPG27 5 Sports Mens Watch":
        "images/deal-3.jpg",

    "SEIKO SRPG27 5 Sports Men’s Watch":
        "images/deal-3.jpg",

    "THE NORTH FACE Thermoball Lifty II Mens Boots":
        "images/deal-4.jpg",

    "Breville Juice Fountain Plus Juicer":
        "images/deal-5.jpg",

    "APC by Schneider Electric AP9613":
        "images/deal-6.jpg",

    "Okuma Cold Water Linecounter Trolling Reel":
        "images/deal-7.jpg",


    "adidas Women's Gamecourt 2.0 Tennis Shoe":
        "images/arrival-1.jpg",

    "New Balance Women's 515 V3 Sneaker, White/Silver":
        "images/arrival-2.jpg",

    "Nike Women's Gymnastics Shoes Sneaker":
        "images/arrival-3.jpg",

    "adidas Women's Run Falcon 5 Sneaker":
        "images/arrival-4.jpg",

    "adidas Women's Runfalcon 3 Running Shoe, Wonder":
        "images/arrival-5.jpg",

    "adidas Women's Cloudfoam Pure 2.0 Running Shoe":
        "images/arrival-6.jpg",

    "Nike Women's Modern Sneaker, White/Photon Dust":
        "images/arrival-7.jpg"

};


/* =========================================================
   GET PRODUCT INFORMATION
   ========================================================= */

function checkoutGetProduct(cartItem) {

    if (!cartItem) {
        return null;
    }


    const productId =
        cartItem.id ??
        cartItem.productId ??
        cartItem.productID ??
        "";


    let databaseProduct = null;


    /*
       STEP 1
       Look up product using its ID.
    */

    if (
        typeof WEBSTORE_PRODUCTS !== "undefined" &&
        WEBSTORE_PRODUCTS &&
        productId
    ) {

        databaseProduct =
            WEBSTORE_PRODUCTS[productId] ||
            null;

    }


    /*
       STEP 2
       Product name
    */

    const name =
        databaseProduct?.name ||
        cartItem.name ||
        cartItem.title ||
        cartItem.productName ||
        "Product";


    /*
       STEP 3
       Price
    */

    let price =
        databaseProduct?.price ??
        cartItem.price ??
        cartItem.productPrice ??
        cartItem.unitPrice ??
        0;


    if (
        typeof price === "string"
    ) {

        price =
            price
                .replace(/[$,₹]/g, "")
                .trim();

    }


    price =
        parseFloat(price) || 0;


    /*
       STEP 4
       IMAGE

       IMPORTANT:
       ID is checked FIRST.
    */

    let image = "";


    /*
       A. Product database image
    */

    if (
        databaseProduct &&
        databaseProduct.image
    ) {

        image =
            databaseProduct.image;

    }


    /*
       B. Image from product ID
    */

    if (
        !image &&
        checkoutImageById[productId]
    ) {

        image =
            checkoutImageById[productId];

    }


    /*
       C. Image from product name
    */

    if (
        !image &&
        checkoutImageByName[name]
    ) {

        image =
            checkoutImageByName[name];

    }


    /*
       D. Image stored directly in cart
    */

    if (!image) {

        image =
            cartItem.image ||
            cartItem.img ||
            cartItem.src ||
            "";

    }


    /*
       STEP 5
       Quantity
    */

    let quantity =
        Number(
            cartItem.quantity ??
            cartItem.qty ??
            cartItem.count ??
            1
        );


    if (
        !Number.isFinite(quantity) ||
        quantity < 1
    ) {

        quantity = 1;

    }


    /*
       STEP 6
       Description
    */

    const description =
        databaseProduct?.description ||
        cartItem.description ||
        "";


    return {

        id:
            productId,

        name:
            name,

        price:
            price,

        image:
            image,

        quantity:
            quantity,

        description:
            description

    };

}


/* =========================================================
   REMOVE OLD HARDCODED PRODUCTS
   ========================================================= */

function removeOldCheckoutProducts() {

    const summaryCard =
        document.querySelector(
            ".order-summary-card"
        );


    if (!summaryCard) {
        return;
    }


    /*
       Remove old Fire HD / Bose
       hard-coded rows.
    */

    summaryCard
        .querySelectorAll(
            ".order-item"
        )
        .forEach(function (item) {

            item.remove();

        });


    /*
       Remove old dynamic container.
    */

    const oldContainer =
        document.getElementById(
            "checkoutProducts"
        );


    if (oldContainer) {

        oldContainer.remove();

    }

}


/* =========================================================
   CREATE PRODUCT CONTAINER
   ========================================================= */

function createCheckoutProductsContainer() {

    const summaryCard =
        document.querySelector(
            ".order-summary-card"
        );


    if (!summaryCard) {
        return null;
    }


    const container =
        document.createElement("div");


    container.id =
        "checkoutProducts";


    container.className =
        "checkout-products";


    const coupon =
        summaryCard.querySelector(
            ".coupon-accordion"
        );


    if (coupon) {

        summaryCard.insertBefore(
            container,
            coupon
        );

    } else {

        const heading =
            summaryCard.querySelector("h2");


        if (heading) {

            heading.insertAdjacentElement(
                "afterend",
                container
            );

        } else {

            summaryCard.prepend(
                container
            );

        }

    }


    return container;

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeCheckoutHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   RENDER CHECKOUT PRODUCTS
   ========================================================= */

function renderCheckoutProducts() {

    const cart =
        checkoutGetCart();


    removeOldCheckoutProducts();


    const container =
        createCheckoutProductsContainer();


    if (!container) {

        console.error(
            "Order summary card not found."
        );

        return 0;

    }


    container.innerHTML = "";


    /*
       EMPTY CART
    */

    if (cart.length === 0) {

        container.innerHTML = `

            <div class="checkout-empty-cart">

                Your cart is empty.

            </div>

        `;

        return 0;

    }


    let subtotal = 0;


    /*
       DISPLAY EVERY PRODUCT
    */

    cart.forEach(function (cartItem) {

        const product =
            checkoutGetProduct(cartItem);


        if (!product) {
            return;
        }


        const quantity =
            product.quantity;


        const price =
            product.price;


        const lineTotal =
            price * quantity;


        subtotal +=
            lineTotal;


        /*
           PRODUCT ROW
        */

        const row =
            document.createElement("div");


        row.className =
            "order-item checkout-dynamic-item";


        row.innerHTML = `

            <!-- IMAGE -->

            <div class="item-img-container checkout-image-box">

                <img
                    src="${product.image}"
                    alt="${escapeCheckoutHTML(product.name)}"
                    class="checkout-product-image"
                >

                <!-- QUANTITY BADGE -->

                <span class="item-badge checkout-quantity-badge">
                    ${quantity}
                </span>

            </div>


            <!-- PRODUCT INFORMATION -->

            <div class="item-details">

                <h4>
                    ${escapeCheckoutHTML(product.name)}
                </h4>

                <p class="item-price-unit">
                    ${checkoutFormatMoney(price)}
                </p>

                ${
                    product.description
                    ?
                    `
                    <p class="item-desc">
                        ${escapeCheckoutHTML(
                            product.description
                        )}
                    </p>
                    `
                    :
                    ""
                }

            </div>


            <!-- LINE TOTAL -->

            <div class="item-total">

                ${checkoutFormatMoney(lineTotal)}

            </div>

        `;


        /*
           IMAGE ERROR HANDLING

           If database image fails,
           try ID-based image.
        */

        const image =
            row.querySelector(
                ".checkout-product-image"
            );


        if (image) {

            image.addEventListener(
                "error",
                function () {

                    const fallback =
                        checkoutImageById[
                            product.id
                        ];


                    if (
                        fallback &&
                        image.dataset.fallbackUsed !== "true"
                    ) {

                        image.dataset.fallbackUsed =
                            "true";

                        image.src =
                            fallback;

                    }

                }
            );

        }


        container.appendChild(
            row
        );

    });


    return subtotal;

}


/* =========================================================
   UPDATE SUBTOTAL + TOTAL
   ========================================================= */

function updateCheckoutTotals(subtotal) {

    const rows =
        document.querySelectorAll(
            ".order-summary-card .summary-row"
        );


    rows.forEach(function (row) {

        const label =
            row
                .querySelector(
                    "span:first-child"
                )
                ?.textContent
                .trim()
                .toLowerCase();


        const amount =
            row.querySelector(
                ".amount"
            );


        if (!amount) {
            return;
        }


        if (
            label === "subtotal"
        ) {

            amount.textContent =
                checkoutFormatMoney(
                    subtotal
                );

        }


        if (
            label === "total"
        ) {

            amount.textContent =
                checkoutFormatMoney(
                    subtotal
                );

        }

    });

}


/* =========================================================
   DELIVERY
   ========================================================= */

function updateCheckoutDelivery() {

    const delivery =
        document.getElementById(
            "delivery-status"
        );


    if (!delivery) {
        return;
    }


    const selectors = [

        '[name="country"]',

        '[name="firstName"], #first-name',

        '[name="lastName"], #last-name',

        '[name="address"], #address',

        '[name="city"], #city',

        '[name="state"], #state',

        '[name="zip"], #zip'

    ];


    const complete =
        selectors.every(
            function (selector) {

                const field =
                    document.querySelector(
                        selector
                    );


                return (
                    field &&
                    field.value.trim() !== ""
                );

            }
        );


    if (complete) {

        delivery.textContent =
            "No available delivery option";

    } else {

        delivery.textContent =
            "Enter address to calculate";

    }

}


/* =========================================================
   SHIPPING WARNING
   ========================================================= */

function updateShippingWarning() {

    const warning =
        document.getElementById(
            "shipping-warning"
        );


    if (!warning) {
        return;
    }


    const selectors = [

        '[name="country"]',

        '[name="firstName"], #first-name',

        '[name="lastName"], #last-name',

        '[name="address"], #address',

        '[name="city"], #city',

        '[name="state"], #state',

        '[name="zip"], #zip'

    ];


    const complete =
        selectors.every(
            function (selector) {

                const field =
                    document.querySelector(
                        selector
                    );


                return (
                    field &&
                    field.value.trim() !== ""
                );

            }
        );


    warning.style.display =
        complete
        ? "block"
        : "none";

}


/* =========================================================
   ADDRESS LISTENERS
   ========================================================= */

function setupCheckoutAddressListeners() {

    const selectors = [

        '[name="country"]',

        '[name="firstName"]',
        '#first-name',

        '[name="lastName"]',
        '#last-name',

        '[name="address"]',
        '#address',

        '[name="city"]',
        '#city',

        '[name="state"]',
        '#state',

        '[name="zip"]',
        '#zip',

        '[name="phone"]',
        '#phone'

    ];


    document
        .querySelectorAll(
            selectors.join(",")
        )
        .forEach(
            function (field) {

                field.addEventListener(
                    "input",
                    function () {

                        updateShippingWarning();

                        updateCheckoutDelivery();

                    }
                );


                field.addEventListener(
                    "change",
                    function () {

                        updateShippingWarning();

                        updateCheckoutDelivery();

                    }
                );

            }
        );

}


/* =========================================================
   COUPON
   ========================================================= */

function setupCheckoutCoupon() {

    const button =
        document.getElementById(
            "coupon-toggle"
        );


    const content =
        document.getElementById(
            "coupon-content"
        );


    const arrow =
        document.getElementById(
            "coupon-arrow"
        );


    if (!button || !content) {
        return;
    }


    button.addEventListener(
        "click",
        function () {

            content.classList.toggle(
                "hidden"
            );


            if (arrow) {

                arrow.classList.toggle(
                    "rotate"
                );

            }

        }
    );

}


/* =========================================================
   PLACE ORDER
   ========================================================= */

function setupPlaceOrder() {

    const button =
        document.querySelector(
            ".btn-place-order"
        );


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const cart =
                checkoutGetCart();


            if (cart.length === 0) {

                alert(
                    "Your cart is empty."
                );

                return;

            }


            alert(
                "No shipping options are available for this address. Please verify the address is correct or try a different address."
            );

        }
    );

}


/* =========================================================
   CART CHANGE LISTENER
   ========================================================= */

function setupCheckoutCartListener() {

    window.addEventListener(
        "storage",
        function (event) {

            if (
                event.key ===
                "webstoreCart"
            ) {

                const subtotal =
                    renderCheckoutProducts();


                updateCheckoutTotals(
                    subtotal
                );

            }

        }
    );

}


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeCheckoutPage() {

    console.log(
        "WebStore checkout loaded"
    );


    const subtotal =
        renderCheckoutProducts();


    updateCheckoutTotals(
        subtotal
    );


    updateCheckoutDelivery();


    updateShippingWarning();


    setupCheckoutAddressListeners();


    setupCheckoutCoupon();


    setupPlaceOrder();


    setupCheckoutCartListener();

}


/* =========================================================
   START
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeCheckoutPage
    );

} else {

    initializeCheckoutPage();

}