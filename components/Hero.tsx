import Image from "next/image";
export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-slate-50/80">
      <div className="mx-auto grid min-h-[78vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Virginia Tech Mechanical Engineering
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-7xl">
            Sam Lum
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I’m a mechanical engineering student with experience in
            CAD, surveying, drafting, construction, and product development.
            I’m pursuing opportunities in defense, aerospace, and advanced
            manufacturing.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-slate-950 px-6 py-3 font-medium text-white transition hover:bg-slate-700"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="rounded-md border border-slate-300 bg-white px-6 py-3 font-medium text-slate-900 transition hover:border-slate-500 hover:bg-slate-100"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
  <div className="flex justify-center lg:justify-end">
  <div className="relative h-100 w-80 overflow-hidden rounded-3xl border-4 border-white shadow-2xl ring-1 ring-slate-200">
    <Image
      src="/images/projects/headshot.jpg"
      alt="Professional headshot of Sam Lum"
      fill
      priority
      className="object-cover object-top"
    />
  </div>
</div>
</div>
      </div>
    </section>
  );
}