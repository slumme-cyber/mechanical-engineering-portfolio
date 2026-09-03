import Image from "next/image";
import Link from "next/link";

type ProjectStatus = "completed" | "in-progress" | "coming-soon";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  href?: string;
  tools: string[];
  status: ProjectStatus;
  featured?: boolean;
};

const featuredProjects: Project[] = [
  {
    title: "TouCan",
    category: "Mechanical Product Design",
    description:
      "A smart waste-system attachment developed through CAD modeling, mechanical integration, rapid prototyping, and iterative design.",
    image: "/images/projects/toucan1.jpg",
    href: "/projects/toucan",
    tools: ["Siemens NX", "3D Printing", "Arduino"],
    status: "completed",
    featured: true,
  },
  {
    title: "IR Crosswalk",
    category: "Engineering Design",
    description:
      "A proof-of-concept pedestrian warning system using infrared sensing, a custom enclosure, and automated visual feedback.",
    image: "/images/ir-crosswalk/ir-crosswalk-hero.png",
    href: "/projects/ir-crosswalk",
    tools: ["Fusion 360", "IR Sensors", "Prototyping"],
    status: "completed",
    featured: true,
  },
];

const westwoodProjects: Project[] = [
  {
    title: "Westwood Professional Services",
    category: "Internship Overview",
    description:
      "An overview of my Summer 2026 internship supporting field surveying, civil drafting, grading, utility coordination, and construction documentation.",
    image: "/images/westwood/westwood-overview.jpg",
    href: "/projects/westwood",
    tools: ["Carlson Survey", "Trimble", "Field Surveying"],
    status: "completed",
  },
  {
    title: "Residential Lot Development",
    category: "Site Planning",
    description:
      "Residential lot planning involving property geometry, proposed improvements, setbacks, easements, driveways, and utility placement.",
    image: "/images/westwood/residential-lot-development.png",
    href: "/projects/westwood/residential-lot-development",
    tools: ["Carlson Survey", "Lot Layout", "Drafting"],
    status: "completed",
  },
  {
    title: "Grading Design",
    category: "Civil Site Design",
    description:
      "Development and review of proposed contours, site drainage, slopes, finished grades, and earthwork-related construction details.",
    image: "/images/westwood/grading-design.png",
    href: "/projects/westwood/grading-design",
    tools: ["Trimble", "Surface Modeling", "Grading"],
    status: "completed",
  },
  {
  title: "As-Built Surveying",
  category: "Field Verification & Documentation",
  description:
    "Field collection and final documentation of constructed utilities, structures, elevations, pavement, and completed site improvements.",
  image: "/images/westwood/as-built-plan.png",
  href: "/projects/westwood/as-built-surveying",
  tools: ["Trimble GPS", "AutoCAD", "As-Builts"],
  status: "completed",
},
  {
  title: "Construction Surveying & Layout",
  category: "Field Operations & Construction Support",
  description:
    "Construction stakeout, residential building layout, curb layout, and field verification supporting active residential and commercial projects.",
  image: "/images/westwood/field-work.png",
  href: "/projects/westwood/construction-surveying-layout",
  tools: ["Total Station", "Stakeout", "Field Surveying"],
  status: "completed",
},
];

const personalProjects: Project[] = [
  {
    title: "Engineering Portfolio Website",
    category: "Web Development",
    description:
      "A responsive engineering portfolio designed and developed to present projects, technical experience, and professional growth.",
    image: "/images/projects/portfolio-preview.jpg",
    href: "/projects/engineering-portfolio",
    tools: ["Next.js", "React", "Tailwind CSS"],
    status: "completed",
  },
  {
    title: "Atlas",
    category: "AI Knowledge System",
    description:
      "A personalized second-brain system connecting engineering knowledge, project documentation, planning, automation, and daily workflows.",
    image: "/images/projects/atlas-preview.png",
    href: "/projects/atlas",
    tools: ["Obsidian", "AI Automation", "Knowledge Management"],
    status: "in-progress",
  },
  {
  title: "Miata Maintenance & Repair",
  category: "Automotive Engineering",
  description:
    "Hands-on mechanical and electrical work on a Mazda MX-5 Miata, including catalytic converter replacement, headlight wiring repair, and suspension inspection.",
  image: "/images/projects/miata/miata-hero.jpeg",
  href: "/projects/miata-maintenance",
  tools: [
    "Mechanical Repair",
    "Electrical Troubleshooting",
    "Automotive Systems",
  ],
  status: "completed",
},
  {
    title: "Atlas-01",
    category: "Custom RC Aircraft",
    description:
      "A semester-long aircraft development project covering requirements, preliminary sizing, CAD, simulation, manufacturing, and flight testing.",
    image: "/images/projects/atlas-01-preview.png",
    tools: ["CAD", "Aerodynamics", "3D Printing"],
    status: "coming-soon",
  },
];

const statusStyles: Record<
  ProjectStatus,
  {
    label: string;
    dot: string;
    container: string;
    text: string;
  }
> = {
  completed: {
    label: "Completed",
    dot: "bg-emerald-500",
    container: "border-emerald-200 bg-emerald-50",
    text: "text-emerald-700",
  },
  "in-progress": {
    label: "In Progress",
    dot: "bg-orange-500",
    container: "border-orange-200 bg-orange-50",
    text: "text-orange-700",
  },
  "coming-soon": {
    label: "Coming Soon",
    dot: "bg-red-500",
    container: "border-red-200 bg-red-50",
    text: "text-red-700",
  },
};

function StatusTag({ status }: { status: ProjectStatus }) {
  const styles = statusStyles[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${styles.container} ${styles.text}`}
    >
      <span
        className={`h-2 w-2 rounded-full ${styles.dot}`}
        aria-hidden="true"
      />
      {styles.label}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const cardContent = (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition duration-300 ${
        project.status === "coming-soon"
          ? "cursor-default"
          : "hover:-translate-y-1 hover:border-[#7A263A]/30 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
      <Image
  src={project.image}
  alt={`${project.title} project preview`}
  fill
  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
  className={`object-cover transition duration-700 ${
    project.status === "coming-soon"
      ? "scale-[1.02] opacity-75 blur-[2px]"
      : "group-hover:scale-[1.035]"
  }`}
/>

<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

{/* Status badge for completed & in-progress */}
{project.status !== "coming-soon" && (
  <div className="absolute left-5 top-5">
    <StatusTag status={project.status} />
  </div>
)}

{/* Coming Soon overlay */}
{project.status === "coming-soon" && (
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="rounded-full bg-[#C62828] px-8 py-3 text-sm font-bold uppercase tracking-[0.28em] text-white shadow-xl ring-1 ring-white/15">
      Coming Soon
    </span>
  </div>
)}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A263A]">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-slate-950">
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
          {project.status === "coming-soon" ? (
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400">
              Page in development
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition group-hover:text-[#7A263A]">
              View Case Study
              <span
                className="transition duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (!project.href || project.status === "coming-soon") {
    return cardContent;
  }

  return (
    <Link
      href={project.href}
      className="block h-full rounded-[2rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A263A] focus-visible:ring-offset-4"
      aria-label={`View ${project.title} project`}
    >
      {cardContent}
    </Link>
  );
}

function ProjectSection({
  eyebrow,
  title,
  description,
  projects,
}: {
  eyebrow: string;
  title: string;
  description: string;
  projects: Project[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
      <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            {title}
          </h2>
        </div>

        <p className="max-w-2xl text-lg leading-8 text-slate-600 md:justify-self-end">
          {description}
        </p>
      </div>

      <div className="mt-12 grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* Hero */}
      <section className="relative border-b border-slate-200">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7A263A]">
            Engineering Portfolio
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
              Projects built through
              <span className="block text-slate-400">
                design, testing, and iteration.
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              A collection of academic, professional, and personal engineering
              work spanning mechanical design, field surveying, civil
              development, prototyping, automation, and software development.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <StatusTag status="completed" />
            <StatusTag status="in-progress" />
            <StatusTag status="coming-soon" />
          </div>
        </div>
      </section>

      {/* Featured Engineering Projects */}
      <ProjectSection
        eyebrow="Featured Work"
        title="Featured Engineering Projects"
        description="Selected projects that best demonstrate my mechanical design, CAD, prototyping, and engineering problem-solving experience."
        projects={featuredProjects}
      />

      {/* Professional Experience */}
      <div className="border-y border-slate-200 bg-slate-50/70">
        <ProjectSection
          eyebrow="Professional Experience"
          title="Westwood Professional Services"
          description="Selected surveying and civil engineering work completed during my Summer 2026 internship, from field data collection through final drafting and construction documentation."
          projects={westwoodProjects}
        />
      </div>

      {/* Personal Projects */}
      <ProjectSection
        eyebrow="Independent Development"
        title="Personal Projects"
        description="Independent systems and technical projects developed outside of coursework and professional responsibilities."
        projects={personalProjects}
      />

      {/* Bottom CTA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-300">
              ABOOUT
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Learn more about my background, experience, and professional growth as an engineer.
            </h2>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            View About
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}