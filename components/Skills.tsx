import AnimatedSection from "./AnimatedSection";
import SkillGroups from "./SkillGroups";

export default function Skills() {
  return (
    <AnimatedSection delay={0}>
      <section className="mx-auto max-w-6xl px-8 py-20">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Engineering Toolbox
        </h2>

        <SkillGroups />
      </section>
    </AnimatedSection>
  );
}
