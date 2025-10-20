// ========================
// Full Q&A Pairs (250 items)
// ========================
const qaPairs = [
  { q: "what is devbay", a: "DevBay Technologies is a global IT company that builds modern digital solutions, software, and automation systems to empower businesses worldwide." },
  { q: "where is devbay located", a: "DevBay operates globally with key offices in Pakistan, the Middle East, the United Kingdom, and North America." },
  { q: "what services devbay provide", a: "DevBay offers App Development, Software Development, Data Analysis, Cyber Security, Cloud Solutions, SEO, Call Center Services, and Game Development." },
  { q: "Who is the CEO of DevBay?", a: "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation."},
  { q: "What is DevBay mission?", a: "Devbay was founded with a vision to build revolutionary technology applications capable of significantly enhancing efficiency through automation and seamless customer engagement."},
  { q: "What is DevBay vision?", a: "Become a global leader in intelligent automation and enterprise technology services."},
  { q: "What is DevBay contact email?", a: "info@devbay.ai"},
  { q: "What is DevBay phone number?", a: "+92 300 1234567"},
  { q: "Does DevBay work with startups?", a: "Yes, with flexible pricing and rapid MVP development."},

  // --- Services ---
  { q: "What services does DevBay offer?", a: "DevBay offers a complete range of IT and AI-driven services, including Web, App, and Software Development, Cloud Solutions, Data Analytics, and Cybersecurity. The company also provides ready-made IT systems such as CRM, ERP, LMS, HMS, SMS, and RMS, empowering businesses with smart, scalable, and high-performance digital solutions."},
  { q: "What is Web Development?", a: "At DevBay, we empower businesses with intelligent and beautifully designed web solutions. Our focus is on seamless design, smooth performance, and creating a lasting impact for every client. Because we believe your success starts with a strong, smart, and scalable digital presence."},
  { q: "What is App Development?", a: "Your app is more than just software — it’s your brand in the palm of your user’s hand. At DevBay, we create mobile applications that blend innovation with impact, ensuring smooth performance, elegant design, and real-world functionality. Whether you need a startup MVP or an enterprise-grade app, we deliver mobile solutions that scale with your business."},
  { q: "What is Software Development?", a: "Every business deserves software that works for them — not against them. At DevBay, we craft intelligent, user-friendly, and secure software solutions that drive productivity and growth. Whether it’s ERP, CRM, or a complete digital transformation, we deliver technology built to adapt, perform, and evolve with your business."},
  { q: "What is Data Analytics?", a: "Every number tells a story — and at DevBay, we help you understand it. Our team specializes in collecting, analyzing, and visualizing complex data to reveal patterns that drive success. Whether it’s optimizing performance, forecasting demand, or improving customer experience, our analytics solutions give you the clarity to act with confidence."},
  { q: "What is Cloud Solutions?", a: "The future of business is in the cloud — and DevBay makes that future seamless. We provide tailored cloud solutions that enable you to store, scale, and access data effortlessly while maintaining top-tier security and performance. Whether you need hybrid, private, or public cloud services, we ensure your organization stays agile, connected, and ready for growth."},
  { q: "What is Cyber Security?", a: "At DevBay, we protect what matters most — your data, your systems, and your reputation. Our comprehensive cybersecurity solutions safeguard your digital assets from evolving threats through advanced threat detection, network security, and data protection strategies. We don’t just defend; we build resilience — ensuring your business operates with confidence in a secure digital environment."},
  { q: "Does DevBay build AI chatbots?", a: "Yes, intelligent chatbots using NLP and RAG systems."},
  { q: "Does DevBay provide SEO?", a: "Yes, to improve online visibility and traffic."},

  // --- Technology & Process ---
  { q: "What technologies does DevBay use?", a: "Python, React, Node.js, Django, Laravel, Flutter, TensorFlow, AWS, Azure."},
  { q: "Does DevBay provide AI development?", a: "Yes, custom AI systems for chatbots, analytics, computer vision, and automation."},
  { q: "Does DevBay provide cloud deployment?", a: "Yes, deploy apps to AWS, Azure, or Google Cloud for scalability."},
  { q: "Does DevBay build custom chatbots?", a: "Yes, using NLP and RAG-based systems."},
  { q: "How long does a project take?", a: "2 weeks for MVPs to 6 months for enterprise systems."},
  { q: "How does DevBay ensure quality?", a: "Agile, QA testing, sprints, feedback, automation tools."},
  { q: "Does DevBay offer maintenance?", a: "Yes, continuous post-launch support and updates."},
  { q: "Does DevBay offer training?", a: "Yes, training sessions for clients on deployed systems."},
  { q: "How can I request a quote?", a: "Contact info@devbay.ai or use the website form."},
  { q: "What is DevBay pricing model?", a: "Hourly, fixed-cost, and dedicated resource models."},
  { q: "Does DevBay sign NDA?", a: "Yes, to protect client data and ideas."},

  // --- Projects ---
  { q: "What is Malfex?", a: "PROJECT ORIGIN: DUBAI, UAE - Malfex is a groundbreaking forex trading platform with zero trading fees and a user-friendly interface."},
  { q: "What is CSD?", a: "PROJECT ORIGIN: ISLAMABAD/RAWALPINDI, PAKISTAN - CSD is a large retail store implementing e-commerce and retail management systems."},
  { q: "What is Dialboxx?", a: "PROJECT ORIGIN: KARACHI, PAKISTAN - Dialboxx is a localized Shopify-like platform for Pakistani entrepreneurs."},
  { q: "What is Craftsconnect?", a: "PROJECT ORIGIN: TORONTO, CANADA - Craftsconnect connects users with home service providers easily."},
  { q: "What is Mr Daze?", a: "PROJECT ORIGIN: RIYADH, SAUDI ARABIA - On-demand delivery app for perishable and fragile goods."},
  { q: "What is Kryptoconnect?", a: "PROJECT ORIGIN: BOSTON, USA - Kryptoconnect streamlines cryptocurrency portfolio management and P2P trading."},

  // --- Ready-Made Solutions ---
  { q: "Tell me about DevBay ready-made solutions?", a: "DevBay’s Ready-Made Solutions are fully developed IT systems for CRM, ERP, LMS, HMS, SMS, RMS, etc."},
  { q: "What is DevBay CRM?", a: "DevBay CRM is an all-in-one customer relationship management solution with automation and analytics."},
  { q: "Does DevBay CRM track customer history?", a: "Yes, all activities are logged and viewable by authorized users."},
  { q: "What is DevBay ERP?", a: "DevBay ERP enables smarter decision-making and productivity across business levels."},
  { q: "What is DevBay LMS?", a: "DevBay LMS is a cloud-based learning management system for courses, progress tracking, and live classes."},
  { q: "What is DevBay HMS?", a: "DevBay HMS digitizes hospital operations including patient management, billing, insurance, and doctor scheduling."},
  { q: "What is DevBay SMS?", a: "DevBay SMS is a school management system for attendance, grades, parent portals, and fee collection."},
  { q: "What is DevBay PMS?", a: "DevBay PMS helps property owners manage properties, tenants, invoices, and automation."},
  { q: "What is DevBay RMS?", a: "DevBay RMS simplifies restaurant operations, orders, billing, POS, online orders, and analytics."},
  { q:  "Tell me about DevBay ready-made solutions?", a: "DevBay’s Ready-Made Solutions are intelligent, fully developed IT systems tailored for instant deployment across industries. From CRM, ERP, and LMS to Hospital, School, and Restaurant Management Systems, each solution is built for efficiency, scalability, and seamless performance. Designed to save time and optimize operations, DevBay’s solutions empower businesses to go digital — faster and smarter."},
  { q:  "What is DevBay CRM?", a: "DevBay CRM is an intelligent, all-in-one customer relationship management solution designed to streamline your business operations and strengthen customer connections. Built with automation, analytics, and AI-driven insights at its core, our CRM helps you manage leads, track sales, monitor performance, and enhance customer satisfaction — all from a single, intuitive dashboard."},
  { q:  "What modules are in DevBay CRM?", a: "Lead Management, Contact Management, Deals, Tasks, Email Marketing, Reporting."},
  { q:  "Does DevBay CRM support WhatsApp or email?", a: "Yes, integrates with WhatsApp API, Gmail, Outlook."},
  { q:  "Can DevBay CRM track customer history?", a: "Yes, all activities are logged and viewable by authorized users."},
  { q:  "What is DevBay ERP?", a: "With real-time analytics, seamless integrations, and user-friendly dashboards, DevBay ERP enables smarter decision-making and improved productivity across every level of your business. Whether you’re a growing company or a large enterprise, our customizable ERP adapts to your workflow, helping you reduce costs, eliminate redundancy, and drive sustainable growth."},
  { q:  "Does DevBay ERP include analytics?", a: "Yes, advanced dashboards for business performance."},
  { q:  "Can DevBay ERP be integrated with CRM?", a: "Yes, CRM and ERP work together for unified workflows."},
  { q:  "Is DevBay ERP multi-branch compatible?", a: "Yes, supports multiple locations."},
  { q:  "What is DevBay LMS?", a: "DevBay LMS is an advanced, cloud-powered learning management system designed to transform the way organizations, institutes, and enterprises deliver education and training. Built with flexibility, scalability, and engagement in mind, it empowers administrators to manage courses, track learner progress, and deliver interactive learning experiences anytime, anywhere."},
  { q:  "Does DevBay LMS support live classes?", a: "Yes, integrates Zoom, Google Meet, Teams."},
  { q:  "Can DevBay LMS auto-grade quizzes?", a: "Yes, instant feedback on quizzes/assignments."},
  { q:  "Does DevBay LMS issue certificates?", a: "Yes, digital certificates generated automatically."},
  { q:  "What is DevBay Hospital Management System?", a: "DevBay HMS is a comprehensive healthcare management solution designed to digitize, streamline, and enhance hospital operations. From patient registration and appointment scheduling to billing, pharmacy, laboratory, and electronic health records — our HMS connects every department through one intelligent, centralized platform - Patient management, billing, insurance, doctor scheduling, HIPAA-compliant."},
  { q:  "Does DevBay HMS handle billing and insurance?", a: "Yes, includes billing, insurance claims, and payments."},
  { q:  "Can DevBay HMS manage doctor schedules?", a: "Yes, doctors can manage appointments and shifts."},
  { q:  "Is DevBay HMS HIPAA compliant?", a: "Yes."},
  { q:  "What is DevBay School Management System?", a: "DevBay SMS is a smart and fully integrated platform designed to simplify and automate every aspect of school administration. From student enrollment, attendance, and examinations to teacher management, parent communication, and fee collection — our system connects all stakeholders through one powerful digital solution. - Manage admissions, attendance, grades, parent portal, fee collection, teacher analytics."},
  { q:  "Does DevBay SMS support parent portals?", a: "Yes, parents can view attendance, grades, announcements."},
  { q:  "Does DevBay SMS include fee management?", a: "Yes, automated fee collection and reporting."},
  { q:  "Can DevBay SMS manage teacher performance?", a: "Yes, performance analytics available."},
  { q:  "What is DevBay Property Management System?", a: "Built for property owners, real estate agencies, and facility managers, DevBay PMS enhances transparency, reduces manual effort, and improves operational efficiency. With smart dashboards, automated reminders, and real-time insights, managing multiple properties becomes effortless and organized. At DevBay, we deliver intelligent property management systems that help you save time, maximize returns, and grow with confidence."},
  { q:  "Can DevBay PMS handle rent invoices?", a: "Yes, auto-generates invoices and receipts."},
  { q:  "Does DevBay PMS support tenant portals?", a: "Yes, tenants can view rent history and submit requests."},
  { q:  "Is DevBay PMS cloud-based?", a: "Yes, accessible from anywhere."},
  { q:  "What is DevBay Restaurant Management System?", a: "DevBay RMS is a modern, all-in-one solution built to simplify and automate restaurant operations. From order management, billing, and table reservations to inventory tracking, kitchen coordination, and staff scheduling — our system connects every part of your restaurant under one intelligent platform. - menu, kitchen operations, online orders, sales analytics."},
  { q:  "Does DevBay RMS support POS?", a: "Yes, for dine-in, delivery, takeaway."},
  { q:  "Can DevBay RMS manage online orders?", a: "Yes, integrates with delivery apps and websites."},
  { q:  "Does DevBay RMS include analytics?", a: "Yes, dashboards available for owners."},
  { q:  "Are ready-made solutions customizable?", a: "Yes, branding, modules, business rules can be tailored."},
  { q:  "Do ready-made systems include AI?", a; "Yes, dashboards, chatbots, predictive reports."},
  { q:  "How long does deployment take?", a: "3–10 business days depending on customization."},   

  // ... (Add remaining 200+ Q&A items in the same format)
];

// ========================
// Helper Functions
// ========================
function normalize(text) {
    return text.toLowerCase().replace(/[^\w\s]/gi, "").trim();
}

function fuzzyScore(input, target) {
    input = normalize(input);
    target = normalize(target);

    if (target.includes(input)) return 1;
    const inputTokens = input.split(" ");
    const targetTokens = target.split(" ");
    let matchCount = 0;
    inputTokens.forEach(t => { if (targetTokens.includes(t)) matchCount++; });
    return matchCount / inputTokens.length;
}

// Dynamic polite fallback responses
function getFallbackResponse() {
    const fallbacks = [
        "I'm sorry, I don't have information about that yet.",
        "Could you rephrase your question? I’ll try to understand better.",
        "That’s an interesting question! Let me connect you with our team for more details.",
        "Hmm… I don’t have that answer right now, but you can contact us at info@devbay.ai.",
        "Sorry, I didn’t quite get that — please ask something related to DevBay or its services."
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

function findAnswer(query) {
    let bestMatch = { score: 0, answer: getFallbackResponse() };
    qaPairs.forEach(pair => {
        const score = fuzzyScore(query, pair.q);
        if (score > bestMatch.score) bestMatch = { score, answer: pair.a };
    });

    // if the best score is too low, fallback
    if (bestMatch.score < 0.4) {
        bestMatch.answer = getFallbackResponse();
    }

    return bestMatch.answer;
}

// ========================
// Typewriter + smooth scroll
// ========================
function typeAnswer(text, element) {
    element.innerHTML = "";
    let i = 0;
    const interval = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;

        // Always scroll down as new text appears
        chatBox.scrollTop = chatBox.scrollHeight;

        if (i >= text.length) clearInterval(interval);
    }, 25);
}

// ========================
// DOM Elements
// ========================
const inputBox = document.getElementById("userInput");
const submitBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chat-body");
const chatbotBtn = document.getElementById("chatbot-btn");
const chatbotContainer = document.getElementById("chatbot-container");
const closeBtn = document.getElementById("close-chat");

// ========================
// Chat Popup Toggle
// ========================
chatbotBtn.addEventListener("click", () => {
    chatbotContainer.style.display = "flex";
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom on open

    // Clear previous messages (optional)
    chatBox.innerHTML = "";

    // Show welcome message only inside chatbot
    const welcomeDiv = document.createElement("div");
    welcomeDiv.className = "botMsg";
    typeAnswer(
        "💡 Innovation starts with a conversation. Let’s build something extraordinary together — welcome to Devbay!",
        welcomeDiv
    );
    chatBox.appendChild(welcomeDiv);
});

closeBtn.addEventListener("click", () => { chatbotContainer.style.display = "none"; });

// ========================
// Send Message
// ========================
submitBtn.addEventListener("click", () => {
    const userText = inputBox.value.trim();
    if (!userText) return;

    // User message
    const userDiv = document.createElement("div");
    userDiv.className = "userMsg";
    userDiv.textContent = userText;
    chatBox.appendChild(userDiv);

    // Bot response
    const answerText = findAnswer(userText);
    const botDiv = document.createElement("div");
    botDiv.className = "botMsg";
    chatBox.appendChild(botDiv);

    typeAnswer(answerText, botDiv);

    // Scroll smoothly to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    inputBox.value = "";
    inputBox.focus();
});

inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") submitBtn.click();
});
