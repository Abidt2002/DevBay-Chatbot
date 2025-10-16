// ========================
// Dataset (Q&A pairs)
// ========================
const qaPairs = [
// ------------------- Company Info -------------------
  { q: "what is devbay", a: "DevBay Technologies is a global IT company that builds modern digital solutions, software, and automation systems to empower businesses worldwide." },
  { q: "where is devbay located", a: "DevBay operates globally with key offices in Pakistan, the Middle East, the United Kingdom, and North America." },
  { q: "what services devbay provide", a: "DevBay offers App Development, Software Development, Data Analysis, Cyber Security, Cloud Solutions, SEO, Call Center Services, and Game Development." },
  { q: "who is the ceo of devbay", a: "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation." },
  { q: "what is devbay mission", a: "DevBay was founded with a vision to build revolutionary technology applications capable of significantly enhancing efficiency through automation and seamless customer engagement." },
  { q: "what is devbay vision", a: "Become a global leader in intelligent automation and enterprise technology services." },
  { q: "what is devbay contact email", a: "info@devbay.ai" },
  { q: "what is devbay phone number", a: "+92 300 1234567" },
  { q: "does devbay work with startups", a: "Yes, with flexible pricing and rapid MVP development." },

  // ------------------- Services -------------------
  { q: "what services does devbay offer", a: "DevBay offers a complete range of IT and AI-driven services, including Web, App, and Software Development, Cloud Solutions, Data Analytics, and Cybersecurity. The company also provides ready-made IT systems such as CRM, ERP, LMS, HMS, SMS, and RMS, empowering businesses with smart, scalable, and high-performance digital solutions." },
  { q: "what is web development", a: "At DevBay, we empower businesses with intelligent and beautifully designed web solutions. Our focus is on seamless design, smooth performance, and creating a lasting impact for every client." },
  { q: "what is app development", a: "Your app is more than just software — it’s your brand in the palm of your user’s hand. At DevBay, we create mobile applications that blend innovation with impact, ensuring smooth performance, elegant design, and real-world functionality." },
  { q: "what is software development", a: "Every business deserves software that works for them — not against them. At DevBay, we craft intelligent, user-friendly, and secure software solutions that drive productivity and growth." },
  { q: "what is data analytics", a: "Every number tells a story — and at DevBay, we help you understand it. Our team specializes in collecting, analyzing, and visualizing complex data to reveal patterns that drive success." },
  { q: "what is cloud solutions", a: "The future of business is in the cloud — and DevBay makes that future seamless. We provide tailored cloud solutions that enable you to store, scale, and access data effortlessly while maintaining top-tier security and performance." },
  { q: "what is cyber security", a: "At DevBay, we protect what matters most — your data, your systems, and your reputation. Our comprehensive cybersecurity solutions safeguard your digital assets from evolving threats." },
  { q: "does devbay build ai chatbots", a: "Yes, intelligent chatbots using NLP and RAG systems." },
  { q: "does devbay provide seo", a: "Yes, to improve online visibility and traffic." },

  // ------------------- Technology & Process -------------------
  { q: "what technologies does devbay use", a: "Python, React, Node.js, Django, Laravel, Flutter, TensorFlow, AWS, Azure." },
  { q: "does devbay provide ai development", a: "Yes, custom AI systems for chatbots, analytics, computer vision, and automation." },
  { q: "does devbay provide cloud deployment", a: "Yes, deploy apps to AWS, Azure, or Google Cloud for scalability." },
  { q: "does devbay build custom chatbots", a: "Yes, using NLP and RAG-based systems." },
  { q: "how long does a project take", a: "2 weeks for MVPs to 6 months for enterprise systems." },
  { q: "how does devbay ensure quality", a: "Agile, QA testing, sprints, feedback, automation tools." },
  { q: "does devbay offer maintenance", a: "Yes, continuous post-launch support and updates." },
  { q: "does devbay offer training", a: "Yes, training sessions for clients on deployed systems." },
  { q: "how can i request a quote", a: "Contact info@devbay.ai or use the website form." },
  { q: "what is devbay pricing model", a: "Hourly, fixed-cost, and dedicated resource models." },
  { q: "does devbay sign nda", a: "Yes, to protect client data and ideas." },

  // ------------------- Projects -------------------
  { q: "what is malfex", a: "PROJECT ORIGIN: DUBAI, UAE - Malfex is a groundbreaking forex trading platform offering zero trading fees and a user-friendly interface." },
  { q: "what is csd", a: "PROJECT ORIGIN: ISLAMABAD/RAWALPINDI, PAKISTAN - CSD is the second largest retail store in Pakistan with an advanced E-Commerce and retail management system." },
  { q: "what is dialboxx", a: "PROJECT ORIGIN: KARACHI, PAKISTAN - Dialboxx is a localized Shopify platform for Pakistani businesses, providing e-commerce solutions." },
  { q: "what is craftsconnect", a: "PROJECT ORIGIN: TORONTO, CANADA - Craftsconnect is a home services app connecting users to skilled service providers." },
  { q: "what is mr daze", a: "PROJECT ORIGIN: RIYADH, SAUDI ARABIA - Mr Daze is an on-demand delivery app with real-time tracking." },
  { q: "what is kryptoconnect", a: "PROJECT ORIGIN: BOSTON, USA - Kryptoconnect is a cryptocurrency portfolio and P2P trading application." },

  // ------------------- Ready-Made Solutions -------------------
  { q: "tell me about devbay ready-made solutions", a: "DevBay’s Ready-Made Solutions include CRM, ERP, LMS, HMS, SMS, and RMS — fully developed IT systems for instant deployment." },
  { q: "what is devbay crm", a: "DevBay CRM is an all-in-one customer relationship management solution with automation and analytics." },
  { q: "what modules are in devbay crm", a: "Lead Management, Contact Management, Deals, Tasks, Email Marketing, Reporting." },
  { q: "does devbay crm support whatsapp or email", a: "Yes, integrates with WhatsApp API, Gmail, and Outlook." },
  { q: "can devbay crm track customer history", a: "Yes, all activities are logged and viewable by authorized users." },
  { q: "what is devbay erp", a: "DevBay ERP enables smarter decision-making with dashboards, real-time analytics, and integration with CRM." },
  { q: "does devbay erp include analytics", a: "Yes, advanced dashboards for business performance." },
  { q: "can devbay erp be integrated with crm", a: "Yes, CRM and ERP work together for unified workflows." },
  { q: "is devbay erp multi-branch compatible", a: "Yes, supports multiple locations." }   
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
