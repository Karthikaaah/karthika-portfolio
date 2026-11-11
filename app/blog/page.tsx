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
    link: "https://placid-bridge-fcf.notion.site/Multi-Party-Computation-MPC-3d798fdc1c2f80ad8ad5cc58e5cca561?source=copy_link",
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
            <a
  href={post.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
>
  Read Full Article →
</a>
          </article>
        ))}
      </div>
    </section>
  );
}
