import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function AboutPreview() {
  return (
    <AnimatedSection delay={0.15}>
      <section className="mx-auto max-w-4xl px-8 py-20 text-center">
        <h2 className="mb-6 text-4xl font-bold">About Me</h2>

        <p className="text-lg leading-8 text-slate-600">
          I&apos;m a Mechanical Engineering student at Virginia Tech with
          experience in product design, CAD, surveying, and construction
          engineering. I like taking a rough idea, sketching it, modeling it in
          CAD, and pushing it through to a working prototype. That loop from
          concept to something you can hold is what got me into mechanical
          engineering in the first place.
        </p>

        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#7A263A] px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Learn more about me
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </AnimatedSection>
  );
}
