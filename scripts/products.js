// This file if for showing the products, and their fullscreen page
// JS files needed for this script
// * main.js
// * data/products.js
// * data/reviews.js (only for the fullscreen page)
// HTML files that use this script
// * products.html
// * products.html?id=*


/** Function that added to every "add to cart" button's event listener */
const addToCartButtonEvent = (event) => {

    // Get the product id from the button (from the product-id attribute)
    const id = Number(event.target.getAttribute('product-id'));

    // Get the product's index from the products array
    const index = cart.findIndex(p => p.productId == id);
    
    // A variable to store wether a new product was added 
    // or if one had the quantity increased
    let changedQuantity = false;

    if (index !== -1) {
        // if the product is found increase the quantity
        cart[index].quantity++;
        changedQuantity = true;

    } else {
        // otherwise add the product to the cart
        cart.push({
            productId: id,
            quantity: 1,
        });
    }

    // save the cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    // refresh the navbar's cart attribute
    refreshCart();

    // change it's text so it feels like the button was pressed
    event.target.setAttribute('disabled', "true");
    event.target.innerText = changedQuantity? 'Updated Quantity' :'Added!';
    event.target.setAttribute('title', 'You already added this product');
    event.target.style.cursor = 'not-allowed';


    // wait 0.5 seconds and make e.target back to normal
    setTimeout(function () {
        event.target.removeAttribute('disabled');
        event.target.innerText = 'Add to cart';
        event.target.removeAttribute('title');
        event.target.style.cursor = 'auto';
    }, 500);
}

/**
 * A function that makes a better formatted date
 * @param {Date} date 
 * @returns {string}
 */
function betterDate(date) {
    return date.toLocaleString('en-US');
}

/** Gets the useragent using useragent */
var browserName = (function (agent) {
    switch (true) {
        case agent.indexOf("edge") > -1: return "MS Edge";
        case agent.indexOf("edg/") > -1: return "Edge";
        case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
        case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
        case agent.indexOf("trident") > -1: return "MS IE";
        case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
        case agent.indexOf("safari") > -1: return "Safari";
        default: return "other";
    }
})(window.navigator.userAgent.toLowerCase());

const productElements = document.getElementsByClassName('product');
const productsElements = document.getElementsByClassName('products');

const URLParams = new URLSearchParams(window.location.search);

// if has query params of "id"
if (URLParams.has('id') && products.find(p => p.id == Number(URLParams.get('id')))) {

    // change title
    document.getElementsByTagName('title')[0].innerText = `Danko | ${products[Number(URLParams.get('id')) - 1].name}`;
    
    // get the id from the query params
    const id = Number(URLParams.get('id'));
    // find the product with the id
    const product = products.find(p => p.id == id);
    
    // if the product is found
    if (product) {
        // create a product element
        const productElement = document.createElement('div');
        productElement.classList.add('productFullScreen');
        
        // create an image element
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = "Image of a " + product.name;
        img.classList.add('image');
        img.setAttribute('reference', product.references?.image??'Not referenced');
        
        // create a name element
        const name = document.createElement('h3');
        name.innerText = product.name;
        name.classList.add('name');
        
        // create a description element
        const description = document.createElement('p');
        description.innerText = product.description;
        description.classList.add('description');
        
        // create a longDescription element
        const longDescription = document.createElement('p');
        longDescription.innerHTML = product.longDescription || `<strong>${product.name}</strong><br>${product.description}`;
        longDescription.classList.add('longDescription');
        longDescription.setAttribute('reference', product.references?.description??'Not referenced');
        
        // create a price element
        const price = document.createElement('p');
        price.innerText = '$' + product.stats.price;
        price.classList.add('price');
        
        // create a button element
        const button = document.createElement('button');
        button.innerText = 'Add to Cart';
        button.setAttribute('product-id', String(product.id));
        // add event listener to button
        button.addEventListener('click', addToCartButtonEvent);

        const linkBackToProducts = document.createElement('a');
        linkBackToProducts.innerText = 'Go back to products';
        linkBackToProducts.classList.add('outline');
        linkBackToProducts.setAttribute('href', './products.html');


        // make a review button
        const reviewButton = document.createElement('button');
        reviewButton.innerText = 'Review';
        reviewButton.classList.add('outline');
        reviewButton.addEventListener('click', function () {
            // make a review box
            const reviewBox = document.createElement('div');
            reviewBox.classList.add('reviewBox');
            // make a review form
            const reviewForm = document.createElement('form');
            const idValue = document.createElement('input')
            idValue.setAttribute('type', 'hidden');
            idValue.setAttribute('name', 'id');
            idValue.setAttribute('value', String(product.id));
            reviewForm.appendChild(idValue)

            // Not fully added the other inputs...

            reviewForm.classList.add('reviewForm');
            // make a review input
            const reviewInput = document.createElement('input');
            reviewInput.classList.add('reviewInput');
            reviewInput.setAttribute('type', 'text');
            reviewInput.setAttribute('placeholder', 'Write a review');
            // make a review button
            const reviewButton = document.createElement('button');
            reviewButton.classList.add('reviewButton');
            reviewButton.innerText = 'Submit';
            // add event listener to review button
            reviewButton.addEventListener('click', function (e) {
                // get the review value
                const review = reviewInput.value;
                // if the review value is not empty
                if (review) {
                    // add the review to the product
                    reviews.push({
                        id: reviews.length + 1,
                        name: 'John Doe ' + browserName,
                        rating: 5,
                        review: review,
                        date: betterDate(new Date()),
                        productId: product.id

                    });
                    // save the product to local storage
                    localStorage.setItem('reviews', JSON.stringify(reviews));
                    // refresh the product
                    location.href = `./products.html?id=${product.id}`;
                }
                // remove the review box
            });

            // add the review input and review button to the review form
            reviewForm.appendChild(reviewInput);
            reviewForm.appendChild(reviewButton);
            reviewBox.appendChild(reviewForm);
            let reviewsElem = document.getElementsByClassName('reviews');
            // append at top
            reviewsElem[0].insertBefore(reviewBox, reviewsElem[0].firstChild);
            this.remove();  
            
        });
        const reviewsElem = document.createElement('div');
        reviewsElem.classList.add('reviews');
        reviewsElem.appendChild(reviewButton)
        // If there is not any comments for this product, make one so it is not empty
        if (!reviews.find(r => r.productId == product.id)) {
            reviews.push({
                id: reviews.length + 1,
                name: 'Ghost',
                review: "I'm not actually here",
                rating: 5,
                date: 'Whenever...',
                productId: product.id
        })}

        for (let i = 0; i < reviews.length; i++) {
            const review = document.createElement('div');
            review.classList.add('review');
            const reviewName = document.createElement('h4');
            reviewName.innerText = reviews[i].name;
            const reviewRating = document.createElement('p');
            reviewRating.innerText = 'Rating: ' + reviews[i].rating;
            const reviewDate = document.createElement('p');
            reviewDate.innerText = 'Date: ' + reviews[i].date;
            const reviewText = document.createElement('p');
            reviewText.innerText = reviews[i].review;
            review.appendChild(reviewName);
            // review.appendChild(reviewRating);
            // review.appendChild(reviewDate);
            review.appendChild(reviewText);
            reviewsElem.appendChild(review);
        }
        
        const overview = document.createElement('div');
        overview.classList.add('overview');
        overview.appendChild(name);
        overview.appendChild(description);
        overview.appendChild(price);
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttons');
        buttonContainer.appendChild(button);
        buttonContainer.appendChild(linkBackToProducts)
        // buttonContainer.appendChild(reviewButton);
        overview.appendChild(buttonContainer);

        // make a flexbias elem
        const flexbias = document.createElement('div');
        flexbias.classList.add('flexbias');
        
        // add the elements to the product element
        productElement.appendChild(img);
        productElement.appendChild(overview);
        productElement.appendChild(flexbias);
        productElement.appendChild(longDescription);
        productElement.appendChild(reviewsElem);
        // add the product element to the products element
        document.getElementsByTagName('section')[0].innerHTML = "";
        document.getElementsByTagName('section')[0].appendChild(productElement);
    }
} else {

    // Go through the list and make a product element for each product
    for (let product of products) {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.setAttribute('data-productId', product.id.toString());

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = "Image of a" + product.name;
        productImage.className = 'mid-crop';
        productImage.setAttribute('reference', product.references?.image ?? 'Not referenced');
        const imageDiv = document.createElement('div');
        imageDiv.className = 'product-image';
        imageDiv.appendChild(productImage);
        productElement.appendChild(imageDiv);

        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';
        productInfo.setAttribute('reference', product.references?.image ?? 'Not referenced');
        const productName = document.createElement('h3');
        const productNameLink = document.createElement('a');
        productNameLink.innerText = product.name;
        productNameLink.href = `./products.html?id=${product.id}`;
        productName.appendChild(productNameLink);
        const productDescription = document.createElement('p');
        productDescription.innerText = product.description;
        const productStats = document.createElement('div');
        productStats.className = 'product-stats';
        productStats.innerHTML = product.stats.data;

        productInfo.appendChild(productName);
        productInfo.appendChild(productDescription);
        productInfo.appendChild(productStats);
        productElement.appendChild(productInfo);


        // make button with event listener
        const addToCartButton = document.createElement('button');
        addToCartButton.innerText = 'Add to Cart';
        addToCartButton.setAttribute('product-id', String(product.id));
        addToCartButton.addEventListener('click', addToCartButtonEvent);
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'product-buttons';
        buttonsDiv.appendChild(addToCartButton);
        productElement.appendChild(buttonsDiv);

        // make a link and everything goes in it
        const productLink = document.createElement('a');
        productLink.href = `./products.html?id=${product.id}`;
        productLink.appendChild(productElement);

        // finally append everything onto the products section
        productsElements[0].appendChild(productElement);
    }
}
