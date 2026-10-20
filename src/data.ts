// All portfolio content lives here. The page only loops over it.

export type Project = {
  name: string;
  org?: string;
  period: string;
  summary: string;
  tags: string[];
  metric: { value: string; label: string };
};

export type Job = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const profile = {
  name: "Hamid Lohar",
  title: "Senior Full Stack Engineer",
  location: "Bhuj, Gujarat, India",
  headline: ["Full", "stack.", "AI.", "Automation."],
  intro:
    "I'm a senior engineer from Bhuj, India with 8+ years shipping products for startups and enterprises across the US, Europe and Asia. I build MERN platforms, generative AI systems and automation robots, and I like the problems other people couldn't crack.",
  email: "hmdlohar@gmail.com",
  resume: "/resume2.html",
};

export const links = [
  { label: "GitHub", url: "https://github.com/hmdlohar" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/hmdlohar/" },
  { label: "YouTube", url: "https://www.youtube.com/@learnwithhmd" },
];

export const stats = [
  { value: "8+", label: "Years" },
  { value: "25+", label: "Big projects" },
  { value: "600+", label: "Clients automated" },
  { value: "12+", label: "Trophies won" },
];

export const stack = [
  "React", "NextJS", "TypeScript", "Node.js", "MongoDB", "PostgreSQL",
  "AWS", "Google Cloud", "RunPod", "Stripe", "AI Agents", "Puppeteer", "Electron", "Docker",
];

export const projects: Project[] = [
  {
    name: "Caimera AI",
    org: "Caimera",
    period: "2025",
    summary:
      "Generative AI fashion platform. Autoscaled GPU workloads across RunPod and AWS, migrated payments from Razorpay to Stripe with subscriptions, and built an image-to-video AI agent on a template architecture.",
    tags: ["RunPod", "AWS", "Stripe", "AI Agents"],
    metric: { value: "−50%", label: "GPU cost" },
  },
  {
    name: "QuickBooks Bots",
    org: "Apex Hospitality Management",
    period: "2026",
    summary:
      "Bots that post journal and check entries into QuickBooks, alongside multi-state and county tax-filing bots and bank statement downloaders, all deployed on Google Cloud.",
    tags: ["RPA", "QuickBooks", "Google Cloud"],
    metric: { value: "1 click", label: "Monthly journal, 100s of lines" },
  },
  {
    name: "Tax Robot",
    org: "Apex Hospitality Management",
    period: "2022 — 2023",
    summary:
      "Led an Agile team of 4 building RPA tools that file taxes for multiple CPA firms. Also built a CMS framework with auth built in that sped up new builds by 40–80%.",
    tags: ["Puppeteer", "Electron", "Node.js"],
    metric: { value: "−90%", label: "Manual work, 600+ clients" },
  },
  {
    name: "Adventure Seekers",
    period: "2021 — 2022",
    summary:
      "Adventure tourism platform on NextJS and Strapi, with an event management system that cut organiser onboarding time by 75%.",
    tags: ["NextJS", "Strapi", "PostgreSQL"],
    metric: { value: "50K", label: "Daily users" },
  },
  {
    name: "Account Opening",
    org: "R Wadiwala Securities",
    period: "2021 — 2022",
    summary:
      "Stock-market account opening system built by a team of 4 that I led. Aadhaar authorisation, DigiLocker and DigiCert built into the flow.",
    tags: ["React", "KYC"],
    metric: { value: "−70%", label: "Processing time" },
  },
  {
    name: "Apex HMS",
    org: "Apex Hospitality Management",
    period: "2021 — 2022",
    summary:
      "Revamped a 10-year-old ASP.NET + SQL Server hotel system in React. Puppeteer and custom PDF parsing removed 30 minutes of daily manual work per hotel. Shipped a Cordova app with 2FA.",
    tags: ["React", "ASP.NET", "SQL Server", "Cordova"],
    metric: { value: "100%", label: "Reports automated" },
  },
  {
    name: "Backoffice App",
    org: "R Wadiwala Securities",
    period: "2022 — 2023",
    summary:
      "Led a team of 4 rebuilding the client app for iOS and Android, with a remote update framework and Firebase push notifications.",
    tags: ["React", "Cordova", "Firebase"],
    metric: { value: "10×", label: "Faster updates" },
  },
];

export const moreWork = [
  { name: "ScanR", desc: "Company-wide broadcast system, 99.9% notification delivery" },
  { name: "EyeWynk", desc: "Eyewear e-commerce store and mobile apps" },
  { name: "Myna", desc: "Job portal mobile app" },
  { name: "Mandal", desc: "Group savings and loans app" },
  { name: "Hyper Print", desc: "Online printing marketplace with vendor panels" },
  { name: "Bpzoo Color Tool", desc: "SVG logo colouring tool in plain JavaScript" },
  { name: "Saree Book", desc: "Inventory and accounting for saree dealers" },
  { name: "Cloud Genius", desc: "Online accounting for small businesses" },
  { name: "Medical POS", desc: "Point of sale for medical stores, PHP then React + NestJS" },
  { name: "Delivery Man", desc: "Pickup and drop service app" },
  { name: "Chrome Extension", desc: "Auto-login helper across 20+ websites" },
  { name: "Multi-School System", desc: "MERN app for managing multiple schools" },
];

export const jobs: Job[] = [
  {
    role: "Freelance Full Stack Developer",
    company: "Apex Hospitality Management LLC",
    period: "Jan 2026 — Now",
    points: [
      "Turned a monthly journal of hundreds of lines into one click with QuickBooks bots for journal and check entries.",
      "Eliminated manual tax filing across multiple states and counties, and manual bank statement downloads, with RPA bots on Google Cloud.",
      "Doubled delivery speed with better code quality through an AI-driven development workflow.",
    ],
  },
  {
    role: "Senior Fullstack Engineer",
    company: "Caimera (AI fashion platform)",
    period: "Jan 2025 — Dec 2025",
    points: [
      "Cut GPU infrastructure costs by 50% through scaling and performance work on RunPod + AWS.",
      "Built a customer service dashboard that earned a company Recognition Medal for UX impact.",
      "Migrated payments from Razorpay to Stripe, removing failures and enabling subscriptions.",
      "Created an AI agent that generates video from images using templates.",
    ],
  },
  {
    role: "Project Manager",
    company: "Apex Hospitality Management LLC",
    period: "Sep 2023 — Oct 2024",
    points: [
      "Electron + Node.js desktop app that automates report downloads.",
      "Remote updates for the desktop app, with 10× faster deployments.",
      "Multi-machine hosting for robots, reaching 99.9% uptime.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "10+ clients",
    period: "Jun 2019 — Aug 2023",
    points: ["Fintech, e-commerce, tourism and mobile apps. Most of the projects above come from this period."],
  },
  {
    role: "Web Developer",
    company: "R.Wadiwala Securities",
    period: "Dec 2018 — Aug 2019",
    points: [
      "Promoted from intern to junior developer within 4 months.",
      "ASP.NET web apps with real-time updates over SignalR.",
    ],
  },
  {
    role: "Product Developer",
    company: "Bpzoo (remote)",
    period: "Jun 2017 — Aug 2018",
    points: ["Built the core color tool in JavaScript + SVG on a PHP / CodeIgniter stack."],
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "NextJS", "TypeScript", "JavaScript", "HTML / CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "NestJS", "ASP.NET", "Stripe", "REST APIs"] },
  { group: "Data", items: ["MongoDB", "PostgreSQL", "MySQL", "SQL Server"] },
  { group: "Cloud & DevOps", items: ["AWS", "Google Cloud", "RunPod / GPU", "Docker", "GitHub Actions", "Firebase"] },
  { group: "AI & Automation", items: ["AI-driven development", "Claude Code", "OpenCode", "Codex", "Generative AI", "AI Agents", "RPA bots", "QuickBooks automation", "Puppeteer", "Electron", "PDF parsing"] },
  { group: "Mobile", items: ["Cordova", "Ionic", "Hybrid apps"] },
];

export const reviews = [
  { quote: "Outstanding job. I had a problem that five people could not perform, he did it in an hour.", by: "turner1955", from: "Germany" },
  { quote: "Great expert in his field. He is a magician.", by: "mazzetti3", from: "Italy" },
  { quote: "Careful listeners that understand customer needs precisely and deliver on time exactly in line with expectations.", by: "Nilesh Londhe", from: "United States" },
  { quote: "He is smart and did the job completed in first attempt. Clear code and high performance result.", by: "medsamia", from: "United States" },
  { quote: "He did the work that others couldn't do, well done!", by: "damnitman3", from: "Pakistan" },
  { quote: "He was always very positive, and solved all of my problems. He never complained or said 'no'. I really recommend him!", by: "serkanaltin", from: "Norway" },
  { quote: "Perfect patience. Through all my requests he worked with me through the end.", by: "couplezonly", from: "United States" },
  { quote: "Great delivery, understood my needs well.", by: "dne888", from: "Norway" },
];

export const about = [
  {
    title: "Awards",
    items: [
      "Recognition Medal, Caimera (2025): UX impact and technical excellence",
      "12+ trophies in programming competitions and hackathons",
    ],
  },
  {
    title: "Education",
    items: [
      "Bachelor of Computer Applications, VNSGU (2019)",
      "Bachelor of Commerce, Kutch University (2014)",
    ],
  },
  {
    title: "Off the clock",
    items: [
      "Teaching JavaScript and React on the Learn with HMD YouTube channel",
      "Running a 3D printing shop on Amazon India",
      "Home automation for remote, mobile and PC control",
    ],
  },
];
