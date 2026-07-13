import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
  <AnimatedSection delay={0.3}>
    <section className="mx-auto max-w-6xl px-8 py-20">
    
      <h2 className="mb-10 text-center text-4xl font-bold">
        Featured Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            skills={project.skills}
            slug={project.slug}
          />
        ))}
      </div>
        </section>
  </AnimatedSection>
);
}