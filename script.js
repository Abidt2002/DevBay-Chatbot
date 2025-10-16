const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", handleUserMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleUserMessage();
});

// ======================== DevBay Dataset ========================
const qaPairs = [
  ["What is DevBay?", "DevBay is a full-service IT and AI solutions company dedicated to transforming businesses through innovation, technology, and intelligent systems. With expertise in Web, App, and Software Development, as well as Cloud Solutions, Data Analytics, and Cybersecurity, we deliver end-to-end digital transformation for clients across the globe."],
  ["Where is DevBay located?", "Headquarters in Karachi & Islamabad; serving clients in UAE, USA, Canada, Saudi Arabia."],
  ["Who is the CEO of DevBay?", "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation."],
  ["What is DevBay mission?", "Devbay was founded with a vision to build revolutionary technology applications capable of significantly enhancing efficiency through automation and seamless customer engagement."],
  ["What is DevBay vision?", "Become a global leader in intelligent automation and enterprise technology services."],
  ["What is DevBay contact email?", "info@devbay.ai"],
  ["What is DevBay phone number?", "+92 300 1234567"],
  ["Does DevBay work with startups?", "Yes, with flexible pricing and rapid MVP development."],

  ["What services does DevBay offer?", "DevBay offers a complete range of IT and AI-driven services, including Web, App, and Software Development, Cloud Solutions, Data Analytics, and Cybersecurity. The company also provides ready-made IT systems such as CRM, ERP, LMS, HMS, SMS, and RMS, empowering businesses with smart, scalable, and high-performance digital solutions."],
  ["What is Web Development?", "At DevBay, we empower businesses with intelligent and beautifully designed web solutions. Our focus is on seamless design, smooth performance, and creating a lasting impact for every client."],
  ["What is App Development?", "At DevBay, we create mobile applications that blend innovation with impact, ensuring smooth performance, elegant design, and real-world functionality."],
  ["What is Software Development?", "At DevBay, we craft intelligent, user-friendly, and secure software solutions that drive productivity and growth."],
  ["What is Data Analytics?", "Our team specializes in collecting, analyzing, and visualizing complex data to reveal patterns that drive success."],
  ["What is Cloud Solutions?", "DevBay provides tailored cloud solutions for secure, scalable, and connected data management on AWS, Azure, or Google Cloud."],
  ["What is Cyber Security?", "We protect your data, systems, and reputation with comprehensive cybersecurity measures including threat detection and data protection."],
  ["Does DevBay build AI chatbots?", "Yes, intelligent chatbots using NLP and RAG systems."],
  ["Does DevBay provide SEO?", "Yes, to improve online visibility and traffic."],

  ["What technologies does DevBay use?", "Python, React, Node.js, Django, Laravel, Flutter, TensorFlow, AWS, Azure."],
  ["Does DevBay provide AI development?", "Yes, custom AI systems for chatbots, analytics, computer vision, and automation."],
  ["Does DevBay provide cloud deployment?", "Yes, deploy apps to AWS, Azure, or Google Cloud for scalability."],
  ["Does DevBay build custom chatbots?", "Yes, using NLP and RAG-based systems."],
  ["How long does a project take?", "2 weeks for MVPs to 6 months for enterprise systems."],
  ["How does DevBay ensure quality?", "Agile, QA testing, sprints, feedback, automation tools."],
  ["Does DevBay offer maintenance?", "Yes, continuous post-launch support and updates."],
  ["Does DevBay offer training?", "Yes, training sessions for clients on deployed systems."],
  ["How can I request a quote?", "Contact info@devbay.ai or use the website form."],
  ["What is DevBay pricing model?", "Hourly, fixed-cost, and dedicated resource models."],
  ["Does DevBay sign NDA?", "Yes, to protect client data and ideas."],

  ["What is Malfex?", "PROJECT ORIGIN: DUBAI, UAE - Malfex is a groundbreaking forex trading platform that has revolutionized the industry by offering zero trading fees."],
  ["What is CSD?", "PROJECT ORIGIN: ISLAMABAD/RAWALPINDI, PAKISTAN - CSD launched an E-Commerce store and a robust retail management system for seamless operations."],
  ["What is Dialboxx?", "PROJECT ORIGIN: KARACHI, PAKISTAN - Dialboxx is a localized version of Shopify for Pakistan — an all-in-one e-commerce platform."],
  ["What is Craftsconnect?", "PROJECT ORIGIN: TORONTO, CANADA - Craftsconnect connects users with trusted service providers for home projects in Toronto."],
  ["What is Mr Daze?", "PROJECT ORIGIN: RIYADH, SAUDI ARABIA - MrDaze is an on-demand delivery app ensuring fast and reliable deliveries with live tracking."],
  ["What is Kryptoconnect?", "PROJECT ORIGIN: BOSTON, USA - Kryptoconnect is a crypto portfolio and P2P trading management application."],

  ["Tell me about DevBay ready-made solutions?", "DevBay’s Ready-Made Solutions are fully developed IT systems ready for instant deployment — including CRM, ERP, LMS, HMS, SMS, RMS, and PMS."],
  ["What is DevBay CRM?", "DevBay CRM is an intelligent system for managing leads, sales, and customer relationships with automation and analytics."],
  ["What modules are in DevBay CRM?", "Lead Management, Contact Management, Deals, Tasks, Email Marketing, Reporting."],
  ["Does DevBay CRM support WhatsApp or email?", "Yes, integrates with WhatsApp API, Gmail, and Outlook."],
  ["Can DevBay CRM track customer history?", "Yes, all activities are logged and viewable by authorized users."],
  ["What is DevBay ERP?", "DevBay ERP provides analytics, automation, and scalability for enterprise workflows with real-time dashboards."],
  ["Does DevBay ERP include analytics?", "Yes, advanced dashboards for business performance."],
  ["Can DevBay ERP be integrated with CRM?", "Yes, for unified workflows."],
  ["Is DevBay ERP multi-branch compatible?", "Yes, supports multiple locations."],
  ["What is DevBay LMS?", "DevBay LMS is an AI-powered learning platform supporting courses, tracking, live classes, and certificates."],
  ["Does DevBay LMS support live classes?", "Yes, integrates Zoom, Google Meet, Teams."],
  ["Can DevBay LMS auto-grade quizzes?", "Yes, instant feedback on quizzes/assignments."],
  ["Does DevBay LMS issue certificates?", "Yes, digital certificates generated automatically."],
  ["What is DevBay Hospital Management System?", "DevBay HMS digitizes hospital operations — patient registration, billing, lab, pharmacy, scheduling, and EHR."],
  ["Does DevBay HMS handle billing and insurance?", "Yes, includes billing, insurance claims, and payments."],
  ["Can DevBay HMS manage doctor schedules?", "Yes, doctors can manage appointments and shifts."],
  ["Is DevBay HMS HIPAA compliant?", "Yes."],
  ["What is DevBay School Management System?", "DevBay SMS automates school operations — attendance, grades, communication, and fee management."],
  ["Does DevBay SMS support parent portals?", "Yes, parents can view attendance, grades, announcements."],
  ["Does DevBay SMS include fee management?", "Yes, automated fee collection and reporting."],
  ["Can DevBay SMS manage teacher performance?", "Yes, performance analytics available."],
  ["What is DevBay Property Management System?", "DevBay PMS helps manage multiple properties with smart dashboards, invoices, and tenant portals."],
  ["Can DevBay PMS handle rent invoices?", "Yes, auto-generates invoices and receipts."],
  ["Does DevBay PMS support tenant portals?", "Yes, tenants can view rent history and submit requests."],
  ["Is DevBay PMS cloud-based?", "Yes, accessible from anywhere."],
  ["What is DevBay Restaurant Management System?", "DevBay RMS automates restaurant operations — orders, billing, inventory, kitchen, and staff management."],
  ["Does DevBay RMS support POS?", "Yes, for dine-in, delivery, takeaway."],
  ["Can DevBay RMS manage online orders?", "Yes, integrates with delivery apps and websites."],
  ["Does DevBay RMS include analytics?", "Yes, dashboards available for owners."],
  ["Are ready-made solutions customizable?", "Yes, branding, modules, and business rules can be tailored."],
  ["Do ready-made systems include AI?", "Yes, dashboards, chatbots, and predictive reports."],
  ["How long does deployment take?", "3–10 business days depending on customization."]
];

// ======================== Functions ========================

function handleUserMessage() {
  const message = userInput.value.trim();
  if (!message) return;
  appendMessage("user", message);
  userInput.value = "";
  const botReply = getBotReply(message);
  showBotMessageAnimated(botReply);
}

function appendMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
  return messageDiv;
}

// Typing animation (word-by-word)
async function showBotMessageAnimated(fullText) {
  const botDiv = appendMessage("bot", "");
  const words = fullText.split(" ");
  for (let i = 0; i < words.length; i++) {
    botDiv.textContent += (i === 0 ? "" : " ") + words[i];
    chatBox.scrollTop = chatBox.scrollHeight;
    await delay(100);
  }
}

function getBotReply(userMsg) {
  userMsg = userMsg.toLowerCase();
  for (const [q, a] of qaPairs) {
    if (userMsg.includes(q.toLowerCase().replace("?", ""))) {
      return a;
    }
  }
  return "I’m not sure about that yet 🤖. Try asking something related to DevBay services, projects, or products.";
}

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
