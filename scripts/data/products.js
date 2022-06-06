const products = [
    {
        id: 1,
        name: "2 in 1 Wi-Fi Projector",
        description: "Create your own mini-theatre in the comfort of your home with this 2-in-1 Wi-Fi-enabled projector that has an in-built DVD player.",
        image: "./assets/images/product-2n1-wifi-projector/img1.webp",
        // The references 
        references: {
            image: "https://www.kmart.com.au/product/2-in-1-wi-fi-projector-with-dvd-player-43140350/",
            description: "https://www.kmart.com.au/product/2-in-1-wi-fi-projector-with-dvd-player-43140350/"
        },
        category: "Home & Living",
        stats: {
            stock: 10,
            price: 100,
            // rating: 4.5
            data: `<li class="product-stock">Only <strong style="color: orange;opacity:0.8;">32</strong> left</li>
                    <li class="product-price">A bargain at <strong class="not" style="color: yellowgreen;opacity:0.8">$</strong><strong style="color: yellowgreen;opacity:0.8">149</strong></li>`
        },
        longDescription: `<p>
            <strong>The 2 in 1 Wi-Fi Projector</strong>
            <br>
            Create your own mini-theatre in the comfort of your home with this 2-in-1 Wi-Fi-enabled projector that has an in-built DVD player.
            <br><br>
            <strong>Features</strong>
            <br>
            - 2-in-1 Wi-Fi enabled projector
            - DVD player
            - HDMI port
            - Built-in speaker
            - Built-in microphone
            - Built-in microphone
            - Built-in microphone
            <br><br>
            <strong>Specifications</strong>
            <br>
            - Dimensions: H: 2.5m, W: 2.5m, D: 2.5m
            - Weight: 1.5kg
            - Power: 100W
            - Operating temperature: -40°C to +60°C
            - Operating voltage: 110V
            - Operating frequency: 50Hz
            - Operating current: 10A
            - Operating power: 100W
            <br><br>
            <strong>Warranty</strong>
            <br>
            - 1 year manufacturer warranty
            <br><br>
            <strong>Packaging</strong>
            <br>
            - Box
            <br><br>
            <strong>Shipping</strong>
            <br>
            - Free shipping
            <br><br>
            <strong>Returns</strong>
            <br>
            - 30 days money back guarantee
            <br>
            <p>`
    },
    {
        id: 2,
        name: "Artificial Succulent in Pot - Assorted",
        description: "Give your indoor space a refreshing update with this artificial plant that comes in a pot.",
        image: "./assets/images/product-artificial-succulent-pot-assorted/img1.webp",
        category: "Home & Living",
        // The references
        references: {
            image: "https://www.kmart.com.au/product/artificial-succulent-in-pot-assorted-43019373/",
            description: "https://www.kmart.com.au/product/artificial-succulent-in-pot-assorted-43019373/"
        },
        stats: {
            stock: 80,
            price: 3,
            // rating: 4.5
            data: `
                <li class="product-price">Only <strong class="not"
                    style="color: green;opacity:0.8">$</strong><strong
                    style="color: green; opacity:0.8">3.00</strong><i
                    style="color: green; opacity: 0.8; font-style: normal;">ea</i></li>
                <li class="product-stock">Still <strong title="80 items left"
                    style="color: yellowgreen;opacity:0.8">362</strong> remaining</li>
            `
        }
            
    },
    {
        id: 3,
        name: "3 Tier Trolley - Pink",
        description: "This 3 tier trolley is a smart space-saving solution to accommodate all your essentials - place it in your kitchen or bathroom for a clutter-free and mess-free space.",
        image: "./assets/images/product-3-tier-trolley-pink/img1.webp",
        category: "Home & Living",
        // The references
        references: {
            image: "https://www.kmart.com.au/product/3-tier-trolley-pink-43113385/",
            description: "https://www.kmart.com.au/product/3-tier-trolley-pink-43113385/"
        },
        stats: {
            stock: 10,
            price: 29,
            // rating: 4.5
            data: `<li class="product-price">On sale at <strong class="not" style="color: green;opacity:0.8">$</strong><strong style="color: green;opacity:0.8">29</strong> was $35</li>`
        },
        longDescription: `<strong>3 Tier Trolley - Pink</strong><div>This 3 tier trolley is a smart space-saving solution to accommodate all your essentials - place it in your kitchen or bathroom for a clutter-free and mess-free space.<br><br><strong>Product Details</strong><ul><li><em>Accessories not included</em></li><li><strong>Dimensions/Size:</strong><ul><li>Product dimensions: 78.5cm (H) x 44.5cm (W) x 31.5cm (D)</li><li>Box dimensions: 27cm (L) x 41.5cm (H) x 31.5cm (W)</li></ul></li><li><strong>Maximum weight c</strong><strong>apacity:</strong>&nbsp;16kg&nbsp;(per shelf)</li><li><strong>Material:</strong>&nbsp;Powder coated iron tube and board, zinc alloy, polypropylene (PP) and black zinc plating iron</li><li><strong>Assembly:</strong>&nbsp;Required</li><li>Easy to assemble</li><li><strong>Product weight:&nbsp;</strong>3.86kg</li><li><strong>Colour:</strong>&nbsp;Pink</li></ul><strong>Features</strong><ul><li>Universal kitchen trolley for extra storage space, can be used in the pantry, laundry and bathroom</li><li>3 sturdy perforated shelves</li><li>360 deg. spinning caster wheels with locking brakes for stability</li></ul><strong>Additional Information</strong><ul><li>Anko rubberwood cutting board sold separately</li><li><a href="http://www.kmart.com.au/wcsstore/Kmart/pdfs/43113385_Manual.pdf" title="Guide">Instruction Manual</a></li></ul><strong>Warning:</strong>&nbsp;Do not stand, sit or lean on the trolley. Use only on a flat surface. Follow usage instructions carefully.</div>`

    },
    {
        id: 4,
        name: "Cast Iron Casserole Pot - Blue",
        description: "Make casseroles, stews and other hearty meals for your loved ones in this cast iron pot.",
        image: "./assets/images/product-cast-Iron-casserole-pot-blue/img1.webp",
        // The references 
        references: {
            image: "https://www.kmart.com.au/product/cast-iron-casserole-pot-blue-42823896",
            description: "https://www.kmart.com.au/product/cast-iron-casserole-pot-blue-42823896/"
        },
        category: "Home & Living",
        stats: {
            stock: 913,
            price: 20,
            // rating: 4.5
            data: `<li class="product-price">Was <strong class="not" style="color: orangered;opacity:0.8">$</strong><strong style="color: orangered;opacity:0.8">30</strong> now is $20</li>`
        },
        longDescription: `<strong>The best Casserole Pot (in blue)</strong><div>Make casseroles, stews and other hearty meals for your loved ones in this cast iron pot.<br><br><strong>Product Details</strong><ul><li><strong>Capacity: </strong>4 litres</li><li><strong>Dimensions/Size: </strong>24.5cm (L) x 16.5cm (H) x 24cm (W)</li><li><strong>Material: </strong>Cast iron</li><li><strong>Colour: </strong>Blue</li></ul><strong>Features</strong><ul><li>Exceptional heat retention allows for slow cooking and keeping foods moist and tender</li><li>Enamel interior</li><li>Easy to clean</li><li>Suitable for gas, ceramic, induction, electric and halogen cooktops</li><li>Safe for oven use</li></ul><strong>Additional Information</strong><ul><li>For domestic use only</li><li><strong>Care instructions: </strong>Clean according to given instructions&nbsp;</li></ul><strong>Warning: </strong>Keep children away from heated pan. Follow usage instructions carefully.</div></div>`
            
    },
    {
        id: 5,
        name: "Very new phone",
        description: "This phone is the best quality and the best price",
        image: "./assets/images/product-new-phone/img1.webp",
        category: "Electronics",
        // The references
        references: {
            image: "https://www.thedailymash.co.uk/news/science-technology/nokia-with-broken-screen-is-best-phone-of-all-time-2013040464681",
            description: "None - Wrote it myself"
        },
        stats: {
            stock: 1,
            price: 19.91,
            // rating: 4.5
            data: ` Very affordable at <strong class="not"
                    style="color: green;opacity:0.8">$</strong><strong
                    style="color: green; opacity:0.8">19.91</strong><i
                    style="color: green; opacity: 0.8; font-style: normal;">ea</i>
            `
        },
        longDescription: `<strong>You can get a very new phone</strong><div>You will be sad when you see all of your friends having this, and not you. THIS can all change now, with this good deal of <strong>$19.91</strong>, you can get one but also some for all of your family and friends. 😃</div>`
    },
    {
        id: 6,
        name: "4 Pack Wooden Donuts",
        description: "A great choice for pretend play with friends - these wooden donuts will encourage your child to imagine, share and explore.",    
        image: "./assets/images/4-pack-wooden-donuts/img1.webp",
        category: "Home & Living",
        // The references
        references: {
            image: "https://www.kmart.com.au/product/4-pack-wooden-donuts-43112364/",
            description: "https://www.kmart.com.au/product/4-pack-wooden-donuts-43112364/"
        },
        stats: {
            stock: 1623752,
            price: 5,
            // rating: 4.5
            data: `<li class="product-price">A reasonable <strong class="not" style="color: green;opacity:0.8">$</strong><strong style="color: green;opacity:0.8">5</strong> price tag</li>`
        },
        longDescription: `<strong>4 Pack Wooden Donuts</strong><div>A great choice for pretend play with friends - these wooden donuts will encourage your child to imagine, share and explore.</div>`
    },
    {
        id: 7,
        name: "85\" Neo QLED 8K Smart TV",
        description: "Greatness never ends, but evolves with 8K. It also is is good  for those professionals that need something good quality.",
        image: "./assets/images/product-neo-qled-8k-tv/img1.webp",
        category: "Electronics",
        // The references
        references: {
            image: "https://www.binglee.com.au/products/samsung-85-neo-qled-8k-smart-tv-qa85qn900bwxxy",
            description: "https://www.binglee.com.au/products/samsung-85-neo-qled-8k-smart-tv-qa85qn900bwxxy"
        },
        stats: {
            stock: 1,
            price: 11995,
            // rating: 4.5
            data: `<li class="product-price">For professionals with <strong class="not" style="color: green;opacity:0.8">$</strong><strong style="color: green;opacity:0.8">11,995</strong></li>`
        },
        longDescription: `<strong>Samsung 85" Neo QLED 8K Smart TV</strong><div>Greatness never ends, but evolves with 8K. It also is is good  for those professionals that need something good quality.</div>`
    },
    
];
