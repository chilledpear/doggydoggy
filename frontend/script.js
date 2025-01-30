document.getElementById("user-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
  
  document.getElementById("send-btn").addEventListener("click", () => {
    sendMessage();
  });
  
  // THEME TOGGLE:
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  themeToggleBtn.addEventListener("click", toggleDarkMode);
  
  function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
      displayMessage("Non-Dog Entity", userInput);
      document.getElementById("user-input").value = "";
  
      fetchChatGPTResponse(userInput).then((response) => {
        displayMessage("doggydoggy", response); // chatbot is doggydoggy
      });
    }
  }
  
  function displayMessage(sender, message) {
    const chatDisplay = document.getElementById("chat-display");
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatDisplay.appendChild(messageElement);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
  }
  
  async function fetchChatGPTResponse(userInput) {
    try {
      const baseUrl = window.location.origin;
      const response = await fetch(`${baseUrl}/api/chat`, {
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
      return data.response;
    } catch (error) {
      console.error('Error:', error);
      return 'Unable to fetch a response at this time. Please try again.';
    }
  }
  
  /* 
    Toggle Dark Mode 
    - Switch body class from light-mode <-> dark-mode
    - Switch center image from doggy-light.jpg <-> doggy-dark.jpg
    - Switch favicon from fav-light.png <-> fav-dark.png
    - Cursor changes automatically via CSS
  */
  function toggleDarkMode() {
    const body = document.body;
    const centerImage = document.getElementById("center-image");
    const favicon = document.getElementById("favicon");
  
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      // Switch to dark “evil” dog image
      centerImage.src = "doggy-dark.jpg";
      // Switch favicon to dark version
      favicon.href = "fav-dark.png";
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      // Switch back to light image
      centerImage.src = "doggy-light.jpg";
      // Switch favicon to light version
      favicon.href = "fav-light.png";
    }
  }
  