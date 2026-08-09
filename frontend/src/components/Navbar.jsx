"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight">
          Martin<span className="text-accent">.dev</span>
        </Link>
        
        <div className="hidden lg:flex items-center space-x-1 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 rounded-full p-1">
          {links.map((l) => (
            <Link 
              key={l.href} 
              href={l.href} 
              className={`px-4 py-2 rounded-full transition-all ${pathname === l.href ? "bg-white dark:bg-slate-800 text-accent shadow-sm" : "hover:text-slate-900 dark:hover:text-white"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
