import Image from "next/image";
import Link from "next/link";

const projectDetails = [
  {
    label: "Role",
    value: "Automotive Maintenance & Repair",
  },
  {
    label: "Timeline",
    value: "Summer 2026",
  },
  {
    label: "Vehicle",
    value: "Mazda MX-5 Miata",
  },
  {
    label: "Focus",
    value: "Mechanical repair, electrical troubleshooting, and inspection",
  },
];

const workCompleted = [
  {
    title: "Catalytic Converter Replacement",
    description:
      "Removed the existing catalytic converter and installed a replacement as part of the vehicle's exhaust-system maintenance.",
  },
  {
    title: "Headlight Wiring Repair",
    description:
      "Troubleshot and replaced portions of the headlight wiring while installing and verifying the operation of the headlight assemblies.",
  },
  {
    title: "Suspension Inspection",
    description:
      "Raised and supported the vehicle to inspect suspension components and check for visible wear, looseness, or other potential issues.",
  },
];

const gallery = [
  {
    src: "/images/projects/miata/miata-engine-bay.jpeg",
    alt: "Mazda Miata engine bay during maintenance",
  },
  {
    src: "/images/projects/miata/miata-lifted.jpeg",
    alt: "Mazda Miata raised for underbody and suspension inspection",
  },
  {
    src: "/images/projects/miata/catalytic-converter-installed.jpeg",
    alt: "Catalytic converter installed underneath the Mazda Miata",
  },
  {
    src: "/images/projects/miata/catalytic-converter.jpeg",
    alt: "Removed catalytic converter during replacement",
  },
  {
    src: "/images/projects/miata/headlight-install.jpeg",
    alt: "Miata headlight installed during wiring repair",
  },
];

export default function MiataMaintenancePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Link
            href="/projects"
            className="text-sm font-medium text-slate-500 transition hover:text-[#7A263A]"
          >
            ← Back to Projects
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
                Automotive Maintenance
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                Miata Maintenance & Electrical Repair
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                A short hands-on automotive project completed with a friend,
                focused on repairing and inspecting several systems on a Mazda
                MX-5 Miata. Work included catalytic converter replacement,
                headlight wiring repair, and suspension inspection.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-sm">
              <Image
                src="/images/projects/miata/miata-hero.jpeg"
                alt="Mazda Miata undergoing maintenance"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project details */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {projectDetails.map((detail) => (
            <div key={detail.label}>
              <p className="text-sm font-medium text-slate-500">
                {detail.label}
              </p>
              <p className="mt-2 font-semibold leading-6 text-slate-950">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
          Project Overview
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Hands-on vehicle troubleshooting and repair
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          The goal of the project was to address several mechanical and
          electrical issues while gaining more hands-on experience working with
          automotive systems. Over several days, we worked through exhaust,
          lighting, and suspension-related tasks using basic diagnostic,
          mechanical, and electrical troubleshooting techniques.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Rather than replacing components without inspection, the work
          required identifying how each system was assembled, safely accessing
          components, tracing electrical connections, and checking the vehicle
          after repairs were completed.
        </p>
      </section>

      {/* Work completed */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
            Work Completed
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Repair & Inspection
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {workCompleted.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
              >
                <span className="text-sm font-semibold text-[#7A263A]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured photo */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200">
            <Image
              src="/images/projects/miata/catalytic-converter.jpeg"
              alt="Catalytic converter removed from the Miata"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
              Mechanical Work
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Exhaust System Repair
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The catalytic converter replacement required working underneath
              the vehicle, identifying the exhaust connections, removing the
              existing component, and installing the replacement while
              maintaining proper alignment with the surrounding exhaust system.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              This portion of the project provided practical experience working
              around limited access, aged automotive hardware, and components
              exposed to repeated heat cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Electrical */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
              Electrical Work
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Headlight Wiring & Installation
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              The headlight system required electrical troubleshooting in
              addition to mechanical installation. Wiring was inspected and
              repaired before the headlights were reassembled and tested.
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              Working through the lighting system reinforced the importance of
              tracing connections methodically instead of treating an
              electrical problem as a purely component-level failure.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800">
            <Image
              src="/images/projects/miata/headlight-install.jpeg"
              alt="Miata headlight after wiring repair and installation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

  {/* Gallery */}
<section className="border-t border-slate-200 bg-white">
  <div className="mx-auto max-w-6xl px-6 py-16">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
      Project Gallery
    </p>

    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {gallery.map((image) => (
        <div
          key={image.src}
          className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>

    <p className="mt-8 max-w-3xl leading-7 text-slate-600">
      The project provided practical experience working across mechanical
      and electrical vehicle systems while reinforcing systematic
      troubleshooting, inspection, and collaborative problem solving.
    </p>
  </div>
</section>

      {/* Takeaways */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
            Takeaways
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Practical troubleshooting experience
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Although this was a relatively short project, it provided useful
            experience working directly with interconnected mechanical and
            electrical systems. The work reinforced systematic troubleshooting,
            safe vehicle access, component inspection, and collaborative
            problem solving.
          </p>
        </div>
      </section>
    </main>
  );
}