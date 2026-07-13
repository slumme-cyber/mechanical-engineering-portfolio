export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-8 py-24 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-500">
        Virginia Tech
      </p>

      <h1 className="text-6xl font-bold">
        Sam Lum
      </h1>

      <h2 className="mt-4 text-2xl text-slate-600">
        Mechanical Engineering Student
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700">
        Designing practical engineering solutions through CAD, surveying,
        drafting, and mechanical design while pursuing a career in the defense
        and aerospace industries.
      </p>

      <div className="mt-12 flex gap-4">
        <button className="rounded-lg bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700">
          View Projects
        </button>

        <button className="rounded-lg border border-slate-900 px-6 py-3 transition hover:bg-slate-100">
          Download Resume
        </button>
      </div>
    </section>
  );
}