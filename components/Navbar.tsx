import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Sam Lum
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium md:flex">
          <Link href="/" className="transition hover:text-slate-500">
            Home
          </Link>

          <a href="#projects" className="transition hover:text-slate-500">
  Projects
</a>

          <a href="#about" className="transition hover:text-slate-500">
  About
</a>

<a href="#contact" className="transition hover:text-slate-500">
  Contact
</a>

          <a
            href="/resume.pdf"
            className="rounded-md bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}