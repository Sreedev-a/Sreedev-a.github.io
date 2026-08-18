import { ArrowUpRight, Github } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { ProjectMedia } from "./ProjectMedia";

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: readonly string[];
  image: string;
  github: string;
  demo: string;
};

export function ProjectCard({ project, index, variant = "standard" }: { project: Project; index: number; variant?: "featured" | "standard" }) {
  const visibleTech = project.tech.slice(0, 5);
  const remaining = project.tech.length - visibleTech.length;

  return <GlassCard className={`project ${variant}`}>
    <ProjectMedia src={project.image} alt={`${project.title} project cover`} category={project.category} variant={variant} priority={variant === "featured"} number={String(index + 1).padStart(2, "0")} />
    <div className="project-content">
      <span className="eyebrow">{project.category}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="pills project-tech">{visibleTech.map((technology) => <span key={technology}>{technology}</span>)}{remaining > 0 && <span>+{remaining}</span>}</div>
      {(project.demo || project.github) && <div className="project-actions">
        {project.demo && <a className="project-action primary" href={project.demo} target="_blank" rel="noreferrer">View Project <ArrowUpRight /></a>}
        {project.github && <a className="project-action secondary" href={project.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>}
      </div>}
    </div>
  </GlassCard>;
}
