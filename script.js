const GITHUB_USERNAME = "vaibhavnagar02";
const LINKEDIN_URL = "https://www.linkedin.com/in/vaibhav-nagar2002/";

const timelineData = [
  {
    period: "2022 - 2023",
    title: "Foundation in AI/ML and Data Science",
    details: "Built strong fundamentals in Python, statistics, ML algorithms, and data preprocessing through academic and personal projects.",
    learning: "Learned that clean data pipelines and feature engineering often matter more than complex models."
  },
  {
    period: "2023 - 2024",
    title: "Applied Projects and Model Development",
    details: "Worked on practical AI/ML projects, model training workflows, and end-to-end experimentation for real use cases.",
    learning: "Improved at choosing metrics based on business goals rather than only model accuracy."
  },
  {
    period: "2024 - Present",
    title: "Engineering-Focused AI Development",
    details: "Focused on building deployable, maintainable AI systems with emphasis on reproducibility, scaling, and impact.",
    learning: "Shipping reliable solutions requires MLOps mindset, versioning, monitoring, and iterative improvement."
  }
];

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html) node.innerHTML = html;
  return node;
}

async function loadGitHubProfile() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!res.ok) throw new Error("Profile fetch failed");
    const profile = await res.json();

    const name = document.getElementById("name");
    const avatar = document.getElementById("avatar");
    const bio = document.getElementById("bio");

    if (profile.name) name.textContent = profile.name;
    if (profile.avatar_url) avatar.src = profile.avatar_url;
    if (profile.bio) bio.textContent = profile.bio;
  } catch (err) {
    console.error(err);
  }
}

async function loadGitHubProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = `<p>Loading projects...</p>`;

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    );
    if (!res.ok) throw new Error("Repo fetch failed");

    const repos = await res.json();
    const top6 = repos
      .filter((r) => !r.fork)
      .sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
      .slice(0, 6);

    if (!top6.length) {
      grid.innerHTML = `<p>No public repositories found.</p>`;
      return;
    }

    grid.innerHTML = "";
    top6.forEach((repo) => {
      const card = el("article", "project-card");
      const imageUrl = `https://opengraph.githubassets.com/${repo.id}/${repo.full_name}`;

      card.innerHTML = `
        <img src="${imageUrl}" alt="${repo.name} preview" loading="lazy" />
        <div class="project-content">
          <h3>${repo.name}</h3>
          <p>${repo.description ? repo.description : "No description provided."}</p>
          <div class="project-meta">★ ${repo.stargazers_count} • ${repo.language || "Codebase"}</div>
          <p><a href="${repo.html_url}" target="_blank" rel="noreferrer">Open Project</a></p>
        </div>
      `;
      grid.appendChild(card);
    });
  } catch (err) {
    console.error(err);
    grid.innerHTML = `<p>Unable to load projects right now. Please try again later.</p>`;
  }
}

function renderTimeline() {
  const list = document.getElementById("timelineList");
  list.innerHTML = "";

  timelineData.forEach((item) => {
    const row = el("div", "timeline-item");
    row.innerHTML = `
      <div class="timeline-main">
        <h4>${item.period} • ${item.title}</h4>
        <p>${item.details}</p>
      </div>
      <div class="timeline-learning">
        <h4>Key Learning</h4>
        <p>${item.learning}</p>
      </div>
    `;
    list.appendChild(row);
  });
}

function setStaticLinks() {
  const emailLink = document.getElementById("emailLink");
  const phoneLink = document.getElementById("phoneLink");

  // Replace with your real details from resume.
  const email = "your-email@example.com";
  const phone = "+61 0000 000 000";

  emailLink.href = `mailto:${email}`;
  emailLink.textContent = email;

  phoneLink.href = `tel:${phone.replace(/\s/g, "")}`;
  phoneLink.textContent = phone;

  const linkedInAnchors = [...document.querySelectorAll('a[href*="linkedin.com"]')];
  linkedInAnchors.forEach((a) => (a.href = LINKEDIN_URL));
}

(async function init() {
  setStaticLinks();
  renderTimeline();
  await loadGitHubProfile();
  await loadGitHubProjects();
})();
