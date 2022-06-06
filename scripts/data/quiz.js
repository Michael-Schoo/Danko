
let quizQuestions = [
    {
        question: "What type of chair do you like?",
        type: ["radio", "opt:text"],
        answers: [
            {
                option: "The Couch",
                points: 1
            },
            {
                option: "No Chair",
                points: 2
            },
            {
                option: "School Chair",
                points: 3
            },
            {
                option: "Stacked Chairs",
                points: 4
            },
            {
                option: "Other:",
                points: 1,
                extraType: "text"
            }
        ]
    },
    {
        question: "What is your favorite color?",
        type: ["radio"],
        answers: [
            {
                option: "Red",
                points: 1
            },
            {
                option: "Blue",
                points: 2
            },
            {
                option: "Green",
                points: 3
            },
            {
                option: "Yellow",
                points: 4
            }
        ]
    },
    {
        question: "What is your favorite animal?",
        type: ["radio"],
        answers: [
            {
                option: "Dog",
                points: 1
            },
            {
                option: "Cat",
                points: 2
            },
            {
                option: "Bird",
                points: 3
            },
            {
                option: "Fish",
                points: 4,
                // extraType: "checkbox"
            }
        ]
    },
    {
        question: "What is your favorite foods?",
        type: ["checkbox"],
        answers: [
            {
                option: "Pizza",
                points: 1,
                extraType: "checkbox"
            },
            {
                option: "Pasta",
                points: 2,
                extraType: "checkbox"
            },
            {
                option: "Sushi",
                points: 3,
                extraType: "checkbox"
            },
            {
                option: "Steak",
                points: 4,
                extraType: "checkbox"
            }
        ]
    },
    {
        question: "What is your favorite item (and its color)?",
        type: ["radio"],
        answers: [
            {
                option: "Red:",
                points: 1,
                extraType: "text"
            },
            {
                option: "Blue:",
                points: 2,
                extraType: "text"
            },
            {
                option: "Green:",
                points: 3,
                extraType: "text"
            },
            {
                option: "Yellow:",
                points: 4,
                extraType: "text"
            }
        ]
    },

];

let quizScoreAnswers = [
    {
        // from: 1,
        // to: 2,
        range: [[1, 2], [9, 10]],
        message: "You are a couch person. You like to sit on the couch and watch TV. <br><br><a href='./products.html#Home & Living'>If you chick here you will get a couch</a>",
    },
    {
        // from: 2,
        // to: 3,
        range: [[3, 4], [7, 8], [25, 26]],
        message: "You are a person who likes color. You like to wear red, blue, green, and yellow. <br><br><a href='./products.html#Home & Living'>Be colorful around your home here</a>",
    },
    {
        // from: 5,
        // to: 6,
        range: [[5, 6], [11, 12]],
        message: "You are a person who likes to watch TV. You like to sit on the couch and watch TV. <br><br><a href='./products.html#Home & Living'>Get a couch at the Home & Living section</a>",
    },
    {
        // from: 7,
        // to: 8,
        range: [[7, 8], [13, 14]],
        message: "You are a person who likes to watch TV. You like to watch with red, blue, green, and yellow. <br><br><a href='./products.html#Home & Living'>Look at the different colorful items</a>",
    },
    {
        // from: 9,
        // to: 10,
        range: [[9, 10], [15, 16], [23, 24]],
        message: "You like animals. But you still like to sit on the couch and watch TV. <br><br><a href='./products.html#Home & Living'>Things you can add around your house</a>",
    },
    {
        // from: 11,
        // to: 12,
        range: [[11, 12], [17, 18]],
        message: "You like the couch (or just any relaxing chair). Therefore you like watching TV. <br><br><a href='./products.html#Home & Living'>Look at the Home & Living items</a>",
    },
    {
        // from: 13,
        // to: 14,
        range: [[13, 14], [19, 20]],
        message: "You... no... error... we dont know... (were you honest?) <br><br><a href='./products.html#Home & Living'>However, you can get home items</a>",
    },
    {
        // from: 15,
        // to: 16,
        range: [[15, 16], [21, 22]],
        message: "You are just unique. Statistically you would like watching TV. But you may be interested in colorful things. <br><br><a href='./products.html#Home & Living'>Possibly look at the Home & Living items</a>",
    },

]
// Randomizing the questions

/** @param {Array} array */
function shuffle(array) {
    console.log("hhii")
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Shuffle the questions so it somewhat random
quizQuestions = shuffle(quizQuestions);
for (let i = 0; i < quizQuestions.length; i++) {
    quizQuestions[i].answers = shuffle(quizQuestions[i].answers);
}

