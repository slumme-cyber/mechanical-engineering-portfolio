import Image from "next/image";
import Link from "next/link";

const experienceHighlights = [
  {
    title: "Engineering Design",
    description:
      "Developing CAD models, assemblies, and physical prototypes through mechanical engineering coursework and team projects.",
  },
  {
    title: "Surveying and Drafting",
    description:
      "Creating linework, surfaces, plats, and grading plans using field data collected with GPS and total station equipment.",
  },
  {
    title: "Field Experience",
    description:
      "Working around active construction operations, underground utilities, paving, site development, and residential infrastructure.",
  },
  {
    title: "Division 1 Soccer Student-Manager",
    description: 
      "Alongside my engineering coursework, I served as a student manager for the Virginia Tech men's soccer team, coordinating equipment, logistics, and game-day operations for a Division One program, an experience that strengthened my time management and ability to perform reliably under pressure.",
  }
];

const technicalSkills = [
  "Siemens NX",
  "Fusion 360",
  "AutoCAD Civil 3D",
  "Carlson Survey",
  "GPS Surveying",
  "Total Station",
  "GD&T",
  "Product Design",
  "Python",
  "MATLAB",
  "Git",
  "Next.js",
  "Laser Cutting",
  "3D Printing",
  "CNC Machining",
  "Electronics",
  "IR Sensors",
  "Arduino",
  "Welding",
  "Carpentry",
  "ASME",
  "Excel"
];

const values = [
  {
    number: "01",
    title: "Practical design",
    description:
      "On TouCan, I learned that a good mechanism means nothing if it doesn't fit the wiring, the motor, and the user's hand all at once, that's the kind of constraint-juggling I actually enjoy.",
  },
  {
    number: "02",
    title: "Continuous improvement",
    description:
      "After watching our first TouCan prototype turn into a packaging puzzle, I started sketching for manufacturability from day one instead of fixing it later.",
  },
  {
    number: "03",
    title: "Team contribution",
    description:
      "Surveying taught me that a small measurement error costs someone else time and money down the line, so I've gotten particular about catching mistakes before they leave my hands.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,38,58,0.10),transparent_38%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-40">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A263A]">
              About Me
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Mechanical engineering shaped by design and hands-on experience.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              I am a mechanical engineering student at Virginia Tech with
              experience in CAD, product development, surveying, construction,
              and rapid prototyping. My interest in engineering started less in a classroom and more standing next to a total station on a job site, seeing how a design on paper actually meets dirt, weather, and people's schedules, that's the gap I like working in.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A263A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#641f30]"
              >
                View My Projects
                <span aria-hidden="true">→</span>
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#7A263A]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/projects/headshot.jpg"
                  alt="Sam Lum"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.65fr_1.35fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A263A]">
              My Background
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Building experience in the classroom, office, and field
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              My engineering interests developed through a combination of
              coursework, design projects, field experience, and exposure to
              the construction and land-development process. I'm also a general member of the

American Society of Mechanical Engineers

, Virginia Tech chapter, staying connected to the broader engineering community outside my coursework.
            </p>

            <p>
              At Virginia Tech, I have worked on projects involving mechanical
              design, CAD assemblies, sensor integration, product development,
              and 3D-printed prototypes. These experiences have strengthened my
              ability to turn an early idea into a model that can be evaluated,
              manufactured, and improved.
            </p>

            <p>
              Outside the classroom, my work in surveying and construction has
              given me a better understanding of how drawings, measurements,
              grading decisions, utilities, and field conditions affect real
              projects. That experience has made me more attentive to
              practicality, accuracy, and the people responsible for building
              a design.
            </p>
          </div>
        </div>
      </section>

      {/* Experience highlights */}
      <section className="border-y border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A263A]">
              Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A broad foundation across design and field work
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Each experience has helped me understand a different part of the
              engineering process, from collecting accurate field information
              to developing digital models and building prototypes.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {experienceHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="h-1 w-12 rounded-full bg-[#7A263A]" />

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Career direction */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-300">
              Career Direction
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Seeking a Summer 2027 mechanical engineering internship
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I am looking for an internship where I can contribute to
              mechanical design, product development, manufacturing, testing,
              or systems-oriented engineering work.
            </p>

            <p>
              I am particularly interested in defense, aerospace, and advanced
              manufacturing environments where engineers work across
              disciplines and where attention to detail, reliability, and
              practical problem solving are essential.
            </p>

            <p>
              I want to end up somewhere the tolerances actually matter, defense and aerospace appeal to me because the margin for error is small and the stakes are real, and that's the kind of pressure that got me hooked on surveying and CAD in the first place.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A263A]">
                How I Work
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                The mindset I bring to engineering projects
              </h2>
            </div>

            <div className="space-y-6">
              {values.map((value) => (
                <article
                  key={value.number}
                  className="grid gap-5 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-7 sm:grid-cols-[auto_1fr] sm:p-8"
                >
                  <span className="text-sm font-semibold text-[#7A263A]">
                    {value.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {value.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A263A]">
              Technical Toolbox
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Tools and capabilities
            </h2>
          </div>

          <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
            {technicalSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#7A263A] px-8 py-14 text-white sm:px-12 sm:py-16">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full border border-white/10" />
            <div className="absolute bottom-0 right-20 h-32 w-32 translate-y-1/2 rounded-full border border-white/10" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-200">
                Let&apos;s Connect
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Interested in discussing an internship or engineering
                opportunity?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-rose-100">
                Explore my projects, review my experience, or connect with me
                through LinkedIn.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#7A263A] transition hover:bg-slate-100"
                >
                  Explore Projects
                  <span aria-hidden="true">→</span>
                </Link>

                <a
                  href="https://www.linkedin.com/in/sam-lum"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}