import { GraduationCap, Briefcase, Network } from "lucide-react";
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-8">About Me</h1>
      <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 mb-20">
        <p>I&apos;m Ainebye Martin, a Full-Stack Software Developer and IT Support Specialist based in Kampala, Uganda. I hold a Bachelor of Information Technology (CGPA 4.00/5.00) from Cavendish University Uganda.</p>
        <p>My expertise spans across building production-ready web applications using Python, Django, and JavaScript, as well as configuring enterprise network infrastructure. I have a proven track record of delivering full-stack systems from database design through deployment.</p>
        <p>Beyond software, I possess hands-on networking experience from my time at the Uganda Police Force ICT Directorate, configuring Huawei routers, managing CCTV systems, and providing critical IT support.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl"><Briefcase className="w-8 h-8 text-accent mb-4" /><h3 className="font-heading text-lg font-semibold mb-2">Full-Stack Dev</h3><p className="text-sm text-slate-500">Django, DRF, React, Next.js</p></div>
        <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl"><Network className="w-8 h-8 text-accent mb-4" /><h3 className="font-heading text-lg font-semibold mb-2">Networking</h3><p className="text-sm text-slate-500">Huawei, TCP/IP, LAN/WAN, CCTV</p></div>
        <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl"><GraduationCap className="w-8 h-8 text-accent mb-4" /><h3 className="font-heading text-lg font-semibold mb-2">Education</h3><p className="text-sm text-slate-500">BSc. IT, Cavendish University</p></div>
      </div>
    </div>
  );
}
