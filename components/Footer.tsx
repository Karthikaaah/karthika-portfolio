export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800">
      <div className="container-page flex flex-col gap-3 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Karthika Sabu Sathi. Cybersecurity & AI Portfolio.
        </p>
        <p className="font-mono text-cyan-300">
          MSc Cybersecurity and AI · University of Sheffield
        </p>
      </div>
    </footer>
  );
}