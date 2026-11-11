import SectionHeading from "@/components/SectionHeading";

const posts = [
  {
    title: "Multi-Party Computation",
    category: "Technical Article",
    date: "2026",
    area: "Cryptography",
    content:"Privacy",
    summary:
      "An introduction to privacy-preserving computation, exploring how mutually distrustful parties can securely collaborate without exposing their private inputs.",
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
              {post.category} · {post.date} {post.area} {post.content}
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
