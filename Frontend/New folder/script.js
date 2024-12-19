// For adding interactions if necessary
document.addEventListener("DOMContentLoaded", function() {
    // Example interaction for subscribe button
    document.querySelector('.subscribe-btn').addEventListener('click', function() {
        alert("Thank you for subscribing!");
    });
});
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
