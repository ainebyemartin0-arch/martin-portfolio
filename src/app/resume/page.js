import { Download, Mail, MapPin, Phone } from "lucide-react";
export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">Resume / CV</h1>
        <p className="text-slate-600 dark:text-slate-400">A summary of my professional background and education.</p>
        <a href="mailto:ainebyemartin0@gmail.com" className="mt-8 inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors">
          <Download size={18} /> Request Full PDF CV
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl">
          <h2 className="font-heading text-2xl font-bold mb-4 text-accent">Contact</h2>
          <ul className="space-y-3 text-slate-600 dark:text-slate-400">
            <li className="flex items-center gap-3"><Phone size={18} /> +256 785 517 515</li>
            <li className="flex items-center gap-3"><Mail size={18} /> ainebyemartin0@gmail.com</li>
            <li className="flex items-center gap-3"><MapPin size={18} /> Bweyogerere, Kampala, Uganda</li>
          </ul>
        </div>
        <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl">
          <h2 className="font-heading text-2xl font-bold mb-4 text-accent">Education</h2>
          <h3 className="font-semibold text-lg">Bachelor of Information Technology</h3>
          <p className="text-slate-500">Cavendish University Uganda | 2023 – 2026</p>
          <p className="text-sm text-slate-400 mt-2">CGPA: 4.00/5.00 | Second Class Upper Division</p>
        </div>
      </div>
    </div>
  );
}
