import Image from "next/image";
export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-slate-50/80">
      <div className="mx-auto grid min-h-[78vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-2xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#7A263A]">
  Mechanical Engineering Student • Virginia Tech
</p>

  <h1 className="text-6xl font-bold tracking-tight text-slate-900">
    Sam Lum
  </h1>

  <p className="mt-3 text-2xl text-slate-700">
    Virginia Tech
  </p>

  <div className="mt-8">
  <span className="inline-flex items-center rounded-full bg-[#7A263A]/10 px-4 py-2 text-sm font-semibold text-[#7A263A] ring-1 ring-[#7A263A]/20">
    Seeking Summer 2027 Mechanical Engineering Internship
  </span>
</div>

  <p className="mt-4 text-slate-600">
    Product Design • CAD • Manufacturing • Defense
  </p>
          <div className="mt-10 flex flex-wrap gap-4">
  <a
    href="projects"
    className="rounded-xl bg-[#7A263A] px-6 py-3 font-semibold text-white transition hover:opacity-90"
  >
    View Projects
  </a>

  <a
    href="/resume.pdf"
    className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
  >
    Resume
  </a>

  <a
    href="https://linkedin.com/in/sam-lum"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
  >
    LinkedIn
  </a>
</div>
</div>

       <div className="relative flex justify-center lg:justify-end">
  <div className="absolute inset-0 m-auto h-100 w-72 rounded-full bg-[#7A263A]/10 blur-3xl" />

  <div className="relative h-110 w-80 overflow-hidden rounded-[2rem] shadow-2xl">
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
    </section>
  );
}