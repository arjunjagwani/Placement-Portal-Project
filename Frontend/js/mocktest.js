// Attach a click event listener to the button
document.getElementById('startMockTest').addEventListener('click', () => {
    // Send GET request to the backend
    fetch('http://localhost:8080/mocktest') // Replace with your backend URL
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text(); // Assuming plain text response from backend
        })
        .then(data => {
            // Display the response message on the screen
            document.getElementById('responseMessage').innerText = data;
        })
        .catch(error => {
            console.error('Error fetching mock test data:', error);
            document.getElementById('responseMessage').innerText = "Failed to load mock test.";
        });
});
