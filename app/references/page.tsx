import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "References | Sam Lum",
  description:
    "Professional references for Sam Lum's engineering experience and work.",
};

export default function ReferencesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Page heading */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
            Professional Network
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            References
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Professionals who can speak to my technical experience, work
            ethic, reliability, and continued development as an engineer.
          </p>
        </div>
      </section>

      {/* References */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid md:grid-cols-[220px_1fr]">
            {/* Initials panel */}
            <div className="flex min-h-56 items-center justify-center bg-[#7A263A] p-10">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/30 bg-white/10 text-4xl font-semibold text-white shadow-lg">
                DH
              </div>
            </div>

            {/* Reference information */}
            <div className="p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7A263A]">
                Westwood Professional Services
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Daniel Hansen
              </h2>

              <p className="mt-2 text-lg text-slate-500">
                Survey Manager · Internship Supervisor
              </p>

              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                Daniel Hansen supervised my work throughout my Summer 2026
                internship at Westwood Professional Services. Under his
                leadership, I gained experience in field surveying, drafting,
                grading, residential development, construction documentation,
                and professional engineering workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:daniel.hansen@westwoodps.com"
                  className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7A263A]"
                >
                  Email Daniel
                </a>

                <a
                  href="tel:+15406097437"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#7A263A] hover:text-[#7A263A]"
                >
                  540-609-7437
                </a>
              </div>
            </div>
          </div>
        </div>

      {/* Jay Moffett */}
<div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
  <div className="grid md:grid-cols-[220px_1fr]">
    {/* Initials panel */}
    <div className="flex min-h-56 items-center justify-center bg-slate-950 p-10">
      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/30 bg-white/10 text-4xl font-semibold text-white shadow-lg">
        JM
      </div>
    </div>

    {/* Reference information */}
    <div className="p-8 md:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7A263A]">
        Moffett Paving &amp; Excavating
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        Jay Moffett
      </h2>

      <p className="mt-2 text-lg text-slate-500">
        Employer · Work Supervisor
      </p>

      <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
        Jay Moffett supervised my work at Moffett Paving &amp; Excavating,
        where I gained hands-on construction experience involving paving,
        excavation, equipment operation, site preparation, and the
        installation of water and storm lines.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        
        <a
  href="tel:+15404309112"
  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#7A263A] hover:text-[#7A263A]"
>
  540-430-9112
</a>
      </div>
    </div>
  </div>
</div>

{/* Dr. Richard L. Clark Jr. */}
<div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
  <div className="grid lg:grid-cols-[340px_1fr]">
    {/* Portrait */}
    <div className="relative min-h-[360px] bg-slate-100 lg:min-h-[420px]">
      <Image
        src="/images/projects/richard-clark.jpg"
        alt="Dr. Richard L. Clark Jr."
        fill
        sizes="(min-width: 1024px) 340px, 100vw"
        className="object-cover object-top"
      />
    </div>

    {/* Reference information */}
    <div className="flex flex-col justify-center p-8 md:p-10 lg:p-14">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7A263A]">
        Virginia Tech
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        Dr. Richard L. Clark, Jr.
      </h2>

      <p className="mt-2 text-lg text-slate-500">
        Adjunct Faculty · Course Instructor
      </p>

      <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
        The TouCan product-development project was completed under the
        guidance of Dr. Richard L. Clark, Jr. in Virginia Tech’s engineering
        design curriculum. Throughout the semester, he evaluated our team’s
        engineering process, technical decisions, CAD development, prototype
        integration, collaboration, and final presentation.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="https://mlsoc.vt.edu/about/faculty-and-staff/richard-l--clark--jr-.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#7A263A]"
        >
          Virginia Tech Profile
          <span className="ml-2" aria-hidden="true">
            ↗
          </span>
        </a>

        <a
          href="mailto:rlclark@vt.edu?subject=Reference%20Regarding%20Sam%20Lum"
          className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#7A263A] hover:text-[#7A263A]"
        >
          Email Dr. Clark
        </a>
      </div>
    </div>
  </div>
</div>
      </section>
    </main>
  );
}