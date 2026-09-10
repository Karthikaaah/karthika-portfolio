import SectionHeading from "@/components/SectionHeading";

const posts = [
  {
    title: "How I’m Building My Cybersecurity Portfolio",
    category: "Career",
    date: "2026",
    summary:
      "A reflection on building practical evidence through labs, projects, write-ups, and AI-security experiments.",
  },
  {
    title: "Using Machine Learning for Phishing Detection",
    category: "AI Security",
    date: "2026",
    summary:
      "A beginner-friendly explanation of how text classification can support phishing email triage.",
  },
  {
    title: "What Makes a Good Security Lab Report?",
    category: "Technical Writing",
    date: "2026",
    summary:
      "Notes on writing clear security reports with scope, evidence, findings, impact, and remediation.",
  },
];

export default function BlogPage() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="Blog"
        title="Learning notes and research reflections"
        description="Short posts on cybersecurity, AI security, labs, research, and career development."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="card p-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
              {post.category} · {post.date}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-white">
              {post.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {post.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}