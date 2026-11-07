import Hero from "../components/Hero";
import Skills from "@/components/Skills";
import AboutPreview from "@/components/AboutPreview";
import FeaturedProjects from "../components/FeaturedProjects";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900">
      <Hero />
      <CurrentlyBuilding />
      <FeaturedProjects />
      <Skills />
      <AboutPreview />
    </main>
  );
}