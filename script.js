const topProjects = [
  {
    title: "LLM Contract-to-MVEL Automation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    description:
      "Built a fine-tuned LLM chatbot workflow that converts complex contract language into MVEL code for downstream product integrations. The system was designed to support multiple affiliated companies with domain-specific requirements, retrieval-backed responses, and production-oriented reliability.",
    stack: ["Azure OpenAI", "Pinecone", "Prompt Engineering", "LLM Fine-Tuning"],
    link: "https://github.com/vaibhavnagar02"
  },
  {
    title: "ResumeGPT Recruitment Intelligence",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
    description:
      "Contributed to ResumeGPT, an LLM-powered recruitment product built with LaMini Flan T5 and LangChain. Implemented FAISS-based retrieval and structured resume analysis pipelines to accelerate HR screening workflows and improve candidate shortlisting quality at scale.",
    stack: ["LaMini Flan T5", "LangChain", "FAISS", "NLP"],
    link: "https://github.com/vaibhavnagar02"
  },
  {
    title: "Facial Recognition Attendance Platform",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    description:
      "Developed a full attendance platform using facial recognition and MERN stack architecture. Built end-to-end flow from detection and recognition to MongoDB-backed attendance records and a web dashboard for monitoring, reporting, and operational use.",
    stack: ["Computer Vision", "MERN Stack", "MongoDB", "Deployment"],
    link: "https://github.com/vaibhavnagar02"
  }
];

const experienceTimeline = [
  {
    date: "06/2022 – 12/2022 | Mumbai",
    company: "thelightbulb.ai",
    role: "Data Scientist",
    summary:
      "Built an audio diarization pipeline from scratch using audio segmentation and HuBERT transformer-based tone analysis. Also worked with Golang for concurrent sentiment-analysis workflows and interacted with international clients including Warner Brothers for analytics reporting.",
    learning:
      "Learned how to combine research-oriented models with client-facing delivery: model quality, system performance, and reporting clarity must move together."
  },
  {
    date: "05/2023 – 01/2024 | Delhi",
    company: "Waisl",
    role: "AI/ML Engineer",
    summary:
      "Built a facial-recognition attendance system with Computer Vision, MongoDB, and MERN stack. Contributed to ResumeGPT using LaMini Flan T5 + LangChain with FAISS-based retrieval, helping improve recruitment efficiency significantly.",
    learning:
      "Learned to translate advanced AI ideas into usable products by balancing accuracy, UX, and deployment constraints."
  },
  {
    date: "02/2024 – 03/2024 | Gurgaon",
    company: "Yatra",
    role: "Full Stack Engineer",
    summary:
      "Worked on channel-manager products for lower-segment hotels across frontend and backend. Built business-focused tools and POCs such as NanoCM, automated report generation, dynamic mass emailer, and SMTP-based email automation pipelines.",
    learning:
      "Learned that strong product engineering starts from business pain points, then maps to scalable and automatable technical design."
  },
  {
    date: "03/2024 – 06/2024 | Bangalore",
    company: "Lumberfi",
    role: "ML Engineer",
    summary:
      "Worked on a fine-tuned LLM chatbot using Pinecone and Azure OpenAI to convert contracts into MVEL code. Handled complex data extraction from union contracts and contractor files, and supported deployment stages with Docker and Kubernetes on Azure.",
    learning:
      "Learned production ML discipline: data complexity, retrieval quality, and deployment architecture are equally critical for real-world impact."
  }
];

function renderProjects() {
  const wrap = document.getElementById("topProjects");
  if (!wrap) return;
  wrap.innerHTML = "";
  topProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <img class="project-image" src="${project.image}" alt="${project.title}" loading="lazy" />
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-meta">
          ${project.stack.map((s) => `<span class="tag">${s}</span>`).join("")}
        </div>
        <p><a class="btn ghost" href="${project.link}" target="_blank" rel="noreferrer">Open Project</a></p>
      </div>
    `;
    wrap.appendChild(card);
  });
}

function renderTimeline() {
  const wrap = document.getElementById("timelineWrap");
  if (!wrap) return;
  wrap.innerHTML = "";
  experienceTimeline.forEach((item) => {
    const row = document.createElement("article");
    row.className = "timeline-item";
    row.innerHTML = `
      <div class="timeline-main">
        <h3>${item.role} • ${item.company}</h3>
        <p><strong>${item.date}</strong></p>
        <p>${item.summary}</p>
      </div>
      <div class="timeline-learning">
        <h3>Key Learning</h3>
        <p>${item.learning}</p>
      </div>
    `;
    wrap.appendChild(row);
  });
}

function setContact() {
  const email = "your-email@example.com";
  const phone = "+61 0000 000 000";
  const emailLink = document.getElementById("emailLink");
  const phoneLink = document.getElementById("phoneLink");
  if (emailLink) { emailLink.href = `mailto:${email}`; emailLink.textContent = email; }
  if (phoneLink) { phoneLink.href = `tel:${phone.replace(/\s/g, "")}`; phoneLink.textContent = phone; }
}

renderProjects();
renderTimeline();
setContact();
