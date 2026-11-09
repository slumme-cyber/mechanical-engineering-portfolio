import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <div className="mt-14">
      <h3 className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
        Certifications
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7A263A] text-xs font-bold text-white"
            >
              ✓
            </span>

            <div>
              <p className="font-semibold leading-snug text-slate-900">
                {cert.name}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
