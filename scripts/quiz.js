// This file if for showing/making the quiz
// JS files needed for this script
// * main.js
// * data/quiz.js
// HTML files that use this script
// * quiz.html


let types = ["radio", "checkbox", "text"];


// let abc = ("./data/quiz.js")
// get quizScoreAnswers from local storage

const questionElement = document.getElementById("question");
const nextButtonElement = document.getElementById("next-button");
const questionsElement = document.getElementsByClassName("questions")[0];

let currentQuestion = 0;
let currentScore = 0;
let shownSummary = false;

makeQuestion()



nextButtonElement.addEventListener("click", function (){
    getScore()
    if (currentQuestion <= quizQuestions.length -1 && shownSummary === false) {
        
        
        if (checkIfChecked()) {
            currentQuestion++;
        } else {
            alert("Please select an answer");
            // throw new Error("QUIZ: Please select an answer");
        }
    }
    if (currentQuestion < quizQuestions.length  && shownSummary === false) {
        makeQuestion()

    }else {
        shownSummary = true;
        console.log("Quiz is over!");
        questionsElement.innerHTML = "";
        const quizQuestionsElim = document.getElementById("quiz-questions")
        const quizSummaryElim = document.getElementById("quiz-summary");
        quizQuestionsElim.style.display = "none";
        quizSummaryElim.style.display = "block";

        quizSummaryElim.getElementsByTagName("p")[0].innerText = `We can't determine which products you would like, however your score is ${currentScore}`;
        // currentScore = 11
        for (let i = 0; i < quizScoreAnswers.length; i++) {
            for (let j = 0; j < quizScoreAnswers[i].range.length; j++) {
                if (currentScore >= quizScoreAnswers[i].range[j][0] && currentScore <= quizScoreAnswers[i].range[j][1]) {
                    quizSummaryElim.getElementsByTagName("p")[0].innerHTML = quizScoreAnswers[i].message;
                }
            }
        }


        // console.log(document.getElementById("score"));
        // document.getElementById("score").innerHTML = `Your score is ${score}`;
        // document.getElementById("quiz").style.display = "none";
        // document.getElementById("results").style.display = "block";
    }
    
    
});

// make event listener for key ENTER
document.addEventListener("keydown", function(event) {

    if (!shownSummary ) {
        // ignore if in text input
        if (document.activeElement.tagName !== "INPUT") {


        if (event.key === "Enter") {
            nextButtonElement.click();
        } else if (event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" || event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9" || event.key === "0") {
            try{
                if (event.key == "0") event.key = "10";
                let thingy = questionsElement.children[Number(event.key)-1]
                // if it's a checkbox
                if (thingy.children[0].tagName === "INPUT") {
                    thingy.children[0].click();
                }
                // if (thingy.nodeType === ) .click();
            } catch (e) {
                console.log("Faild to click on element");
            }
        }
    }}

});

function makeQuestion() {
    questionsElement.innerHTML = "";
    questionElement.innerHTML = quizQuestions[currentQuestion].question + ` (${currentQuestion+1}/${quizQuestions.length})`;
    for (let i = 0; i < quizQuestions[currentQuestion].answers.length; i++) {
        // const answer = quizQuestions[currentQuestion].answers[i];

        const ratioElement = document.createElement("div");
        const ratioElementInp = document.createElement("input");
        const ratioElementLab = document.createElement("label");

        ratioElement.addEventListener("click", function (event) {
            if (event.target.tagName !== "INPUT" || event.target.type === "text") {
                ratioElementInp.click();
            }
        });

        let inputType = (quizQuestions[currentQuestion].answers[i].extraType?? "radio") == "checkbox"?  "checkbox" : "radio"
        ratioElementInp.type = inputType;
        ratioElementInp.name = "answer";
        ratioElementLab.setAttribute("for", "answer")
        ratioElementLab.innerText = quizQuestions[currentQuestion].answers[i].option + " " ;
        ratioElement.classList.add("options");
        ratioElement.appendChild(ratioElementInp);
        ratioElement.appendChild(ratioElementLab);
        if (quizQuestions[currentQuestion].answers[i].extraType === "text") {
            const textElement = document.createElement("input");
            textElement.type = "text";
            // textElement.classList.add("text-input");
            textElement.placeholder = "Enter text here";
            ratioElement.appendChild(textElement);
        //     ratioElement.appendChild(ratioElementLab);
        //     ratioElement.appendChild(ratioElementInp);
        } 
        // } else {
        // }
        questionsElement.appendChild(ratioElement);
    }

    // var children = questionsElement.children;
//     for (var i = 0; i < children.length; i++) {
//         var child = children[i];
//         // console.log(quiz[currentQuestion].answers[1].option);
//         child.getElementsByTagName("input")[0].checked = false;
//         child.getElementsByTagName("label")[0].innerText = quizQuestions[currentQuestion].answers[i].option;
// }
}

function checkIfChecked() {
    var children = questionsElement.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.getElementsByTagName("input")[0].checked) {
            return true;
        }
    }
    return false;
}

function getScore(){
    var children = questionsElement.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.getElementsByTagName("input")[0].checked) {
            // quiz[currentQuestion].answers[i].points = 1;
            console.log(currentScore);
            if (quizQuestions[currentQuestion].answers[i].extraType === "text"  ) {
                let newScore = quizQuestions[currentQuestion].answers[i].points * (Number(child.getElementsByTagName("input")[1].value.length) % 4);
                currentScore += newScore || quizQuestions[currentQuestion].answers[i].points
                
            } else {
                currentScore += quizQuestions[currentQuestion].answers[i].points;
            }
            console.log(currentScore);

            // return
        }
    }
}


