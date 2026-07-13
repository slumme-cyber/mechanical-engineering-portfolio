import AnimatedSection from "./AnimatedSection";
const skills = [
  "Siemens NX",
  "Fusion 360",
  "AutoCAD Civil 3D",
  "Carlson Survey",
  "GPS Surveying",
  "Total Station",
  "GD&T",
  "Product Design",
  "Python",
  "MATLAB",
  "Git",
  "Next.js",
];

export default function Skills() {
  return (
  <AnimatedSection delay={0}>
    <section className="mx-auto max-w-6xl px-8 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Engineering Toolbox
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-full border border-slate-300 bg-white px-5 py-2 font-medium shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            {skill}
          </div>
        ))}
      </div>
        </section>
  </AnimatedSection>
);
}