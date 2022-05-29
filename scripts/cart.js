
const productsElement = document.getElementsByClassName('products-cart')[0];
productsElement.innerHTML = ""
// Using local storage append the products to the DOM
let products = JSON.parse(localStorage.getItem('cart')) || [];
// for loop
for (let i = 0; i < products.length; i++) {

    const product = products[i];
    console.log(product)
    const productElement = document.createElement('div');
    productElement.attributes.setNamedItem(document.createAttribute('data-cartId'));
    productElement.attributes.setNamedItem(document.createAttribute('data-productId'));
    productElement.attributes.getNamedItem('data-cartId').value = String(product.cartId);
    productElement.attributes.getNamedItem('data-productId').value = product.id;
    productElement.classList.add('cart-item');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    img.src = product.image;
    imgDiv.classList.add('cart-item-image');
    imgDiv.appendChild(img);
    const cartItemInfo = document.createElement('div');
    cartItemInfo.classList.add('cart-item-info');
    const name = document.createElement('h3');
    name.classList.add('cart-item-name');
    name.innerText = product.name;
    const price = document.createElement('p');
    const description = document.createElement('p');
    description.classList.add('cart-item-description');
    description.innerText = product.description;
    price.classList.add('cart-item-price');
    price.innerText = `${product.price}`;

    // make remove button
    const removeButton = document.createElement('button');
    removeButton.classList.add('cart-item-buttons');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', function () {
        products = products.filter(p => p.cartId != product.cartId);
        localStorage.setItem('cart', JSON.stringify(products))
        // remove from DOM
        productElement.remove();
        refreshCart();
    });

    // make  a BR and HR
    const br = document.createElement('br');
    const hr = document.createElement('hr');
    
    cartItemInfo.appendChild(name);
    cartItemInfo.appendChild(description);
    cartItemInfo.appendChild(price);
    cartItemInfo.appendChild(removeButton);
    productElement.appendChild(imgDiv);
    productElement.appendChild(cartItemInfo);
    productElement.appendChild(br);
    productElement.appendChild(hr);
    productsElement.appendChild(productElement);
}