// Retrieve score from localStorage
window.onload = function () {
    

    const score = localStorage.getItem("mockTestScore");
    console.log("Score is ",score);
    if (score) {
        document.querySelector("scorefinal").textContent = score; // Display the score
    } else {
        document.querySelector("scorefinal").textContent = "N/A"; // Handle missing score
    }
};
