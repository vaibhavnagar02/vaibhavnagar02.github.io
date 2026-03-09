const topProjects = [
  {
    title: "Facial Recognition Attendance Platform",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    description:
      "Developed a full attendance platform using <strong>facial recognition</strong> and <strong>MERN stack architecture</strong>. Built the full flow from detection and recognition to <strong>MongoDB-backed attendance records</strong> and a dashboard for monitoring, reporting, and operational use.",
    stack: ["Computer Vision", "MERN Stack", "MongoDB", "Deployment"],
    link: "https://github.com/vaibhavnagar02/AttendanceSystem"
  },
  {
    title: "Florence-2 Auto Annotation Pipeline",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    description:
      "This project showcases a comprehensive pipeline for <strong>object detection</strong> using the <strong>Florence-2 model</strong>. It includes object detection inference, dataset handling, model training with <strong>Low-Rank Adaptation (LoRA)</strong>, and automated annotation workflows for both images and videos.",
    stack: ["Florence-2", "Object Detection", "LoRA", "Auto Annotation"],
    link: "https://github.com/vaibhavnagar02/Florence2-AutoAnnotation"
  },
  {
    title: "ResumeGPT Recruitment Intelligence",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
    description:
      "Contributed to <strong>ResumeGPT</strong>, an LLM-powered recruitment product built with <strong>LaMini Flan T5</strong> and <strong>LangChain</strong>. Implemented <strong>FAISS-based retrieval</strong> and structured resume analysis pipelines to accelerate HR screening workflows and improve candidate shortlisting quality at scale.",
    stack: ["LaMini Flan T5", "LangChain", "FAISS", "NLP"],
    link: ""
  }
];

const experienceTimeline = [
  {
    date: "03/2024 – 06/2024 | Bangalore",
    company: "Lumberfi",
    role: "ML Engineer",
    summary:
      "Worked on a <strong>fine-tuned LLM chatbot</strong> using Pinecone and Azure OpenAI to convert contracts into <strong>MVEL code</strong>. Handled complex data extraction from union contracts and contractor files, and supported deployment with <strong>Docker</strong> and <strong>Kubernetes</strong> on Azure.",
    learningKeywords: [
      "Production ML",
      "Data Extraction",
      "Retrieval Quality",
      "Azure Deployment",
      "Docker + Kubernetes"
    ]
  },
  {
    date: "02/2024 – 03/2024 | Gurgaon",
    company: "Yatra",
    role: "Full Stack Engineer",
    summary:
      "Worked on channel-manager products for lower-segment hotels across frontend and backend. Built business-focused tools and POCs such as <strong>NanoCM</strong>, <strong>automated report generation</strong>, <strong>dynamic mass emailer</strong>, and SMTP-based email automation pipelines.",
    learningKeywords: [
      "Business-Driven Engineering",
      "Product Thinking",
      "Automation",
      "Scalable Design",
      "Full Stack Delivery"
    ]
  },
  {
    date: "05/2023 – 01/2024 | Delhi",
    company: "Waisl",
    role: "AI/ML Engineer",
    summary:
      "Built a <strong>facial-recognition attendance system</strong> with Computer Vision, MongoDB, and MERN stack. Contributed to ResumeGPT using <strong>LaMini Flan T5 + LangChain</strong> with <strong>FAISS-based retrieval</strong>, significantly improving recruitment efficiency.",
    learningKeywords: [
      "Applied AI",
      "Computer Vision",
      "LLM Integration",
      "Retrieval Pipelines",
      "Product Execution"
    ]
  },
  {
    date: "06/2022 – 12/2022 | Mumbai",
    company: "thelightbulb.ai",
    role: "Data Scientist",
    summary:
      "Built an <strong>audio diarization pipeline</strong> from scratch using audio segmentation and <strong>HuBERT transformer-based tone analysis</strong>. Also worked with Golang for concurrent sentiment-analysis workflows and collaborated with international clients including Warner Brothers for analytics reporting.",
    learningKeywords: [
      "Audio Diarization",
      "HuBERT Transformers",
      "Concurrent Golang Pipelines",
      "Client Delivery",
      "Analytics Reporting"
    ]
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
        <p>${
          project.link
            ? `<a class="btn ghost" href="${project.link}" target="_blank" rel="noreferrer">Open Project</a>`
            : `<span class="tag">Private company project</span>`
        }</p>
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
        <div class="learning-tags">
          ${(item.learningKeywords || []).map((keyword) => `<span class="learning-tag">${keyword}</span>`).join("")}
        </div>
      </div>
    `;
    wrap.appendChild(row);
  });
}

function setContact() {
  const email = "vaibhavsinghnagar@gmail.com";
  const phone = "+61 432 199 478";
  const emailLink = document.getElementById("emailLink");
  const phoneLink = document.getElementById("phoneLink");
  if (emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
  }
  if (phoneLink) {
    phoneLink.href = `tel:${phone.replace(/\s/g, "")}`;
    phoneLink.textContent = phone;
  }
}

renderProjects();
renderTimeline();
setContact();
