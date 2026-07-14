import Image from "next/image";
import Link from "next/link";

const cadProjects = [
  {
    title: "TouCan Assembly",
    category: "Product Assembly",
    software: "Siemens NX",
    description:
      "Complete assembly showing the external controls, internal component packaging, mounting structure, and integration with the trash can.",
    image: "/images/design-gallery/toucan-assembly.png",
    padding: "p-1",
  },
  {
    title: "Electronics Integration",
    category: "Component Packaging",
    software: "Siemens NX",
    description:
      "Detailed arrangement of the Arduino, OLED display, wiring, structural supports, and surrounding enclosure components.",
    image: "/images/design-gallery/toucan-electronics.png",
    padding: "p-2",
  },
  {
    title: "Control Housing",
    category: "Enclosure Design",
    software: "Siemens NX",
    description:
      "External housing designed to position the display and controls while protecting the electronics and maintaining a compact form.",
    image: "/images/design-gallery/toucan-housing.png",
    padding: "p-4",
  },
];

export default function CadGalleryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:pb-28 md:pt-16 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A263A] transition duration-300 hover:-translate-x-1 hover:opacity-70"
        >
          <span aria-hidden="true">←</span>
          Back home
        </Link>

        <div className="mt-16 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7A263A]">
            CAD Gallery
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Engineering through design.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
            A collection of mechanical assemblies, product concepts, component
            designs, and CAD work developed through engineering projects at
            Virginia Tech.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          {["Siemens NX", "Assemblies", "Product Design", "Mechanical Systems"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {item}
              </span>
            )
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="space-y-28 md:space-y-36">
          {cadProjects.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-10 border-t border-slate-200 pt-14 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16"
            >
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-sm font-bold text-[#7A263A]">
                  0{index + 1}
                </p>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {project.category}
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  {project.title}
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Software
                  </p>
                  <p className="mt-2 font-medium text-slate-800">
                    {project.software}
                  </p>
                </div>
              </div>

              <div className="group relative min-h-[440px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-[0_28px_80px_-50px_rgba(15,23,42,0.45)] md:min-h-[650px]">
                <Image
  src={project.image}
  alt={`${project.title} CAD render`}
  fill
  priority={index === 0}
  sizes="(min-width: 1024px) 65vw, 100vw"
  className={`object-contain ${project.padding} transition duration-700 group-hover:scale-[1.02]`}
/>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-white/5" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A263A]">
              Selected Work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              See the full engineering process behind TouCan.
            </h2>
          </div>

          <Link
            href="/projects/toucan"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#7A263A] hover:shadow-lg"
          >
            View TouCan Case Study
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}