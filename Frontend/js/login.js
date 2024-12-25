// Initialize Google Sign-In
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "815586914544-rhorh0nhsjcukjrfkolaad7v7jc6tt3n.apps.googleusercontent.com", // Replace with your Google OAuth Client ID
        callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
        document.getElementById("googleSignInButton"),
        { theme: "outline", size: "large" } // Customize button style
    );
};

// Google OAuth callback function
function handleCredentialResponse(response) {
    console.log("ID Token: " + response.credential);

    // Parse the JWT token to extract user details
    const userInfo = parseJwt(response.credential);

    // Save user info to localStorage
    localStorage.setItem("userCredential", JSON.stringify(userInfo));

    // Redirect to index.html
    window.location.href = "index.html";
}

// Function to parse JWT token
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''));

    return JSON.parse(jsonPayload);
}

// Function for guest login
function continueAsGuest() {
    // Mark the user as a guest and redirect to index.html
    localStorage.setItem("isGuest", "true");
    window.location.href = "index.html";
}
