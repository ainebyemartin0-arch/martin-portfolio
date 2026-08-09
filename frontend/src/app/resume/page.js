import { Download, Mail, MapPin, Phone, GraduationCap, Award, Users, Languages } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      {/* Header & CTA */}
      <div className="text-center mb-20">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Resume Summary</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
          A detailed overview of my academic background, professional experience, and core technical competencies.
        </p>
        <a 
          href="mailto:ainebyemartin0@gmail.com?subject=Request for Full CV PDF" 
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-hover transition-all shadow-md hover:shadow-lg"
        >
          <Download size={18} /> Request Full PDF CV
        </a>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Education & Contact */}
        <div className="md:col-span-1 space-y-8">
          <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <h2 className="font-heading text-xl font-bold mb-6 text-accent flex items-center gap-2">
              <GraduationCap size={20} /> Education
            </h2>
            <h3 className="font-semibold text-slate-900 dark:text-white">BSc. Information Technology</h3>
            <p className="text-sm text-slate-500 mt-1">Cavendish University Uganda</p>
            <p className="text-xs text-slate-400 mt-1">2023 – 2026</p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-sm text-slate-600 dark:text-slate-400">CGPA: 4.00/5.00</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Second Class Upper Division</p>
            </div>
          </div>

          <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <h2 className="font-heading text-xl font-bold mb-6 text-accent flex items-center gap-2">
              <Mail size={20} /> Contact
            </h2>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-3"><Phone size={16} className="text-slate-400" /> +256 785 517 515</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-slate-400" /> ainebyemartin0@gmail.com</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-slate-400" /> Kampala, Uganda</li>
            </ul>
          </div>

          <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <h2 className="font-heading text-xl font-bold mb-6 text-accent flex items-center gap-2">
              <Languages size={20} /> Languages
            </h2>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>English (Fluent)</li>
              <li>Luganda (Fluent)</li>
              <li>Runyankole (Conversational)</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Highlights & Leadership */}
        <div className="md:col-span-2 space-y-8">
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-900/50">
            <h2 className="font-heading text-xl font-bold mb-6 text-accent flex items-center gap-2">
              <Award size={20} /> Professional Highlights
            </h2>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></span>
                <span>Proven track record of delivering full-stack web applications from database design through deployment, including e-commerce and healthcare systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></span>
                <span>Hands-on enterprise networking experience configuring Huawei routers, switches, and CCTV infrastructure at the Uganda Police Force ICT Directorate.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></span>
                <span>Expertise in integrating complex third-party APIs including MTN MoMo, Airtel Money, and Africa&apos;s Talking SMS gateway.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <h2 className="font-heading text-xl font-bold mb-6 text-accent flex items-center gap-2">
              <Users size={20} /> Leadership & Activities
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Secretary, Students Affairs</h3>
                <p className="text-sm text-slate-500 mt-1">LC1 Kireka Main (Bweyogerere)</p>
                <p className="text-sm text-slate-400 mt-2">Actively involved in community coordination and student engagement initiatives, demonstrating strong organizational and communication skills.</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-white">Member, Python Programming Club</h3>
                <p className="text-sm text-slate-500 mt-1">Cavendish University Uganda</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
