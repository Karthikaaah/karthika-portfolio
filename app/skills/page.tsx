import SectionHeading from "@/components/SectionHeading";
import { roleMapping, skillGroups } from "@/data/skills";

export default function SkillsPage() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Skills mapped to cybersecurity roles"
        description=""
      />

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="card p-6">
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-slate-800 px-3 py-1.5 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-slate-800">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-900 text-slate-200">
            <tr>
              <th className="p-4">Role Direction</th>
              <th className="p-4">Skills</th>
              <th className="p-4">Evidence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 bg-slate-950/50 text-slate-300">
            {roleMapping.map((item) => (
              <tr key={item.role}>
                <td className="p-4 font-medium text-cyan-300">{item.role}</td>
                <td className="p-4">{item.skills}</td>
                <td className="p-4">{item.evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}