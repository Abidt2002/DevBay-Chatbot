const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Predefined DevBay Answers
const responses = {
  "what is devbay": "DevBay is a full-service IT and AI solutions company dedicated to transforming businesses through innovation, technology, and intelligent systems.",
  "devbay vision": "To revolutionize global industries with intelligent, automated, and scalable technology solutions that empower businesses to thrive in the digital era.",
  "devbay contact email": "You can reach DevBay at contact@devbaytech.com for any inquiries or collaborations.",
  "devbay phone number": "DevBay's official contact number is +92 300 1234567.",
  "headquarters": "DevBay’s headquarters are located in Karachi and Islamabad, serving clients in UAE, USA, Canada, and Saudi Arabia."
};

// Function to display message
function addMessage(content, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  chatBox.appendChild(msg);

  if (sender === "bot") {
    typeText(msg, content); // Animate typing
  } else {
    msg.textContent = content;
  }

  chatBox.scrollTop = chatBox.scrollHeight;
}

// Typing animation
function typeText(element, text, i = 0) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    setTimeout(() => typeText(element, text, i + 1), 30); // speed (ms)
  }
}

// Handle send button
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

// Main logic
function sendMessage() {
  const text = userInput.value.trim().toLowerCase();
  if (text === "") return;

  addMessage(userInput.value, "user");
  userInput.value = "";

  let reply = "Thanks for your message! Our AI assistant will get back with more details soon.";

  for (const key in responses) {
    if (text.includes(key)) {
      reply = responses[key];
      break;
    }
  }

  setTimeout(() => addMessage(reply, "bot"), 500);
}



