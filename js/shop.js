/* =========================================================
   WEBSTORE INC.
   SHOP PAGE JAVASCRIPT
   15 PRODUCTS PER PAGE
========================================================= */


/* =========================================================
   MASTER PRODUCT CATALOG
========================================================= */

const products = [

    {
        id: 1,
        title: "Samsung T7 Shield Water Resistant SSD Portable Hard Drive 1TB – Black",
        price: 130.00,
        oldPrice: 145.00,
        sale: true,
        category: "electronics",
        image: "images/shop/electronics-1.jpg",
        images: [
        "images/shop/electronics-1.jpg",
        "images/shop/electronics-1-2.jpg",
        "images/shop/electronics-1-3.jpg",
        "images/shop/electronics-1-4.jpg",
        "images/shop/electronics-1-5.jpg"
    ]
    },

    {
        id: 2,
        title: "Big Ass Fans - Haiku White, Smart Ceiling Fan",
        price: 382.80,
        oldPrice: null,
        sale: false,
        category: "home",
        image: "images/shop/home-1.jpg",
        images: [
        "images/shop/home-1.jpg",
        "images/shop/home-1-2.jpg",
        "images/shop/home-1-3.jpg",
        "images/shop/home-1-4.jpg",
        "images/shop/home-1-5.jpg"
    ]
    },

    {
        id: 3,
        title: "Patagonia Men’s Down Sweater Hoody, Wetland Blue",
        price: 365.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-1.jpg",
        images: [
        "images/shop/clothing-1.jpg",
        "images/shop/clothing-1-2.jpg",
        "images/shop/clothing-1-3.jpg"
    ]
    },

    {
        id: 4,
        title: "Philips Norelco S1560/81 Shaver 2100",
        price: 146.00,
        oldPrice: null,
        sale: false,
        category: "personal",
        image: "images/shop/personal-1.jpg",
        images: [
        "images/shop/personal-1.jpg",
        "images/shop/personal-1-2.jpg",
        "images/shop/personal-1-3.jpg",
        "images/shop/personal-1-4.jpg"
    ]
    },

    {
        id: 5,
        title: "Aqua-Air AQPM-10 March AC-5C-MD 115V",
        price: 267.85,
        oldPrice: null,
        sale: false,
        category: "industrial",
        image: "images/shop/industrial-1.jpg"
    },

    {
        id: 6,
        title: "KBH Auto Center Console Cover Replacement",
        price: 49.99,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-1.jpg",
        images: [
        "images/shop/auto-1.jpg",
        "images/shop/auto-1-2.jpg",
        "images/shop/auto-1-3.jpg",
        "images/shop/auto-1-4.jpg",
        "images/shop/auto-1-5.jpg"
    ]
    },

    {
        id: 7,
        title: "The North Face Men’s Flare 2 Insulated 550-Down, Navy",
        price: 183.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-2.jpg",
        images: [
        "images/shop/clothing-2.jpg",
        "images/shop/clothing-2-2.jpg",
        "images/shop/clothing-2-3.jpg",
        "images/shop/clothing-2-4.jpg"
    ]
    },

    {
        id: 8,
        title: "adidas Unisex Adult Defender, Sports Duffel Men and Women",
        price: 53.00,
        oldPrice: null,
        sale: false,
        category: "sports",
        image: "images/shop/sports-1.jpg",
        images: [
        "images/shop/sports-1.jpg",
        "images/shop/sports-1-2.jpg",
        "images/shop/sports-1-3.jpg",
        "images/shop/sports-1-4.jpg"
    ]
    },

    {
        id: 9,
        title: "Gryphon Guardian Parental Control Router & Mesh WiFi System",
        price: 199.00,
        oldPrice: null,
        sale: false,
        category: "electronics",
        image: "images/shop/electronics-2.jpg",
        images: [
        "images/shop/electronics-2.jpg",
        "images/shop/electronics-2-2.jpg",
        "images/shop/electronics-2-3.jpg",
        "images/shop/electronics-2-4.jpg",
        "images/shop/electronics-2-5.jpg",
        "images/shop/electronics-2-6.jpg"
    ]
    },

    {
        id: 10,
        title: "SITKA Gear Mountain Optics Big Game Camo Hunting Harness",
        price: 128.00,
        oldPrice: 159.00,
        sale: true,
        category: "sports",
        image: "images/shop/sports-2.jpg",
        images: [
        "images/shop/sports-2.jpg",
        "images/shop/sports-2-2.jpg",
        "images/shop/sports-2-3.jpg",
        "images/shop/sports-2-4.jpg",
        "images/shop/sports-2-5.jpg",
        "images/shop/sports-2-6.jpg"
    ]
    },

    {
        id: 11,
        title: "Tsurumi Pump LB-480 2″ 2/3HP Submersible Dewatering Pump",
        price: 207.35,
        oldPrice: null,
        sale: false,
        category: "industrial",
        image: "images/shop/industrial-2.jpg",
        images: [
        "images/shop/industrial-2.jpg",
        "images/shop/industrial-2-2.jpg",
        "images/shop/industrial-2-3.jpg",
        "images/shop/industrial-2-4.jpg",
        "images/shop/industrial-2-5.jpg"
    ]
    },

    {
        id: 12,
        title: "adidas Women's Runfalcon 3 Running Shoe, Wonder Orchid/White",
        price: 75.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-3.jpg",
        images: [
        "images/shop/clothing-3.jpg",
        "images/shop/clothing-3-2.jpg",
        "images/shop/clothing-3-3.jpg",
        "images/shop/clothing-3-4.jpg"
    ]
    },

    {
        id: 13,
        title: "Hanna Groline Soil Test Direct Soil Conductivity Tester HI98331",
        price: 165.00,
        oldPrice: null,
        sale: false,
        category: "patio",
        image: "images/shop/patio-1.jpg"
    },

    {
        id: 14,
        title: "Portable Wireless Apple CarPlay",
        price: 150.00,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-2.jpg",
        images: [
        "images/shop/auto-2.jpg",
        "images/shop/auto-2-2.jpg",
        "images/shop/auto-2-3.jpg",
        "images/shop/auto-2-4.jpg"
    ]
    },

    {
        id: 15,
        title: "THE NORTH FACE Women’s Every Day Jester Laptop Backpack",
        price: 89.00,
        oldPrice: 99.00,
        sale: true,
        category: "clothing",
        image: "images/shop/clothing-4.jpg",
        images: [
        "images/shop/clothing-4.jpg",
        "images/shop/clothing-4-2.jpg",
        "images/shop/clothing-4-3.jpg",
        "images/shop/clothing-4-4.jpg",
        "images/shop/clothing-4-5.jpg"
    ]
    },

    {
        id: 16,
        title: "Garmin Dash Cam Mini 3, Ultracompact 1080p HD Dash Cam",
        price: 170.00,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-4.jpg",
        images: [
        "images/shop/auto-4.jpg",
        "images/shop/auto-4-2.jpg",
        "images/shop/auto-4-3.jpg",
        "images/shop/auto-4-4.jpg",
        "images/shop/auto-4-5.jpg",
        "images/shop/auto-4-6.jpg"
    ]
    },

    {
        id: 17,
        title: "TireMinder i10 RV TPMS with 6 Flow Through Transmitters, Black",
        price: 440.00,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-5.jpg",
        images: [
        "images/shop/auto-5.jpg",
        "images/shop/auto-5-2.jpg",
        "images/shop/auto-5-3.jpg",
        "images/shop/auto-5-4.jpg",
        "images/shop/auto-5-5.jpg"
    ]
    },

    {
        id: 18,
        title: "MRV-M500 – Alpine Monoblock",
        price: 175.00,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-6.jpg",
        images: [
        "images/shop/auto-6.jpg",
        "images/shop/auto-6-2.jpg",
        "images/shop/auto-6-3.jpg"
    ]
    },

    {
        id: 19,
        title: "Leupold GX-6C Golf Rangefinder",
        price: 450.00,
        oldPrice: null,
        sale: false,
        category: "sports",
        image: "images/shop/sports-3.jpg",
        images: [
        "images/shop/sports-3.jpg",
        "images/shop/sports-3-2.jpg",
        "images/shop/sports-3-3.jpg"
    ]
    },

    {
        id: 20,
        title: "The North Face Men’s Ultra 112 Waterproof Hiking Shoes",
        price: 180.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-5.jpg",
        images: [
        "images/shop/clothing-5.jpg",
        "images/shop/clothing-5-2.jpg",
        "images/shop/clothing-5-3.jpg",
        "images/shop/clothing-5-4.jpg"
    ]
    },

    

    {
        id: 21,
        title: "PENN Fathom II Lever Drag – 30LD Conv Reel Box",
        price: 269.00,
        oldPrice: null,
        sale: false,
        category: "sports",
        image: "images/shop/sports-4.jpg",
        images: [
        "images/shop/sports-4.jpg",
        "images/shop/sports-4-2.jpg",
        "images/shop/sports-4-3.jpg",
        "images/shop/sports-4-4.jpg"
    ]
    },

    {
        id: 22,
        title: "Breville Juice Fountain Plus Juicer",
        price: 180.00,
        oldPrice: 195.00,
        sale: true,
        category: "home",
        image: "images/shop/home-2.jpg",
        images: [
        "images/shop/home-2.jpg",
        "images/shop/home-2-2.jpg",
        "images/shop/home-2-3.jpg",
        "images/shop/home-2-4.jpg",
        "images/shop/home-2-5.jpg",
        "images/shop/home-2-6.jpg"
    ]
    },

    {
        id: 23,
        title: "Ohaus SPX2202 Scout Analytical Balance",
        price: 999.00,
        oldPrice: null,
        sale: false,
        category: "industrial",
        image: "images/shop/industrial-3.jpg"
    },

    {
        id: 24,
        title: "Patagonia Men’s Big Water Foul Weather Jacket, Storm Yellow",
        price: 699.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-6.jpg",
        images: [
        "images/shop/clothing-6.jpg",
        "images/shop/clothing-6-2.jpg",
        "images/shop/clothing-6-3.jpg",
        "images/shop/clothing-6-4.jpg",
        "images/shop/clothing-6-5.jpg",
        "images/shop/clothing-6-6.jpg",
        "images/shop/clothing-6-7.jpg"
    ]
    },

    {
        id: 25,
        title: "Columbia Men’s Northwest Explorer 3L Shell Jacket",
        price: 250.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-7.jpg",
        images: [
        "images/shop/clothing-7.jpg",
        "images/shop/clothing-7-2.jpg",
        "images/shop/clothing-7-3.jpg",
        "images/shop/clothing-7-4.jpg"
    ]
    },

    {
        id: 26,
        title: "adidas Samba Og Mens Shoes, White/Black/Granite",
        price: 115.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-8.jpg",
        images: [
        "images/shop/clothing-8.jpg",
        "images/shop/clothing-8-2.jpg",
        "images/shop/clothing-8-3.jpg",
        "images/shop/clothing-8-4.jpg"
    ]
    },

    {
        id: 27,
        title: "Door Tailgate Glass Belt Molding Weather Strip",
        price: 39.99,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-7.jpg",
        images: [
        "images/shop/auto-7.jpg",
        "images/shop/auto-7-2.jpg",
        "images/shop/auto-7-3.jpg",
        "images/shop/auto-7-4.jpg"
    ]
    },

    {
        id: 28,
        title: "Smeg 50s Retro Line Black 4×4 Slot Toaster",
        price: 153.45,
        oldPrice: null,
        sale: false,
        category: "home",
        image: "images/shop/home-3.jpg",
        images: [
        "images/shop/home-3.jpg",
        "images/shop/home-3-2.jpg",
        "images/shop/home-3-3.jpg",
        "images/shop/home-3-4.jpg"
    ]
    },

    {
        id: 29,
        title: "THE NORTH FACE Jester Cross Body Bag – PFAS Free",
        price: 42.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-9.jpg",
        images: [
        "images/shop/clothing-9.jpg",
        "images/shop/clothing-9-2.jpg",
        "images/shop/clothing-9-3.jpg"
    ]
    },

    {
        id: 30,
        title: "JOYROOM Motorcycle Phone Mount, Bike Phone Holder for Bicycle",
        price: 34.00,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-8.jpg",
        images: [
        "images/shop/auto-8.jpg",
        "images/shop/auto-8-2.jpg",
        "images/shop/auto-8-3.jpg",
        "images/shop/auto-8-4.jpg",
        "images/shop/auto-8-5.jpg"
    ]
    },

    {
        id: 31,
        title: "SITKA Gear Men’s Traverse Hunting Hoody",
        price: 199.00,
        oldPrice: 229,
        sale: true,
        category: "clothing",
        image: "images/shop/clothing-10.jpg",
        images: [
        "images/shop/clothing-10.jpg",
        "images/shop/clothing-10-2.jpg",
        "images/shop/clothing-10-3.jpg",
        "images/shop/clothing-10-4.jpg",
        "images/shop/clothing-10-5.jpg"
    ]
    },

    {
        id: 32,
        title: "Dreame L20 Ultra Robot Vacuum and Mop with Mop-Extend",
        price: 1600.00,
        oldPrice: null,
        sale: false,
        category: "home",
        image: "images/shop/home-4.jpg",
        images: [
        "images/shop/home-4.jpg",
        "images/shop/home-4-2.jpg",
        "images/shop/home-4-3.jpg",
        "images/shop/home-4-4.jpg",
        "images/shop/home-4-5.jpg",
        "images/shop/home-4-6.jpg",
        "images/shop/home-4-7.jpg",
        "images/shop/home-4-8.jpg"
    ]
    },

    {
        id: 33,
        title: "Hanna GroLine Waterproof Hydroponic pH Tester HI98118",
        price: 112.00,
        oldPrice: null,
        sale: false,
        category: "patio",
        image: "images/shop/patio-2.jpg"
    },

    {
        id: 34,
        title: "Fingerprint Door Lock – Fingerprint and Keypad Input Smart Door knob",
        price: 82.00,
        oldPrice: null,
        sale: false,
        category: "home",
        image: "images/shop/home-5.jpg",
        images: [
        "images/shop/home-5.jpg",
        "images/shop/home-5-2.jpg",
        "images/shop/home-5-3.jpg",
        "images/shop/home-5-4.jpg",
        "images/shop/home-5-5.jpg"
    ]
    },

    {
        id: 35,
        title: "Brady High Adhesion Vinyl Label Tape B30C-4000-595-BK",
        price: 345.00,
        oldPrice: null,
        sale: false,
        category: "office",
        image: "images/shop/office-1.jpg"
    },

    {
        id: 36,
        title: "Phomemo M220 Portable Thermal Bluetooth Label Makers",
        price: 105.00,
        oldPrice: null,
        sale: false,
        category: "office",
        image: "images/shop/office-2.jpg",
        images: [
        "images/shop/office-2.jpg",
        "images/shop/office-2-2.jpg",
        "images/shop/office-2-3.jpg",
        "images/shop/office-2-4.jpg",
        "images/shop/office-2-5.jpg",
        "images/shop/office-2-6.jpg"
    ]
    },

    {
        id: 37,
        title: "Square D Ground Fault Circuit Breaker, HOM250GFI",
        price: 48.95,
        oldPrice: null,
        sale: false,
        category: "industrial",
        image: "images/shop/industrial-4.jpg"
    },

    {
        id: 38,
        title: "Snaptain S5C PRO FHD Drone",
        price: 75.00,
        oldPrice: 85.00,
        sale: true,
        category: "electronics",
        image: "images/shop/electronics-3.jpg",
        images: [
        "images/shop/electronics-3.jpg",
        "images/shop/electronics-3-2.jpg",
        "images/shop/electronics-3-3.jpg"
    ]
    },

    {
        id: 39,
        title: "Cobra RAD 480i Laser Radar Detector – Long Range Detection",
        price: 165.00,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-9.jpg",
        images: [
        "images/shop/auto-9.jpg",
        "images/shop/auto-9-2.jpg",
        "images/shop/auto-9-3.jpg",
        "images/shop/auto-9-4.jpg",
        "images/shop/auto-9-5.jpg"
    ]
    },

    {
        id: 40,
        title: "Columbia Women’s Arctic Crest Down Vest, White",
        price: 154.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-11.jpg",
        images: [
        "images/shop/clothing-11.jpg",
        "images/shop/clothing-11-2.jpg",
        "images/shop/clothing-11-3.jpg",
        "images/shop/clothing-11-4.jpg"
    ]
    },

    {
        id: 41,
        title: "Orbit 24639 B-hyve XD 4-Port Smart Hose Watering Timer with Wi-Fi Hub",
        price: 144.00,
        oldPrice: null,
        sale: false,
        category: "patio",
        image: "images/shop/patio-3.jpg",
        images: [
        "images/shop/patio-3.jpg",
        "images/shop/patio-3-2.jpg",
        "images/shop/patio-3-3.jpg",
        "images/shop/patio-3-4.jpg",
        "images/shop/patio-3-5.jpg"
    ]
    },

    {
        id: 42,
        title: "apc by Schneider Electric AP9613",
        price: 225.00,
        oldPrice: 240.00,
        sale: true,
        category: "electronics",
        image: "images/shop/electronics-4.jpg"
    },

    {
        id: 43,
        title: "THE NORTH FACE Borealis Commuter Laptop Backpack",
        price: 109.00,
        oldPrice: 119.00,
        sale: true,
        category: "clothing",
        image: "images/shop/clothing-12.jpg",
        images: [
        "images/shop/clothing-12.jpg",
        "images/shop/clothing-12-2.jpg",
        "images/shop/clothing-12-3.jpg",
        "images/shop/clothing-12-4.jpg",
        "images/shop/clothing-12-5.jpg"
    ]
    },

    {
        id: 44,
        title: "Brady – 139814 BMP51 – Printer",
        price: 223.85,
        oldPrice: null,
        sale: false,
        category: "office",
        image: "images/shop/office-3.jpg"
    },

    {
        id: 45,
        title: "Amazon Kindle E-Reader",
        price: 100.00,
        oldPrice: null,
        sale: false,
        category: "electronics",
        image: "images/shop/electronics-5.jpg",
        images: [
        "images/shop/electronics-5.jpg",
        "images/shop/electronics-5-2.jpg",
        "images/shop/electronics-5-3.jpg",
        "images/shop/electronics-5-4.jpg",
        "images/shop/electronics-5-5.jpg"
    ]
    },

    {
        id: 46,
        title: "SAMSUNG T9 Portable SSD 4TB",
        price: 355.00,
        oldPrice: null,
        sale: false,
        category: "electronics",
        image: "images/shop/electronics-6.jpg",
        images: [
        "images/shop/electronics-6.jpg",
        "images/shop/electronics-6-2.jpg",
        "images/shop/electronics-6-3.jpg",
        "images/shop/electronics-6-4.jpg",
        "images/shop/electronics-6-5.jpg"
    ]
    },

    {
        id: 47,
        title: "adidas Women’s Run Falcon 5 Sneaker, Black",
        price: 75.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-13.jpg",
        images: [
        "images/shop/clothing-13.jpg",
        "images/shop/clothing-13-2.jpg",
        "images/shop/clothing-13-3.jpg",
        "images/shop/clothing-13-4.jpg",
        "images/shop/clothing-13-5.jpg"
    ]
    },

    {
        id: 48,
        title: "Nemco – – Easy Tomato Slicer II™ 3/16 in Slice Tomato Cutter",
        price: 218.90,
        oldPrice: null,
        sale: false,
        category: "home",
        image: "images/shop/home-6.jpg"
    },

    {
        id: 49,
        title: "JSD AUTO PARTS Replacement for 6HP19 Transmission Oil Pan",
        price: 49.99,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-10.jpg",
        images: [
        "images/shop/auto-10.jpg",
        "images/shop/auto-10-2.jpg"
    ]
    },

    {
        id: 50,
        title: "Daiwa Procyon AL Spinning Reel",
        price: 160.00,
        oldPrice: 220.00,
        sale: true,
        category: "sports",
        image: "images/shop/sports-5.jpg"
    },

    {
        id: 51,
        title: "The North Face 1996 Retro Nuptse Jacket Black",
        price: 350.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-14.jpg",
        images: [
        "images/shop/clothing-14.jpg",
        "images/shop/clothing-14-2.jpg",
        "images/shop/clothing-14-3.jpg",
        "images/shop/clothing-14-4.jpg",
        "images/shop/clothing-14-5.jpg"
    ]
    },

    {
        id: 52,
        title: "New Balance Women’s 515 V3 Sneaker, White/Silver",
        price: 85.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-15.jpg",
        images: [
        "images/shop/clothing-15.jpg",
        "images/shop/clothing-15-2.jpg",
        "images/shop/clothing-15-3.jpg",
        "images/shop/clothing-15-4.jpg",
        "images/shop/clothing-15-5.jpg"
    ]
    },

    {
        id: 53,
        title: "Coleman Mach 9430720 Coleman-mach Bluetooth",
        price: 299.00,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-11.jpg",
        images: [
        "images/shop/auto-11.jpg",
        "images/shop/auto-11-2.jpg",
        "images/shop/auto-11-3.jpg",
        "images/shop/auto-11-4.jpg",
        "images/shop/auto-11-5.jpg"
    ]
    },

    {
        id: 54,
        title: "BothLin Wireless Car Charger, Fast Charging Phone Holder 3 in 1",
        price: 33.00,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-12.jpg",
        images: [
        "images/shop/auto-12.jpg",
        "images/shop/auto-12-2.jpg",
        "images/shop/auto-12-3.jpg",
        "images/shop/auto-12-4.jpg",
        "images/shop/auto-12-5.jpg"
    ]
    },

    {
        id: 55,
        title: "Okuma Cold Water Linecounter Trolling Reel",
        price: 345.00,
        oldPrice: 375.00,
        sale: true,
        category: "sports",
        image: "images/shop/sports-6.jpg",
        images: [
        "images/shop/sports-6.jpg",
        "images/shop/sports-6-2.jpg",
        "images/shop/sports-6-3.jpg",
        "images/shop/sports-6-4.jpg"
    ]
    },

    {
        id: 56,
        title: "Rodann Electronics TXRX1000A Indoor Wireless Transmitter and Receiver",
        price: 60.50,
        oldPrice: null,
        sale: false,
        category: "home",
        image: "images/shop/home-7.jpg"
    },

    {
        id: 57,
        title: "All-in-One Water Flosser & Ultrasonic Toothbrush Combo, White",
        price: 99.00,
        oldPrice: null,
        sale: false,
        category: "personal",
        image: "images/shop/personal-2.jpg",
        images: [
        "images/shop/personal-2.jpg",
        "images/shop/personal-2-2.jpg",
        "images/shop/personal-2-3.jpg",
        "images/shop/personal-2-4.jpg",
        "images/shop/personal-2-5.jpg",
        "images/shop/personal-2-6.jpg",
        "images/shop/personal-2-7.jpg"
    ]
    },

    {
        id: 58,
        title: "Emtek Privacy Set, Modern Rectangle Rosette, Modern Windsor Crystal Knob",
        price: 81.95,
        oldPrice: null,
        sale: false,
        category: "home",
        image: "images/shop/home-8.jpg"
    },

    {
        id: 59,
        title: "Motorcraft YH-1881 YH1881 Motor Assembly, 1 Pack",
        price: 41.99,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-13.jpg"
    },

    {
        id: 60,
        title: "Viking RG-10A Ring Booster",
        price: 179.00,
        oldPrice: null,
        sale: false,
        category: "electronics",
        image: "images/shop/electronics-7.jpg"
    },

    {
        id: 61,
        title: "Brady High Adhesion Vinyl Label Tape B30C-4000-595-WT",
        price: 174.35,
        oldPrice: null,
        sale: false,
        category: "office",
        image: "images/shop/office-4.jpg"
    },

    {
        id: 62,
        title: "Amazon Basics Digital Postal Table Top Scale",
        price: 26.00,
        oldPrice: null,
        sale: false,
        category: "industrial",
        image: "images/shop/industrial-5.jpg",
        images: [
        "images/shop/industrial-5.jpg",
        "images/shop/industrial-5-2.jpg",
        "images/shop/industrial-5-3.jpg",
        "images/shop/industrial-5-4.jpg",
        "images/shop/industrial-5-5.jpg"
    ]
    },

    {
        id: 63,
        title: "Square D – QOM2150VH QO 150-Amp QOM2 Frame Size Main Circuit Breaker",
        price: 86.90,
        oldPrice: null,
        sale: false,
        category: "industrial",
        image: "images/shop/industrial-6.jpg",
        images: [
        "images/shop/industrial-6.jpg",
        "images/shop/industrial-6-2.jpg",
        "images/shop/industrial-6-3.jpg"
    ]
    },

    {
        id: 64,
        title: "Bluelab PENSOILPH Soil pH Pen, Digital Meter and Water Test Kit",
        price: 179.00,
        oldPrice: null,
        sale: false,
        category: "patio",
        image: "images/shop/patio-4.jpg",
        images: [
        "images/shop/patio-4.jpg",
        "images/shop/patio-4-2.jpg",
        "images/shop/patio-4-3.jpg",
        "images/shop/patio-4-4.jpg",
        "images/shop/patio-4-5.jpg",
        "images/shop/patio-4-6.jpg"
    ]
    },

    {
        id: 65,
        title: "Google Nest Protect – Smoke Alarm",
        price: 159.00,
        oldPrice: null,
        sale: false,
        category: "electronics",
        image: "images/shop/electronics-8.jpg",
        images: [
        "images/shop/electronics-8.jpg",
        "images/shop/electronics-8-2.jpg",
        "images/shop/electronics-8-3.jpg",
        "images/shop/electronics-8-4.jpg",
        "images/shop/electronics-8-5.jpg",
    ]
    },

    {
        id: 66,
        title: "Brady High Adhesion Vinyl Label Tape B30C-4000-595-RD",
        price: 166.10,
        oldPrice: null,
        sale: false,
        category: "office",
        image: "images/shop/office-5.jpg"
    },

    {
        id: 67,
        title: "HP 2023 Laptop Pavilion 17.3″",
        price: 567.00,
        oldPrice: null,
        sale: false,
        category: "electronics",
        image: "images/shop/electronics-9.jpg",
        images: [
        "images/shop/electronics-9.jpg",
        "images/shop/electronics-9-2.jpg",
        "images/shop/electronics-9-3.jpg",
        "images/shop/electronics-9-4.jpg",
        "images/shop/electronics-9-5.jpg",
        "images/shop/electronics-9-6.jpg"
    ]
    },

    {
        id: 68,
        title: "Lodge USA Enamel Dutch Oven, 7.5 qt., Red",
        price: 192.50,
        oldPrice: null,
        sale: false,
        category: "home",
        image: "images/shop/home-9.jpg",
        images: [
        "images/shop/home-9.jpg",
        "images/shop/home-9-2.jpg",
        "images/shop/home-9-3.jpg",
        "images/shop/home-9-4.jpg",
        "images/shop/home-9-5.jpg",
        "images/shop/home-9-6.jpg"
    ]
    },

    {
        id: 69,
        title: "Grundfos 52722512 3-Speed 1/6 Horsepower Circulator Pump with Flow",
        price: 191.40,
        oldPrice: null,
        sale: false,
        category: "industrial",
        image: "images/shop/industrial-7.jpg"
    },

    {
        id: 70,
        title: "Skauerer 2 Pack Sonic Electric Toothbrush for Adults and Kids",
        price: 115.00,
        oldPrice: null,
        sale: false,
        category: "personal",
        image: "images/shop/personal-3.jpg",
        images: [
        "images/shop/personal-3.jpg",
        "images/shop/personal-3-2.jpg",
        "images/shop/personal-3-3.jpg",
        "images/shop/personal-3-4.jpg",
        "images/shop/personal-3-5.jpg",
        "images/shop/personal-3-6.jpg"
    ]
    },

    {
        id: 71,
        title: "THE NORTH FACE Wawona 4P Tent Green/Grey",
        price: 400.00,
        oldPrice: 460.00,
        sale: true,
        category: "sports",
        image: "images/shop/sports-7.jpg",
        images: [
        "images/shop/sports-7.jpg",
        "images/shop/sports-7-2.jpg",
        "images/shop/sports-7-3.jpg",
        "images/shop/sports-7-4.jpg",
        "images/shop/sports-7-5.jpg"
    ]
    },

    {
        id: 72,
        title: "SEIKO SRPJ81 Men’s Analog Mechanical Watch",
        price: 221.00,
        oldPrice: null,
        sale: false,
        category: "electronics",
        image: "images/shop/electronics-10.jpg",
        images: [
        "images/shop/electronics-10.jpg"
    ]
    },

    {
        id: 73,
        title: "Nanoleaf Essentials Smart LED Color-Changing Light Bulb (60W)",
        price: 55.00,
        oldPrice: null,
        sale: false,
        category: "electronics",
        image: "images/shop/electronics-11.jpg",
        images: [
        "images/shop/electronics-11.jpg",
        "images/shop/electronics-11-2.jpg",
        "images/shop/electronics-11-3.jpg",
        "images/shop/electronics-11-4.jpg",
        "images/shop/electronics-11-5.jpg",
        "images/shop/electronics-11-6.jpg"
    ]
    },

    {
        id: 74,
        title: "Detroit Axle – Front Brake Kit",
        price: 99.00,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-14.jpg",
        images: [
        "images/shop/auto-14.jpg",
        "images/shop/auto-14-2.jpg",
        "images/shop/auto-14-3.jpg",
        "images/shop/auto-14-4.jpg",
        "images/shop/auto-14-5.jpg"
    ]
    },

    {
        id: 75,
        title: "Atwood 38453 RV Heating Thermostat – White",
        price: 39.99,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-15.jpg"
    },

    {
        id: 76,
        title: "SW208 3″ Active Bluetooth 5.0 Bookshelf Speakers",
        price: 99.00,
        oldPrice: 109.00,
        sale: true,
        category: "electronics",
        image: "images/shop/electronics-12.jpg",
        images: [
        "images/shop/electronics-12.jpg",
        "images/shop/electronics-12-2.jpg",
        "images/shop/electronics-12-3.jpg",
        "images/shop/electronics-12-4.jpg",
        "images/shop/electronics-12-5.jpg"
    ]
    },

    {
        id: 78,
        title: "BROWNING TRAIL CAMERAS Defender Wireless Scout Pro Trail Camera",
        price: 145.00,
        oldPrice: null,
        sale: false,
        category: "sports",
        image: "images/shop/sports-8.jpg",
        images: [
        "images/shop/sports-8.jpg",
        "images/shop/sports-8-2.jpg",
        "images/shop/sports-8-3.jpg"
    ]
    },

    {
        id: 79,
        title: "SAMSUNG T5 EVO Portable SSD 2TB, USB 3.2 Gen 1 External Solid State Drive",
        price: 195.00,
        oldPrice: null,
        sale: false,
        category: "electronics",
        image: "images/shop/electronics-13.jpg",
        images: [
        "images/shop/electronics-13.jpg",
        "images/shop/electronics-13-2.jpg",
        "images/shop/electronics-13-3.jpg",
        "images/shop/electronics-13-4.jpg",
        "images/shop/electronics-13-5.jpg"
    ]
    },

    {
        id: 80,
        title: "Phomemo M110 Label Makers",
        price: 76.00,
        oldPrice: null,
        sale: false,
        category: "office",
        image: "images/shop/office-6.jpg",
        images: [
        "images/shop/office-6.jpg",
        "images/shop/office-6-2.jpg",
        "images/shop/office-6-3.jpg",
        "images/shop/office-6-4.jpg",
        "images/shop/office-6-5.jpg"
    ]
    },

    {
        id: 81,
        title: "SEIKO SRPG27 5 Sports Men’s Watch",
        price: 225.00,
        oldPrice: 295.00,
        sale: true,
        category: "electronics",
        image: "images/shop/electronics-14.jpg"
    },

    {
        id: 82,
        title: "All-Clad 10942223917 Stainless Steel Digital Toaster",
        price: 169.00,
        oldPrice: 179.00,
        sale: true,
        category: "home",
        image: "images/shop/home-10.jpg"
    },

    {
        id: 83,
        title: "Bose Home Speaker 500",
        price: 375.00,
        oldPrice: null,
        sale: false,
        category: "electronics",
        image: "images/shop/electronics-15.jpg"
    },

    {
        id: 84,
        title: "Square D Circuit Breaker, 60 Amp, 3-Pole, EDB34060",
        price: 120.45,
        oldPrice: null,
        sale: false,
        category: "industrial",
        image: "images/shop/industrial-8.jpg"
    },

    {
        id: 85,
        title: "Miele Blizzard CX1 Cat & Dog Bagless Canister Vacuum, Portable",
        price: 1200.00,
        oldPrice: null,
        sale: false,
        category: "home",
        image: "images/shop/home-11.jpg"
    },

    {
        id: 86,
        title: "March AC-5C-MD 230V",
        price: 273.90,
        oldPrice: null,
        sale: false,
        category: "industrial",
        image: "images/shop/industrial-9.jpg"
    },

    {
        id: 87,
        title: "Phomemo Thermal Shipping Label Printer, Black",
        price: 114.00,
        oldPrice: null,
        sale: false,
        category: "office",
        image: "images/shop/office-7.jpg"
    },

    {
        id: 88,
        title: "Lascar EL-USB-2-LCD Temp Data Logger, Black",
        price: 226.60,
        oldPrice: null,
        sale: false,
        category: "patio",
        image: "images/shop/patio-5.jpg"
    },

    {
        id: 89,
        title: "Philips Norelco S9000 Prestige",
        price: 288.00,
        oldPrice: null,
        sale: false,
        category: "personal",
        image: "images/shop/personal-4.jpg"
    },

    {
        id: 90,
        title: "All Star System7 Axis NOCSAE Certified Youth Solid Pro",
        price: 220.00,
        oldPrice: null,
        sale: false,
        category: "sports",
        image: "images/shop/sports-9.jpg"
    },

    {
        id: 91,
        title: "Dyson V12 Detect Slim Cordless Vacuum Cleaner, Yellow/Iron",
        price: 670.00,
        oldPrice: 750.00,
        sale: true,
        category: "home",
        image: "images/shop/home-12.jpg"
    },

    {
        id: 92,
        title: "Smeg Red 50’s Retro Style Electric Hand Mixer… (Cream)",
        price: 98.45,
        oldPrice: null,
        sale: false,
        category: "home",
        image: "images/shop/home-13.jpg"
    },

    {
        id: 93,
        title: "Bogrinuo Compound trinocular Microscope, 40X-5000X Magnification",
        price: 299.00,
        oldPrice: null,
        sale: false,
        category: "industrial",
        image: "images/shop/industrial-10.jpg"
    },

    {
        id: 94,
        title: "Supply Masters Mobile Printer Labels 4×6 (Case of 24)",
        price: 179.00,
        oldPrice: 189.00,
        sale: true,
        category: "office",
        image: "images/shop/office-8.jpg"
    },

    {
        id: 95,
        title: "Mini Paddle Brush - 8586M",
        price: 89.00,
        oldPrice: null,
        sale: false,
        category: "personal",
        image: "images/shop/personal-5.jpg"
    },

    {
        id: 96,
        title: "G100 Gel Coat Spray Gun (aluminum_4032)",
        price: 198.00,
        oldPrice: null,
        sale: false,
        category: "sports",
        image: "images/shop/sports-10.jpg"
    },

    {
        id: 97,
        title: "Rachio 8ZULWC-L R3e Generation: Smart, 8 Zone Sprinkler Controller",
        price: 185.00,
        oldPrice: null,
        sale: false,
        category: "patio",
        image: "images/shop/patio.6.jpg"
    },

    {
        id: 98,
        title: "Bluelab METMULTI Multimedia Meter",
        price: 275.00,
        oldPrice: null,
        sale: false,
        category: "patio",
        image: "images/shop/patio.7.jpg"
    },

    {
        id: 99,
        title: "Hanna Instruments HI98103 Checker pH Tester",
        price: 49.00,
        oldPrice: null,
        sale: false,
        category: "patio",
        image: "images/shop/patio.8.jpg"
    },

    {
        id: 100,
        title: "Smeg Cream Stainless Steel Knife Block Set",
        price: 275.00,
        oldPrice: null,
        sale: false,
        category: "home",
        image: "images/shop/home-14.jpg"
    },

    {
        id: 101,
        title: "PHILIPS NA130-00 Air Fryer 1700W Black",
        price: 83.23,
        oldPrice: null,
        sale: false,
        category: "home",
        image: "images/shop/home-15.jpg"
    },

    {
        id: 102,
        title: "AmScope SE420-2L 20X Compact Fixed-Lens Microscope",
        price: 245.00,
        oldPrice: null,
        sale: false,
        category: "industrial",
        image: "images/shop/industrial-11.jpg"
    },

    {
        id: 103,
        title: "THE NORTH FACE Thermoball Lifty II Mens Boots",
        price: 159.00,
        oldPrice: 189.00,
        sale: true,
        category: "clothing",
        image: "images/shop/clothing-16.jpg"
    },

    {
        id: 104,
        title: "Nike Women’s Gymnastics Shoes Sneaker, White/Pink",
        price: 109.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-17.jpg"
    },

    {
        id: 105,
        title: "adidas Women’s Gamecourt 2.0 Tennis Shoe, Light Aqua Off White",
        price: 75.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-18.jpg"
    },

    {
        id: 106,
        title: "adidas Women’s Cloudfoam Pure 2.0 Running Shoe, Black/White",
        price: 79.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-19.jpg"
    },

    {
        id: 107,
        title: "Nike Dunk Low Women's Shoes",
        price: 110.00,
        oldPrice: null,
        sale: false,
        category: "clothing",
        image: "images/shop/clothing-20.jpg"
    },

    {
        id: 108,
        title: "Delmhorst BD-2100 6% to 40% Digital Pin Wood and Sheetrock Moisture Meter",
        price: 206.25,
        oldPrice: null,
        sale: false,
        category: "industrial",
        image: "images/shop/industrial-12.jpg"
    },

    {
        id: 109,
        title: "Brady High Adhesion Vinyl Label Tape B30C-4000-595-GN",
        price: 345.00,
        oldPrice: null,
        sale: false,
        category: "office",
        image: "images/shop/office-10.jpg"
    },

    {
        id: 110,
        title: "Garmin Dash Cam Tandem Dual-Lens Dash Cam",
        price: 330.00,
        oldPrice: null,
        sale: false,
        category: "auto",
        image: "images/shop/auto-3.jpg"
    },

];


/* =========================================================
   SHOP SETTINGS
========================================================= */

const PRODUCTS_PER_PAGE = 15;

let activeCategory = "all";

let currentPage = 1;

let currentProducts = [...products];


/* =========================================================
   PRODUCT GRID
========================================================= */

function getProductGrid() {

    return document.getElementById(
        "product-grid"
    );

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts(items) {

    const grid =
        getProductGrid();


    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    /*
       Calculate pagination
    */

    const totalPages =
        Math.max(
            1,
            Math.ceil(
                items.length /
                PRODUCTS_PER_PAGE
            )
        );


    /*
       Make sure current page
       is still valid
    */

    if (
        currentPage >
        totalPages
    ) {

        currentPage =
            totalPages;

    }


    /*
       Start / End
    */

    const startIndex =
        (currentPage - 1) *
        PRODUCTS_PER_PAGE;


    const endIndex =
        startIndex +
        PRODUCTS_PER_PAGE;


    /*
       Only display 15 products
    */

    const pageProducts =
        items.slice(
            startIndex,
            endIndex
        );


    /*
       Render cards
    */

    pageProducts.forEach(
        function (product) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "product-card";


            /*
               IMPORTANT:
               Product ID is stored
               on the card.
            */

            card.dataset.id =
                product.id;


            card.innerHTML = `

                ${
                    product.sale
                    ?
                    `
                    <span class="badge-sale">
                        SALE
                    </span>
                    `
                    :
                    ""
                }


                <button
                    type="button"
                    class="fav-btn"
                    title="Add to wishlist"
                >
                    <i
                        class="fa-regular fa-heart"
                    ></i>
                </button>


                <a
    href="product-details.html?id=${product.id}"
    class="product-image-link"
>
    <img
        src="${product.image}"
        alt="${product.title}"
        class="product-img"
        loading="lazy"
        onerror="
            this.onerror=null;
            this.src='images/logo.png';
        "
    >
</a>


                <a
    href="product-details.html?id=${product.id}"
    class="product-title product-details-link"
>
    ${product.title}
</a>


                <div
                    class="price-box"
                >

                    $${product.price.toFixed(2)}

                    ${
                        product.oldPrice
                        ?
                        `
                        <span
                            class="old-price"
                        >
                            $${product.oldPrice.toFixed(2)}
                        </span>
                        `
                        :
                        ""
                    }

                </div>


                <button
                    type="button"
                    class="add-cart-btn"
                    data-product-id="${product.id}"
                >
                    ADD TO CART
                </button>

            `;


            grid.appendChild(card);

        }
    );


    /*
       Results text
    */

    const resultsCount =
        document.getElementById(
            "results-count"
        );


    if (resultsCount) {

        if (items.length === 0) {

            resultsCount.innerText =
                "SHOWING 0 OF 0 RESULTS";

        } else {

            const showingStart =
                startIndex + 1;

            const showingEnd =
                Math.min(
                    endIndex,
                    items.length
                );


            resultsCount.innerText =
                `SHOWING ${showingStart}–${showingEnd} OF ${items.length} RESULTS`;

        }

    }


    /*
       Render page numbers
    */

    renderPagination(
        totalPages
    );


    /*
       Sync wishlist hearts
    */

    if (
        typeof syncWishlistIcons ===
        "function"
    ) {

        syncWishlistIcons();

    }

}


/* =========================================================
   PAGINATION
========================================================= */

function renderPagination(totalPages) {

    /*
       Find existing pagination container.

       This supports several possible class names
       so you don't have to redesign your HTML.
    */

    let pagination =
        document.querySelector(
            ".pagination"
        );


    if (!pagination) {

        pagination =
            document.querySelector(
                ".shop-pagination"
            );

    }


    if (!pagination) {

        pagination =
            document.querySelector(
                "#pagination"
            );

    }


    /*
       If your HTML does not have a pagination
       container, create one automatically.
    */

    if (!pagination) {

        pagination =
            document.createElement(
                "div"
            );


        pagination.className =
            "pagination";


        const grid =
            document.getElementById(
                "product-grid"
            );


        if (grid) {

            grid.insertAdjacentElement(
                "afterend",
                pagination
            );

        }

    }


    pagination.innerHTML = "";


    /*
       Previous button
    */

    const previousButton =
        document.createElement(
            "button"
        );


    previousButton.type =
        "button";


    previousButton.className =
        "page-btn prev-page";


    previousButton.innerHTML =
        "‹";


    previousButton.disabled =
        currentPage === 1;


    previousButton.addEventListener(
        "click",
        function () {

            if (
                currentPage > 1
            ) {

                currentPage--;

                renderProducts(
                    currentProducts
                );

                scrollToProducts();

            }

        }
    );


    pagination.appendChild(
        previousButton
    );


    /*
       Page numbers
    */

    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        const button =
            document.createElement(
                "button"
            );


        button.type =
            "button";


        button.className =
            "page-btn";


        button.innerText =
            page;


        if (
            page === currentPage
        ) {

            button.classList.add(
                "active"
            );

        }


        button.addEventListener(
            "click",
            function () {

                currentPage =
                    page;


                renderProducts(
                    currentProducts
                );


                scrollToProducts();

            }
        );


        pagination.appendChild(
            button
        );

    }


    /*
       Next button
    */

    const nextButton =
        document.createElement(
            "button"
        );


    nextButton.type =
        "button";


    nextButton.className =
        "page-btn next-page";


    nextButton.innerHTML =
        "NEXT <i class=\"fas fa-chevron-right\"></i>";


    nextButton.disabled =
        currentPage >= totalPages;


    nextButton.addEventListener(
        "click",
        function () {

            if (
                currentPage <
                totalPages
            ) {

                currentPage++;

                renderProducts(
                    currentProducts
                );

                scrollToProducts();

            }

        }
    );


    pagination.appendChild(
        nextButton
    );

}


/* =========================================================
   SCROLL TO PRODUCTS
========================================================= */

function scrollToProducts() {

    const grid =
        document.getElementById(
            "product-grid"
        );


    if (!grid) {
        return;
    }


    const position =
        grid.getBoundingClientRect()
            .top +
        window.scrollY -
        120;


    window.scrollTo({

        top: position,

        behavior: "smooth"

    });

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

document
    .querySelectorAll(
        ".category-item"
    )
    .forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {

                    /*
                       Active category
                    */

                    document
                        .querySelectorAll(
                            ".category-item"
                        )
                        .forEach(
                            function (el) {

                                el.classList.remove(
                                    "active"
                                );

                            }
                        );


                    item.classList.add(
                        "active"
                    );


                    activeCategory =
                        item.getAttribute(
                            "data-cat"
                        );


                    /*
                       Filter
                    */

                    if (
                        activeCategory ===
                        "all"
                    ) {

                        currentProducts =
                            [...products];

                    } else {

                        currentProducts =
                            products.filter(
                                function (
                                    product
                                ) {

                                    return (
                                        product.category ===
                                        activeCategory
                                    );

                                }
                            );

                    }


                    /*
                       Always return
                       to page 1
                    */

                    currentPage = 1;


                    renderProducts(
                        currentProducts
                    );

                }
            );

        }
    );


/* =========================================================
   PRODUCT SEARCH
========================================================= */

const searchInput =
    document.getElementById(
        "product-search"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function (event) {

            const query =
                event.target.value
                    .toLowerCase()
                    .trim();


            /*
               Search within
               currently selected category
            */

            let sourceProducts;


            if (
                activeCategory ===
                "all"
            ) {

                sourceProducts =
                    products;

            } else {

                sourceProducts =
                    products.filter(
                        function (
                            product
                        ) {

                            return (
                                product.category ===
                                activeCategory
                            );

                        }
                    );

            }


            /*
               Search product names
            */

            currentProducts =
                sourceProducts.filter(
                    function (
                        product
                    ) {

                        return (
                            product.title
                                .toLowerCase()
                                .includes(
                                    query
                                )
                        );

                    }
                );


            /*
               Return to page 1
            */

            currentPage = 1;


            renderProducts(
                currentProducts
            );

        }
    );

}


/* =========================================================
   INITIAL LOAD
========================================================= */

/* =========================================================
   INITIAL SHOP PAGE
   READ CATEGORY FROM URL
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
           Get category from URL.

           Example:
           shop.html?category=electronics
        */

        const urlParams =
            new URLSearchParams(
                window.location.search
            );


        const urlCategory =
            urlParams.get(
                "category"
            );


        /*
           No category:
           show all products
        */

        if (!urlCategory) {

            activeCategory =
                "all";

            currentProducts =
                [...products];

        }


        /*
           Category was selected
        */

        else {

            activeCategory =
                urlCategory;


            currentProducts =
                products.filter(
                    function (product) {

                        return (
                            product.category ===
                            urlCategory
                        );

                    }
                );


            /*
               Make matching category
               active in sidebar
            */

            document
                .querySelectorAll(
                    ".category-item"
                )
                .forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );


                        if (
                            item.getAttribute(
                                "data-cat"
                            ) ===
                            urlCategory
                        ) {

                            item.classList.add(
                                "active"
                            );

                        }

                    }
                );

        }


        /*
           Always start on page 1
        */

        currentPage = 1;


        /*
           Display products
        */

        renderProducts(
            currentProducts
        );

    }
);