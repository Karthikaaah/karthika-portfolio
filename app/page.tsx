import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <section className="container-page py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-4xl">
            
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              MSc Cybersecurity & AI student building practical security
              projects.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Hi, I’m <span className="text-white">Karthika</span>, an MSc
              Cybersecurity and AI student at the University of Sheffield,
              expected to graduate in September 2026. I’m developing hands-on
              experience across cyber defence, penetration testing, AI security,
              threat detection, and technical reporting.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-cyan-300/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-slate-900 p-2 shadow-2xl">
                <Image
                  src="/images/profile.jpeg"
                  alt="Portrait of Your Name"
                  width={420}
                  height={520}
                  priority
                  className="h-[420px] w-[340px] rounded-[1.5rem] object-cover grayscale transition duration-200 hover:grayscale-0 md:h-[520px] md:w-[420px]"
                />
              </div>

              <div className="absolute -bottom-5 left-6 rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm shadow-xl backdrop-blur">
                <p className="font-mono text-cyan-300">available_for</p>
                <p className="mt-1 text-slate-200">
                  Graduate cyber roles · 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            "AI for Cybersecurity",
            "SOC & Threat Detection",
            "Security Reporting",
          ].map((item) => (
            <div key={item} className="card p-5">
              <p className="font-mono text-sm text-cyan-300">focus_area</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow=""
          title="Featured Works"
          description="Each project is written as a case study: the problem, the action taken, the tools used, and the outcome."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="card p-8 md:p-10">
          <SectionHeading
            eyebrow="For Recruiters"
            title="What I’m targeting"
            description="Graduate and internship roles where I can combine cybersecurity fundamentals with AI and data-driven security analysis."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Graduate Cybersecurity Analyst",
              "SOC Analyst",
              "AI Security Analyst",
              "Security Research Intern",
            ].map((role) => (
              <div
                key={role}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200"
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}