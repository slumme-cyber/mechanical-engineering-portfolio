import Image from "next/image";
import Link from "next/link";

const skills = [
  "AutoCAD",
  "Carlson Survey 2024",
  "Trimble GPS",
  "Total Station",
  "As-Built Surveying",
  "Construction Verification",
];

const workflow = [
  {
    number: "01",
    title: "Review Design Information",
    description:
      "Review available plans, utility layouts, structures, and project requirements before beginning field collection.",
  },
  {
    number: "02",
    title: "Collect Constructed Conditions",
    description:
      "Measure installed utilities, structures, elevations, and site improvements using GPS and total-station equipment.",
  },
  {
    number: "03",
    title: "Process Field Data",
    description:
      "Import, organize, and review collected points and observations before drafting the documented conditions.",
  },
  {
    number: "04",
    title: "Update Project Drawings",
    description:
      "Use AutoCAD and Carlson Survey to show verified locations, elevations, utility information, and constructed improvements.",
  },
  {
    number: "05",
    title: "Prepare Final Documentation",
    description:
      "Create clear plan and profile documentation that records how the completed work compares with the original design information.",
  },
];

const challenges = [
  {
    title: "Hidden Infrastructure",
    description:
      "Many utility components become difficult or impossible to observe after backfilling, making accurate and timely field collection essential.",
  },
  {
    title: "Elevation Accuracy",
    description:
      "Pipe inverts, structures, and finished site features required dependable elevation information to support usable final records.",
  },
  {
    title: "Design Versus Construction",
    description:
      "Installed conditions may differ from the original plans, so drawings must accurately document what was actually constructed.",
  },
  {
    title: "Drawing Clarity",
    description:
      "As-built plans and profiles contain dense information that must remain readable for future engineering, maintenance, and construction use.",
  },
];

const snapshot = [
  {
    label: "Project Types",
    value: "Residential development and commercial construction",
  },
  {
    label: "Field Equipment",
    value: "Trimble GPS, total station, data collector, and prism",
  },
  {
    label: "Office Software",
    value: "AutoCAD and Carlson Survey 2024",
  },
  {
    label: "Deliverables",
    value: "As-built plans, utility profiles, elevations, and site records",
  },
];

export default function AsBuiltSurveyingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:pb-28 md:pt-14 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A263A] transition hover:opacity-70"
          >
            <span aria-hidden="true">←</span>
            Back to Projects
          </Link>

          <span className="hidden text-slate-300 sm:inline">/</span>

          <Link
            href="/projects/westwood"
            className="text-sm font-semibold text-slate-500 transition hover:text-[#7A263A]"
          >
            Westwood Overview
          </Link>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Field Verification & Documentation
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              As-Built
              <span className="block text-slate-400">Surveying</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
              Documenting constructed utilities, site improvements, structures,
              and elevations through field surveying and final drafting.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-slate-200 pt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Role
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Survey/Civil Engineering Intern
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Work Type
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Field and office
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Project Context
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Residential and commercial
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Main Focus
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Constructed-condition records
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_80px_-40px_rgba(15,23,42,0.4)]">
  <Image
    src="/images/westwood/as-built-plan.png"
    alt="Lily Gardens utility as-built plan and profile sheet"
    fill
    priority
    sizes="(min-width: 1024px) 55vw, 100vw"
    className="object-contain object-center transition duration-700 hover:scale-[1.01]"
  />

  <div className="absolute bottom-5 left-5 rounded-full bg-slate-950/85 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur md:bottom-7 md:left-7">
    Lily Gardens utility as-built documentation
  </div>
</div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-px px-6 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {snapshot.map((item) => (
            <div
              key={item.label}
              className="border-slate-200 px-0 py-6 sm:px-6 lg:border-r lg:last:border-r-0"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
                {item.label}
              </p>

              <p className="mt-3 max-w-xs leading-7 text-slate-700">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[0.72fr_1.28fr] md:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Overview
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Recording what was actually constructed.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              As-built surveying documents the final location and elevation of
              constructed improvements. These records help preserve accurate
              information about utilities, structures, pavement, grading, and
              other features after construction is complete.
            </p>

            <p>
              My responsibilities included assisting with field measurements,
              processing survey observations, and contributing to drawings
              that documented completed conditions. This work connected the
              original project plans with the physical site.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-300">
              As-Built Workflow
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              From construction-site measurements to final project records.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {workflow.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm font-bold text-rose-300">
                  {step.number}
                </p>

                <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lily Gardens Plan */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[0.78fr_1.22fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Lily Gardens
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Utility plan and profile documentation.
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-600">
            The Lily Gardens apartment project included detailed utility
            profiles documenting structures, pipe runs, invert elevations,
            slopes, ground elevations, and constructed conditions.
          </p>
        </div>

        <div className="relative mt-14 aspect-[16/10] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_80px_-45px_rgba(15,23,42,0.35)]">
          <Image
            src="/images/westwood/as-built-plan.png"
            alt="Lily Gardens utility as-built profiles"
            fill
            sizes="100vw"
            className="object-contain p-4 transition duration-700 hover:scale-[1.01]"
          />

          <div className="absolute bottom-5 left-5 rounded-full bg-slate-950/85 px-4 py-2 text-sm font-medium text-white backdrop-blur md:bottom-7 md:left-7">
            Pipe as-built plan and profiles
          </div>
        </div>
      </section>

      {/* Lily Gardens Site */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32 lg:px-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/westwood/lily-gardens.png"
              alt="Lily Gardens apartment development grading and site plan"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-contain p-4 transition duration-700 hover:scale-[1.01]"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Project Context
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Understanding utility records within the complete site.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                The site plan provides context for the roads, residential
                buildings, grading, pond, drainage features, and utility
                systems represented by the as-built profiles.
              </p>

              <p>
                Reviewing the project at both the overall site level and the
                detailed profile level helped connect individual measurements
                to the broader development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Field Collection */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Field Collection
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Capturing information before it becomes inaccessible.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Utility as-builts often needed to be collected while structures
                and pipe components were still exposed. Once construction
                advanced, critical locations and elevations could become hidden
                below pavement, soil, or finished landscaping.
              </p>

              <p>
                This made timing, communication with construction crews, and
                careful field notes important parts of the surveying process.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
              Typical Field Information
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Pipe locations",
                "Structure locations",
                "Invert elevations",
                "Top elevations",
                "Utility crossings",
                "Pavement and curb",
                "Building corners",
                "Finished site features",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verizon Store */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32 lg:px-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/images/westwood/verizon-store.jpg"
              alt="Completed Verizon commercial site"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-center transition duration-700 hover:scale-[1.02]"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Commercial Site Documentation
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Connecting drawings with completed site conditions.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                The Verizon store provided a commercial example of the same
                field-to-office process. Completed pavement, curbing,
                sidewalks, landscaping, utilities, and building improvements
                all needed to be represented accurately within the project
                records.
              </p>

              <p>
                Seeing the constructed site reinforced how survey drawings
                support verification, closeout documentation, maintenance, and
                future modifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Engineering Challenges
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Preserving dependable information after construction.
            </h2>
          </div>

          <p className="self-end text-lg leading-8 text-slate-600">
            As-built documentation depended on accurate measurements, proper
            timing, clear communication, and careful translation of field data
            into usable final drawings.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {challenges.map((challenge, index) => (
            <article
              key={challenge.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#7A263A]/30 hover:shadow-xl hover:shadow-slate-200/60 md:p-10"
            >
              <p className="text-sm font-bold text-[#7A263A]">
                0{index + 1}
              </p>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight">
                {challenge.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {challenge.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Lessons */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-12 text-white sm:px-12 md:py-16 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-300">
            What I Learned
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-[0.78fr_1.22fr]">
            <h2 className="text-4xl font-semibold tracking-[-0.035em]">
              Final records are only as reliable as the information collected
              in the field.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                As-built surveying showed me how important it is to collect
                accurate information at the correct stage of construction.
                Measurements taken before utilities are buried or site features
                are covered may become the permanent record of that work.
              </p>

              <p>
                The experience strengthened my ability to connect design plans,
                field conditions, survey observations, and final documentation
                into one continuous professional workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/projects/westwood/grading-design"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#7A263A]"
          >
            <span aria-hidden="true">←</span>
            Previous: Grading Design
          </Link>

          <Link
            href="/projects/westwood/townhome-site-layout"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A263A] transition hover:opacity-70"
          >
            Next: Townhome Site Layout
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}