import Image from "next/image";
import Link from "next/link";

const skills = [
  "Carlson Survey 2024",
  "Trimble GPS",
  "Total Station",
  "Survey Drafting",
  "Surface Creation",
];

const responsibilities = [
  {
    number: "01",
    title: "Field Data Collection",
    description:
      "Collected existing-condition, construction, utility, and as-built information using GPS equipment, total stations, data collectors, and prisms.",
  },
  {
    number: "02",
    title: "Survey Data Processing",
    description:
      "Processed field observations and point data before converting the information into organized linework, surfaces, and survey documentation.",
  },
  {
    number: "03",
    title: "Civil Drafting",
    description:
      "Supported residential and commercial projects through lot layouts, improvement plans, grading drawings, plats, and construction-related documentation.",
  },
  {
    number: "04",
    title: "Project Verification",
    description:
      "Compared field conditions with design information to document constructed improvements and help maintain accurate project records.",
  },
];

const projects = [
  {
    title: "Residential Lot Development",
    category: "Surveying & Site Planning",
    description:
      "Residential development work involving property geometry, proposed improvements, setbacks, easements, building placement, driveways, utilities, foundation surveys, and final improvement documentation.",
    image: "/images/westwood/residential-lot-development.png",
    href: "/projects/westwood/residential-lot-development",
    tools: ["Carlson Survey", "Lot Layout", "Plats"],
  },
  {
    title: "Grading Design",
    category: "Civil Site Design",
    description:
      "Development and review of proposed contours, finished elevations, drainage patterns, slopes, surfaces, and grading-related construction information.",
    image: "/images/westwood/grading-design.png",
    href: "/projects/westwood/grading-design",
    tools: ["AutoCAD", "Surface Modeling", "Grading"],
  },
  {
    title: "As-Built Surveying",
    category: "Field Verification",
    description:
      "Collection and documentation of constructed utilities and site improvements, including field measurements later incorporated into project drawings and records.",
    image: "/images/westwood/storm-sewer-profiles.png",
    href: "/projects/westwood/as-built-surveying",
    tools: ["Trimble GPS", "Total Station", "As-Builts"],
  },
  {
    title: "Townhome Site Layout",
    category: "Residential Development",
    description:
      "Multi-unit residential planning involving building footprints, repeated lot geometry, setbacks, road frontage, utility connections, and constrained site layouts.",
    image: "/images/westwood/townhome-site-layout.png",
    href: "/projects/westwood/townhome-site-layout",
    tools: ["Site Layout", "Utilities", "Civil Drafting"],
  },
  {
    title: "Construction Documentation",
    category: "Field & Construction Support",
    description:
      "Field verification, construction observations, measurements, and documentation connecting engineering drawings with real site conditions.",
    image: "/images/westwood/construction-documentation.jpg",
    href: "/projects/westwood/construction-documentation",
    tools: ["Field Surveying", "Documentation", "Verification"],
  },
];

const workflow = [
  "Collect field data",
  "Process survey observations",
  "Draft existing conditions",
  "Create surfaces and linework",
  "Prepare project documentation",
  "Verify constructed conditions",
];

export default function WestwoodPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:pb-28 md:pt-14 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A263A] transition hover:opacity-70"
        >
          <span aria-hidden="true">←</span>
          Back to Projects
        </Link>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Professional Engineering Experience
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Westwood
              <span className="block text-slate-400">
                Professional Services
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
              Survey and civil engineering experience spanning field data
              collection, survey processing, drafting, grading, site
              development, and construction documentation.
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
                  Position
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Survey Intern
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Term
                </p>
                <p className="mt-2 font-medium text-slate-800">Summer 2026</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Work Split
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Field and office
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Project Focus
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Land development
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.45)] sm:min-h-[540px] lg:min-h-[650px]">
            <Image
              src="/images/westwood/westwood-overview.jpg"
              alt="Westwood Professional Services topographic project graphic"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-center transition duration-700 hover:scale-[1.02]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" />
          </div>
        </div>
      </section>

      {/* Experience Snapshot */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-px px-6 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            {
              label: "Field Equipment",
              value: "Trimble GPS, total station, data collector, and prism",
            },
            {
              label: "Office Software",
              value: "Carlson Survey 2024 and AutoCAD",
            },
            {
              label: "Deliverables",
              value: "Plats, surfaces, grading plans, and as-built drawings",
            },
            {
              label: "Project Types",
              value: "Residential development and commercial site work",
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
              Working between field conditions and engineering documentation.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              During my internship with Westwood Professional Services, I
              supported land-development projects through both field surveying
              and office drafting. The role gave me experience with the entire
              survey workflow, beginning with measurements collected on site
              and continuing through processing, drafting, review, and final
              documentation.
            </p>

            <p>
              My office responsibilities included processing GPS and
              total-station data, drafting linework, creating existing-ground
              surfaces, preparing plats, and supporting grading and
              site-development drawings. In the field, I helped collect
              existing-condition, utility, construction, improvement, and
              as-built information.
            </p>
          </div>
        </div>
      </section>

      {/* Office and Field */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Field-to-Office Experience
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Understanding both sides of the surveying workflow.
            </h2>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src="/images/westwood/residential-lot-development.png"
                  alt="Residential lot development survey drawing"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                />
              </div>

              <div className="p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
                  Office Work
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                  Survey drafting and data processing
                </h3>

                <p className="mt-5 leading-7 text-slate-600">
                  I processed survey observations and transformed field data
                  into organized drawings using Carlson Survey and AutoCAD.
                  This included drafting linework, creating surfaces, preparing
                  plats, documenting property improvements, and supporting
                  grading and land-development plans.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src="/images/westwood/construction-documentation.jpg"
                  alt="Active construction site documented during field surveying"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                />
              </div>

              <div className="p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
                  Field Work
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                  Survey collection and site verification
                </h3>

                <p className="mt-5 leading-7 text-slate-600">
                  In the field, I worked with GPS equipment, total stations,
                  data collectors, and prisms to collect site information. I
                  assisted with existing-condition surveys, improvement
                  surveys, utility measurements, construction verification,
                  and as-built documentation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Responsibilities
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Contributing across multiple stages of project delivery.
            </h2>
          </div>

          <p className="self-end text-lg leading-8 text-slate-600">
            The internship required careful coordination between field
            collection, survey processing, drafting, design information, and
            construction documentation.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {responsibilities.map((item) => (
            <article
              key={item.number}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#7A263A]/30 hover:shadow-xl hover:shadow-slate-200/60 md:p-10"
            >
              <p className="text-sm font-bold text-[#7A263A]">{item.number}</p>

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

      {/* Workflow */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-300">
              Project Workflow
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              From field observations to usable project documentation.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {workflow.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm font-bold text-rose-300">
                  0{index + 1}
                </p>

                <p className="mt-8 font-semibold leading-7 text-white">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Westwood project case studies.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 md:justify-self-end">
            Representative work from my internship, organized around the main
            project types and responsibilities I supported.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#7A263A]/30 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]"
            >
              <article className="flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A263A]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em]">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 border-t border-slate-200 pt-5">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition group-hover:text-[#7A263A]">
                      View Case Study
                      <span
                        className="transition duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Tools and Equipment
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Software in the office. Survey equipment in the field.
            </h2>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
                Office
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Drafting and data processing
              </h3>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Carlson Survey 2024",
                                    "AutoCAD",
                  "Microsoft Excel",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
                Field
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Survey collection and verification
              </h3>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Trimble GPS Rover",
                  "Total Station",
                  "Data Collector",
                  "Prism",
                  "Survey Rod",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-12 text-white sm:px-12 md:py-16 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-300">
            What I Learned
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-[0.78fr_1.22fr]">
            <h2 className="text-4xl font-semibold tracking-[-0.035em]">
              Accurate drawings begin with reliable field information.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                Moving between field operations and office drafting gave me a
                stronger understanding of how survey information moves through
                a project. A small field error can affect linework, surfaces,
                quantities, layouts, and final documentation.
              </p>

              <p>
                The experience strengthened my attention to detail,
                communication, adaptability, and ability to work within a
                professional engineering workflow. It also showed me how
                closely surveying, civil design, construction, and
                documentation depend on one another.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Reference */}
<section className="border-y border-slate-200 bg-slate-50/70">
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
        Professional Reference
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
        Internship Supervisor
      </h2>
    </div>

    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">

      <div className="grid lg:grid-cols-[340px_1fr]">

        {/* Portrait */}

        <div className="relative min-h-[420px] bg-slate-100">
          <Image
            src="/images/westwood/daniel-hansen.jpg"
            alt="Daniel Hansen"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Content */}

        <div className="flex flex-col justify-center p-10 md:p-14">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7A263A]">
            Westwood Professional Services
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-tight">
            Daniel Hansen
          </h3>

          <p className="mt-2 text-lg text-slate-500">
            Survey Manager / Internship Supervisor
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Daniel Hansen supervised my work throughout my Summer 2026
            internship at Westwood Professional Services. Under his
            leadership I gained experience in field surveying, drafting,
            grading, residential development, construction documentation,
            and professional engineering workflows.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#"
              className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white opacity-60 cursor-default"
            >
              Email Coming Soon
            </a>

            <a
              href="#"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 opacity-60 cursor-default"
            >
              Phone Coming Soon
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Bottom Navigation */}
      <section className="bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Continue exploring
            </p>

            <p className="mt-1 text-xl font-semibold text-slate-950">
              View the complete engineering portfolio
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A263A] transition hover:opacity-70"
          >
            View All Projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}