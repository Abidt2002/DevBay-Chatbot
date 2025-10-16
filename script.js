// ---- DATASET ----
const qaPairs = [
  ["what is devbay", "DevBay is a full-service IT and AI solutions company dedicated to transforming businesses through innovation, technology, and intelligent systems. With expertise in Web, App, and Software Development, as well as Cloud Solutions, Data Analytics, and Cybersecurity, we deliver end-to-end digital transformation for clients across the globe."],
  ["where is devbay located", "Headquarters in Karachi & Islamabad; serving clients in UAE, USA, Canada, Saudi Arabia."],
  ["who is the ceo of devbay", "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation."],
  ["what is devbay mission", "DevBay was founded with a vision to build revolutionary technology applications capable of significantly enhancing efficiency through automation and seamless customer engagement."],
  ["what is devbay vision", "Become a global leader in intelligent automation and enterprise technology services."],
  ["what is devbay contact email", "info@devbay.ai"],
  ["what is devbay phone number", "+92 300 1234567"],
  ["does devbay work with startups", "Yes, with flexible pricing and rapid MVP development."],
  ["what services does devbay offer", "DevBay offers a complete range of IT and AI-driven services, including Web, App, and Software Development, Cloud Solutions, Data Analytics, and Cybersecurity. The company also provides ready-made IT systems such as CRM, ERP, LMS, HMS, SMS, and RMS, empowering businesses with smart, scalable, and high-performance digital solutions."],
  ["what is web development", "At DevBay, we empower businesses with intelligent and beautifully designed web solutions. Our focus is on seamless design, smooth performance, and creating a lasting impact for every client. Because we believe your success starts with a strong, smart, and scalable digital presence."],
  ["what is app development", "Your app is more than just software — it’s your brand in the palm of your user’s hand. At DevBay, we create mobile applications that blend innovation with impact, ensuring smooth performance, elegant design, and real-world functionality."],
  ["what is software development", "Every business deserves software that works for them — not against them. At DevBay, we craft intelligent, user-friendly, and secure software solutions that drive productivity and growth."],
  ["what is data analytics", "Every number tells a story — and at DevBay, we help you understand it. Our team specializes in collecting, analyzing, and visualizing complex data to reveal patterns that drive success."],
  ["what is cloud solutions", "The future of business is in the cloud — and DevBay makes that future seamless. We provide tailored cloud solutions that enable you to store, scale, and access data effortlessly while maintaining top-tier security and performance."],
  ["what is cyber security", "At DevBay, we protect what matters most — your data, your systems, and your reputation. Our comprehensive cybersecurity solutions safeguard your digital assets from evolving threats."],
  ["does devbay build ai chatbots", "Yes, intelligent chatbots using NLP and RAG systems."],
  ["does devbay provide seo", "Yes, to improve online visibility and traffic."],
  ["tell me about devbay ready-made solutions", "DevBay’s Ready-Made Solutions are intelligent, fully developed IT systems tailored for instant deployment across industries. From CRM, ERP, and LMS to Hospital, School, and Restaurant Management Systems, each solution is built for efficiency, scalability, and seamless performance."],
  ["what is devbay crm", "DevBay CRM is an intelligent, all-in-one customer relationship management solution designed to streamline your business operations and strengthen customer connections."],
  ["what is devbay restaurant management system", "DevBay RMS is a modern, all-in-one solution built to simplify and automate restaurant operations. From order management, billing, and table reservations to inventory tracking, kitchen coordination, and staff scheduling — our system connects every part of your restaurant under one intelligent platform."]
];

// ---- ELEMENTS ----
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", handleUserMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleUserMessage();
});

function handleUserMessage() {
  const msg = userInput.value.trim();
  if (!msg) return;
  appendMessage("user", msg);
  userInput.value = "";

  const reply = getBestMatchReply(msg);
  showBotMessageAnimated(reply);
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

// ---- BOT ANIMATED REPLY ----
async function showBotMessageAnimated(fullText) {
  const botDiv = appendMessage("bot", "");
  const words = fullText.split(" ");
  for (let i = 0; i < words.length; i++) {
    botDiv.textContent += (i === 0 ? "" : " ") + words[i];
    chatBox.scrollTop = chatBox.scrollHeight;
    await new Promise(r => setTimeout(r, 100)); // typing speed
  }
}

// ---- SMART MATCHING (FUZZY) ----
function getBestMatchReply(userMsg) {
  const cleaned = userMsg.toLowerCase().trim();

  let bestScore = 0;
  let bestAnswer = "Thanks for your message! Our AI assistant will get back with more details soon.";

  for (const [q, a] of qaPairs) {
    const score = stringSimilarity(cleaned, q);
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = a;
    }
  }

  // Only accept if reasonably similar (>0.4)
  return bestScore > 0.4 ? bestAnswer : "Thanks for your message! Our AI assistant will get back with more details soon.";
}

// ---- BASIC STRING SIMILARITY ----
function stringSimilarity(a, b) {
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0)
        costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

