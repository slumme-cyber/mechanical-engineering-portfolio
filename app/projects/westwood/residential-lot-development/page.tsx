import Image from "next/image";
import Link from "next/link";

const skills = [
  "Carlson Survey 2024",
  "AutoCAD Civil 3D",
  "Residential Layout",
  "Improvement Plats",
  "Surface Modeling",
  "Utility Coordination",
];

const workflow = [
  {
    number: "01",
    title: "Field Collection",
    description:
      "Collect existing conditions, property evidence, utilities, structures, and site features using survey equipment.",
  },
  {
    number: "02",
    title: "Data Processing",
    description:
      "Import and organize GPS and total-station observations before developing usable survey linework.",
  },
  {
    number: "03",
    title: "Lot Layout",
    description:
      "Document boundaries, setbacks, easements, building footprints, decks, driveways, and neighboring parcels.",
  },
  {
    number: "04",
    title: "Improvement Survey",
    description:
      "Verify constructed improvements and prepare clear survey documentation showing their locations.",
  },
  {
    number: "05",
    title: "Grading Support",
    description:
      "Develop or review contours, finished elevations, drainage patterns, slopes, and surface information.",
  },
];

const challenges = [
  {
    title: "Property Constraints",
    description:
      "Each lot required the proposed building and supporting improvements to fit within a unique combination of boundaries, setbacks, easements, and road frontage.",
  },
  {
    title: "Utility Coordination",
    description:
      "Water, sanitary sewer, storm drainage, power, and other infrastructure had to be shown clearly relative to proposed structures and property limits.",
  },
  {
    title: "Survey Accuracy",
    description:
      "Field observations had to remain consistent throughout processing, drafting, verification, and final documentation.",
  },
  {
    title: "Drawing Clarity",
    description:
      "The final plans needed to communicate dense technical information without losing the hierarchy of the most important dimensions and site features.",
  },
];

export default function ResidentialLotDevelopmentPage() {
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
              Residential Land Development
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Residential Lot
              <span className="block text-slate-400">Development</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
              Supporting residential projects through field surveying, lot
              layout, improvement documentation, utility coordination, and
              grading-related drafting.
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
                  Project Type
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Residential Development
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Primary Software
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Carlson Survey and Civil 3D
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Work Environment
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Field and office
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.4)] sm:min-h-[540px] lg:min-h-[650px]">
            <Image
              src="/images/westwood/residential-lot-development.png"
              alt="Bridgeport residential lot development plan"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-center transition duration-700 hover:scale-[1.02]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-white/5" />

            <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm backdrop-blur md:bottom-7 md:left-7">
              Bridgeport residential lot plan
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-px px-6 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            {
              label: "Field Collection",
              value: "GPS, total station, data collector, and prism",
            },
            {
              label: "Drafting",
              value: "Property lines, improvements, easements, and utilities",
            },
            {
              label: "Documentation",
              value: "Proposed improvement plans and final survey plats",
            },
            {
              label: "Design Context",
              value: "Residential lots, subdivisions, roads, and grading",
            },
          ].map((item) => (
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
              Coordinating the pieces that define a residential lot.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Residential lot development required more than documenting a
              building footprint. Each drawing combined property geometry,
              setbacks, easements, road frontage, driveways, utilities,
              structures, grading information, and neighboring conditions.
            </p>

            <p>
              My work supported projects from initial field collection through
              office drafting and final survey documentation. Moving between
              those stages helped me understand how individual measurements
              become part of a complete development record.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-300">
              Project Workflow
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              From field observations to final lot documentation.
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

      {/* Aerial */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Existing Conditions
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Combining survey linework with real site context.
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-600">
            Aerial imagery helped provide visual context for property lines,
            easements, utilities, road connections, structures, and collected
            field information. The overlay connected technical survey data with
            recognizable site conditions.
          </p>
        </div>

        <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_28px_80px_-45px_rgba(15,23,42,0.4)]">
          <Image
            src="/images/westwood/residential-aerial.png"
            alt="Residential property aerial with survey and utility linework"
            fill
            sizes="100vw"
            className="object-cover object-center transition duration-700 hover:scale-[1.015]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 rounded-full bg-slate-950/80 px-4 py-2 text-sm font-medium text-white backdrop-blur md:bottom-7 md:left-7">
            Aerial imagery with survey overlay
          </div>
        </div>
      </section>

      {/* Bridgeport */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/westwood/residential-lot-development.png"
              alt="Bridgeport Lot 105 proposed improvements"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-contain p-4 transition duration-700 hover:scale-[1.015]"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Lot Planning
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Bridgeport proposed improvements.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                This plan brings together the proposed building, covered and
                uncovered decks, driveway, minimum setbacks, easements, lot
                dimensions, road frontage, and adjacent property information.
              </p>

              <p>
                The drawing demonstrates how residential improvements must be
                positioned within a defined legal and infrastructure framework
                rather than treated as isolated structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SF1 */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-32 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
            Improvement Survey
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
            Documenting completed residential improvements.
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              The SF1 improvement survey documents the completed residence,
              porch, driveway, utilities, easements, dimensions, and
              relationship between the improvements and property boundaries.
            </p>

            <p>
              This type of deliverable depends on accurate field verification
              and clear drafting so the constructed condition can be reviewed
              against the lot requirements.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <Image
            src="/images/westwood/foundation-improvement-surveys.png"
            alt="SF1 final residential improvement survey"
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-contain p-4 transition duration-700 hover:scale-[1.015]"
          />
        </div>
      </section>

      {/* Grade Plan */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[0.78fr_1.22fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
                Grading Context
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Understanding the lot within the larger development.
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-600">
              The grading plan shows how individual residential lots connect
              to roads, slopes, drainage features, contours, and the larger
              subdivision. It reinforced that lot development decisions must
              support the performance of the entire site.
            </p>
          </div>

          <div className="relative mt-14 aspect-[16/10] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/westwood/grading-design.png"
              alt="Residential development grading plan"
              fill
              sizes="100vw"
              className="object-contain p-4 transition duration-700 hover:scale-[1.01]"
            />

            <div className="absolute bottom-5 left-5 rounded-full bg-slate-950/85 px-4 py-2 text-sm font-medium text-white backdrop-blur md:bottom-7 md:left-7">
              Subdivision grading plan
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
              Managing accuracy, constraints, and dense technical information.
            </h2>
          </div>

          <p className="self-end text-lg leading-8 text-slate-600">
            Residential lot work required each property, structure, utility,
            and dimension to be considered as part of one coordinated system.
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
              Every residential lot is part of a larger engineered system.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                This work strengthened my understanding of how property
                boundaries, structures, utilities, grading, road frontage, and
                construction documentation depend on one another.
              </p>

              <p>
                It also reinforced the importance of maintaining survey
                accuracy from the original field observation through the final
                drawing. Every point and dimension contributes to decisions
                made later in the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/projects/westwood"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#7A263A]"
          >
            <span aria-hidden="true">←</span>
            Westwood Overview
          </Link>

          <Link
            href="/projects/westwood/grading-design"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A263A] transition hover:opacity-70"
          >
            Next: Grading Design
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}