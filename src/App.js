// Enhanced JavaScript-only version of QuikKart Landing Page (Highly Interactive + Scroll Effects + Premium Layout)

const body = document.body;
body.style.margin = "0";
body.style.padding = "0";
body.style.fontFamily = "Segoe UI, sans-serif";
body.style.background = "#e6f4ec";
body.style.color = "#1b4332";
body.style.overflowX = "hidden";

const style = document.createElement("style");
style.innerHTML = `
  * {
    box-sizing: border-box;
  }
  html, body {
    scroll-behavior: smooth;
  }
  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .bounce:hover {
    animation: bounce 0.6s ease infinite;
  }
  .fade-in {
    opacity: 0;
    transition: opacity 1s ease;
  }
  .fade-in.visible {
    opacity: 1;
  }
`;
document.head.appendChild(style);

// Logo Container
const logoContainer = document.createElement("div");
logoContainer.style.display = "flex";
logoContainer.style.alignItems = "center";
logoContainer.style.justifyContent = "center";
logoContainer.style.margin = "2rem auto";
logoContainer.style.gap = "1rem";

// Logo Image
const logoImg = document.createElement("img");
logoImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/QR_code_icon.svg/1024px-QR_code_icon.svg.png";
logoImg.style.width = "80px";
logoImg.style.height = "80px";
logoImg.style.borderRadius = "12px";
logoImg.alt = "QuikKart Logo";

// Brand Text (QuiK green, Cart blue)
const brandText = document.createElement("h1");
brandText.innerHTML = `<span style="color:#38a169;font-weight:700">QuiK</span><span style="color:#3182ce;font-weight:700">Cart</span>`;

logoContainer.appendChild(logoImg);
logoContainer.appendChild(brandText);

// Prepend to body (or you can use a ref to a div if you want it inside your React root)
document.body.prepend(logoContainer);

// Sticky Navbar
const nav = document.createElement("nav");
nav.style.position = "sticky";
nav.style.top = "0";
nav.style.backgroundColor = "#40916c";
nav.style.color = "white";
nav.style.padding = "1rem 2rem";
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.zIndex = "999";
nav.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";

// Brand name in navbar (QuiK green, Cart blue)
const logo = document.createElement("div");
logo.innerHTML = `<span style="color:#38a169;font-weight:700">QuiK</span><span style="color:#3182ce;font-weight:700">Cart</span>`;
logo.style.fontSize = "1.5rem";
logo.style.fontWeight = "bold";

const navLink = document.createElement("button");
navLink.innerText = "Try Demo";
navLink.style.backgroundColor = "#95d5b2";
navLink.style.color = "#1b4332";
navLink.style.padding = "0.5rem 1rem";
navLink.style.border = "none";
navLink.style.borderRadius = "8px";
navLink.style.cursor = "pointer";
navLink.onclick = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

nav.appendChild(logo);
nav.appendChild(navLink);
body.appendChild(nav);

// Hero Section
const hero = document.createElement("section");
hero.className = "reveal";
hero.style.padding = "6rem 1rem";
hero.style.background = "linear-gradient(to bottom right, #2d6a4f, #52b788)";
hero.style.color = "white";
hero.style.textAlign = "center";
hero.style.display = "flex";
hero.style.flexDirection = "column";
hero.style.alignItems = "center";

const heroTitle = document.createElement("h1");
heroTitle.innerText = "Welcome to QuikKart";
heroTitle.style.fontSize = "3rem";
heroTitle.style.marginBottom = "1rem";

const heroSub = document.createElement("h3");
heroSub.innerText = "Scan. Pay. Walk Away.";
heroSub.style.margin = "0.5rem 0 2rem 0";
heroSub.style.fontWeight = "normal";

const cta = document.createElement("button");
cta.innerText = "🚀 Try Demo";
cta.className = "bounce";
cta.style.backgroundColor = "white";
cta.style.color = "#1b4332";
cta.style.padding = "1rem 2.2rem";
cta.style.fontSize = "1.1rem";
cta.style.border = "none";
cta.style.borderRadius = "12px";
cta.style.cursor = "pointer";
cta.onclick = () => alert("Demo coming soon!");

hero.appendChild(heroTitle);
hero.appendChild(heroSub);
hero.appendChild(cta);
body.appendChild(hero);

// Intro Section
const intro = document.createElement("section");
intro.className = "fade-in";
intro.style.padding = "4rem 2rem";
intro.style.textAlign = "center";
intro.style.background = "#d8f3dc";

const introTitle = document.createElement("h2");
introTitle.innerText = "Revolutionize Grocery Shopping";
introTitle.style.fontSize = "2.5rem";
introTitle.style.fontWeight = "bold";
introTitle.style.color = "#2d6a4f";
introTitle.style.marginBottom = "1rem";

const introDesc = document.createElement("p");
introDesc.innerText = "QuikKart lets you shop smarter: scan items, pay with UPI, and skip the queue — all from your phone. Built for Gen Z, simple for everyone.";
introDesc.style.fontSize = "1.1rem";
introDesc.style.maxWidth = "800px";
introDesc.style.margin = "0 auto";

intro.appendChild(introTitle);
intro.appendChild(introDesc);
body.appendChild(intro);

// Features Column
const features = [
  { title: "📱 Scan & Go", desc: "Pick up, scan with your phone, and skip billing lines entirely." },
  { title: "🛒 Real-Time Cart", desc: "Track your purchases and total in real-time." },
  { title: "👥 Crowd Indicator", desc: "See store crowd level before you enter." },
  { title: "🤖 AI-Based Deals", desc: "Smart discounts & offers based on your cart and behavior." },
  { title: "🔒 Secure Checkout", desc: "Pay via UPI or card in-app. OTP protected pickup." }
];

const featureWrap = document.createElement("section");
featureWrap.className = "reveal";
featureWrap.style.padding = "4rem 2rem";
featureWrap.style.backgroundColor = "#cde9d8";
featureWrap.style.textAlign = "center";

features.forEach(({ title, desc }) => {
  const card = document.createElement("div");
  card.style.padding = "2rem";
  card.style.margin = "1.5rem auto";
  card.style.borderRadius = "16px";
  card.style.background = "white";
  card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.06)";
  card.style.maxWidth = "600px";
  card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  card.onmouseenter = () => {
    card.style.transform = "translateY(-6px) scale(1.02)";
    card.style.boxShadow = "0 12px 24px rgba(0,0,0,0.12)";
  };
  card.onmouseleave = () => {
    card.style.transform = "translateY(0) scale(1)";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.06)";
  };

  const h3 = document.createElement("h3");
  h3.innerText = title;
  h3.style.color = "#1b4332";
  h3.style.marginBottom = "0.5rem";
  h3.style.fontSize = "1.6rem";
  h3.style.fontWeight = "bold";

  const p = document.createElement("p");
  p.innerText = desc;
  p.style.color = "#4c4c4c";
  p.style.fontSize = "1rem";

  card.appendChild(h3);
  card.appendChild(p);
  featureWrap.appendChild(card);
});

body.appendChild(featureWrap);

// Shopkeeper Benefits Section (improved card layout)
const shopkeeperSection = document.createElement("section");
shopkeeperSection.className = "reveal";
shopkeeperSection.style.padding = "4rem 2rem";
shopkeeperSection.style.backgroundColor = "#b7e4c7";
shopkeeperSection.style.textAlign = "center";

const shopkeeperTitle = document.createElement("h2");
shopkeeperTitle.innerText = "🧾 Benefits for Store Owners";
shopkeeperTitle.style.fontSize = "2rem";
shopkeeperTitle.style.color = "#1b4332";
shopkeeperTitle.style.marginBottom = "1rem";

const benefitsList = [
  "📈 Increased checkout speed = more customers served",
  "📊 Access to customer behavior data & analytics",
  "💰 Boost in sales with AI-powered suggestions",
  "📱 Digital payments reduce cash handling & errors",
  "🛒 Inventory movement insights from real-time carts",
  "👀 Visibility on foot traffic through crowd indicators",
  "🧑‍💼 Less manpower needed at billing counters"
];

const benefitBox = document.createElement("div");
benefitBox.style.margin = "2rem auto";
benefitBox.style.maxWidth = "800px";
benefitBox.style.display = "flex";
benefitBox.style.flexWrap = "wrap";
benefitBox.style.justifyContent = "center";
benefitBox.style.gap = "1rem";

benefitsList.forEach((item) => {
  const pointCard = document.createElement("div");
  pointCard.innerText = item;
  pointCard.style.fontSize = "1rem";
  pointCard.style.padding = "1rem";
  pointCard.style.background = "white";
  pointCard.style.borderRadius = "12px";
  pointCard.style.boxShadow = "0 6px 16px rgba(0,0,0,0.08)";
  pointCard.style.flex = "1 1 280px";
  pointCard.style.textAlign = "left";

  benefitBox.appendChild(pointCard);
});

shopkeeperSection.appendChild(shopkeeperTitle);
shopkeeperSection.appendChild(benefitBox);
body.appendChild(shopkeeperSection);

// Scroll Animation Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal, .fade-in").forEach((el) => observer.observe(el));

// Initial visibility for hero section
document.querySelector(".reveal").classList.add("visible");