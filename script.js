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
      "Used Pinecone and Azure OpenAI in production workflow.",
      "Learned Docker and Kubernetes during cloud deployment."
    ],
    learning: "Learned how to productize LLM systems for enterprise workflows."
  },
  {
    role: "Full Stack Engineer",
    company: "Yatra",
    period: "02/2024 - 03/2024",
    location: "Gurgaon",
    points: [
      "Built channel-manager features for lower-segment hotels.",
      "Worked on NanoCM, report generation, and dynamic mass emailer.",
      "Implemented SMTP automation with Python and networking concepts."
    ],
    learning: "Learned rapid product iteration tied to direct business outcomes."
  },
  {
    role: "AI/ML Engineer",
    company: "Waisl",
    period: "05/2023 - 01/2024",
    location: "Delhi",
    points: [
      "Built facial-recognition attendance product using MERN + MongoDB.",
      "Contributed to ResumeGPT using LaMini Flan T5, LangChain, and FAISS.",
      "Helped improve recruitment workflow efficiency."
    ],
    learning: "Learned to blend ML research with usable product experiences."
  },
  {
    role: "Data Scientist",
    company: "thelightbulb.ai",
    period: "06/2022 - 12/2022",
    location: "Mumbai",
    points: [
      "Built audio diarization pipeline from scratch.",
      "Used Golang for concurrent data processing in sentiment analysis.",
      "Worked directly with international clients including Warner Brothers."
    ],
    learning: "Learned client-facing delivery while maintaining technical depth."
  }
];

function applyProfile() {
  document.title = `${profile.name} | Portfolio`;
  document.getElementById("name-text").textContent = profile.name;
  document.getElementById("role-text").textContent = profile.role;
  document.getElementById("bio-text").textContent = profile.bio;
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
    card.className = "project-card tilt";

    card.innerHTML = `
      <div class="project-media">
        <img src="${p.image}" alt="${p.title}" onerror="this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60'" />
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
  const stage = document.getElementById("experience-stage");
  const progress = document.getElementById("exp-progress");

  experiences.forEach((exp, idx) => {
    const dot = document.createElement("div");
    dot.className = "exp-dot";
    if (idx === 0) dot.classList.add("active");
    progress.appendChild(dot);

    const card = document.createElement("article");
    card.className = `exp-card ${idx === 0 ? "active" : ""}`;
    card.innerHTML = `
      <div class="exp-head">
        <h3>${exp.role}, ${exp.company}</h3>
        <strong>${exp.location}</strong>
      </div>
      <p class="exp-meta">${exp.period}</p>
      <ul>${exp.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
      <div class="learning">
        <h4>Key Learning</h4>
        <p>${exp.learning}</p>
      </div>
    `;
    stage.appendChild(card);
  });
}

function renderInterests() {
  const box = document.getElementById("interests-list");
  profile.interests.forEach((i) => {
    const chip = document.createElement("span");
    chip.textContent = i;
    box.appendChild(chip);
  });
}

function renderEducation() {
  const grid = document.getElementById("education-grid");
  profile.education.forEach((e) => {
    const card = document.createElement("article");
    card.className = "edu-card";
    card.innerHTML = `<h3>${e.school}</h3><p>${e.detail}</p>`;
    grid.appendChild(card);
  });
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initExperienceScroll() {
  const section = document.querySelector(".experience-shell");
  const cards = Array.from(document.querySelectorAll(".exp-card"));
  const dots = Array.from(document.querySelectorAll(".exp-dot"));
  const total = cards.length;

  function update() {
    const rect = section.getBoundingClientRect();
    const maxScroll = rect.height - window.innerHeight;
    const traveled = Math.min(Math.max(-rect.top, 0), Math.max(maxScroll, 1));
    const ratio = traveled / Math.max(maxScroll, 1);
    const index = Math.min(total - 1, Math.floor(ratio * total));

    cards.forEach((c, i) => c.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function initTilt() {
  const cards = document.querySelectorAll(".tilt");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
applyProfile();
renderProjects();
renderExperience();
renderInterests();
renderEducation();
initReveal();
initExperienceScroll();
initTilt();
