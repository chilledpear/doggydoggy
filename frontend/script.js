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
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Response data:', data); // Add this for debugging
        return data.response;
    } catch (error) {
        console.error('Error:', error);
        return 'Try again gringo';
    }
}
