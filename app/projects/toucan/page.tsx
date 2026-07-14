
import Image from "next/image";
import Link from "next/link";

const timeline = [
  {
    number: "01",
    title: "Problem",
    description: "Identified an everyday waste-removal challenge.",
  },
  {
    number: "02",
    title: "Concepts",
    description: "Explored mechanisms, layouts, and user interactions.",
  },
  {
    number: "03",
    title: "CAD",
    description: "Developed the assembly and component packaging in NX.",
  },
  {
    number: "04",
    title: "Prototype",
    description: "Integrated the mechanical and electronic systems.",
  },
  {
    number: "05",
    title: "Presentation",
    description: "Demonstrated the final design and engineering process.",
  },
];

const challenges = [
  {
    title: "Component Packaging",
    description:
      "The motor, electronics, display, wiring, and structural components had to fit within a compact attachment without interfering with normal trash can use.",
  },
  {
    title: "Mechanical Integration",
    description:
      "The drive system needed to transfer motion consistently while remaining compact, accessible, and supported by the surrounding structure.",
  },
  {
    title: "Wire Routing",
    description:
      "Electrical connections had to remain accessible for assembly while staying organized, protected, and clear of the moving mechanism.",
  },
  {
    title: "User Interaction",
    description:
      "The display and controls were positioned for visibility and ease of use while the internal components remained protected.",
  },
];

const improvements = [
  "Reduce the overall enclosure size",
  "Simplify the assembly and lower the part count",
  "Improve motor efficiency and reduce operating noise",
  "Refine sensing and automatic control",
  "Improve internal wire management",
  "Explore production-ready molded components",
];

export default function TouCanProjectPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:pb-28 md:pt-14 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A263A] transition duration-300 hover:-translate-x-1 hover:opacity-70"
        >
          <span aria-hidden="true">←</span>
          Back to projects
        </Link>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Mechanical Engineering Design
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
              TouCan
              <span className="block text-slate-400">
                Smart Waste System
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
              A compact trash can attachment designed to simplify sealing and
              removing a full bag through an integrated motor-driven mechanism.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Mechanical Design",
                "Siemens NX",
                "Prototyping",
                "Team Collaboration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-slate-200 pt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Institution
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Virginia Tech
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Project Type
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Product Design
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Team
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Four engineering students
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Outcome
                </p>
                <p className="mt-2 font-medium text-slate-800">
                  Functional prototype
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.35)] sm:min-h-[540px] lg:min-h-[650px]">
            <Image
              src="/images/projects/toucan1.jpg"
              alt="CAD model of the TouCan smart waste system"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-center transition duration-700 hover:scale-[1.02]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-white/5" />
          </div>
        </div>
      </section>

      {/* Project Snapshot */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-px px-6 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            {
              label: "My Role",
              value: "Mechanical design, CAD, packaging, and prototype development",
            },
            {
              label: "Tools",
              value: "Siemens NX, Arduino, 3D printing, and hand fabrication",
            },
            {
              label: "Design Focus",
              value: "Mechanical integration and product usability",
            },
            {
              label: "Project Scope",
              value: "Concept development through final presentation",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="border-slate-200 px-0 py-6 sm:px-6 lg:border-r lg:last:border-r-0"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A263A]">
                {item.label}
              </p>
              <p className="mt-3 max-w-xs leading-7 text-slate-700">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
            Project Timeline
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            From an everyday problem to a working system.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {timeline.map((step) => (
            <div
              key={step.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7A263A]/30 hover:shadow-lg hover:shadow-slate-200/50"
            >
              <p className="text-sm font-bold text-[#7A263A]">
                {step.number}
              </p>
              <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32 lg:px-8">
        <div className="grid gap-12 border-t border-slate-200 pt-16 md:grid-cols-[0.72fr_1.28fr] md:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Overview
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Rethinking one step of an ordinary routine.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              TouCan is a smart trash can attachment developed to make sealing
              and removing a full trash bag easier. Rather than replacing the
              entire container, the concept adds a compact mechanical and
              electronic system to a standard household trash can.
            </p>

            <p>
              The project brought together mechanical design, electronics, CAD
              assembly development, and rapid prototyping. Our team progressed
              from early product concepts to an integrated physical prototype
              capable of demonstrating the intended user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.78fr_1.22fr] md:py-32 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-300">
              The Problem
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Full trash bags become difficult at exactly the wrong moment.
            </h2>
          </div>

          <div className="flex flex-col justify-center space-y-6 text-lg leading-8 text-slate-300">
            <p>
              An overfilled bag can be awkward to close, difficult to lift, and
              tightly pressed against the inside of its container. The user is
              left trying to gather and tie the bag while managing its weight
              and avoiding spills.
            </p>

            <p>
              Our team explored whether part of that process could be built
              directly into the trash can. The goal was not to overcomplicate
              the product, but to create an attachment that could support the
              user at the moment the bag was ready for removal.
            </p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
            Design Process
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Designing the product as one integrated assembly.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The concept evolved as the team refined component placement,
            mounting, wire routing, structural support, and user interaction.
            Each change had to work within the limited space available around
            the trash can rim.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-slate-50 p-8 md:p-10">
            <p className="text-sm font-semibold text-[#7A263A]">
              01 / Digital Development
            </p>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">
              CAD before fabrication
            </h3>
            <p className="mt-4 leading-7 text-slate-600">
              Siemens NX was used to model the enclosure, internal components,
              mounting features, and mechanical drive system before physical
              parts were produced. Assembly modeling helped identify
              interference, packaging, and access issues early.
            </p>
          </article>

          <article className="rounded-[2rem] bg-slate-50 p-8 md:p-10">
            <p className="text-sm font-semibold text-[#7A263A]">
              02 / Physical Integration
            </p>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">
              Combining structure, motion, and controls
            </h3>
            <p className="mt-4 leading-7 text-slate-600">
              The prototype combined 3D-printed components, a DC motor, a
              rack-and-pinion mechanism, controls, wiring, an Arduino, and an
              OLED display into a single demonstrable system.
            </p>
          </article>
        </div>
      </section>

      {/* Engineering Challenges */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
                Engineering Challenges
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
                The difficulty was not one component. It was making every
                component coexist.
              </h2>
            </div>

            <p className="self-end text-lg leading-8 text-slate-600">
              TouCan required mechanical, electrical, and structural decisions
              to be made together. Adjusting one part of the assembly often
              changed the available space, mounting strategy, or routing for
              another.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <article
                key={challenge.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 md:p-10"
              >
                <p className="text-sm font-bold text-[#7A263A]">
                  0{index + 1}
                </p>
                <h3 className="mt-7 text-2xl font-semibold tracking-tight">
                  {challenge.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {challenge.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Prototype */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Final Prototype
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              From digital assembly to physical proof of concept.
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-600">
            The completed prototype validated the overall packaging and
            integration strategy. It also revealed opportunities to reduce the
            enclosure size, simplify assembly, and improve the mechanism before
            developing a production-ready version.
          </p>
        </div>

        <div className="relative mt-14 min-h-[500px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-[0_28px_80px_-45px_rgba(15,23,42,0.4)] md:min-h-[680px]">
          <Image
            src="/images/projects/toucan-prototype.png"
            alt="Physical prototype of the TouCan smart waste system"
            fill
            sizes="100vw"
            className="object-cover object-center transition duration-700 hover:scale-[1.02]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm backdrop-blur md:bottom-7 md:left-7">
            Integrated physical prototype
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[420px] lg:min-h-[570px]">
            <Image
              src="/images/projects/toucan-team.png"
              alt="TouCan project team"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Team Collaboration
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Designing, building, and presenting as one team.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              TouCan was developed by a four-person engineering team. The
              project required consistent communication across concept
              development, CAD, fabrication, electronics integration, testing,
              and the final presentation.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              Working across those areas reinforced the importance of defining
              interfaces early, communicating design changes clearly, and
              making decisions around the performance of the complete product
              rather than an individual component.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Advisor */}
<section className="border-y border-slate-200 bg-slate-50/60">
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7A263A]">
        Faculty Advisor
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
        Project Oversight
      </h2>
    </div>

    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">

      <div className="grid lg:grid-cols-[340px_1fr]">

        {/* Portrait */}

        <div className="relative min-h-[420px] bg-slate-100">
          <Image
            src="/images/projects/richard-clark.jpg"
            alt="Dr. Richard L. Clark Jr."
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Content */}

        <div className="flex flex-col justify-center p-10 md:p-14">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7A263A]">
            Virginia Tech
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-tight">
            Dr. Richard L. Clark, Jr.
          </h3>

          <p className="mt-2 text-lg text-slate-500">
            Adjunct Faculty
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            This project was completed under the supervision of Dr. Richard L. Clark, Jr. as part of Virginia Tech's engineering design curriculum. He observed the project's progression from concept development through CAD, prototyping, testing, and the final presentation. Recruiters are welcome to contact him regarding my contributions to the project.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://mlsoc.vt.edu/about/faculty-and-staff/richard-l--clark--jr-.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#7A263A]"
            >
              Virginia Tech Profile
              <span className="ml-2">↗</span>
            </a>

            <a
              href="mailto:rlclark@vt.edu?subject=Reference%20Regarding%20Sam%20Lum"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#7A263A] hover:text-[#7A263A]"
            >
              Email Professor
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Lessons */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-12 text-white sm:px-12 md:py-16 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-300">
            What I Learned
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-[0.78fr_1.22fr]">
            <h2 className="text-4xl font-semibold tracking-[-0.035em]">
              Good engineering is often the work between the components.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                This project strengthened my experience with CAD assemblies,
                mechanical packaging, rapid prototyping, and designing around
                real component constraints.
              </p>

              <p>
                More importantly, it showed me how quickly a product becomes an
                integration problem. Mounting, wiring, manufacturability,
                component access, user interaction, and appearance all had to
                be considered together rather than solved independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Improvements */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32 lg:px-8">
        <div className="grid gap-10 border-t border-slate-200 pt-16 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Future Improvements
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              The next iteration would focus on simplicity.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {improvements.map((item, index) => (
              <div
                key={item}
                className="flex min-h-28 items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-[#7A263A]/30 hover:shadow-md"
              >
                <span className="mt-0.5 text-sm font-bold text-[#7A263A]">
                  0{index + 1}
                </span>
                <p className="font-medium leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Continue exploring
            </p>
            <p className="mt-1 text-xl font-semibold text-slate-950">
              View more engineering projects
            </p>
          </div>

          <Link
            href="/#projects"
            className="inline-flex items-center font-semibold text-[#7A263A] transition hover:gap-3 hover:opacity-75"
          >
            Back to featured projects
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

