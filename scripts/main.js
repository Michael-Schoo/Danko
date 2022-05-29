// For every html page


function refreshCart() {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    console.log(cart)

    if (cart.length) document.getElementById("navbar-cart").innerText = `Cart (${cart.length})`;
    else document.getElementById("navbar-cart").innerText = `Cart🛒`;
}

// refreshCart();
refreshCart();


const cartNavElement = document.getElementById("navbar-cart");
cartNavElement.addEventListener('mouseover', function () {
    // show the products in the cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart)
    // append the products to the DOM
    
})