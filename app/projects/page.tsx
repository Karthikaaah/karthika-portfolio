import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Cybersecurity and AI case studies"
        description="A collection of practical projects focused on detection, analysis, reporting, and secure use of AI."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}