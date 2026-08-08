"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
   { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-slate-300 text-slate-900"
      >
        <span
          className={`h-0.5 w-5 bg-current transition-transform duration-200 ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />

        <span
          className={`h-0.5 w-5 bg-current transition-opacity duration-200 ${
            isOpen ? "opacity-0" : ""
          }`}
        />

        <span
          className={`h-0.5 w-5 bg-current transition-transform duration-200 ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-20 z-50 border-b border-slate-200 bg-white shadow-xl">
          <nav className="flex flex-col px-6 py-5">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-100 py-4 text-base font-semibold text-slate-800"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex justify-center rounded-full border border-[#7A263A] px-5 py-3 text-sm font-semibold text-[#7A263A]"
            >
              View Resume
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}