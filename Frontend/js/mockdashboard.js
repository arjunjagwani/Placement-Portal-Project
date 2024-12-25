function startMockTest(testName) {

  
 if (testName === 'Mocktest1'||testName === 'Mocktest2'||testName === 'Mocktest3'||testName === 'Mocktest4'||testName === 'Mocktest5') {
    window.location.href = 'demo.html'; // Redirect to the specific HTML page
}
  // Add navigation or logic for starting the mock test here.
}
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