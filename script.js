// ========== DEVBay Chatbot ==========

// ---- QA DATA ----
const qaPairs = [
  ["what is devbay", "DevBay is a full-service IT and AI solutions company dedicated to transforming businesses through innovation, technology, and intelligent systems. With expertise in Web, App, and Software Development, as well as Cloud Solutions, Data Analytics, and Cybersecurity, we deliver end-to-end digital transformation for clients across the globe."],
  ["where is devbay located", "Headquarters in Karachi & Islamabad; serving clients in UAE, USA, Canada, and Saudi Arabia."],
  ["who is the ceo of devbay", "DevBay’s CEO is Azam Khan, supported by COO Arham Hashmi."],
  ["what is devbay mission", "DevBay’s mission is to empower global businesses through AI-driven automation and smart digital transformation."],
  ["what is devbay vision", "DevBay’s vision is to become a global leader in intelligent automation and enterprise technology services."],
  ["what is devbay contact email", "You can contact DevBay via email at info@devbay.ai."],
  ["what is devbay phone number", "DevBay’s official phone number is +92 300 1234567."],
  ["what services does devbay offer", "DevBay offers Web, App, and Software Development, Cloud Solutions, Data Analytics, Cybersecurity, and AI-powered systems. We also provide ready-made software like CRM, ERP, LMS, HMS, SMS, and RMS."]
];

// ---- ELEMENTS ----
const chatBox = document.getElementById("chat-box");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");

sendBtn.addEventListener("click", handleUserMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleUserMessage();
});

// ---- HANDLE MESSAGE ----
function handleUserMessage() {
  const msg = userInput.value.trim();
  if (!msg) return;

  appendMessage("user", msg);
  userInput.value = "";
  setTimeout(() => {
    const reply = getBestMatchReply(msg);
    showBotMessageAnimated(reply);
  }, 500);
}

// ---- APPEND MESSAGE ----
function appendMessage(sender, text) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  return div;
}

// ---- TYPING ANIMATION ----
async function showBotMessageAnimated(fullText) {
  const botDiv = appendMessage("bot", "");
  const words = fullText.split(" ");
  for (let i = 0; i < words.length; i++) {
    botDiv.textContent += (i === 0 ? "" : " ") + words[i];
    chatBox.scrollTop = chatBox.scrollHeight;
    await new Promise(r => setTimeout(r, 70)); // typing speed
  }
}

// ---- FIND BEST MATCH ----
function getBestMatchReply(userMsg) {
  const cleaned = userMsg.toLowerCase().replace(/[^\w\s]/gi, "");
  let bestScore = 0;
  let bestAnswer = "Thanks for your message! Our AI assistant will get back with more details soon.";

  for (const [q, a] of qaPairs) {
    const score = stringSimilarity(cleaned, q);
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = a;
    }
  }
  return bestScore > 0.4 ? bestAnswer : "Thanks for your message! Our AI assistant will get back with more details soon.";
}

// ---- FUZZY SIMILARITY ----
function stringSimilarity(a, b) {
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  const longerLe


