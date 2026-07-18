import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "TouCan",
    category: "Product Design & Development",
    description:
      "A removable trash-can attachment developed from customer needs through CAD modeling, prototyping, and design iteration.",
    image: "/images/projects/toucan1.jpg",
    href: "/projects/toucan",
    tools: ["Siemens NX", "3D Printing", "Product Design"],
  },
  {
    title: "IR Crosswalk",
    category: "Engineering Design",
    description:
      "A proof-of-concept pedestrian detection system using infrared sensors, a custom enclosure, and an automated warning concept.",
    image: "/images/ir-crosswalk/ir-crosswalk-hero.png",
    href: "/projects/ir-crosswalk",
    tools: ["Fusion 360", "Sensor Integration", "Prototyping"],
  },
  {
    title: "Mechanical Engineering Portfolio",
    category: "Web Development & Personal Branding",
    description:
      "Designed and built a responsive personal portfolio to present engineering projects, technical experience, and professional goals to recruiters.",
    image: "/images/portfolio-project.jpg",
    href: "/projects/engineering-portfolio",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "AI"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,38,58,0.10),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
            Selected Work
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Engineering projects built through design, testing, and iteration.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            A collection of mechanical engineering projects focused on CAD,
            product development, prototyping, and practical problem solving.
          </p>
        </div>
      </section>

      {/* Project cards */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} project`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
                    {project.category}
                  </p>

                  <div className="mt-4 flex items-start justify-between gap-5">
                    <h2 className="text-3xl font-semibold tracking-tight">
                      {project.title}
                    </h2>

                    <span className="mt-1 text-xl text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-[#7A263A]">
                      →
                    </span>
                  </div>

                  <p className="mt-5 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <p className="mt-8 text-sm font-semibold text-slate-900">
                    View Case Study
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}