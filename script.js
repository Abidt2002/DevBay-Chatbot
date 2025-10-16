// ------------------ DevBay Q&A Dataset ------------------
const qaPairs = [
  { q: "what is devbay", a: "DevBay Technologies is a global IT company that builds modern digital solutions, software, and automation systems to empower businesses worldwide." },
  { q: "where is devbay located", a: "DevBay operates globally with key offices in Pakistan, the Middle East, the United Kingdom, and North America." },
  { q: "what services devbay provide", a: "DevBay offers App Development, Software Development, Data Analysis, Cyber Security, Cloud Solutions, SEO, Call Center Services, and Game Development." },
  { q: "who is the ceo of devbay", a: "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation." },
  { q: "what is devbay mission", a: "Devbay was founded with a vision to build revolutionary technology applications capable of significantly enhancing efficiency through automation and seamless customer engagement." },
  { q: "what is devbay vision", a: "Become a global leader in intelligent automation and enterprise technology services." },
  { q: "what is devbay contact email", a: "info@devbay.ai" },
  { q: "what is devbay phone number", a: "+92 300 1234567" },
  { q: "does devbay work with startups", a: "Yes, with flexible pricing and rapid MVP development." },
  { q: "what services does devbay offer", a: "DevBay offers a complete range of IT and AI-driven services, including Web, App, and Software Development, Cloud Solutions, Data Analytics, and Cybersecurity. The company also provides ready-made IT systems such as CRM, ERP, LMS, HMS, SMS, and RMS, empowering businesses with smart, scalable, and high-performance digital solutions." },
  { q: "what is web development", a: "At DevBay, we empower businesses with intelligent and beautifully designed web solutions. Our focus is on seamless design, smooth performance, and creating a lasting impact for every client." },
  { q: "what is app development", a: "Your app is more than just software — it’s your brand in the palm of your user’s hand. At DevBay, we create mobile applications that blend innovation with impact, ensuring smooth performance, elegant design, and real-world functionality." },
  { q: "what is software development", a: "Every business deserves software that works for them — not against them. At DevBay, we craft intelligent, user-friendly, and secure software solutions that drive productivity and growth." },
  { q: "what is data analytics", a: "Every number tells a story — and at DevBay, we help you understand it. Our team specializes in collecting, analyzing, and visualizing complex data to reveal patterns that drive success." },
  { q: "what is cloud solutions", a: "The future of business is in the cloud — and DevBay makes that future seamless. We provide tailored cloud solutions that enable you to store, scale, and access data effortlessly while maintaining top-tier security and performance." },
  { q: "what is cyber security", a: "At DevBay, we protect what matters most — your data, your systems, and your reputation. Our comprehensive cybersecurity solutions safeguard your digital assets from evolving threats through advanced threat detection, network security, and data protection strategies." },
  { q: "does devbay build ai chatbots", a: "Yes, intelligent chatbots using NLP and RAG systems." },
  { q: "does devbay provide seo", a: "Yes, to improve online visibility and traffic." },
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
  { q: "does devbay sign nda", a: "Yes, to protect client data and ideas." }
  // Add remaining projects and ready-made solutions here...
];

// ------------------ Helper: Normalize and Fuzzy Match ------------------
function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '').trim();
}

function findAnswer(query) {
  const qNorm = normalize(query);
  console.log("User Query Normalized:", qNorm);

  // Exact or partial match
  for (let pair of qaPairs) {
    const pairNorm = normalize(pair.q);
    if (pairNorm.includes(qNorm) || qNorm.includes(pairNorm)) {
      console.log("Matched Question:", pair.q);
      return pair.a;
    }
  }
  return "Sorry, I don't have an answer for that yet.";
}

// ------------------ UI Logic ------------------
const userInput = document.getElementById("userInput");
const chatContainer = document.getElementById("chatContainer");
const sendBtn = document.getElementById("sendBtn");

function addMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = sender;
  msgDiv.innerText = text;
  chatContainer.appendChild(msgDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function botResponse(text) {
  let i = 0;
  const interval = setInterval(() => {
    if (i <= text.length) {
      if (i === 0) addMessage("bot", "");
      chatContainer.lastChild.innerText = text.substring(0, i);
      i++;
    } else clearInterval(interval);
  }, 20);
}

sendBtn.addEventListener("click", () => {
  const query = userInput.value;
  if (!query) return;
  addMessage("user", query);
  const answer = findAnswer(query);
  botResponse(answer);
  userInput.value = "";
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
