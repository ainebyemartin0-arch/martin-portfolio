import { Mail, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/Icons";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <div className="text-center mb-20">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Let&apos;s Build Something</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          I&apos;m currently open to new opportunities, freelance work, and collaborations. Reach out via any of the platforms below.
        </p>
      </div>

      {/* Premium Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* WhatsApp Card */}
        <a 
          href="https://wa.me/256785517515" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-between p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-accent transition-colors group"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <WhatsAppIcon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">WhatsApp</h3>
              <p className="text-sm text-slate-500 mt-1">Fastest way to reach me</p>
            </div>
          </div>
          <ArrowRight className="text-slate-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </a>

        {/* Email Card */}
        <a 
          href="mailto:ainebyemartin0@gmail.com" 
          className="flex items-center justify-between p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-accent transition-colors group"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">Email</h3>
              <p className="text-sm text-slate-500 mt-1">ainebyemartin0@gmail.com</p>
            </div>
          </div>
          <ArrowRight className="text-slate-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </a>

        {/* GitHub Card */}
        <a 
          href="https://github.com/ainebyemartin0-arch" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-between p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-accent transition-colors group"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <GitHubIcon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">GitHub</h3>
              <p className="text-sm text-slate-500 mt-1">View my source code</p>
            </div>
          </div>
          <ArrowRight className="text-slate-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </a>

        {/* LinkedIn Card */}
        <a 
          href="https://linkedin.com/in/martin-ainebye" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-between p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-accent transition-colors group"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <LinkedInIcon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">LinkedIn</h3>
              <p className="text-sm text-slate-500 mt-1">Let&apos;s connect professionally</p>
            </div>
          </div>
          <ArrowRight className="text-slate-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </a>

      </div>
    </div>
  );
}
