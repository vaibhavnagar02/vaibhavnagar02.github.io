const profile = {
  name: "Vaibhav Nagar",
  role: "AI/ML Engineer | Aspiring Cybersecurity Professional",
  bio: "Building practical AI systems and secure software. I enjoy solving real-world engineering problems across ML, backend, and product delivery.",
  phone: "+61 0432199478",
  email: "vaibhavsinghnagar@gmail.com",
  githubUrl: "https://github.com/vaibhavnagar02",
  linkedinUrl: "https://www.linkedin.com/in/vaibhav-nagar2002/",
  resumeUrl: "./Vaibhav_Nagar_Resume.pdf",
  interests: [
    "Cybersecurity",
    "LLM Applications",
    "MLOps",
    "Cloud Deployment",
    "System Design",
    "Computer Vision"
  ]
};

const projects = [
  {
    title: "Fine-Tuned LLM Contract Assistant",
    description: "Built an LLM workflow to transform contract content into structured MVEL code for downstream product use.",
    repoUrl: "https://github.com/vaibhavnagar02"
  },
  {
    title: "Facial Recognition Attendance System",
    description: "Developed a computer-vision attendance platform with MERN stack and MongoDB-backed reporting.",
    repoUrl: "https://github.com/vaibhavnagar02"
  },
  {
    title: "ResumeGPT",
    description: "Contributed to an LLM-powered recruitment tool using LaMini Flan T5, LangChain, and FAISS search.",
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
      "Helped deliver a fine-tuned LLM chatbot using Pinecone and Azure OpenAI to convert contracts into MVEL code.",
      "Learned Docker and Kubernetes during Azure deployment stages.",
      "Worked on extraction from complex union contracts and contractor files."
    ]
  },
  {
    role: "Full Stack Engineer",
    company: "Yatra",
    period: "02/2024 - 03/2024",
    location: "Gurgaon",
    points: [
      "Built a channel manager product for lower-segment hotels across frontend and backend.",
      "Worked on NanoCM, automated report generation, and dynamic mass emailer POCs.",
      "Implemented email automation using SMTP, networking concepts, and Python modules."
    ]
  },
  {
    role: "AI/ML Engineer",
    company: "Waisl",
    period: "05/2023 - 01/2024",
    location: "Delhi",
    points: [
      "Built a facial-recognition attendance system using computer vision, MongoDB, and MERN stack.",
      "Contributed to ResumeGPT with LaMini Flan T5, LangChain, and FAISS integration.",
      "Helped improve HR efficiency for recruitment workflows."
    ]
  },
  {
    role: "Data Scientist",
    company: "thelightbulb.ai",
    period: "06/2022 - 12/2022",
    location: "Mumbai",
    points: [
      "Built an audio diarization solution using segmentation and HuBERT-based transformer classification.",
      "Used Golang for efficient concurrent data processing in sentiment analysis tasks.",
      "Worked with international clients including Warner Brothers on analysis and reporting."
    ]
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

  resume.href = profile.resumeUrl;
  github.href = profile.githubUrl;
  linkedin.href = profile.linkedinUrl;

  phone.href = `tel:${profile.phone.replace(/\s+/g, "")}`;
  phone.textContent = `Phone: ${profile.phone}`;
  email.href = `mailto:${profile.email}`;
  email.textContent = `Email: ${profile.email}`;

  cGithub.href = profile.githubUrl;
  cGithub.textContent = "GitHub Profile";
  cLinkedin.href = profile.linkedinUrl;
  cLinkedin.textContent = "LinkedIn Profile";
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";

    const h3 = document.createElement("h3");
    h3.textContent = p.title;

    const desc = document.createElement("p");
    desc.textContent = p.description;

    const link = document.createElement("a");
    link.href = p.repoUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "View Repository";

    card.append(h3, desc, link);
    grid.appendChild(card);
  });
}

function renderTimeline() {
  const timeline = document.getElementById("timeline");
  experiences.forEach((exp) => {
    const item = document.createElement("article");
    item.className = "timeline-item";

    const h3 = document.createElement("h3");
    h3.textContent = `${exp.role}, ${exp.company}`;

    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = `${exp.period} | ${exp.location}`;

    const ul = document.createElement("ul");
    exp.points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      ul.appendChild(li);
    });

    item.append(h3, meta, ul);
    timeline.appendChild(item);
  });
}

function renderInterests() {
  const list = document.getElementById("interests-list");
  profile.interests.forEach((interest) => {
    const chip = document.createElement("span");
    chip.textContent = interest;
    list.appendChild(chip);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
applyProfile();
renderProjects();
renderTimeline();
renderInterests();
