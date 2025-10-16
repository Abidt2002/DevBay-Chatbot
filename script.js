// -------------------------
// DevBay Chatbot Script
// -------------------------

// Full QA dataset
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

  // Services
  { q: "what services does devbay offer", a: "DevBay offers a complete range of IT and AI-driven services, including Web, App, and Software Development, Cloud Solutions, Data Analytics, and Cybersecurity. The company also provides ready-made IT systems such as CRM, ERP, LMS, HMS, SMS, and RMS, empowering businesses with smart, scalable, and high-performance digital solutions." },
  { q: "what is web development", a: "At DevBay, we empower businesses with intelligent and beautifully designed web solutions. Our focus is on seamless design, smooth performance, and creating a lasting impact for every client." },
  { q: "what is app development", a: "Your app is more than just software — it’s your brand in the palm of your user’s hand. At DevBay, we create mobile applications that blend innovation with impact, ensuring smooth performance, elegant design, and real-world functionality." },
  { q: "what is software development", a: "Every business deserves software that works for them — not against them. At DevBay, we craft intelligent, user-friendly, and secure software solutions that drive productivity and growth." },
  { q: "what is data analytics", a: "Every number tells a story — and at DevBay, we help you understand it. Our team specializes in collecting, analyzing, and visualizing complex data to reveal patterns that drive success." },
  { q: "what is cloud solutions", a: "The future of business is in the cloud — and DevBay makes that future seamless. We provide tailored cloud solutions that enable you to store, scale, and access data effortlessly while maintaining top-tier security and performance." },
  { q: "what is cyber security", a: "At DevBay, we protect what matters most — your data, your systems, and your reputation. Our comprehensive cybersecurity solutions safeguard your digital assets from evolving threats through advanced threat detection, network security, and data protection strategies." },
  { q: "does devbay build ai chatbots", a: "Yes, intelligent chatbots using NLP and RAG systems." },
  { q: "does devbay provide seo", a: "Yes, to improve online visibility and traffic." },

  // Technology & Process
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

  // Projects
  { q: "what is malfex", a: "PROJECT ORIGIN: DUBAI, UAE - Malfex is a groundbreaking forex trading platform with zero trading fees." },
  { q: "what is csd", a: "PROJECT ORIGIN: ISLAMABAD/RAWALPINDI, PAKISTAN - CSD is the second largest retail store in Pakistan and has launched an E-Commerce store and a robust retail management system." },
  { q: "what is dialboxx", a: "PROJECT ORIGIN: KARACHI, PAKISTAN - Dialboxx is a localized Shopify version for Pakistani businesses." },
  { q: "what is craftsconnect", a: "PROJECT ORIGIN: TORONTO, CANADA - Craftsconnect is a home services app connecting users with trusted service providers." },
  { q: "what is mr daze", a: "PROJECT ORIGIN: RIYADH, SAUDI ARABIA - Mr Daze is an on-demand delivery app with real-time tracking." },
  { q: "what is kryptoconnect", a: "PROJECT ORIGIN: BOSTON, USA - Kryptoconnect is a cryptocurrency portfolio and P2P trading application." },

  // Ready-made solutions
  { q: "tell me about devbay ready-made solutions", a: "DevBay’s Ready-Made Solutions are intelligent IT systems tailored for instant deployment — CRM, ERP, LMS, HMS, SMS, and RMS." },
  { q: "what is devbay crm", a: "DevBay CRM is an all-in-one customer relationship management solution with automation and analytics." },
  { q: "what modules are in devbay crm", a: "Lead Management, Contact Management, Deals, Tasks, Email Marketing, Reporting." },
  { q: "does devbay crm support whatsapp or email", a: "Yes, integrates with WhatsApp API, Gmail, and Outlook." },
  { q: "can devbay crm track customer history", a: "Yes, all activities are logged and viewable by authorized users." },
  { q: "what is devbay erp", a: "DevBay ERP provides real-time analytics, seamless integrations, and customizable workflows for businesses." },
  { q: "does devbay erp include analytics", a: "Yes, advanced dashboards for performance." },
  { q: "can devbay erp be integrated with crm", a: "Yes, CRM and ERP can be integrated for unified workflows." },
  { q: "is devbay erp multi-branch compatible", a: "Yes, supports multiple locations." },
  { q: "what is devbay lms", a: "DevBay LMS is a cloud-powered learning management system supporting courses, tracking, live classes, and certifications." },
  { q: "does devbay lms support live classes", a: "Yes, integrates Zoom, Google Meet, Teams." },
  { q: "can devbay lms auto-grade quizzes", a: "Yes, supports auto-grading and instant feedback." },
  { q: "does devbay lms issue certificates", a: "Yes, digital certificates generated automatically." },
  { q: "what is devbay hospital management system", a: "DevBay HMS digitizes hospital operations — registration, appointments, billing, pharmacy, lab, and EHR." },
  { q: "does devbay hms handle billing and insurance", a: "Yes, includes billing and insurance claims processing." },
  { q: "can devbay hms manage doctor schedules", a: "Yes, doctors can manage appointments and shifts." },
  { q: "is devbay hms hipaa compliant", a: "Yes." },
  { q: "what is devbay school management system", a: "DevBay SMS automates school operations — enrollment, attendance, exams, teacher management, parent communication, and fee collection." },
  { q: "does devbay sms support parent portals", a: "Yes, parents can view attendance, grades, and announcements." },
  { q: "does devbay sms include fee management", a: "Yes, automated fee collection and reporting." },
  { q: "can devbay sms manage teacher performance", a: "Yes, performance analytics available." },
  { q: "what is devbay property management system", a: "DevBay PMS handles rent invoices, tenant portals, maintenance requests, and reporting." },
  { q: "can devbay pms handle rent invoices", a: "Yes, auto-generates invoices and receipts." },
  { q: "does devbay pms support tenant portals", a: "Yes, tenants can view rent history and submit requests." },
  { q: "is devbay pms cloud-based", a: "Yes, accessible anywhere via cloud." },
  { q: "what is devbay restaurant management system", a: "DevBay RMS automates restaurant operations — orders, billing, table reservations, inventory, kitchen coordination, and staff scheduling." },
  { q: "does devbay rms support pos", a: "Yes, supports POS for dine-in, delivery, takeaway." },
  { q: "can devbay rms manage online orders", a: "Yes, integrates with delivery apps and websites." },
  { q: "does devbay rms include analytics", a: "Yes, dashboards and reports available." },
  { q: "are ready-made solutions customizable", a: "Yes, branding, modules, and business rules can be tailored." },
  { q: "do ready-made systems include ai", a: "Yes, dashboards, chatbots, predictive reports included." },
  { q: "how long does deployment take", a: "3–10 business days depending on customization." }
];

// -------------------------
// Elements
// -------------------------
const userInput = document.getElementById("userInput");
const chatContainer = document.getElementById("chatContainer");
const sendBtn = document.getElement

