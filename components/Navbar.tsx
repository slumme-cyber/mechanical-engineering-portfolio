import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sam Lum | Mechanical Engineering Portfolio",
  description:
    "Mechanical engineering portfolio focused on product design, CAD, manufacturing, and defense applications.",
};

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Design Gallery", href: "/design-gallery" },
  { label: "Resume", href: "/resume" },
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

              <Link
                href="/contact"
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-[#7A263A] hover:text-[#7A263A]"
              >
                Contact
              </Link>
            </nav>

            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[#7A263A] hover:text-[#7A263A] md:hidden"
            >
              Contact
            </Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}