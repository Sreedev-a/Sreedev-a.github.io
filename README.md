# Sreedev A — Portfolio

A static, production-ready AI/ML engineering portfolio with an Apple-inspired glass interface. Built with Next.js App Router, TypeScript, CSS, and Lucide icons, then exported for GitHub Pages.

## Preview

Add a screenshot at `public/portfolio-preview.png` after deployment.

## Development

```bash
npm install
npm run dev
```

Create the production static export in `out/`:

```bash
npm run build
```

## Editing content

All personal information, work experience, projects, skills, education, navigation, and social links live in `src/data/portfolio.ts`. Add a project by adding another item to the `projects` array. Project code buttons are hidden until a valid `repo` URL is added.

Place the real resume at `public/resume/Sreedev_A_Resume.pdf`. The site builds even before that file is supplied. Update the education institution placeholder in the portfolio data file.

## GitHub Pages

The project is configured with `output: "export"` for the root user site `https://sreedev-a.github.io`. Push to `main`; `.github/workflows/deploy.yml` installs dependencies, builds the `out` directory, uploads it, and deploys with the official GitHub Pages actions. In the repository settings, choose **GitHub Actions** as the Pages source.

## Stack

- Next.js App Router and React
- TypeScript
- Tailwind CSS with bespoke responsive component styling
- Lucide React
- GitHub Actions / GitHub Pages
