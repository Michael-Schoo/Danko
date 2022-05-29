
// const productsList = [
//     {
//         id: 1,
//         name: 'Product 1',
//         price: 100,
//     },
// ]

const productElements = document.getElementsByClassName('product');

for (let elem of productElements) {
    elem.getElementsByTagName("button")[0].addEventListener('click', function (e) {
        const productId = this.parentElement.parentElement.parentElement.getAttribute('data-productId');
        console.log(this);
        // getProductInfo(productId);

        const productImage = this.parentElement.parentElement.getElementsByTagName('img')[0].src;
        console.log(productImage);  
        // const productInfo = this.getElementsByClassName('product-name')[0].innerText;

        const productName = this.parentElement.parentElement.getElementsByClassName("product-name")[0].innerText;
        console.log(productName);
        const productDesc = this.parentElement.parentElement.getElementsByClassName("product-desc")[0].innerText;
        const productPrice = this.parentElement.parentElement.getElementsByClassName("product-price")[0].innerText;
        
        const product = {
            id: productId,
            name: productName,
            description: productDesc,
            price: productPrice,
            image: productImage,
            cartId: new Date().getTime(),
            dateAdded: new Date()

            // make cartId the unix date

        }
        let prevCart = JSON.parse(localStorage.getItem('cart') ) || [];
        localStorage.setItem('cart', JSON.stringify([product, ...prevCart]));
        // console.log(productsList.find(p=>p.id==productId));
        // make e.target disabled
        e.target.setAttribute('disabled', "true");
        // make its name "added"
        e.target.innerText = 'Added!';
        // make its title "You alredy added this product"
        e.target.setAttribute('title', 'You already added this product');
        // make it's cerser "pointer" display "none"
        e.target.style.cursor = 'not-allowed';

        refreshCart()

        // wait 2 seconds and make e.target enabled
        setTimeout(function () {
            e.target.removeAttribute('disabled');
            e.target.innerText = 'Add to cart';
            e.target.removeAttribute('title');
            e.target.style.cursor = 'auto';
        }, 500);
    });
}



function saveToCart(product) {
    console.log('save to cart');
    // using local storage save
    localStorage.setItem('cart', JSON.stringify(product));


}