import SectionHeading from "@/components/SectionHeading";
import { writeups } from "@/data/writeups";

export default function WriteupsPage() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="Write-ups"
        title="Technical reports and lab documentation"
        description="Write-ups show how I investigate, explain, and communicate security work clearly."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {writeups.map((writeup) => (
          <article key={writeup.title} className="card p-6">
            <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs text-purple-200">
              {writeup.type}
            </span>
            <h3 className="mt-5 text-xl font-semibold text-white">
              {writeup.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {writeup.summary}
            </p>
            <p className="mt-5 font-mono text-xs text-cyan-300">
              Status: {writeup.status}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}