import Image from "next/image";
import Link from "next/link";

const skills = [
  "AutoCAD",
  "Carlson Survey 2024",
  "Surface Creation",
  "Contour Drafting",
  "Drainage Review",
  "Site Grading",
];

const workflow = [
  {
    number: "01",
    title: "Collect Existing Conditions",
    description:
      "Use field survey data and available project information to document the existing terrain, roads, structures, and site features.",
  },
  {
    number: "02",
    title: "Process Survey Data",
    description:
      "Organize field observations and develop usable linework and elevation information for the existing site.",
  },
  {
    number: "03",
    title: "Create the Existing Surface",
    description:
      "Build a digital representation of the existing terrain using surveyed elevations, breaklines, and site features.",
  },
  {
    number: "04",
    title: "Develop Proposed Grading",
    description:
      "Support proposed contours, finished elevations, slopes, drainage paths, and grading transitions around roads and lots.",
  },
  {
    number: "05",
    title: "Prepare Plan Documentation",
    description:
      "Translate the grading information into a readable construction plan with labels, contours, details, and supporting notes.",
  },
];

const challenges = [
  {
    title: "Drainage Continuity",
    description:
      "Proposed grading needed to direct water away from buildings and roadways while maintaining a continuous drainage path across the site.",
  },
  {
    title: "Terrain Transitions",
    description:
      "Changes between roads, lots, slopes, and drainage features had to be represented smoothly without creating unrealistic or abrupt contour patterns.",
  },
  {
    title: "Dense Plan Information",
    description:
      "The finished sheet included contours, elevations, road geometry, grading labels, drainage information, and site features that needed a clear visual hierarchy.",
  },
  {
    title: "Field-to-Surface Accuracy",
    description:
      "The quality of the grading plan depended on correctly processing the original survey information and preserving important terrain features.",
  },
];

const responsibilities = [
  {
    label: "Existing Conditions",
    value: "Survey data, site features, elevations, and terrain information",
  },
  {
    label: "Surface Work",
    value: "Existing-ground surfaces, breaklines, and contour development",
  },
  {
    label: "Drafting Support",
    value: "Proposed contours, slopes, elevations, labels, and plan cleanup",
  },
  {
    label: "Project Context",
    value: "Residential subdivision and land-development grading",
  },
];

export default function GradingDesignPage() {
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
              Civil Site Design
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Grading
              <span className="block text-slate-400">Design</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
              Supporting residential grading plans through survey-data
              processing, surface creation, contour development, drainage
              review, and construction-plan drafting.
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
                  Residential Site Grading
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Primary Software
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  AutoCAD and Carlson Survey
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Primary Focus
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Surfaces, contours, and drainage
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_80px_-40px_rgba(15,23,42,0.4)] sm:min-h-[540px] lg:min-h-[650px]">
            <Image
              src="/images/westwood/grading-design.png"
              alt="Residential subdivision grading plan"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-contain p-4 transition duration-700 hover:scale-[1.01]"
            />

            <div className="absolute bottom-5 left-5 rounded-full bg-slate-950/85 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur md:bottom-7 md:left-7">
              Residential subdivision grading plan
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-px px-6 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {responsibilities.map((item) => (
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
              Turning survey elevations into a coordinated site surface.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Grading design connects the existing terrain with the proposed
              roads, lots, drainage features, and finished construction
              elevations. Each contour represents part of a larger surface that
              must function continuously across the development.
            </p>

            <p>
              During my internship, I supported this process by working with
              survey data, developing and reviewing surfaces, drafting contour
              information, and preparing grading-related plan documentation.
              The work required careful attention to both technical accuracy
              and drawing clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-300">
              Grading Workflow
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Building the site from field information to finished plans.
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

      {/* Full Plan */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[0.78fr_1.22fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Plan Development
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Communicating the entire grading system on one sheet.
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-600">
            The grading plan combines existing and proposed contours, road
            geometry, residential lots, drainage features, slopes, elevation
            labels, notes, and construction details into a coordinated
            document.
          </p>
        </div>

        <div className="relative mt-14 aspect-[16/10] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_80px_-45px_rgba(15,23,42,0.35)]">
          <Image
            src="/images/westwood/grading-design.png"
            alt="Full residential grading plan showing contours and site layout"
            fill
            sizes="100vw"
            className="object-contain p-4 transition duration-700 hover:scale-[1.01]"
          />

          <div className="absolute bottom-5 left-5 rounded-full bg-slate-950/85 px-4 py-2 text-sm font-medium text-white backdrop-blur md:bottom-7 md:left-7">
            Full grading-plan sheet
          </div>
        </div>
      </section>

      {/* Surface and Contours */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/westwood/grading-design.png"
              alt="Grading plan contour and residential lot detail"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-center transition duration-700 hover:scale-[1.02]"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Surface Modeling
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Representing terrain through surfaces and contours.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                A digital surface converts surveyed elevations and breaklines
                into a model of the site terrain. Contours then provide a
                readable plan-view representation of that surface.
              </p>

              <p>
                Surface quality depended on organized survey information,
                correct feature interpretation, and careful review of contour
                behavior around roads, slopes, drainage areas, and proposed
                improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drainage */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-32 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
            Drainage and Slopes
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
            Guiding water through the completed development.
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Proposed grading needed to establish positive drainage away from
              buildings and maintain continuous flow toward the intended
              drainage features.
            </p>

            <p>
              Roads, lots, embankments, drainage areas, and existing terrain
              could not be considered independently. Each transition influenced
              the performance and constructability of the surrounding site.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <Image
            src="/images/westwood/grading-design.png"
            alt="Residential grading and drainage area detail"
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover object-[center_58%] transition duration-700 hover:scale-[1.02]"
          />
        </div>
      </section>

      {/* Plan Interpretation */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Drawing Interpretation
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Reading a grading plan as a connected system.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Understanding the sheet required following the relationship
              between contours, spot elevations, roads, lots, drainage
              features, slopes, and existing site conditions rather than
              reading each item independently.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Contours",
                description:
                  "Show the shape, elevation changes, and direction of the proposed terrain.",
              },
              {
                number: "02",
                title: "Spot Elevations",
                description:
                  "Provide precise elevations at critical locations such as roads, structures, and drainage points.",
              },
              {
                number: "03",
                title: "Slopes",
                description:
                  "Define transitions between higher and lower areas while supporting drainage and constructability.",
              },
              {
                number: "04",
                title: "Drainage Features",
                description:
                  "Collect, direct, or manage runoff as it moves through the development.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#7A263A]/30 hover:shadow-lg"
              >
                <p className="text-sm font-bold text-[#7A263A]">
                  {item.number}
                </p>

                <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
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
              Balancing drainage, terrain, accuracy, and drawing clarity.
            </h2>
          </div>

          <p className="self-end text-lg leading-8 text-slate-600">
            A grading plan is successful only when the modeled surface
            functions technically and can also be interpreted clearly by the
            people using the construction documents.
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
              A contour line is only one part of the complete site.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                This work strengthened my understanding of how survey data,
                terrain modeling, roads, residential lots, slopes, and drainage
                systems come together within a civil site plan.
              </p>

              <p>
                It also reinforced the importance of reviewing grading as a
                continuous system. An adjustment in one area can change
                drainage behavior, contour transitions, elevations, and
                constructability elsewhere on the site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/projects/westwood/residential-lot-development"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#7A263A]"
          >
            <span aria-hidden="true">←</span>
            Previous: Residential Lot Development
          </Link>

          <Link
            href="/projects/westwood/as-built-surveying"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A263A] transition hover:opacity-70"
          >
            Next: As-Built Surveying
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}