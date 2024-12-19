// Correct answers for the questions
const correctAnswers = {
    q1: "C", // Paris
    q2: "B", // Albert Einstein
    q3: "B"  // 11
};

function submitTest() {
    let score = 0;
    const totalQuestions = 3;

    // Access form inputs
    const form = document.forms["mockTestForm"];
    const userAnswers = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value
    };

    // Compare answers and calculate score
    for (let question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }

    // Display result
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Your Score: ${score} / ${totalQuestions}`;
}
