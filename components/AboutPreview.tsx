import AnimatedSection from "./AnimatedSection";
export default function AboutPreview() {
  return (
    <AnimatedSection delay={0.15}>
      <section className="mx-auto max-w-4xl px-8 py-20 text-center">
        <h2 className="mb-6 text-4xl font-bold">
          About Me
      </h2>

      <p className="text-lg leading-8 text-slate-600">
        I'm a Mechanical Engineering student at Virginia Tech with experience
        in product design, CAD, surveying, and construction engineering. I like taking a rough idea, sketching it, modeling it in CAD, and pushing it through to a working prototype. That loop from concept to something you can hold is what got me into mechanical engineering in the first place.
      </p>
        </section>
  </AnimatedSection>
);
}