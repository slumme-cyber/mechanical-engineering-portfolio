import Link from "next/link";

const contactMethods = [
  {
    label: "Email",
    value: "slumme@vt.edu",
    href: "mailto:slumme@vt.edu",
  },
  {
    label: "Phone",
    value: "(540)-480-6127",
    href: "tel:+15404806127",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sam-lum",
    href: "https://www.linkedin.com/in/sam-lum",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,38,58,0.10),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
            Contact
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Let&apos;s connect.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            I am seeking a Summer 2027 mechanical engineering internship and
            would be glad to discuss opportunities involving design, product
            development, manufacturing, testing, or defense-related engineering.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A263A]">
              Get in Touch
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Contact information
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Email is the best way to reach me. You can also connect with me
              through LinkedIn or review my resume and project work.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#7A263A] hover:text-[#7A263A]"
              >
                View Resume
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A263A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#641f30]"
              >
                View Projects
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.label === "LinkedIn" ? "_blank" : undefined}
                rel={method.label === "LinkedIn" ? "noreferrer" : undefined}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-[#7A263A]/40 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {method.label}
                </p>

                <div className="mt-3 flex items-center justify-between gap-5">
                  <p className="break-all text-lg font-semibold text-slate-900 sm:text-xl">
                    {method.value}
                  </p>

                  <span className="text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#7A263A]">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}