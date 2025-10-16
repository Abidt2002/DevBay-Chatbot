// ========================
// Your Q&A Pairs (start with a few for testing)
// ========================
const qaPairs = [
  { q: "what is devbay", a: "DevBay Technologies is a global IT company that builds modern digital solutions, software, and automation systems to empower businesses worldwide." },
  { q: "where is devbay located", a: "DevBay operates globally with key offices in Pakistan, the Middle East, the United Kingdom, and North America." },
  { q: "what services devbay provide", a: "DevBay offers App Development, Software Development, Data Analysis, Cyber Security, Cloud Solutions, SEO, Call Center Services, and Game Development." },
  { q: "who is the ceo of devbay", a: "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation." }
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

    if (target.includes(input)) return 1;
    const inputTokens = input.split(" ");
    const targetTokens = target.split(" ");
    let matchCount = 0;
    inputTokens.forEach(t => {
        if (targetTokens.includes(t)) matchCount++;
    });
    return matchCount / inputTokens.length;
}

// Find best matching Q&A
function findAnswer(query) {
    let bestMatch = { score: 0, answer: "Sorry, I don't understand your question." };
    qaPairs.forEach(pair => {
        const score = fuzzyScore(query, pair.q);
        if (score > bestMatch.score) {
            bestMatch = { score, answer: pair.a };
        }
    });
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
// DOM Interaction
// ========================
const inputBox = document.getElementById("userInput");
const submitBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chat-body");

submitBtn.addEventListener("click", () => {
    const userText = inputBox.value.trim();
    if (!userText) return;

    // Show user message
    const userDiv = document.createElement("div");
    userDiv.className = "userMsg";
    userDiv.textContent = userText;
    chatBox.appendChild(userDiv);

    // Find and show answer
    const answerText = findAnswer(userText);
    const botDiv = document.createElement("div");
    botDiv.className = "botMsg";
    chatBox.appendChild(botDiv);
    typeAnswer(answerText, botDiv);

    inputBox.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
});

// Enter key sends message
inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") submitBtn.click();
});


