const profile = {
  name: "Vaibhav Nagar",
  initials: "VN",
  role: "Cybersecurity Student",
  shortBio:
    "I focus on practical cybersecurity through labs, CTF-style problem solving, and secure software practices.",
  about:
    "I am building hands-on skills across offensive and defensive security, including vulnerability assessment, Linux-based security workflows, and scripting for automation.",
  resumeUrl: "./assets/Vaibhav_Nagar_Resume.pdf",
  githubUrl: "https://github.com/vaibhavnagar02",
  linkedinUrl: "https://www.linkedin.com/in/vaibhav-nagar2002/",
  email: "vaibhavsinghnagar@gmail.com",
  skills: [
    "Network Security",
    "Penetration Testing",
    "Python",
    "SIEM",
    "Linux",
    "Threat Modeling"
  ]
};

const projects = [
  {
    title: "Web App Security Scanner",
    description:
      "Automates OWASP Top 10 checks against target web apps and generates a concise findings report.",
    repoUrl: "https://github.com/your-username/web-security-scanner",
    tags: ["Python", "OWASP", "Automation"]
  },
  {
    title: "SOC Alert Triage Dashboard",
    description:
      "Simple dashboard to parse and prioritize incoming security alerts for faster investigation.",
    repoUrl: "https://github.com/your-username/soc-triage-dashboard",
    tags: ["JavaScript", "SIEM", "Detection"]
  },
  {
    title: "CTF Writeups",
    description:
      "Collection of challenge solutions focused on web exploitation, crypto, and binary analysis.",
    repoUrl: "https://github.com/your-username/ctf-writeups",
    tags: ["CTF", "Reverse Engineering", "Learning"]
  }
];

function applyProfile() {
  document.title = `${profile.name} | Cybersecurity Portfolio`;
  document.getElementById("name-text").textContent = profile.name;
  document.getElementById("role-text").textContent = profile.role;
  document.getElementById("bio-text").textContent = profile.shortBio;
  document.getElementById("about-text").textContent = profile.about;
  document.getElementById("footer-name").textContent = profile.name;

  const brand = document.querySelector(".brand");
  brand.textContent = profile.initials;

  const resumeLink = document.getElementById("resume-link");
  const githubLink = document.getElementById("github-link");
  const projectsProfileLink = document.getElementById("projects-profile-link");
  const linkedinLink = document.getElementById("linkedin-link");
  const emailLink = document.getElementById("email-link");

  resumeLink.href = profile.resumeUrl;
  githubLink.href = profile.githubUrl;
  projectsProfileLink.href = profile.githubUrl;
  linkedinLink.href = profile.linkedinUrl;
  emailLink.href = `mailto:${profile.email}`;
  emailLink.textContent = profile.email;

  const chips = document.getElementById("skills-chips");
  profile.skills.forEach((skill) => {
    const chip = document.createElement("span");
    chip.textContent = skill;
    chips.appendChild(chip);
  });
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const tagWrap = document.createElement("div");
    tagWrap.className = "tags";
    project.tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.textContent = tag;
      tagWrap.appendChild(tagEl);
    });

    const link = document.createElement("a");
    link.href = project.repoUrl;
    link.textContent = "View Repository";
    link.target = "_blank";
    link.rel = "noreferrer";

    card.append(title, description, tagWrap, link);
    grid.appendChild(card);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
applyProfile();
renderProjects();
