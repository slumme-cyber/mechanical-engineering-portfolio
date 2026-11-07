import Link from "next/link";

export default function CurrentlyBuilding() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-8 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4 sm:items-center">
          <span className="relative mt-1.5 flex h-3 w-3 shrink-0 sm:mt-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7A263A] opacity-40" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#7A263A]" />
          </span>

          <p className="leading-7 text-slate-700">
            <span className="mr-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
              Currently building
            </span>
            <span className="font-semibold text-slate-900">
              Cooling Loop Test Rig
            </span>
            <span className="text-slate-600">
              {" "}
              — a thermal test rig to measure radiator heat rejection across
              flow rates and fan speeds.
            </span>
          </p>
        </div>

        <Link
          href="/projects"
          className="shrink-0 text-sm font-semibold text-[#7A263A] transition hover:opacity-70"
        >
          View projects →
        </Link>
      </div>
    </section>
  );
}
