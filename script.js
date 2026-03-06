const profile = {
  name: "Vaibhav Nagar",
  role: "AI/ML Engineer | Cybersecurity Enthusiast",
  bio: "Building practical AI systems, secure software, and production-ready products.",
  phone: "+61 0432199478",
  email: "vaibhavsinghnagar@gmail.com",
  githubUrl: "https://github.com/vaibhavnagar02",
  linkedinUrl: "https://www.linkedin.com/in/vaibhav-nagar2002/",
  resumeUrl: "./Vaibhav_Nagar_Resume.pdf",
  interests: [
    "Applied AI",
    "Cybersecurity",
    "MLOps",
    "Cloud Deployment",
    "System Design",
    "Computer Vision"
  ],
  education: [
    {
      school: "University of Sydney",
      detail: "Advanced studies in computing, AI systems, and secure engineering."
    },
    {
      school: "Manipal University Jaipur",
      detail: "Bachelors degree, majoring in Data Science."
    }
  ]
};

const projects = [
  {
    title: "Fine-Tuned LLM Contract Assistant",
    description: "Contract-to-MVEL pipeline using Pinecone + Azure OpenAI.",
    repoUrl: "https://github.com/vaibhavnagar02",
    image: "./images/project-1.jpg"
  },
  {
    title: "Facial Recognition Attendance",
    description: "Computer vision attendance system with MERN and MongoDB.",
    repoUrl: "https://github.com/vaibhavnagar02",
    image: "./images/project-2.jpg"
  },
  {
    title: "ResumeGPT",
    description: "Recruitment intelligence with LaMini Flan T5, LangChain, and FAISS.",
    repoUrl: "https://github.com/vaibhavnagar02",
    image: "./images/project-3.jpg"
  },
  {
    title: "Hotel Channel Manager",
    description: "Full stack channel manager concept for budget hotels.",
    repoUrl: "https://github.com/vaibhavnagar02",
    image: "./images/project-4.jpg"
  },
  {
    title: "Dynamic Mass Emailer",
    description: "SMTP + Python workflow for automated business communication.",
    repoUrl: "https://github.com/vaibhavnagar02",
    image: "./images/project-5.jpg"
  },
  {
    title: "Audio Diarization Pipeline",
    description: "Speech segmentation + transformer-based tone analysis.",
    repoUrl: "https://github.com/vaibhavnagar02",
    image: "./images/project-6.jpg"
  }
];

const experiences = [
  {
    role: "ML Engineer",
    company: "Lumberfi",
    period: "03/2024 - 06/2024",
    location: "Bangalore",
    points: [
      "Built a fine-tuned LLM chatbot converting contracts into MVEL code.",
      "Used Pinecone + Azure OpenAI in a production pipeline.",
      "Learned Docker and Kubernetes during Azure deployment."
    ],
    learning: "How to productionize LLM solutions for enterprise workflows."
  },
  {
    role: "Full Stack Engineer",
    company: "Yatra",
    period: "02/2024 - 03/2024",
    location: "Gurgaon",
    points: [
      "Built channel manager features for lower-segment hotel use-cases.",
      "Worked on NanoCM, report generation, and dynamic mass emailer POCs.",
      "Implemented SMTP automation with Python and networking."
    ],
    learning: "How to ship practical features fast against real business constraints."
  },
  {
    role: "AI/ML Engineer",
    company: "Waisl",
    period: "05/2023 - 01/2024",
    location: "Delhi",
    points: [
      "Built facial-recognition attendance product using MERN + MongoDB.",
      "Contributed to ResumeGPT with LaMini Flan T5, LangChain, and FAISS.",
      "Improved recruitment workflow efficiency via AI-enabled tooling."
    ],
    learning: "How to combine AI research with usable product UX."
  },
  {
    role: "Data Scientist",
    company: "thelightbulb.ai",
    period: "06/2022 - 12/2022",
    location: "Mumbai",
    points: [
      "Built an audio diarization pipeline from scratch.",
      "Used Golang for concurrent data processing in sentiment tasks.",
      "Worked with international clients including Warner Brothers."
    ],
    learning: "How to maintain technical depth while delivering client-facing outcomes."
  }
];

function byId(id) {
  return document.getElementById(id);
}

function safeSetText(id, text) {
  const el = byId(id);
  if (el) el.textContent = text;
}

function safeSetHref(id, href) {
  const el = byId(id);
  if (el) el.href = href;
}

function applyProfile() {
  document.title = `${profile.name} | Portfolio`;
  safeSetText("name-text", profile.name);
  safeSetText("role-text", profile.role);
  safeSetText("bio-text", profile.bio);
  safeSetText("footer-name", profile.name);

  safeSetHref("resume-link", profile.resumeUrl);
  safeSetHref("github-link", profile.githubUrl);
  safeSetHref("linkedin-link", profile.linkedinUrl);
  safeSetHref("see-all-projects", profile.githubUrl);
  safeSetHref("contact-github", profile.githubUrl);
  safeSetHref("contact-linkedin", profile.linkedinUrl);

  const phoneLink = byId("phone-link");
  if (phoneLink) {
    phoneLink.href = `tel:${profile.phone.replace(/\s+/g, "")}`;
    phoneLink.textContent = `Phone: ${profile.phone}`;
  }

  const emailLink = byId("email-link");
  if (emailLink) {
    emailLink.href = `mailto:${profile.email}`;
    emailLink.textContent = `Email: ${profile.email}`;
  }
}

function renderProjects() {
  const grid = byId("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";
  projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card tilt";
    card.innerHTML = `
      <div class="project-media">
        <img src="${p.image}" alt="${p.title}"
          onerror="this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60'">
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a href="${p.repoUrl}" target="_blank" rel="noreferrer">View Repo</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderExperience() {
  const list = byId("experience-list");
  if (!list) return;

  list.innerHTML = "";
  experiences.forEach((exp) => {
    const card = document.createElement("article");
    card.className = "exp-item";
    card.innerHTML = `
      <div class="exp-main">
        <h3>${exp.role}, ${exp.company}</h3>
        <p class="exp-meta">${exp.period} | ${exp.location}</p>
        <ul>${exp.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
      </div>
      <aside class="exp-learning">
        <h4>Key Learning</h4>
        <p>${exp.learning}</p>
      </aside>
    `;
    list.appendChild(card);
  });
}

function renderInterests() {
  const list = byId("interests-list");
  if (!list) return;

  list.innerHTML = "";
  profile.interests.forEach((item) => {
    const chip = document.createElement("span");
    chip.textContent = item;
    list.appendChild(chip);
  });
}

function renderEducation() {
  const grid = byId("education-grid");
  if (!grid) return;

  grid.innerHTML = "";
  profile.education.forEach((e) => {
    const card = document.createElement("article");
    card.className = "edu-card";
    card.innerHTML = `<h3>${e.school}</h3><p>${e.detail}</p>`;
    grid.appendChild(card);
  });
}

function initReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.12 });

  nodes.forEach((el) => io.observe(el));
}

function initTilt() {
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  safeSetText("year", new Date().getFullYear());
  applyProfile();
  renderProjects();
  renderExperience();
  renderInterests();
  renderEducation();
  initReveal();
  initTilt();
});
