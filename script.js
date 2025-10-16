// ========================
// Dataset (Q&A pairs)
// ========================
const qaPairs = [
  { q: "what is devbay", a: "DevBay Technologies is a global IT company that builds modern digital solutions, software, and automation systems to empower businesses worldwide." },
  { q: "where is devbay located", a: "DevBay operates globally with key offices in Pakistan, the Middle East, the United Kingdom, and North America." },
  { q: "what services devbay provide", a: "DevBay offers App Development, Software Development, Data Analysis, Cyber Security, Cloud Solutions, SEO, Call Center Services, and Game Development." },
  { q: "Who is the CEO of DevBay?", a: "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation." },
  { q: "What is DevBay mission?", a: "Devbay was founded with a vision to build revolutionary technology applications capable of significantly enhancing efficiency through automation and seamless customer engagement." },
  { q: "What is DevBay vision?", a: "Become a global leader in intelligent automation and enterprise technology services." },
  { q: "What is DevBay contact email?", a: "info@devbay.ai" },
  { q: "What is DevBay phone number?", a: "+92 300 1234567" },
  { q: "Does DevBay work with startups?", a: "Yes, with flexible pricing and rapid MVP development." },
  // ... continue with all 250 Q&A pairs here ...
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
// DOM Interaction
// ========================
const inputBox = document.getElementById("userInput");
const submitBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");

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

inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") submitBtn.click();
});

