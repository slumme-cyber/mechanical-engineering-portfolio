import Image from "next/image";
import Link from "next/link";

const projectDetails = [
  {
    label: "Role",
    value: "Designer and Developer",
  },
  {
    label: "Timeline",
    value: "Summer 2026",
  },
  {
    label: "Tools",
    value: "Next.js, TypeScript, Tailwind CSS, Vercel, AI"
  },
  {
    label: "Focus",
    value: "Responsive design, project storytelling, and personal branding",
  },
];

const features = [
  "Responsive layouts designed for desktop and mobile devices",
  "Project case studies presenting engineering work and design decisions",
  "Consistent maroon visual identity based on the professional headshot",
  "Reusable React components for navigation, project cards, and page sections",
  "SEO metadata, social sharing previews, loading states, and a custom 404 page",
  "Continuous deployment through GitHub and Vercel",
];

export default function EngineeringPortfolioPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/projects"
            className="text-sm font-semibold text-[#7A263A] transition hover:opacity-70"
          >
            ← Back to Projects
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
                Web Development and Personal Branding
              </p>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                Mechanical Engineering Portfolio
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                A responsive portfolio website designed and developed to
                communicate my engineering experience, project work, and
                professional goals clearly to recruiters and engineering teams.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "AI"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
              <Image
                src="/images/projects/portfolio-preview.jpg"
                alt="Homepage of Sam Lum's mechanical engineering portfolio"
                width={1400}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
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
                <p className="mt-3 leading-7 text-slate-800">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
              Objective
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Present engineering experience in a clear, professional format.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              The goal was to create more than a digital resume. The site was
              designed to give recruiters a visual overview of my engineering
              interests while providing enough depth to understand the process,
              tools, and decisions behind each project.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Since this was my first website project, I developed it
              incrementally by building reusable components, testing each page
              locally, and deploying updates through GitHub and Vercel.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
              Key Features
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

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
            Development Process
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
            Built through iterative design, testing, and deployment.
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
            <p>
              I began by defining the site structure and visual direction,
              choosing a minimal layout with subtle engineering details and a
              maroon accent color drawn from my professional headshot.
            </p>

            <p>
              I then built the site using Next.js and TypeScript, with Tailwind
              CSS controlling the responsive layouts and visual system. Reusable
              components helped maintain consistency across the home page,
              project pages, gallery, about page, contact page, navigation, and
              footer.
            </p>

            <p>
              Throughout development, I tested the site locally, corrected
              mobile layout issues, resolved TypeScript deployment errors, and
              used Git and GitHub to track changes. Vercel was used for
              production deployment and automatic updates after each push.
            </p>
          </div>
        </div>
      </section>

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