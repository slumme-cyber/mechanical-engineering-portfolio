import Link from "next/link";

const skills = [
  "Carlson Survey",
  "Civil 3D",
  "GPS",
  "Total Station",
  "Drafting",
  "Surface Creation",
];

const projects = [
  {
    title: "Project One",
    description:
      "Add a short summary of the project, the work completed, and your specific contribution.",
    href: "#",
  },
  {
    title: "Project Two",
    description:
      "Add a short summary of the project, the work completed, and your specific contribution.",
    href: "#",
  },
  {
    title: "Project Three",
    description:
      "Add a short summary of the project, the work completed, and your specific contribution.",
    href: "#",
  },
  {
    title: "Project Four",
    description:
      "Add a short summary of the project, the work completed, and your specific contribution.",
    href: "#",
  },
];

export default function WestwoodPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Link
            href="/"
            className="text-sm font-semibold text-[#7A263A] transition hover:opacity-70"
          >
            ← Back to home
          </Link>

          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.22em] text-[#7A263A]">
            Professional Engineering Experience
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Westwood Professional Services
          </h1>

          <p className="mt-5 text-lg text-slate-600">
            Survey/Civil Engineering Intern · Summer 2026
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
            Overview
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Working between the field and the office
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            During my internship with Westwood Professional Services, I
            supported residential and commercial land-development work through
            both field surveying and office drafting. My responsibilities
            included collecting survey data, processing GPS and total-station
            observations, drafting linework, creating surfaces, preparing
            plats, and contributing to grading-related drawings.
          </p>
        </div>
      </section>

      {/* Office and field work */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-2">
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="aspect-[4/3] bg-slate-200">
            {/* Replace this area with an office or CAD image */}
          </div>

          <div className="p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7A263A]">
              Office Work
            </p>

            <h2 className="mt-3 text-2xl font-bold">Survey drafting and data processing</h2>

            <p className="mt-4 leading-7 text-slate-600">
              I processed field data and developed accurate survey drawings
              using Carlson Survey and Civil 3D. This work included drafting
              linework, creating existing-ground surfaces, preparing plats, and
              supporting grading and site-development documentation.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="aspect-[4/3] bg-slate-200">
            {/* Replace this area with a field photo */}
          </div>

          <div className="p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7A263A]">
              Field Work
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Survey collection and site verification
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              In the field, I worked with GPS equipment, total stations, data
              collectors, and traditional survey tools. I assisted with
              as-built surveys, improvement surveys, construction-related
              measurements, and the collection of data later used for office
              drafting.
            </p>
          </div>
        </article>
      </section>

      {/* Westwood projects */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
            Selected Work
          </p>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Featured Westwood projects
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                A small selection of representative projects from my internship.
                Each project can later link to a more detailed page.
              </p>
            </div>

            <Link
              href="/projects"
              className="font-semibold text-[#7A263A] transition hover:opacity-70"
            >
              View all projects →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-slate-200 bg-[#F7F8FA] p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                {project.href === "#" ? (
                  <span className="mt-6 inline-block font-semibold text-slate-400">
                    Detailed page coming soon
                  </span>
                ) : (
                  <Link
                    href={project.href}
                    className="mt-6 inline-block font-semibold text-[#7A263A]"
                  >
                    View project →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Software and equipment */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
          Tools
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Software and equipment
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-xl font-semibold">Office</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {["Carlson Survey", "Civil 3D", "AutoCAD", "Microsoft Office"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-xl font-semibold">Field</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "GPS",
                "Total Station",
                "Data Collector",
                "Gun and Prism",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-20 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
            Reflection
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight">
            Understanding how field data becomes engineering documentation
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Moving between field operations and office drafting gave me a
            stronger understanding of the full surveying workflow. The
            experience reinforced the importance of accuracy, communication,
            documentation, and attention to detail throughout every stage of a
            project.
          </p>
        </div>
      </section>
    </main>
  );
}