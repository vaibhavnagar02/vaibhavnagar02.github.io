const profile = {
  name: "Vaibhav Nagar",
  role: "AI/ML Engineer | Cybersecurity Enthusiast",
  bio: "Building practical AI systems, secure software, and production-ready products.",
  phone: "+61 0432199478",
  email: "vaibhavsinghnagar@gmail.com",
  githubUrl: "https://github.com/vaibhavnagar02",
  linkedinUrl: "https://www.linkedin.com/in/vaibhav-nagar2002/",
  resumeUrl: "./Vaibhav_Nagar_Resume.pdf",
  education: "University of Sydney - Advanced studies in computing, AI systems, and secure engineering.",
  interests: [
    "Applied AI",
    "Cybersecurity",
    "MLOps",
    "Cloud Deployment",
    "System Design",
    "Product Engineering"
  ]
};

const projects = [
  {
    title: "Fine-Tuned LLM Contract Assistant",
    description: "Contract-to-MVEL transformation pipeline using Pinecone and Azure OpenAI.",
    repoUrl: "https://github.com/vaibhavnagar02"
  },
  {
    title: "Facial Recognition Attendance System",
    description: "Computer vision attendance product with MERN stack and MongoDB reporting.",
    repoUrl: "https://github.com/vaibhavnagar02"
  },
  {
    title: "ResumeGPT",
    description: "Recruitment assistant with LaMini Flan T5, LangChain, and FAISS search.",
    repoUrl: "https://github.com/vaibhavnagar02"
  },
  {
    title: "Hotel Channel Manager POC",
    description: "Full stack channel manager concept for lower-segment hotel operations.",
    repoUrl: "https://github.com/vaibhavnagar02"
  },
  {
    title: "Automated Mass Emailer",
    description: "SMTP + Python workflow for scalable business communication automation.",
    repoUrl: "https://github.com/vaibhavnagar02"
  },
  {
    title: "Audio Diarization & Sentiment Pipeline",
    description: "Speech segmentation + transformer-based tone analysis with scalable processing.",
    repoUrl: "https://github.com/vaibhavnagar02"
  }
];

const experiences = [
  {
    role: "ML Engineer",
    company: "Lumberfi",
    period: "03/2024 - 06/2024",
    location: "Bangalore",
    points: [
      "Delivered a fine-tuned LLM chatbot using Pinecone and Azure OpenAI for contract-to-MVEL conversion.",
      "Learned Docker and Kubernetes through Azure deployment work.",
      "Handled complex extraction from union contracts and contractor files."
    ],
    learning: "How to ship LLM solutions in production pipelines, not just prototypes."
  },
  {
    role: "Full Stack Engineer",
    company: "Yatra",
    period: "02/2024 - 03/2024",
    location: "Gurgaon",
    points: [
      "Built a full stack channel manager for lower-segment hotels.",
      "Contributed to NanoCM, automated report generation, and dynamic mass emailer POCs.",
      "Implemented SMTP-driven automation with Python and networking concepts."
    ],
    learning: "How to convert real business pain points into fast, practical product features."
  },
  {
    role: "AI/ML Engineer",
    company: "Waisl",
    period: "05/2023 - 01/2024",
    location: "Delhi",
    points: [
      "Built facial recognition attendance system with computer vision, MongoDB, and MERN.",
      "Worked on ResumeGPT using LaMini Flan T5, LangChain, and FAISS.",
      "Improved recruitment process throughput using LLM-assisted workflows."
    ],
    learning: "How AI models create measurable operational impact when connected to workflows."
  },
  {
    role: "Data Scientist",
    company: "thelightbulb.ai",
    period: "06/2022 - 12/2022",
    location: "Mumbai",
    points: [
      "Built audio diarization from scratch with segmentation and HuBERT transformer classification.",
      "Used Golang for efficient concurrent processing in sentiment analysis workloads.",
      "Worked directly with international clients including Warner Brothers."
    ],
    learning: "How to balance research depth with client-facing delivery and communication."
  }
];

function applyProfile() {
  document.title = `${profile.name} | Portfolio`;
  document.getElementById("name-text").textContent = profile.name;
  document.getElementById("role-text").textContent = profile.role;
  document.getElementById("bio-text").textContent = profile.bio;
  document.getElementById("edu-details").textContent = profile.education;
  document.getElementById("footer-name").textContent = profile.name;

  const resume = document.getElementById("resume-link");
  const github = document.getElementById("github-link");
  const linkedin = document.getElementById("linkedin-link");
  const phone = document.getElementById("phone-link");
  const email = document.getElementById("email-link");
  const cGithub = document.getElementById("contact-github");
  const cLinkedin = document.getElementById("contact-linkedin");
  const seeAll = document.getElementById("see-all-projects");

  resume.href = profile.resumeUrl;
  github.href = profile.githubUrl;
  linkedin.href = profile.linkedinUrl;
  cGithub.href = profile.githubUrl;
  cLinkedin.href = profile.linkedinUrl;
  seeAll.href = profile.githubUrl;

  phone.href = `tel:${profile.phone.replace(/\s+/g, "")}`;
  phone.textContent = `Phone: ${profile.phone}`;
  email.href = `mailto:${profile.email}`;
  email.textContent = `Email: ${profile.email}`;
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const h3 = document.createElement("h3");
    h3.textContent = p.title;

    const d = document.createElement("p");
    d.textContent = p.description;

    const a = document.createElement("a");
    a.href = p.repoUrl;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = "View Repo";

    card.append(h3, d, a);
    grid.appendChild(card);
  });
}

function renderExperience() {
  const track = document.getElementById("experience-track");
  experiences.forEach((e) => {
    const card = document.createElement("article");
    card.className = "exp-card";

    const head = document.createElement("div");
    head.className = "exp-head";
    head.innerHTML = `<h3>${e.role}, ${e.company}</h3><strong>${e.location}</strong>`;

    const meta = document.createElement("p");
    meta.className = "exp-meta";
    meta.textContent = e.period;

    const ul = document.createElement("ul");
    e.points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      ul.appendChild(li);
    });

    const learnBox = document.createElement("div");
    learnBox.className = "learn-box";
    learnBox.innerHTML = `<h4>Key Learning</h4><p>${e.learning}</p>`;

    card.append(head, meta, ul, learnBox);
    track.appendChild(card);
  });
}

function renderInterests() {
  const list = document.getElementById("interests-list");
  profile.interests.forEach((item) => {
    const chip = document.createElement("span");
    chip.textContent = item;
    list.appendChild(chip);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
applyProfile();
renderProjects();
renderExperience();
renderInterests();
