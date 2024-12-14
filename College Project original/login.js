// Initialize Google Sign-In
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID", // Replace with your Google OAuth Client ID
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.getElementById("googleSignInButton"),
        { theme: "outline", size: "large" }
    );
};

// Google OAuth callback function
function handleCredentialResponse(response) {
    // Token response from Google, here you can add authentication checks
    console.log("ID Token: " + response.credential);
    // For now, we'll simply redirect to index.html
    window.location.href = "index.html";
}

// Function for guest login
function continueAsGuest() {
    // Redirect to index page as a guest user
    window.location.href = "index.html";
}
