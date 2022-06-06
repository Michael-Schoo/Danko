// This file is for the homepage
// This adds:
// * The image carousel (The products)
// JS files needed for this script
// * main.js
// HTML files that use this script
// * index.html


const productsCarousel = document.querySelector('.products-carousel');
productsCarousel.innerHTML = "";

let imageShown = 0

const slide = document.createElement('div');
slide.classList.add('slide');

function createProductCarousel() {

    // make the slides
    slide.setAttribute('product-id', products[imageShown].id.toString());
    const link = document.createElement('a');
    link.setAttribute('href', 'products.html?id='+products[imageShown].id.toString());

    const slide1Name = document.createElement('a');
    slide1Name.setAttribute('href', 'products.html?id='+products[imageShown].id.toString());
    slide1Name.innerHTML = `${imageShown + 1}/${products.length}: <strong>${products[imageShown].name}</strong> ($${products[imageShown].stats.price})`;

    const slide1NameDiv = document.createElement('div');
    slide1NameDiv.classList.add('name');
    slide1NameDiv.appendChild(slide1Name);

    const slide1Image = document.createElement("img")
    slide1Image.classList.add('mid-less-crop');
    slide1Image.setAttribute("src", products[imageShown].image)

    link.appendChild(slide1Image)
    slide.appendChild(link)
    slide.appendChild(slide1NameDiv)

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const leftButton = document.createElement('button');
    leftButton.classList.add('prev');
    leftButton.innerHTML = "&#10094";
    leftButton.title = "Previous";
    leftButton.setAttribute("alt","Button that goes to the previous image on the image carousel" )
    leftButton.addEventListener('click', () => {
        // decide weather to go to the previous or last image
        if (imageShown > 0) {
            imageShown--;
            slide.innerHTML = "";
            createProductCarousel();
        } else {
            imageShown = products.length - 1;
            slide.innerHTML = "";
            createProductCarousel();
        }
        // remove the interval and recreate it - thus resting the timer
        clearInterval(changeImageInterval);
        changeImageInterval = setInterval(changeImageIntervalFunc, 2500);
    })

    const rightButton = document.createElement('button');
    rightButton.classList.add('next');
    rightButton.innerHTML = "&#10095";
    rightButton.title = "Next";
    rightButton.setAttribute("alt", "Button that goes to the next image on the image carousel");
    rightButton.addEventListener('click', () => {
        // decide weather to go to the next or first image
        if (imageShown < products.length - 1) {
            imageShown++;
            slide.innerHTML = "";
            createProductCarousel();
        } else {
            imageShown = 0;
            slide.innerHTML = "";
            createProductCarousel();
        }
        // remove the interval and recreate it - thus resting the timer
        clearInterval(changeImageInterval);
        changeImageInterval = setInterval(changeImageIntervalFunc, 2500);
    })

    buttons.appendChild(leftButton);
    buttons.appendChild(rightButton);
    slide.appendChild(buttons);
}

createProductCarousel();
productsCarousel.appendChild(slide);

// every 5 sec change image
function changeImageIntervalFunc () {
        if (imageShown < products.length - 1) {
            imageShown++;
            slide.innerHTML = "";
            createProductCarousel();
        }
        else {
            imageShown = 0;
            slide.innerHTML = "";
            createProductCarousel();
        }
    };

let changeImageInterval = setInterval(changeImageIntervalFunc, 2500);
