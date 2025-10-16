const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// ------------------- DevBay Knowledge Base -------------------
const responses = {
  "what is devbay": "DevBay Technologies is a global IT company that builds modern digital solutions, software, and automation systems to empower businesses worldwide.",
  "where is devbay located": "DevBay operates globally with key offices in Pakistan, the Middle East, the United Kingdom, and North America.",
  "what services devbay provide": "DevBay offers App Development, Software Development, Data Analysis, Cyber Security, Cloud Solutions, SEO, Call Center Services, and Game Development.",
  "who is the ceo of devbay": "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation.",
  "what is devbay mission": "DevBay was founded with a vision to build revolutionary technology applications capable of significantly enhancing efficiency through automation and seamless customer engagement.",
  "what is devbay vision": "Become a global leader in intelligent automation and enterprise technology services.",
  "what is devbay contact email": "info@devbay.ai",
  "what is devbay phone number": "+92 300 1234567",
  "does devbay work with startups": "Yes, with flexible pricing and rapid MVP development.",
  "what services does devbay offer": "DevBay offers a complete range of IT and AI-driven services, including Web, App, and Software Development, Cloud Solutions, Data Analytics, and Cybersecurity. The company also provides ready-made IT systems such as CRM, ERP, LMS, HMS, SMS, and RMS.",
  "what is web development": "At DevBay, we empower businesses with intelligent and beautifully designed web solutions that focus on seamless performance and lasting impact.",
  "what is app development": "At DevBay, we create mobile apps that blend innovation with impact, ensuring smooth performance, elegant design, and real-world functionality.",
  "what is software development": "At DevBay, we craft intelligent, user-friendly, and secure software solutions that drive productivity and growth.",
  "what is data analytics": "DevBay helps you uncover insights from your data — revealing patterns that drive success and clarity.",
  "what is cloud solutions": "DevBay provides tailored cloud services to store, scale, and access data effortlessly with top-tier security and performance.",
  "what is cyber security": "DevBay protects your business with advanced cybersecurity, ensuring safety, resilience, and confidence online.",
  "does devbay build ai chatbots": "Yes, DevBay develops intelligent chatbots using NLP and RAG systems.",
  "does devbay provide seo": "Yes, to improve online visibility and traffic.",
  "what technologies does devbay use": "Python, React, Node.js, Django, Laravel, Flutter, TensorFlow, AWS, Azure.",
  "does devbay provide ai development": "Yes, custom AI systems for chatbots, analytics, computer vision, and automation.",
  "does devbay provide cloud deployment": "Yes, deploy apps to AWS, Azure, or Google Cloud for scalability.",
  "does devbay build custom chatbots": "Yes, using NLP and RAG-based systems.",
  "how long does a project take": "Typically 2 weeks for MVPs to 6 months for enterprise systems.",
  "how does devbay ensure quality": "DevBay follows agile practices, QA testing, and automation for top-notch results.",
  "does devbay offer maintenance": "Yes, continuous post-launch support and updates.",
  "does devbay offer training": "Yes, training sessions for clients on deployed systems.",
  "how can i request a quote": "Contact info@devbay.ai or use the form on our website.",
  "what is devbay pricing model": "Hourly, fixed-cost, and dedicated resource models.",
  "does devbay sign nda": "Yes, we sign NDAs to protect your data and ideas.",
  "what is malfex": "PROJECT ORIGIN: DUBAI, UAE — Malfex is a zero-fee forex trading platform empowering traders with transparency and affordability.",
  "what is csd": "PROJECT ORIGIN: ISLAMABAD/RAWALPINDI, PAKISTAN — CSD has digitized its retail operations with an advanced E-Commerce and management system.",
  "what is dialboxx": "PROJECT ORIGIN: KARACHI, PAKISTAN — Dialboxx is a localized Shopify-like platform for Pakistani entrepreneurs to launch online stores effortlessly.",
  "what is craftsconnect": "PROJECT ORIGIN: TORONTO, CANADA — Craftsconnect connects users with trusted home service professionals instantly.",
  "what is mr daze": "PROJECT ORIGIN: RIYADH, SAUDI ARABIA — Mr Daze is an on-demand delivery app offering fast, transparent, and reliable logistics.",
  "what is kryptoconnect": "PROJECT ORIGIN: BOSTON, USA — Kryptoconnect streamlines crypto investments with portfolio management and P2P trading.",
  "tell me about devbay ready-made solutions": "DevBay’s Ready-Made Solutions are intelligent IT systems for CRM, ERP, LMS, HMS, SMS, and RMS — ready for deployment and customization.",
  "what is devbay crm": "DevBay CRM is an all-in-one customer management solution with automation, analytics, and AI insights.",
  "what is devbay erp": "DevBay ERP offers real-time analytics and integrations for smarter decisions and efficient business management.",
  "what is devbay lms": "DevBay LMS is a powerful e-learning system for organizations and schools with live classes, auto-grading, and certificates.",
  "what is devbay hospital management system": "DevBay HMS digitizes hospitals with modules for patients, billing, labs, pharmacy, and doctor scheduling.",
  "what is devbay school management system": "DevBay SMS simplifies education management with portals for students, parents, teachers, and administration.",
  "what is devbay property management system": "DevBay PMS helps property owners manage rentals, tenants, and payments efficiently with cloud access.",
  "what is devbay restaurant management system": "DevBay RMS automates restaurant operations — from orders and billing to analytics and POS integration.",
  "are ready-made solutions customizable": "Yes, DevBay systems are fully customizable — branding, modules, and workflows can be tailored.",
  "do ready-made systems include ai": "Yes, with AI dashboards, chatbots, and predictive analytics.",
  "how long does deployment take": "Deployment takes 3–10 business days depending on customization."
};

// ------------------- Functions -------------------
function addMessage(content, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  chatBox.appendChild(msg);

  if (sender === "bot") {
    typeText(msg, content);
  } else {
    msg.textContent = content;
  }

  chatBox.scrollTop = chatBox.scrollHeight;
}

function typeText(element, text, i = 0) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    setTimeout(() => typeText(element, text, i + 1), 25); // typing speed
  }
}

// ------------------- Logic -------------------
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  userInput.value = "";

  const lowerText = text.toLowerCase();
  let reply = "Thanks for your message! Our AI assistant will get back with more details soon.";

  for (const key in responses) {
    if (lowerText.includes(key)) {
      reply = responses[key];
      break;
    }
  }

  setTimeout(() => addMessage(reply, "bot"), 600);
}



