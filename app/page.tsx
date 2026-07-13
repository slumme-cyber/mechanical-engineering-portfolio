import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <FeaturedProjects />
    </main>
  );
}