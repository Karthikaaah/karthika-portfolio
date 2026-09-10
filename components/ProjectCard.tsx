import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card p-6 transition hover:-translate-y-1 hover:border-cyan-400/50">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
          {project.category}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-white">{project.title}</h3>

      <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
        <p>
          <span className="font-semibold text-slate-100">Problem:</span>{" "}
          {project.problem}
        </p>
        <p>
          <span className="font-semibold text-slate-100">Action:</span>{" "}
          {project.action}
        </p>
        <p>
          <span className="font-semibold text-slate-100">Outcome:</span>{" "}
          {project.outcome}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4 text-sm">
        {project.links?.github && (
          <a href={project.links.github} className="text-cyan-300 hover:underline">
            GitHub
          </a>
        )}
        {project.links?.report && (
          <a href={project.links.report} className="text-cyan-300 hover:underline">
            Report
          </a>
        )}
        {project.links?.demo && (
          <a href={project.links.demo} className="text-cyan-300 hover:underline">
            Demo
          </a>
        )}
      </div>
    </article>
  );
}