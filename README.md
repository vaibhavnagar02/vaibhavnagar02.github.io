# vaibhavnagar02.github.io
# GitHub Pages Portfolio Starter

A clean one-page portfolio for GitHub Pages.

## Files

- `index.html`: page structure
- `style.css`: styling and animations
- `script.js`: profile + projects data

## Quick customizations

Open `script.js` and update:

- `profile.name`, `profile.role`, `profile.shortBio`, `profile.about`
- `profile.resumeUrl`, `profile.githubUrl`, `profile.linkedinUrl`, `profile.email`
- `profile.skills` array
- `projects` array (`title`, `description`, `repoUrl`, `tags`)

## Publish with GitHub Pages

1. Create a GitHub repo named `yourusername.github.io`.
2. Add these files to the root of that repo.
3. Push to `main`.
4. Go to `Settings -> Pages`.
5. Source: `Deploy from a branch`, Branch: `main`, Folder: `/ (root)`.
6. Open `https://yourusername.github.io`.

## Add resume

Upload your resume PDF in the repo (example: `assets/resume.pdf`) and set:

```js
resumeUrl: "./assets/resume.pdf"
