import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-white px-6 py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
          Error 404
        </p>

        <h1 className="mt-5 text-6xl font-bold tracking-tight text-slate-950 sm:text-8xl">
          Page not found.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
          The page may have been moved, renamed, or removed from the portfolio.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#7A263A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#641f30] sm:w-auto"
          >
            Return Home
          </Link>

          <Link
            href="/projects"
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-[#7A263A] hover:text-[#7A263A] sm:w-auto"
          >
            View Projects
          </Link>
        </div>

        <div className="mx-auto mt-14 flex max-w-md items-center gap-4">
          <span className="h-px flex-1 bg-slate-200" />
          <span className="font-mono text-sm text-slate-400">404</span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>
      </div>
    </main>
  );
}