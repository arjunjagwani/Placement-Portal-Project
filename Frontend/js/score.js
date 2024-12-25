// Retrieve score from localStorage
window.onload = function () {

    const score = localStorage.getItem("mockTestScore");
    console.log("Score is ",score);
    if (score) {
        document.getElementById("score").textContent = score; // Display the score
    } else {
        document.getElementById("score").textContent = "N/A"; // Handle missing score
    }
};
