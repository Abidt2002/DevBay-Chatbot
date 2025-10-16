// Toggle chatbot visibility
function toggleChat() {
    const container = document.getElementById("chatbot-container");
    container.style.display = container.style.display === "flex" ? "none" : "flex";
}

// Full QA dataset
const data = [
    // ------------------- Company Overview -------------------
    ["What is DevBay?", "DevBay is a full-service IT and AI solutions company dedicated to transforming businesses through innovation, technology, and intelligent systems. With expertise in Web, App, and Software Development, as well as Cloud Solutions, Data Analytics, and Cybersecurity, we deliver end-to-end digital transformation for clients across the globe."],
    ["Where is DevBay located?", "Headquarters in Karachi & Islamabad; serving clients in UAE, USA, Canada, Saudi Arabia."],
    ["Who is the CEO of DevBay?", "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation."],
    ["What is DevBay mission?", "Devbay was founded with a vision to build revolutionary technology applications capable of significantly enhancing efficiency through automation and seamless customer engagement."],
    ["What is DevBay vision?", "Become a global leader in intelligent automation and enterprise technology services."],
    ["What is DevBay contact email?", "info@devbay.ai"],
    ["What is DevBay phone number?", "+92 300 1234567"],
    ["Does DevBay work with startups?", "Yes, with flexible pricing and rapid MVP development."],

    // ------------------- Services -------------------
    ["What services does DevBay offer?", "DevBay offers a complete range of IT and AI-driven services, including Web, App, and Software Development, Cloud Solutions, Data Analytics, and Cybersecurity. The company also provides ready-made IT systems such as CRM, ERP, LMS, HMS, SMS, and RMS, empowering businesses with smart, scalable, and high-performance digital solutions."],
    ["What is Web Development?", "At DevBay, we empower businesses with intelligent and beautifully designed web solutions. Our focus is on seamless design, smooth performance, and creating a lasting impact for every client. Because we believe your success starts with a strong, smart, and scalable digital presence."],
    ["What is App Development?", "Your app is more than just software — it’s your brand in the palm of your user’s hand. At DevBay, we create mobile applications that blend innovation with impact, ensuring smooth performance, elegant design, and real-world functionality. Whether you need a startup MVP or an enterprise-grade app, we deliver mobile solutions that scale with your business."],
    ["What is Software Development?", "Every business deserves software that works for them — not against them. At DevBay, we craft intelligent, user-friendly, and secure software solutions that drive productivity and growth. Whether it’s ERP, CRM, or a complete digital transformation, we deliver technology built to adapt, perform, and evolve with your business."],
    ["What is Data Analytics?", "Every number tells a story — and at DevBay, we help you understand it. Our team specializes in collecting, analyzing, and visualizing complex data to reveal patterns that drive success. Whether it’s optimizing performance, forecasting demand, or improving customer experience, our analytics solutions give you the clarity to act with confidence."],
    ["What is Cloud Solutions?", "The future of business is in the cloud — and DevBay makes that future seamless. We provide tailored cloud solutions that enable you to store, scale, and access data effortlessly while maintaining top-tier security and performance. Whether you need hybrid, private, or public cloud services, we ensure your organization stays agile, connected, and ready for growth."],
    ["What is Cyber Security?", "At DevBay, we protect what matters most — your data, your systems, and your reputation. Our comprehensive cybersecurity solutions safeguard your digital assets from evolving threats through advanced threat detection, network security, and data protection strategies. We don’t just defend; we build resilience — ensuring your business operates with confidence in a secure digital environment."],
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
    ["What is Malfex?", "PROJECT ORIGIN: DUBAI, UAE - Malfex is a groundbreaking forex trading platform that has revolutionized the industry by offering its users a unique advantage: zero trading fees. By eliminating trading fees, Malfex empowers traders of all levels to execute transactions without worrying about unnecessary costs eating into their profits. With a user friendly interface, cutting-edge technology, and a vast array of currency pairs to choose from, Malfex has quickly become the go-to platform for forex enthusiasts seeking transparency and affordability in their trading journey. Whether you’re a seasoned trader or a novice just entering the market, Malfex provides an exceptional trading experience that puts its users’ financial success at the forefront."],
    ["What is CSD?", "PROJECT ORIGIN: ISLAMABAD/RAWALPINDI, PAKISTAN - CSD is the second largest retail store in Pakistan, has taken a significant leap forward in optimizing its business processes with the introduction of an innovative E-Commerce store and a robust retail management system. This strategic move aims to enhance the customer experience by providing a seamless online shopping platform while streamlining internal operations. The implementation of this cutting-edge technology reflects CSD’s commitment to staying at the forefront of retail innovation, ensuring that customers can access a wide range of products conveniently, while also bolstering the company’s overall performance and growth."],
    ["What is Dialboxx?", "PROJECT ORIGIN: KARACHI - PAKISTAN, Dialboxx is a highly anticipated localized version of Shopify specifically tailored for the Pakistani market. It serves as an all-in-one e-commerce platform that empowers entrepreneurs and businesses to effortlessly set up, manage, and grow their online stores. Dialboxx offers a seamless and user-friendly experience for anyone who wants to launch their own Online E-Commerce Store. From secure payment gateways to customizable storefronts and localized delivery system, Dialboxx aims to revolutionize the way online businesses operate in Pakistan, enabling them to reach a wider audience and thrive in the digital era."],
    ["What is Craftsconnect?", "PROJECT ORIGIN: TORONTO, CANADA - Craftsconnect is your ultimate solution for seamless home services in Toronto. With a simple tap, the innovative app connects you directly with trusted and skilled service providers, ensuring that your home projects are handled by professionals who understand your needs. Say goodbye to the hassle of finding reliable experts for your household tasks. Craftsconnect brings the power of convenience to your fingertips. Need a plumber, electrician, painter, or any other home service? The application offers an extensive network of experienced professionals ready to cater to your requirements."],
    ["What is Mr Daze?", "PROJECT ORIGIN: RIYADH, SAUDI ARABIA - Navigate the app with simplicity and speed. Just choose what you need, set your delivery location, and watch as MrDaze takes care of the rest. From perishable goods to fragile packages, MrDaze takes pride in ensuring your deliveries arrive in the same condition they left. MrDaze isn’t just about deliveries – it’s about creating a seamless experience. Track your orders in real-time, receive notifications, and communicate directly with your delivery partner, all within the app. This level of transparency keeps you in the loop every step of the way."],
    ["What is Kryptoconnect?", "PROJECT ORIGIN: BOSTON, USA - Kryptoconnect is an innovative and user-centric application designed to streamline and enhance your cryptocurrency investment journey. Seamlessly combining advanced portfolio management features with peer-to-peer (P2P) trading capabilities, Krptoconnect empowers users to navigate the dynamic world of cryptocurrencies with confidence and ease. With Krptoconnect’s comprehensive portfolio management tools, you can effortlessly monitor your crypto holdings, track their performance in real-time, and gain valuable insights through intuitive visualizations."],

    // ------------------- Ready-Made Solutions -------------------
    ["Tell me about DevBay ready-made solutions?", "DevBay’s Ready-Made Solutions are intelligent, fully developed IT systems tailored for instant deployment across industries. From CRM, ERP, and LMS to Hospital, School, and Restaurant Management Systems, each solution is built for efficiency, scalability, and seamless performance. Designed to save time and optimize operations, DevBay’s solutions empower businesses to go digital — faster and smarter."],
    ["What is DevBay CRM?", "DevBay CRM is an intelligent, all-in-one customer relationship management solution designed to streamline your business operations and strengthen customer connections. Built with automation, analytics, and AI-driven insights at its core, our CRM helps you manage leads, track sales, monitor performance, and enhance customer satisfaction — all from a single, intuitive dashboard."],
    ["What modules are in DevBay CRM?", "Lead Management, Contact Management, Deals, Tasks, Email Marketing, Reporting."],
    ["Does DevBay CRM support WhatsApp or email?", "Yes, integrates with WhatsApp API, Gmail, Outlook."],
    ["Can DevBay CRM track customer history?", "Yes, all activities are logged and viewable by authorized users."],
    ["What is DevBay ERP?", "With real-time analytics, seamless integrations, and user-friendly dashboards, DevBay ERP enables smarter decision-making and improved productivity across every level of your business. Whether you’re a growing company or a large enterprise, our customizable ERP adapts to your workflow, helping you reduce costs, eliminate redundancy, and drive sustainable growth."],
    ["Does DevBay ERP include analytics?", "Yes, advanced dashboards for business performance."],
    ["Can DevBay ERP be integrated with CRM?", "Yes, CRM and ERP work together for unified workflows."],
    ["Is DevBay ERP multi-branch compatible?", "Yes, supports multiple locations."],
    ["What is DevBay LMS?", "DevBay LMS is an advanced, cloud-powered learning management system designed to transform the way organizations, institutes, and enterprises deliver education and training. Built with flexibility, scalability, and engagement in mind, it empowers administrators to manage courses, track learner progress, and deliver interactive learning experiences anytime, anywhere."],
    ["Does DevBay LMS support live classes?", "Yes, integrates Zoom, Google Meet, Teams."],
    ["Can DevBay LMS auto-grade quizzes?", "Yes, instant feedback on quizzes/assignments."],
    ["Does DevBay LMS issue certificates?", "Yes, digital certificates generated automatically."],
    ["What is DevBay Hospital Management System?", "DevBay HMS is a comprehensive healthcare management solution designed to digitize, streamline, and enhance hospital operations. From patient registration and appointment scheduling to billing, pharmacy, laboratory, and electronic health records — our HMS connects every department through one intelligent, centralized platform - Patient management, billing, insurance, doctor scheduling, HIPAA-compliant."],
    ["Does DevBay HMS handle billing and insurance?", "Yes, includes billing, insurance claims, and payments."],
    ["Can DevBay HMS manage doctor schedules?", "Yes, doctors can manage appointments and shifts."],
    ["Is DevBay HMS HIPAA compliant?", "Yes."],
    ["What is DevBay School Management System?", "DevBay SMS is a smart and fully integrated platform designed to simplify and automate every aspect of school administration. From student enrollment, attendance, and examinations to teacher management, parent communication, and fee collection — our system connects all stakeholders through one powerful digital solution. - Manage admissions, attendance, grades, parent portal, fee collection, teacher analytics."],
    ["Does DevBay SMS support parent portals?", "Yes, parents can view attendance, grades, announcements."],
    ["Does DevBay SMS include fee management?", "Yes, automated fee collection and reporting."],
    ["Can DevBay SMS manage teacher performance?", "Yes, performance analytics available."],
    ["What is DevBay Property Management System?", "Built for property owners, real estate agencies, and facility managers, DevBay PMS enhances transparency, reduces manual effort, and improves operational efficiency. With smart dashboards, automated reminders, and real-time insights, managing multiple properties becomes effortless and organized. At DevBay, we deliver intelligent property management systems that help you save time, maximize returns, and grow with confidence."],
    ["Can DevBay PMS handle rent invoices?", "Yes, auto-generates invoices and receipts."],
    ["Does DevBay PMS support tenant portals?", "Yes, tenants can view rent history and submit requests."],
    ["Is DevBay PMS cloud-based?", "Yes, accessible from anywhere."],
    ["What is DevBay Restaurant Management System?", "DevBay RMS is a modern, all-in-one solution built to simplify and automate restaurant operations. From order management, billing, and table reservations to inventory tracking, kitchen coordination, and staff scheduling — our system connects every part of your restaurant under one intelligent platform. - menu, kitchen operations, online orders, sales analytics."],
    ["Does DevBay RMS support POS?", "Yes, for dine-in, delivery, takeaway."],
    ["Can DevBay RMS manage online orders?", "Yes, integrates with delivery apps and websites."],
    ["Does DevBay RMS include analytics?", "Yes, dashboards available for owners."],
    ["Are ready-made solutions customizable?", "Yes, branding, modules, business rules can be tailored."],
    ["Do ready-made systems include AI?", "Yes, dashboards, chatbots, predictive reports."],
    ["How long does deployment take?", "3–10 business days depending on customization."],
];
/* script.js
   Default: client-side word-by-word animation.
   Optional: streamingFromServer() shows how to read a streaming response (requires server).
*/

const chatArea = document.getElementById('chatArea');
const form = document.getElementById('inputForm');
const userInput = document.getElementById('userInput');
const modeName = document.getElementById('modeName');

/* Set mode:
   'client'  => use existing full-response string and animate it (works on GH Pages)
   'stream'  => try to stream from a server endpoint (requires backend supporting streaming)
*/
const MODE = 'client'; // change to 'stream' to use streamingFromServer (if you have backend)
modeName.textContent = MODE === 'stream' ? 'streaming from server' : 'client-side animation';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = userInput.value.trim();
  if(!text) return;
  appendMessage(text, 'user');
  userInput.value = '';
  // show bot placeholder
  const botBubble = appendMessage('', 'bot', true);

  if(MODE === 'client'){
    // Option A (recommended for GitHub Pages): get final bot text somehow (from local logic or an API that returns full string)
    // Example: you already have a function getBotFinalResponse(userText) that returns the full final response string.
    // For demo I will use a fake reply generator - replace with your actual reply fetch.
    const finalReply = await demoGetBotFinalResponse(text); // returns full final reply string
    // animate word-by-word into the botBubble
    await animateWords(botBubble, finalReply, {perWordDelay: 120, newLineEverySentence: true});
    botBubble.classList.remove('typing-cursor');
  } else {
    // Option B: streaming from server (only if your server endpoint streams text chunks).
    try {
      await streamingFromServer('/api/stream-chat', text, botBubble);
      botBubble.classList.remove('typing-cursor');
    } catch (err) {
      console.error('Streaming failed', err);
      botBubble.textContent = "Sorry — streaming failed.";
      botBubble.classList.remove('typing-cursor');
    }
  }

  scrollChatToBottom();
});

/* Helper to append a message bubble. If typing is true, show animated cursor. */
function appendMessage(text='', who='bot', typing=false){
  const div = document.createElement('div');
  div.className = `message ${who}` + (typing ? ' typing-cursor' : '');
  div.textContent = text;
  chatArea.appendChild(div);
  scrollChatToBottom();
  return div;
}

/* Scroll helper */
function scrollChatToBottom(){
  chatArea.scrollTop = chatArea.scrollHeight;
}

/* Sleep util */
function sleep(ms){ return new Promise(res => setTimeout(res, ms)); }

/* Animate finalText into container word-by-word.
   options: { perWordDelay: number(ms), newLineEverySentence: bool, perWordCallback(optional) }
*/
async function animateWords(container, finalText, options={}) {
  const perWordDelay = options.perWordDelay ?? 80;
  const newLineEverySentence = options.newLineEverySentence ?? false;

  // split into words but keep punctuation attached
  const words = finalText.split(/\s+/);
  container.textContent = ''; // clear
  container.classList.add('typing-cursor');

  for(let i=0; i<words.length; i++){
    const w = words[i];
    // append word and a space (or newline after sentence if requested)
    if(newLineEverySentence && /[.!?]$/.test(w)){
      // word ends with sentence punctuation -> append word then newline
      container.textContent += w;
      // force a small pause then add newline
      await sleep(perWordDelay + 80);
      container.textContent += '\n\n';
    } else {
      container.textContent += (container.textContent ? ' ' : '') + w;
    }
    scrollChatToBottom();
    await sleep(perWordDelay);
  }
  container.classList.remove('typing-cursor');
}

/* DEMO: returns a generated reply string (replace with your own fetch to a server or local logic) */
async function demoGetBotFinalResponse(userText){
  // small simulated thinking delay
  await sleep(350);
  // this demo reply — replace with an actual API call that returns the whole reply as text
  return `Sure — here's how we did it. First, we set up the chat UI in HTML. Then we added style in CSS to make bubbles. Finally, the script animates the reply word by word so you can watch it appear.`;
}

/* Example: streaming-from-server implementation (requires server streaming).
   The server must stream plain text chunks (e.g., SSE or chunked HTTP). This function tries to read from Response.body.
   Note: DO NOT expose secret keys in client-side code. Put keys on the server.
*/
async function streamingFromServer(url, userText, botBubble){
  botBubble.textContent = '';
  botBubble.classList.add('typing-cursor');

  const res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({message: userText})
  });

  if(!res.ok) throw new Error('Network response not ok: ' + res.status);

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let done = false;
  let accumulated = '';

  while(!done){
    const {value, done: doneReading} = await reader.read();
    done = doneReading;
    if(value){
      const chunk = decoder.decode(value, {stream: true});
      // chunk may be partial; append directly so user sees it as it comes.
      // To make it appear word-by-word while streaming, you can buffer then break into words:
      accumulated += chunk;
      // we'll flush only full words to avoid splitting mid-word
      const parts = accumulated.split(/\s+/);
      // keep last partial word in buffer
      const lastPartial = parts.pop();
      // display all complete words so far
      if(parts.length){
        // append them joined by spaces to the bubble
        const toAdd = (botBubble.textContent ? ' ' : '') + parts.join(' ');
        botBubble.textContent += toAdd;
        scrollChatToBottom();
      }
      accumulated = lastPartial || '';
    }
  }

  // flush what's left
  if(accumulated){
    botBubble.textContent += (botBubble.textContent ? ' ' : '') + accumulated;
  }
}

/* OPTIONAL: If you want character-by-character instead of word-by-word,
   you can implement animateChars(container, text, delay) similarly. */
