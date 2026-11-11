import SectionHeading from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="About"
        title="Cybersecurity and AI postgraduate"
        description="My work focuses on practical security, AI-driven detection, investigation, and clear technical communication."
      />

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="card p-8 text-slate-300">
          <p className="leading-8">
            I’m an MSc Cybersecurity and AI graduate from the University of
            Sheffield, completed course successfully with Merit. My interests sit
            at the intersection of cyber defence, adversarial thinking, and
            applied machine learning.
          </p>

          <p className="mt-6 leading-8">
            I enjoy investigating how attacks happen, how systems can detect
            them, and how AI can support faster and more reliable decision-making
            in security environments. I’m building hands-on experience through
            academic work, labs, CTF-style practice, independent projects, and
            structured technical write-ups.
          </p>
        </div>

        <aside className="card p-8">
          <h3 className="text-xl font-semibold text-white">Profile</h3>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-slate-500">University</dt>
              <dd className="text-slate-200">University of Sheffield</dd>
            </div>
            <div>
              <dt className="text-slate-500">Programme</dt>
              <dd className="text-slate-200">MSc Cybersecurity and AI</dd>
            </div>
            <div>
              <dt className="text-slate-500">Expected Graduation</dt>
              <dd className="text-slate-200">September 2026</dd>
            </div>
            <div>
              <dt className="text-slate-500">Focus</dt>
              <dd className="text-slate-200">
                Threat detection, AI security, SOC analysis, secure systems
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
