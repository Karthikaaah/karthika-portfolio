import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s connect"
        description="I’m open to graduate roles, internships, research opportunities, and cybersecurity or AI project collaboration."
      />

      <div className="card max-w-2xl p-8">
        <div className="space-y-5 text-slate-300">
          <p>
            <span className="font-semibold text-white">Email:</span>{" "}
            karthikasathy45@gmail.com
          </p>
          <p>
            <span className="font-semibold text-white">LinkedIn:</span>{" "}
            <a href="https://www.linkedin.com/in/karthika-s-s-" className="text-cyan-300 hover:underline">
              linkedin.com/in/karthika-s-s-
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">GitHub:</span>{" "}
            <a href="#" className="text-cyan-300 hover:underline">
              github.com/your-username
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">TryHackMe:</span>{" "}
            <a href="#" className="text-cyan-300 hover:underline">
              tryhackme.com/p/your-username
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}