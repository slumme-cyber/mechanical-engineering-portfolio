import Image from "next/image";
import Link from "next/link";

const projectDetails = [
  {
    label: "Project Type",
    value: "Engineering Design Project",
  },
  {
    label: "Role",
    value: "Lead CAD designer",
  },
  {
    label: "Tools",
    value: "Fusion 360, Arduino, Infrared Sensors",
  },
  {
    label: "Focus",
    value: "Pedestrian Safety and Product Development",
  },
];

const designGoals = [
  "Detect pedestrians approaching or entering a crosswalk",
  "Alert drivers without requiring pedestrians to press a button",
  "Use low-cost components suitable for a proof of concept",
  "Create a compact housing for the electronic components",
];

export default function IrCrosswalkPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,38,58,0.10),transparent_38%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-40">
          <div>
            <Link
              href="/projects"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#7A263A]"
            >
              <span aria-hidden="true">←</span>
              Back to Projects
            </Link>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
              Engineering Design Case Study
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              IR Crosswalk
            </h1>

            <p className="mt-4 text-2xl font-medium text-slate-600">
              A proof-of-concept pedestrian detection system designed to
              improve crosswalk visibility and driver awareness.
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              This project explored how infrared sensors could automatically
              detect pedestrians near a crosswalk and activate a warning
              system. I contributed to the mechanical design, CAD development,
              component layout, and physical prototype.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Fusion 360",
                "CAD Modeling",
                "Rapid Prototyping",
                "Sensor Integration",
                "Design Iteration",
                "Team Collaboration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.25rem] bg-[#7A263A]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10">
              <div className="relative min-h-[500px]">
                <Image
                  src="/images/ir-crosswalk/ir-crosswalk-hero.png"
                  alt="IR Crosswalk prototype and CAD design"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project details */}
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 px-6 lg:grid-cols-4 lg:px-8">
          {projectDetails.map((detail) => (
            <div
              key={detail.label}
              className="bg-slate-950 px-6 py-8 lg:px-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {detail.label}
              </p>

              <p className="mt-3 text-base font-medium leading-7 text-white">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.65fr_1.35fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A263A]">
              Project Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Designing a more automatic crosswalk warning system
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Traditional pedestrian warning systems often depend on a person
              pressing a button before entering a crosswalk. Our team explored
              a system that could detect pedestrian movement automatically
              using infrared sensors.
            </p>

            <p>
              The concept used sensors positioned near the sidewalk to detect a
              pedestrian approaching the crossing. Once activated, the system
              would trigger a visible warning for nearby drivers.
            </p>

            <p>
              The project was developed as a proof of concept. The goal was not
              to create a road-ready product, but to demonstrate the core
              detection logic, physical arrangement, and potential safety
              benefit of the system.
            </p>
          </div>
        </div>
      </section>

      {/* Problem and goals */}
      <section className="border-y border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A263A]">
              The Problem
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Pedestrian visibility depends on timely driver awareness
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Drivers may not immediately notice a pedestrian waiting near a
              crosswalk, especially in low-light conditions or visually busy
              environments. A warning system is only useful when it activates
              before the pedestrian enters the roadway.
            </p>

            <div className="mt-8 space-y-5">
              {designGoals.map((goal) => (
                <div key={goal} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7A263A]" />
                  <p className="leading-7 text-slate-700">{goal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative min-h-[500px]">
              <Image
                src="/images/ir-crosswalk/ir-crosswalk-concept.png"
                alt="IR Crosswalk system concept"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CAD section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A263A]">
              Mechanical Design
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Developing the sensor housing in Fusion 360
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The housing had to organize the electronics, provide openings for
              the sensors, and remain simple enough to manufacture for the
              prototype. The model was refined around the dimensions of the
              selected components rather than designed only for appearance.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <ProjectImage
              src="/images/ir-crosswalk/ir-crosswalk-cad-1.png"
              alt="IR Crosswalk enclosure CAD model"
              caption="Assembly development in Fusion 360"
            />

            <ProjectImage
              src="/images/ir-crosswalk/ir-crosswalk-cad-2.png"
              alt="IR Crosswalk Fusion 360 assembly"
              caption="Sensor enclosure and component layout"
            />
          </div>
        </div>
      </section>

      {/* System operation */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-300">
              System Operation
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Detect, process, and alert
            </h2>

            <div className="mt-8 space-y-6">
              <ProcessStep
                number="01"
                title="Detect"
                description="Infrared sensors identify a pedestrian entering the detection area near the crosswalk."
              />

              <ProcessStep
                number="02"
                title="Process"
                description="The controller interprets the sensor signal and determines when the warning system should activate."
              />

              <ProcessStep
                number="03"
                title="Alert"
                description="The system activates a visual warning intended to draw the attention of approaching drivers."
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-white/5">
            <div className="relative min-h-[500px]">
              <Image
                src="/images/ir-crosswalk/ir-crosswalk-system.png"
                alt="IR Crosswalk system operation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prototype and testing */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
            <div className="relative min-h-[500px]">
              <Image
                src="/images/ir-crosswalk/ir-crosswalk-prototype.jpg"
                alt="IR Crosswalk physical prototype"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A263A]">
              Prototype and Testing
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Evaluating the proof of concept
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The physical prototype allowed the team to test sensor placement,
              component organization, and system response. It also revealed the
              difference between a successful classroom demonstration and a
              system suitable for a real roadway environment.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Future development would require weather-resistant components,
              improved sensor reliability, stronger housings, power management,
              and extensive testing under different lighting and traffic
              conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="border-y border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A263A]">
                Lessons Learned
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Key takeaways from the design process
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <LessonCard
                number="01"
                title="Design around real components"
                description="Accurate component dimensions and cable clearances should guide the enclosure geometry from the beginning."
              />

              <LessonCard
                number="02"
                title="Sensor placement matters"
                description="The quality of the detection system depends heavily on sensor angle, range, and the surrounding environment."
              />

              <LessonCard
                number="03"
                title="Proof of concept is not field ready"
                description="A working demonstration validates the idea, but real deployment requires durability, redundancy, and environmental testing."
              />

              <LessonCard
                number="04"
                title="Mechanical and electrical systems are connected"
                description="Housing geometry, wiring, sensors, and controls must be developed together rather than as separate parts of the project."
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* Next project */}
      <section className="border-t border-slate-200 bg-slate-950 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Next Project
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              TouCan Product Design
            </h2>
          </div>

          <Link
            href="/projects/toucan"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            View Case Study
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

type ProjectImageProps = {
  src: string;
  alt: string;
  caption: string;
};

function ProjectImage({ src, alt, caption }: ProjectImageProps) {
  return (
    <figure className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
      <div className="relative min-h-[500px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <figcaption className="border-t border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-600">
        {caption}
      </figcaption>
    </figure>
  );
}

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-rose-300">
        {number}
      </span>

      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 leading-7 text-slate-300">{description}</p>
      </div>
    </div>
  );
}

type LessonCardProps = {
  number: string;
  title: string;
  description: string;
};

function LessonCard({ number, title, description }: LessonCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-slate-200 bg-white p-1">
      <p className="text-sm font-semibold text-[#7A263A]">{number}</p>
      <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}