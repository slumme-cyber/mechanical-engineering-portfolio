import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section 
        id="projects" 
        className="mx-auto max-w-6xl px-8 py-20"
        >
      <h2 className="mb-10 text-center text-4xl font-bold">
        Featured Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <ProjectCard
  title="TouCan Smart Waste System"
  description="A mechanical design project focused on simplifying residential trash bag replacement."
  skills={["CAD", "NX", "Prototype"]}
  slug="toucan"
  image="/images/projects/toucan1.jpg"

/>

        <ProjectCard
  title="Westwood Surveying"
  description="Construction staking, GPS, total station, grading, and drafting experience."
  skills={["GPS", "Surveying", "Drafting"]}
  slug="westwood"
  image="/images/projects/westwood.jpg"
/>

        <ProjectCard
  title="Engineering Portfolio"
  description="A portfolio website built with React, Next.js, GitHub, and Vercel."
  skills={["React", "Next.js", "Git"]}
  slug="portfolio"
  image="/images/projects/portfolio.png"
/>
      </div>
    </section>
  );
}