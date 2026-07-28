import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samlum.vercel.app/"),

  title: {
    default: "Sam Lum | Mechanical Engineering Portfolio",
    template: "%s | Sam Lum",
  },

  description:
    "Mechanical Engineering student at Virginia Tech seeking a Summer 2027 internship. Portfolio featuring CAD, product development, surveying, manufacturing, and engineering projects.",

  keywords: [
    "Mechanical Engineering",
    "Virginia Tech",
    "Mechanical Engineering Portfolio",
    "CAD",
    "Siemens NX",
    "Fusion 360",
    "Engineering Student",
    "Summer 2027 Internship",
    "Defense Engineering",
    "Product Design",
    "Manufacturing",
    "Surveying",
  ],

  authors: [
    {
      name: "Sam Lum",
    },
  ],

  creator: "Sam Lum",

  openGraph: {
    title: "Sam Lum | Mechanical Engineering Portfolio",

    description:
      "Mechanical Engineering student at Virginia Tech showcasing engineering projects, CAD design, surveying, and product development.",

    url: "https://samlum.vercel.app/",

    siteName: "Sam Lum Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sam Lum Mechanical Engineering Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sam Lum | Mechanical Engineering Portfolio",

    description:
      "Mechanical Engineering student at Virginia Tech seeking a Summer 2027 internship.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-white text-slate-950 antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
  <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
    <Link
      href="/"
      className="text-lg font-semibold tracking-tight text-slate-950 transition hover:text-[#7A263A]"
    >
      Sam Lum
    </Link>

    <nav className="hidden items-center gap-8 md:flex">
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
        className="text-sm font-medium text-slate-600 transition hover:text-[#7A263A]"
      >
        Resume
      </a>

      <Link
        href="/contact"
        className="rounded-full bg-[#7A263A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#641f30]"
      >
        Contact
      </Link>
    </nav>

    <MobileNav />
  </div>
</header>

                <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}