import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sam Lum | Mechanical Engineering Portfolio",
  description:
    "Mechanical engineering portfolio focused on product design, CAD, manufacturing, and defense applications.",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "References", href: "/references" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-950 antialiased">
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-slate-950 transition hover:text-[#7A263A]"
            >
              Sam Lum
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-[#7A263A]"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-[#7A263A] hover:text-[#7A263A]"
              >
                Resume
              </a>

              <a
                href="mailto:slumme@vt.edu"
                className="rounded-full bg-[#7A263A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#641f30]"
              >
                Contact
              </a>
            </nav>

           <div className="flex items-center gap-2 md:hidden">
  <Link
    href="/references"
    className="text-sm font-medium text-slate-600 transition hover:text-[#7A263A]"
  >
    References
  </Link>

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 transition hover:border-[#7A263A] hover:text-[#7A263A]"
  >
    Resume
  </a>

  <a
    href="mailto:slumme@vt.edu"
    className="rounded-full bg-[#7A263A] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#641f30]"
  >
    Contact
  </a>
</div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}