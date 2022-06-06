// This file if for every page
// JS files needed for this script
// * None
// HTML files that use this script
// * index.html
// * products.html
// * cart.html
// * contact.html
// * quiz.html


// Using local storage get the cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

/** Function that refreshes the navbar's cart item */
function refreshCart() {

    // So different stylings dependant on if there are items in the cart
    if (cart.length) document.getElementById("navbar-cart").innerText = `Cart (${cart.length})`;
    else document.getElementById("navbar-cart").innerText = `Cart🛒`;
}

// Run the function to refresh the cart
refreshCart();


// Make konami code on press
var codesPressed = [""]
const validKonami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
document.addEventListener('keydown', function (event) {

    codesPressed.push(event.key)

    if (codesPressed.toString().includes(validKonami.toString())) {
        // make the body have the class of konami
        // this using css will make the page annoying
        document.body.className = 'konami'
        sessionStorage.setItem('konami', 'true')
    }
})

// If it was enabled in the session, then add the class to the body
if (sessionStorage.getItem('konami') == 'true') {
    document.body.className = 'konami'
}
