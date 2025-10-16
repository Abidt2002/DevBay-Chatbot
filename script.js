// ========================
// Q&A Pairs
// ========================
const qaPairs = [
  { q: "what is devbay", a: "DevBay Technologies is a global IT company..." },
  { q: "where is devbay located", a: "DevBay operates globally with key offices..." },
  { q: "what services devbay provide", a: "DevBay offers App Development, Software Development..." },
  // add all your other 250 Q&A pairs here
];

// ========================
// Helper Functions
// ========================

// Normalize strings for matching
function normalize(text) {
    return text.toLowerCase().replace(/[^\w\s]/gi, "").trim();
}

// Compute simple fuzzy match score
function fuzzyScore(input, target) {
    input = normalize(input);
    target = normalize(target);

    if (target.includes(input)) return 1; // exact or substring match
    const inputTokens = input.split(" ");
    const targetTokens = target.split(" ");
    let matchCount = 0;
    inputTokens.forEach(t => {
        if (targetTokens.includes(t)) matchCount++;
    });
    return matchCount / inputTokens.length; // 0 to 1
}

// Find best matching Q&A
function findAnswer(query) {
    console.log("User Query:", query);
    let bestMatch = { score: 0, answer: "Sorry, I don't understand your question." };
    qaPairs.forEach(pair => {
        const score = fuzzyScore(query, pair.q);
        if (score > bestMatch.score) {
            bestMatch = { score, answer: pair.a };
        }
    });
    console.log("Matched Answer:", bestMatch.answer, "Score:", bestMatch.score);
    return bestMatch.answer;
}

// Typewriter animation
function typeAnswer(text, element) {
    element.innerHTML = "";
    let i = 0;
    const interval = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 25);
}

// ========================
// DOM Elements
// ========================
const chatBox = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const chatPopup = document.getElementById("chat-box");
const chatButton = document.getElementById("chat-button");
const closeChat = document.getElementById("close-chat");

// ========================
// Open / Close Chat
// ========================
chatButton.addEventListener("click", () => chatPopup.style.display = "flex");
closeChat.addEventListener("click", () => chatPopup.style.display = "none");

// ========================
// Send Message Handler
// ========================
function sendMessage() {
    const userText = chatInput.value.trim();
    if (!userText) return;

    // Show user message
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-msg");
    userDiv.textContent = userText;
    chatBox.appendChild(userDiv);

    // Find best matching answer
    const answerText = findAnswer(userText);

    // Show bot message with typewriter effect
    const botDiv = document.createElement("div");
    botDiv.classList.add("bot-msg");
    chatBox.appendChild(botDiv);
    typeAnswer(answerText, botDiv);

    // Clear input and scroll
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

