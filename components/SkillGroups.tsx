import { skillGroups } from "@/data/skills";

export default function SkillGroups() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((group) => (
        <div
          key={group.label}
          className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="h-1 w-10 rounded-full bg-[#7A263A]" />

          <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
            {group.label}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
