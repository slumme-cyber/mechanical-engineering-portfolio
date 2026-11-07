import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <AnimatedSection delay={0.3}>
      <section className="mx-auto max-w-6xl px-8 py-20">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Engineering Experiences
        </h2>

        {/* Top row: three cards. Bottom row: two wider cards. */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                skills={project.skills}
                slug={project.slug}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-[#7A263A] hover:text-[#7A263A]"
          >
            View all projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </AnimatedSection>
  );
}
