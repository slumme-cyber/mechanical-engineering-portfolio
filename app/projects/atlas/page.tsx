import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Atlas" };

const projectDetails = [
  {
    label: "Role",
    value: "System Designer",
  },
  {
    label: "Timeline",
    value: "Built Summer 2026, in daily use since August 2026",
  },
  {
    label: "Tools",
    value: "Obsidian, Claude Code, AI",
  },
  {
    label: "Focus",
    value: "Knowledge management and workflow automation",
  },
];

const features = [
  "Centralized personal knowledge system built in Obsidian",
  "Structured organization for projects, academics, career, and planning",
  "AI-assisted capture, classification, linking, and information retrieval",
  "Automated morning brief, daily plan, midday check, and nightly close-out, written to one file per day",
  "Nightly filing of new captures into people, projects, health logs, and tasks",
  "Weekly reviews and exam study plans built from the course material in the vault",
  "Handwritten lecture notes converted into searchable, linked course notes",
  "Defined permissions and governance rules, with every automated change logged",
];

export default function AtlasPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="px-6 pb-20 pt-12 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/projects"
            className="text-sm font-semibold text-slate-600 transition hover:text-[#7A263A]"
          >
            ← Back to Projects
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
              Data Systems & AI Automation
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              Atlas
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              A personal knowledge and data system designed to organize
              projects, academics, career information, planning, and daily
              capture into a structured database that can be interpreted and
              maintained with AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Obsidian", "AI", "Automation", "Data Systems"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projectDetails.map((detail) => (
              <div
                key={detail.label}
                className="border-t-2 border-[#7A263A] pt-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {detail.label}
                </p>
                <p className="mt-3 leading-7 text-slate-800">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-slate-50 px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
              Objective
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Build a system where information becomes usable instead of
              simply stored.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Atlas was developed as a structured second-brain system rather
              than a traditional collection of notes. Information is organized
              into defined areas such as projects, academics, people, planning,
              and knowledge so that it can be searched, connected, and reused
              later.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              AI operates as a processing layer over the system, helping turn
              daily capture into structured information while following
              predefined rules for organization, permissions, and automation.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
              System Features
            </p>

            <div className="mt-6 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-4 border-b border-slate-200 pb-4"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7A263A]" />
                  <p className="leading-7 text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRAPH */}
      <section className="px-6 pt-20 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
            The System Today
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950">
            Every note, and every link between them.
          </h2>

          <div className="relative mt-10 aspect-[1500/1159] w-full overflow-hidden rounded-[2rem] bg-[#1b1b1b]">
            <Image
              src="/images/projects/atlas-graph.png"
              alt="Obsidian graph view of the Atlas vault, showing hundreds of linked notes grouped into clusters"
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-contain"
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Obsidian&apos;s graph view of the vault, November 2026. Each dot
            is a note and each line is a link. Larger dots are notes with
            more connections.
          </p>
        </div>
      </section>

      {/* STATUS */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
            Outcome
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
            From a set of design documents to a system I use every day.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Atlas has been in daily use since August 2026. Each morning it
            writes a brief and a prioritized plan from my class schedule,
            deadlines, and notes. Each night it files whatever I captured
            during the day and closes out the day&apos;s record. Weekly
            reviews, exam study plans, health logs, and lecture-note
            processing all run on the same structure and rules.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            The build is complete. The work now is maintenance: tightening
            rules when something breaks, and keeping the system accurate as
            my semester and projects change.
          </p>
        </div>
      </section>

      {/* LESSONS LEARNED */}
      <section className="bg-slate-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
            Lessons Learned
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
            A system worth using takes time and refinement.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            The first version of Atlas worked on paper. Making it worth
            using every day took weeks of running it on real information,
            finding where it broke, and refining it. That was especially
            true where several tools had to work together: getting the
            vault, the AI, and the scheduled automation to cooperate
            reliably took more iteration than building any one piece on
            its own.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-[#7A263A]">
              Explore another project
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              View the complete project collection.
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#7A263A] hover:text-[#7A263A]"
          >
            All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}