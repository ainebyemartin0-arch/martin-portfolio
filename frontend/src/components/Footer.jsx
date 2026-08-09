import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Bio */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/Logo.png" alt="Martin Logo" width={40} height={40} className="rounded-lg" />
              <span className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Martin<span className="text-accent">.dev</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Full-Stack Developer & IT Specialist building scalable web applications and resilient networks.
            </p>
          </div>

          {/* Navigation Sitemap */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-slate-400 mt-0.5 shrink-0" />
                <a href="mailto:ainebyemartin0@gmail.com" className="text-slate-500 hover:text-accent transition-colors break-all">
                  ainebyemartin0@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-slate-400 mt-0.5 shrink-0" />
                <span className="text-slate-500">Kampala, Uganda</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/ainebyemartin0-arch" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-white hover:bg-accent hover:border-accent transition-all">
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/martin-ainebye" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-white hover:bg-accent hover:border-accent transition-all">
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a href="https://wa.me/256785517515" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-white hover:bg-accent hover:border-accent transition-all">
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Ainebye Martin. All rights reserved.</p>
          <p className="text-xs text-slate-400">Built with Next.js, Django REST Framework & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
