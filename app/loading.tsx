export default function Loading() {
  return (
    <main
      className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-white px-6"
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-slate-200" />

          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#7A263A]" />

          <span className="text-sm font-bold tracking-tight text-[#7A263A]">
            SL
          </span>
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Loading portfolio
        </p>
      </div>
    </main>
  );
}