// Toggle chatbot visibility
function toggleChat() {
    const container = document.getElementById("chatbot-container");
    container.style.display = container.style.display === "flex" ? "none" : "flex";
}

// Full QA dataset
const data = [
    // ------------------- Company Overview -------------------
    ["What is DevBay?", "DevBay is a full-service IT and AI solutions company providing Web, App, and Software development, ERP, CRM, and cloud-based solutions to global clients."],
    ["Where is DevBay located?", "Headquarters in Karachi & Islamabad; serving clients in UAE, USA, Canada, Saudi Arabia."],
    ["Who is the CEO of DevBay?", "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation."],
    ["What is DevBay mission?", "Devbay was founded with a vision to build revolutionary technology applications capable of significantly enhancing efficiency through automation and seamless customer engagement."],
    ["What is DevBay vision?", "Become a global leader in intelligent automation and enterprise technology services."],
    ["What is DevBay contact email?", "info@devbay.ai"],
    ["What is DevBay phone number?", "+92 300 1234567"],
    ["Does DevBay work with startups?", "Yes, with flexible pricing and rapid MVP development."],

    // ------------------- Services -------------------
    ["What services does DevBay offer?", "Web Development, App Development, Software Development, Data Analytics, Cyber Security, Cloud Solutions, SEO, Resource Augmentation, Game Development, Call Center Services."],
    ["What is Web Development?", "Creating eye-catching and responsive websites. HTML, CSS, MySQL, PHP, .NET, Angular, Java, JS, Node.js, Ruby, SQLite, Python."],
    ["What is App Development?", "Mobile apps for Android/iOS. Flutter, React Native, Xamarin."],
    ["What is Software Development?", "Custom enterprise software, ERP, CRM, LMS. Python, Java, C#, HTML, CSS, MySQL, JavaScript, PHP."],
    ["What is Data Analytics?", "Processing and analyzing data to extract insights, patterns, trends, and actionable info. BI solutions, Real-time Analytics, Data Cleansing, Strategy."],
    ["What is Cloud Solutions?", "AWS, Azure, Google Cloud deployment for scalable applications."],
    ["What is Cyber Security?", "Firewall Management, Data Loss Prevention, Security Auditing, Threat Intelligence, Vulnerability Assessment, Intrusion Detection."],
    ["Does DevBay build AI chatbots?", "Yes, intelligent chatbots using NLP and RAG systems."],
    ["Does DevBay provide SEO?", "Yes, to improve online visibility and traffic."],

    // ------------------- Technology & Process -------------------
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

    // ------------------- Projects -------------------
    ["What is Dialboxx?", "AI E-commerce platform in Karachi. Localized Shopify for Pakistan. Setup, manage, and grow online stores with secure payment gateways and local delivery."],
    ["What is Malfex?", "Forex trading platform from Dubai with zero trading fees. User-friendly interface, supports multiple currency pairs."],
    ["What is CSD?", "Online retail store in Islamabad/Rawalpindi with e-commerce and retail management system."],
    ["What is Craftsconnect?", "Home services app in Toronto connecting users to trusted service providers."],
    ["What is Mr Daze?", "On-demand delivery app in Riyadh for perishable and fragile goods with real-time tracking."],
    ["What is Kryptoconnect?", "Crypto management app in Boston. Portfolio tracking, P2P trading, real-time insights."],

    // ------------------- Ready-Made Solutions -------------------
    ["What are DevBay’s ready-made solutions?", "CRM, ERP, LMS, Hospital, School, Property, Restaurant, Hair Salon, Inventory Management Systems."],
    ["What is DevBay CRM?", "Customer Relationship Management: leads, contacts, deals, tasks, campaigns, reporting, WhatsApp/email integration."],
    ["What modules are in DevBay CRM?", "Lead Management, Contact Management, Deals, Tasks, Email Marketing, Reporting."],
    ["Does DevBay CRM support WhatsApp or email?", "Yes, integrates with WhatsApp API, Gmail, Outlook."],
    ["Can DevBay CRM track customer history?", "Yes, all activities are logged and viewable by authorized users."],
    ["What is DevBay ERP?", "Enterprise Resource Planning: HR, Finance, Inventory, Sales, Operations, dashboards, multi-branch support."],
    ["Does DevBay ERP include analytics?", "Yes, advanced dashboards for business performance."],
    ["Can DevBay ERP be integrated with CRM?", "Yes, CRM and ERP work together for unified workflows."],
    ["Is DevBay ERP multi-branch compatible?", "Yes, supports multiple locations."],
    ["What is DevBay LMS?", "Learning Management System: courses, exams, auto-grading, live classes, certificates."],
    ["Does DevBay LMS support live classes?", "Yes, integrates Zoom, Google Meet, Teams."],
    ["Can DevBay LMS auto-grade quizzes?", "Yes, instant feedback on quizzes/assignments."],
    ["Does DevBay LMS issue certificates?", "Yes, digital certificates generated automatically."],
    ["What is DevBay Hospital Management System?", "Patient management, billing, insurance, doctor scheduling, HIPAA-compliant."],
    ["Does DevBay HMS handle billing and insurance?", "Yes, includes billing, insurance claims, and payments."],
    ["Can DevBay HMS manage doctor schedules?", "Yes, doctors can manage appointments and shifts."],
    ["Is DevBay HMS HIPAA compliant?", "Yes."],
    ["What is DevBay School Management System?", "Manage admissions, attendance, grades, parent portal, fee collection, teacher analytics."],
    ["Does DevBay SMS support parent portals?", "Yes, parents can view attendance, grades, announcements."],
    ["Does DevBay SMS include fee management?", "Yes, automated fee collection and reporting."],
    ["Can DevBay SMS manage teacher performance?", "Yes, performance analytics available."],
    ["What is DevBay Property Management System?", "Tenants, leases, rent, maintenance, tenant portals, cloud-based."],
    ["Can DevBay PMS handle rent invoices?", "Yes, auto-generates invoices and receipts."],
    ["Does DevBay PMS support tenant portals?", "Yes, tenants can view rent history and submit requests."],
    ["Is DevBay PMS cloud-based?", "Yes, accessible from anywhere."],
    ["What is DevBay Restaurant Management System?", "POS, menu, kitchen operations, online orders, sales analytics."],
    ["Does DevBay RMS support POS?", "Yes, for dine-in, delivery, takeaway."],
    ["Can DevBay RMS manage online orders?", "Yes, integrates with delivery apps and websites."],
    ["Does DevBay RMS include analytics?", "Yes, dashboards available for owners."],
    ["Are ready-made solutions customizable?", "Yes, branding, modules, business rules can be tailored."],
    ["Do ready-made systems include AI?", "Yes, dashboards, chatbots, predictive reports."],
    ["How long does deployment take?", "3–10 business days depending on customization."],
];

// Find best answer (simple fuzzy)
function findAnswer(question) {
    const q = question.toLowerCase();
    for (let [key, val] of data) {
        if (key.toLowerCase() === q || key.toLowerCase().includes(q) || q.includes(key.toLowerCase())) return val;
    }
    for (let [key, val] of data) {
        const words = key.toLowerCase().split(" ");
        if (words.some(w => q.includes(w))) return val;
    }
    return "Sorry, I don't have information on that. Ask about DevBay services, projects, or ready-made solutions.";
}

// Send message
function sendMessage() {
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");
    const userMsg = input.value.trim();
    if (!userMsg) return;

    const userDiv = document.createElement("div");
    userDiv.innerHTML = `<strong>You:</strong> ${userMsg}`;
    messages.appendChild(userDiv);

    const botDiv = document.createElement("div");
    botDiv.innerHTML = `<strong>Bot:</strong> ${findAnswer(userMsg)}`;
    messages.appendChild(botDiv);

    messages.scrollTop = messages.scrollHeight;
    input.value = "";
}
