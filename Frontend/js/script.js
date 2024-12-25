
// Smooth scrolling function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Array of heading texts
const headings = [
    "Placify,Upskilling Simplified",
    "Placify,Engineering Simplified",
    "Placify,Coding Simplified",
    "Placify,Placement Simplified",
   
    
];

// Get the heading element
const headingElement = document.getElementById("dynamic-heading");

// Initialize the index for the array
let index = 0;

// Function to change heading text
function changeHeading() {
    // Update the heading text with the current index
    headingElement.textContent = headings[index];

    // Move to the next index, loop back to 0 when reaching the end
    index = (index + 1) % headings.length;
}

// Change the heading every 3 seconds (3000 milliseconds)
setInterval(changeHeading, 2000);
document.addEventListener("DOMContentLoaded", function() {
    // Form Validation
    const signupForm = document.querySelector(".signup-form");

    signupForm.addEventListener("submit", function(event) {
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirm-password");

        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            event.preventDefault();
            alert("Passwords do not match. Please try again.");
        }
    });
});


window.onload = function () {
    // Check if the user is logged in or continuing as a guest
    const userCredential = localStorage.getItem("userCredential");
    const isGuest = localStorage.getItem("isGuest");

    if (userCredential) {
        const userInfo = JSON.parse(userCredential); // Parse user info
        displayUserInfo(userInfo);
    } else if (isGuest) {
        // Optionally, display guest mode info or leave as default
        console.log("Guest user");
    }
};

// Function to display user information
function displayUserInfo(userInfo) {
    // Hide login/signup buttons
    document.getElementById("guest-buttons").style.display = "none";

    // Show user info (name, photo, and logout button)
    document.getElementById("user-name").textContent = userInfo.name;
    document.getElementById("user-photo").src = userInfo.picture;
    document.getElementById("user-info").style.display = "flex";

    // Set up logout functionality
    document.getElementById("logout-button").onclick = function () {
        // Clear localStorage and redirect to login page
        localStorage.removeItem("userCredential");
        localStorage.removeItem("isGuest");
        window.location.href = "login.html";
    };
}
