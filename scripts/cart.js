// This file is for the showing cart page
// JS files needed for this script
// * main.js
// HTML files that use this script
// * cart.html

// Getting the element that will be used
// And then clearing it so the file can append stuff
const productsElement = document.getElementsByClassName('products-cart')[0];
productsElement.innerHTML = ""


// for loop that uses the local storage to append the products to the DOM
if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {

        const product = products.find(p => p.id === cart[i].productId);
        console.log(products)
        const productElement = document.createElement('div');
        productElement.attributes.setNamedItem(document.createAttribute('data-productId'));
        productElement.attributes.getNamedItem('data-productId').value = product.id.toString();
        productElement.classList.add('cart-item');
        const imgDiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = "Image of a "+product.name;
        imgDiv.classList.add('cart-item-image');
        imgDiv.appendChild(img);
        const cartItemInfo = document.createElement('div');
        cartItemInfo.classList.add('cart-item-info');
        const name = document.createElement('h3');
        const nameLink = document.createElement('a');
        nameLink.href = `./products.html?id=${product.id}`;
        nameLink.innerText = product.name;
        name.appendChild(nameLink); 
        name.classList.add('cart-item-name');
        // name.innerText = product.name;
        const price = document.createElement('p');
        const description = document.createElement('p');
        description.classList.add('cart-item-description');
        description.innerText = product.description;
        price.classList.add('cart-item-price');
        price.innerText = `$${product.stats.price}`;
        const quantity = document.createElement('p');
        quantity.classList.add('cart-item-quantity');
        quantity.innerText = `Quantity ${cart[i].quantity}`;

        // make remove button
        const removeButton = document.createElement('button');
        removeButton.classList.add('cart-item-buttons');
        removeButton.innerText = 'Remove';
        removeButton.addEventListener('click', function () {
            // let products = JSON.parse(localStorage.getItem('products'));
            cart = cart.filter(p => p.productId !== product.id);
            console.log(product)
            localStorage.setItem('cart', JSON.stringify(cart))
            // remove from DOM
            productElement.remove();
            refreshCart();
            if (cart.length === 0) {
                noProducts();
            }
        });

        // make  a BR and HR
        const br = document.createElement('br');
        const hr = document.createElement('hr');
        
        cartItemInfo.appendChild(name);
        cartItemInfo.appendChild(description);
        cartItemInfo.appendChild(price);
        cartItemInfo.appendChild(quantity);
        cartItemInfo.appendChild(removeButton);
        productElement.appendChild(imgDiv);
        productElement.appendChild(cartItemInfo);
        productElement.appendChild(br);
        productElement.appendChild(hr);
        productsElement.appendChild(productElement);
    }
} else {
    noProducts();
}

function noProducts() {
    const noProducts = document.createElement('h1');
    noProducts.innerText = 'Your cart is empty';
    productsElement.appendChild(noProducts);
}