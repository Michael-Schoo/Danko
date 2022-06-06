const reviewsDefault = [
    {
        id: 1,
        name: "John Doe",
        rating: 5,
        review: "This is a great product",
        date: "2020-01-01",
        productId: 1
    },
    {
        id: 2,
        name: "Jane Doe",
        rating: 2.5,
        review: "Meh",
        date: "2020-01-01",
        productId: 3
    },

]

// save the default reviews to localstorage if none currently exist
if (!localStorage.getItem("reviews")) {
    localStorage.setItem("reviews", JSON.stringify(reviewsDefault));
}

/** @type {typeof reviewsDefault} */
// Then get the reviews from localstorage
let reviews = JSON.parse(localStorage.getItem("reviews"))
