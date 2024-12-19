// Dynamic Heading Functionality
const headings = ["Mock Test", "Test Your Skills", "Prepare for Placements", "Improve Your Knowledge"];
const headingElement = document.getElementById("dynamic-heading");
let headingIndex = 0;

function changeHeading() {
    headingElement.textContent = headings[headingIndex];
    headingIndex = (headingIndex + 1) % headings.length;
}

setInterval(changeHeading, 3000);

// Mock Test Functionality
const questions = [
    { question: "What is the capital of France?", options: ["Paris", "Rome", "Madrid", "Berlin"], answer: "A" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "B" },
    { question: "Which language is used for web development?", options: ["Python", "JavaScript", "C", "Swift"], answer: "B" }
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 30;
const questionElement = document.getElementById("question");
const optionsElement = document.querySelector(".options");
const timerElement = document.getElementById("time");
const nextButton = document.getElementById("next-question-btn");
const resultContainer = document.querySelector(".result-container");
const scoreElement = document.getElementById("score");

// Display a question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        optionsElement.innerHTML += `
            <li>
                <input type="radio" name="q${currentQuestionIndex}" value="${String.fromCharCode(65 + index)}" id="option${index + 1}">
                <label for="option${index + 1}">${String.fromCharCode(65 + index)}. ${option}</label>
            </li>`;
    });
}

// Check answer and load the next question
function nextQuestion() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
    if (selectedOption && selectedOption.value === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        resetTimer();
    } else {
        showResult();
    }
}

// Reset the timer
function resetTimer() {
    timer = 30;
}

// Show result
function showResult() {
    document.querySelector(".mock-test-container").style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = `You scored ${score} out of ${questions.length}!`;
}

// Timer countdown
setInterval(() => {
    if (timer > 0) {
        timer--;
        timerElement.textContent = timer;
    } else {
        nextQuestion();
    }
}, 1000);

// Initialize the first question
loadQuestion();

// Add event listener for the Next button
nextButton.addEventListener("click", nextQuestion);
