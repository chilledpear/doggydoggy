document.getElementById("user-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") { // Check if the Enter key was pressed
        sendMessage(); // Call the sendMessage function
    }
});

document.getElementById("send-btn").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        displayMessage("User", userInput);
        document.getElementById("user-input").value = ""; // Clear input field

        // Simulate ChatGPT response
        fetchChatGPTResponse(userInput).then((response) => {
            displayMessage("DLM", response);
        });
    }
});

function displayMessage(sender, message) {
    const chatDisplay = document.getElementById("chat-display");
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatDisplay.appendChild(messageElement);
    chatDisplay.scrollTop = chatDisplay.scrollHeight; // Auto-scroll to the bottom
}

async function fetchChatGPTResponse(userInput) {
    try {
        console.log('Sending request with input:', userInput); // Debug log
        
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        });

        console.log('Response status:', response.status); // Debug log

        if (!response.ok) {
            const errorText = await response.text();
            console.log('Error response:', errorText); // Debug log
            throw new Error(`HTTP error! status: ${response.status}, details: ${errorText}`);
        }
        
        const data = await response.json();
        console.log('Response data:', data); // Debug log
        return data.response;
    } catch (error) {
        console.error('Detailed error:', error); // More detailed error
        return `Error: ${error.message}`; // Return actual error message instead of "Try again gringo"
    }
}
