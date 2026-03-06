const profile = {
  name: "Vaibhav Nagar",
  role: "AI/ML Engineer | Cybersecurity Enthusiast",
  bio: "Building practical AI systems, secure software, and production-ready products.",
  phone: "+61 0432199478",
  email: "vaibhavsinghnagar@gmail.com",
  githubUrl: "https://github.com/vaibhavnagar02",
  linkedinUrl: "https://www.linkedin.com/in/vaibhav-nagar2002/",
  resumeUrl: "./Vaibhav_Nagar_Resume.pdf",
  interests: ["Applied AI", "Cybersecurity", "MLOps", "Cloud Deployment", "System Design", "Computer Vision"],
  education: [
    { school: "University of Sydney", detail: "Advanced studies in computing, AI systems, and secure engineering." },
    { school: "Manipal University Jaipur", detail: "Bachelors degree, majoring in Data Science." }
  ]
};

const projects = [
  { title: "Fine-Tuned LLM Contract Assistant", description: "Contract-to-MVEL pipeline using Pinecone + Azure OpenAI.", repoUrl: "https://github.com/vaibhavnagar02", image: "./images/project-1.jpg" },
  { title: "Facial Recognition Attendance", description: "Computer vision attendance system with MERN and MongoDB.", repoUrl: "https://github.com/vaibhavnagar02", image: "./images/project-2.jpg" },
  { title: "ResumeGPT", description: "Recruitment intelligence with LaMini Flan T5, LangChain, and FAISS.", repoUrl: "https://github.com/vaibhavnagar02", image: "./images/project-3.jpg" },
  { title: "Hotel Channel Manager", description: "Full stack channel manager concept for budget hotels.", repoUrl: "https://github.com/vaibhavnagar02", image: "./images/project-4.jpg" },
  { title: "Dynamic Mass Emailer", description: "SMTP + Python workflow for automated business communication.", repoUrl: "https://github.com/vaibhavnagar02", image: "./images/project-5.jpg" },
  { title: "Audio Diarization Pipeline", description: "Speech segmentation + transformer-based tone analysis.", repoUrl: "https://github.com/vaibhavnagar02", image: "./images/project-6.jpg" }
];

const experiences = [
  { role: "ML Engineer", company: "Lumberfi", period: "03/2024 - 06/2024", location: "Bangalore", points: ["Built fine-tuned LLM chatbot converting contracts into MVEL code.", "Used Pinecone + Azure OpenAI in production workflow.", "Learned Docker and Kubernetes during cloud deployment."], learning: "Productized LLM systems for enterprise workflows." },
  { role: "Full Stack Engineer", company: "Yatra", period: "02/2024 - 03/2024", location: "Gurgaon", points: ["Built channel-manager features for lower-segment hotels.", "Contributed to NanoCM, report generation, and dynamic mass emailer.", "Implemented SMTP automation with Python + networking."], learning: "Rapid product iteration tied to direct business outcomes." },
  { role: "AI/ML Engineer", company: "Waisl", period: "05/2023 - 01/2024", location: "Delhi", points: ["Built facial-recognition attendance product (MERN + MongoDB).", "Contributed to ResumeGPT using LaMini Flan T5, LangChain, FAISS.", "Improved recruitment workflow efficiency."], learning: "Blended ML research with usable product experience." },
  { role: "Data Scientist", company: "thelightbulb.ai", period: "06/2022 - 12/2022", location: "Mumbai", points: ["Built audio diarization pipeline from scratch.", "Used Golang for concurrent sentiment processing.", "Worked with international clients including Warner Brothers."], learning: "Balanced deep technical delivery with client communication." }
];

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

function applyProfile() {
  document.title = `${profile.name} | Portfolio`;
  document.getElementById("name-text").textContent = profile.name;
  document.getElementById("role-text").textContent = profile.role;
  document.getElementById("bio-text").textContent = profile.bio;
  document.getElementById("footer-name").textContent = profile.name;
  document.getElementById("resume-link").href = profile.resumeUrl;
  document.getElementById("github-link").href = profile.githubUrl;
  document.getElementById("linkedin-link").href = profile.linkedinUrl;
  document.getElementById("see-all-projects").href = profile.githubUrl;
  document.getElementById("contact-github").href = profile.githubUrl;
  document.getElementById("contact-linkedin").href = profile.linkedinUrl;
  document.getElementById("phone-link").href = `tel:${profile.phone.replace(/\s+/g, "")}`;
  document.getElementById("phone-link").textContent = `Phone: ${profile.phone}`;
  document.getElementById("email-link").href = `mailto:${profile.email}`;
  document.getElementById("email-link").textContent = `Email: ${profile.email}`;
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
      </div>`;
    grid.appendChild(card);
  });
}

function renderExperience() {
  const stage = document.getElementById("experience-stage");
  const progress = document.getElementById("exp-progress");

  experiences.forEach((exp, i) => {
    const dot = document.createElement("div");
    dot.className = "exp-dot" + (i === 0 ? " active" : "");
    progress.appendChild(dot);

    const card = document.createElement("article");
    card.className = "exp-card";
    card.innerHTML = `
      <div class="exp-head"><h3>${exp.role}, ${exp.company}</h3><strong>${exp.location}</strong></div>
      <p class="exp-meta">${exp.period}</p>
      <ul>${exp.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
      <div class="learning"><h4>Key Learning</h4><p>${exp.learning}</p></div>`;
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
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.isIntersecting && e.target.classList.add("show"));
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

function initSmoothExperience() {
  const shell = document.querySelector(".experience-shell");
  const cards = [...document.querySelectorAll(".exp-card")];
  const dots = [...document.querySelectorAll(".exp-dot")];
  const maxIndex = cards.length - 1;
  let target = 0;
  let current = 0;

  function computeTarget() {
    const rect = shell.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const traveled = clamp(-rect.top, 0, Math.max(scrollable, 1));
    const ratio = traveled / Math.max(scrollable, 1);
    target = ratio * maxIndex;
  }

  function paint(progressValue) {
    cards.forEach((card, i) => {
      const d = i - progressValue;
      const ad = Math.abs(d);
      const opacity = clamp(1 - ad * 1.2, 0, 1);
      const y = d * 36;
      const scale = 1 - Math.min(ad * 0.07, 0.07);
      const blur = Math.min(ad * 2, 6);
      card.style.opacity = opacity.toFixed(3);
      card.style.transform = `translateY(${y.toFixed(1)}px) scale(${scale.toFixed(3)})`;
      card.style.filter = `blur(${blur.toFixed(2)}px)`;
      card.style.pointerEvents = ad < 0.5 ? "auto" : "none";
    });

    const active = Math.round(progressValue);
    dots.forEach((dot, i) => dot.classList.toggle("active", i === active));
  }

  function tick() {
    computeTarget();
    current += (target - current) * 0.08;
    paint(current);
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function initTilt() {
  document.querySelectorAll(".tilt").forEach((card) => {
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
initSmoothExperience();
initTilt();
