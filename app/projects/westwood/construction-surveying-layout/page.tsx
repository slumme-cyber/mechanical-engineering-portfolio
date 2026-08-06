import Image from "next/image";
import Link from "next/link";

const skills = [
  "Construction Layout",
  "Total Station",
  "GPS Surveying",
  "Stakeout",
  "Site Verification",
  "Field Coordination",
];

const workflow = [
  {
    number: "01",
    title: "Review Construction Plans",
    description:
      "Review site plans, dimensions, offsets, building locations, curb geometry, and required stakeout information before entering the field.",
  },
  {
    number: "02",
    title: "Establish Control",
    description:
      "Set up the survey equipment using known control points so construction locations can be accurately transferred from the drawings to the site.",
  },
  {
    number: "03",
    title: "Perform Stakeout",
    description:
      "Locate proposed improvements and place physical stakes that communicate alignment, offsets, elevations, and construction limits.",
  },
  {
    number: "04",
    title: "Verify Layout",
    description:
      "Check measurements and field conditions to confirm that the layout matches the project information and remains usable for the construction crew.",
  },
  {
    number: "05",
    title: "Document Field Work",
    description:
      "Record completed stakeout work, field observations, and any conditions requiring additional review or coordination.",
  },
];

const responsibilities = [
  {
    title: "Building Layout",
    description:
      "Supported the physical layout of residential structures using building corners, offsets, and reference stakes.",
  },
  {
    title: "Curb Stakeout",
    description:
      "Placed stakes and reference information used to establish curb alignment and support roadway construction.",
  },
  {
    title: "Construction Verification",
    description:
      "Measured active site conditions and checked locations against available construction and design information.",
  },
  {
    title: "Crew Coordination",
    description:
      "Worked with survey staff and construction personnel to ensure field information was clear, accurate, and usable.",
  },
];

const equipment = [
  {
    title: "Total Station",
    description:
      "Used for precise angle, distance, and layout measurements on active construction sites.",
  },
  {
    title: "GPS Rover",
    description:
      "Used for efficient positioning, field collection, and layout across larger project areas.",
  },
  {
    title: "Data Collector",
    description:
      "Managed project points, stakeout information, field codes, and recorded observations.",
  },
  {
    title: "Stakes and Markings",
    description:
      "Provided visible reference points for proposed buildings, curbs, utilities, and construction features.",
  },
];

const snapshot = [
  {
    label: "Role",
    value: "Survey/Civil Engineering Intern",
  },
  {
    label: "Environment",
    value: "Active residential and commercial construction sites",
  },
  {
    label: "Equipment",
    value: "Total station, GPS rover, data collector, and prism",
  },
  {
    label: "Primary Work",
    value: "Stakeout, building layout, curb layout, and site verification",
  },
];

export default function ConstructionSurveyingLayoutPage() {
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
              Field Operations & Construction Support
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Construction
              <span className="block text-slate-400">
                Surveying & Layout
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
              Supporting active construction projects through building layout,
              curb stakeout, field verification, and the transfer of design
              information into physical site locations.
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
                  Construction Layout
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Environment
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Active Field Sites
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Main Focus
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Stakeout and Verification
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.4)]">
            <Image
              src="/images/westwood/field-work.png"
              alt="Field surveying with a total station"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-center transition duration-700 hover:scale-[1.02]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-full bg-slate-950/85 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur md:bottom-7 md:left-7">
              Total-station field operations
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
              Translating engineering drawings into physical locations.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Construction surveying connects the design information shown on a
              drawing with the work performed by construction crews in the
              field. Proposed buildings, curbs, roads, utilities, and site
              features must be accurately located before construction can move
              forward.
            </p>

            <p>
              During my internship, I supported stakeout and verification work
              on residential and commercial projects. This involved reviewing
              project information, setting up survey equipment, locating design
              points, placing stakes, and communicating field information to
              other members of the project team.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-300">
              Field Workflow
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              From digital plans to construction reference points.
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

      {/* Field Operations */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.08fr_0.92fr] md:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/images/westwood/field-work.png"
              alt="Operating a total station during field surveying"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-center transition duration-700 hover:scale-[1.02]"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Field Operations
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Working directly with survey equipment on active sites.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Total-station work required accurate setup, instrument
                orientation, point selection, communication with the rod person,
                and consistent verification throughout the survey.
              </p>

              <p>
                Working in wooded, undeveloped, and active construction areas
                also required adapting to terrain, visibility, changing site
                conditions, and limited access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curb Stakeout */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-32 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Curb Stakeout
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Establishing roadway and curb reference points.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Curb stakeout provides construction crews with physical
                references for proposed roadway geometry. Stakes may communicate
                alignment, offset, elevation, stationing, or other information
                needed to construct the curb according to the plans.
              </p>

              <p>
                The work required maintaining a clear relationship between the
                design geometry, control points, site conditions, and the marks
                placed in the field.
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/images/westwood/curb-stakeout.png"
              alt="Construction stakes placed for curb layout"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-center transition duration-700 hover:scale-[1.02]"
            />

            <div className="absolute bottom-5 left-5 rounded-full bg-slate-950/85 px-4 py-2 text-sm font-medium text-white backdrop-blur md:bottom-7 md:left-7">
              Curb and roadway stakeout
            </div>
          </div>
        </div>
      </section>

      {/* House Staking */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/images/westwood/house-staking.jpeg"
              alt="Residential building footprint stakes"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-center transition duration-700 hover:scale-[1.02]"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Residential Building Layout
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Defining the building footprint before construction.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                House staking transfers the proposed building footprint from
                the residential plans into the field. The stakes provide
                references for building corners, offsets, foundation layout,
                excavation, and related construction work.
              </p>

              <p>
                This process connected directly with the residential lot plans
                I worked with in the office, including building placement,
                setbacks, lot boundaries, driveways, and surrounding site
                constraints.
              </p>
            </div>

            <Link
              href="/projects/westwood/residential-lot-development"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#7A263A] hover:text-[#7A263A]"
            >
              View Residential Lot Development
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Construction Context */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-32 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Construction Context
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Seeing how layout decisions guide completed construction.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Stakes and survey markings are temporary, but they guide work
                that becomes permanent. Buildings, pavement, curbing,
                sidewalks, utilities, and landscaping all depend on reliable
                reference information during construction.
              </p>

              <p>
                Observing completed and active sites helped connect individual
                survey tasks with the larger construction process.
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/images/westwood/construction-documentation.jpg"
              alt="Active construction site with survey stakes and site improvements"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-center transition duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Field Responsibilities
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Supporting accurate construction through layout and verification.
            </h2>
          </div>

          <p className="self-end text-lg leading-8 text-slate-600">
            Construction surveying required technical accuracy, clear field
            communication, reliable equipment operation, and an understanding
            of how design information would be used by the construction crew.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {responsibilities.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#7A263A]/30 hover:shadow-xl hover:shadow-slate-200/60 md:p-10"
            >
              <p className="text-sm font-bold text-[#7A263A]">
                0{index + 1}
              </p>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Equipment */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Field Equipment
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Tools used to transfer design information into the field.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {equipment.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7"
              >
                <p className="text-sm font-bold text-[#7A263A]">
                  0{index + 1}
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

      {/* Lessons */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-12 text-white sm:px-12 md:py-16 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-300">
            What I Learned
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-[0.78fr_1.22fr]">
            <h2 className="text-4xl font-semibold tracking-[-0.035em]">
              Construction layout is where design accuracy becomes physical.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                Every stake placed in the field represented information that
                originated within a drawing, coordinate file, or design model.
                Small errors could directly affect excavation, concrete,
                roadway alignment, or building placement.
              </p>

              <p>
                The experience strengthened my ability to operate survey
                equipment, interpret construction information, adapt to field
                conditions, communicate with coworkers, and understand how
                engineering documentation supports real construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/projects/westwood/as-built-surveying"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#7A263A]"
          >
            <span aria-hidden="true">←</span>
            Previous: As-Built Surveying
          </Link>

          <Link
            href="/projects/westwood"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A263A] transition hover:opacity-70"
          >
            Return to Westwood Overview
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}