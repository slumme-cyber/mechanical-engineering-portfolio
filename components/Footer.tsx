import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#7A263A] bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="max-w-md">
          <div className="mb-6 h-1 w-12 rounded-full bg-[#7A263A]" />

          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Sam Lum
          </h2>

          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#7A263A]">
            Mechanical Engineering Student • Virginia Tech
          </p>

          <p className="mt-5 leading-7 text-slate-700">
            Mechanical engineering student focused on product design, CAD,
            manufacturing, and practical engineering solutions while pursuing
            a Summer 2027 internship.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950">
            Navigation
          </h3>

          <div className="space-y-3">
            <Link
              href="/projects"
              className="block font-medium text-slate-800 transition-colors duration-200 hover:text-[#7A263A]"
            >
              Projects
            </Link>

            <Link
              href="/design-gallery"
              className="block font-medium text-slate-800 transition-colors duration-200 hover:text-[#7A263A]"
            >
              Design Gallery
            </Link>

            <Link
              href="/about"
              className="block font-medium text-slate-800 transition-colors duration-200 hover:text-[#7A263A]"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="block font-medium text-slate-800 transition-colors duration-200 hover:text-[#7A263A]"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950">
            Connect
          </h3>

          <div className="space-y-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-medium text-slate-800 transition-colors duration-200 hover:text-[#7A263A]"
            >
              Resume
            </a>

            <a
              href="https://www.linkedin.com/in/sam-lum"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-medium text-slate-800 transition-colors duration-200 hover:text-[#7A263A]"
            >
              LinkedIn
            </a>

            <a
              href="mailto:slumme@vt.edu"
              className="block font-medium text-slate-800 transition-colors duration-200 hover:text-[#7A263A]"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          © {new Date().getFullYear()} Sam Lum

          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}