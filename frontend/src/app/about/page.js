import Image from "next/image";
import { GraduationCap, Briefcase, Network, Cpu } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      {/* Header with Profile Picture */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="w-48 h-48 md:w-64 md:h-64 relative shrink-0">
          <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <Image 
            src="/profile.jpg" 
            alt="Ainebye Martin" 
            width={256} 
            height={256} 
            className="relative rounded-full border-4 border-slate-200 dark:border-slate-800 shadow-xl object-cover w-full h-full" 
            priority
          />
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">About Me</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 border-l-4 border-accent pl-4 italic md:text-left">
            Bridging the gap between robust software engineering and resilient network infrastructure.
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-8 text-lg text-slate-600 dark:text-slate-400 mb-24 leading-relaxed">
        <p>
          I am Ainebye Martin, a Full-Stack Software Developer and IT Support Specialist based in Kampala, Uganda. I recently graduated with a Bachelor of Information Technology (Second Class Upper Division, CGPA 4.00/5.00) from Cavendish University Uganda, specializing in software engineering and network infrastructure.
        </p>
        <p>
          My professional journey includes building production-ready web applications end-to-end—from database design to REST API development and frontend implementation. My flagship project, <span className="text-accent font-medium">BloodLink Uganda</span>, is a healthcare platform built for St. Francis Hospital Nsambya, designed to drastically reduce emergency blood-sourcing time.
        </p>
        <p>
          Beyond software, I possess hands-on enterprise networking experience from my tenure at the Uganda Police Force ICT Directorate. There, I configured Huawei routers and switches, deployed CCTV infrastructure, and provided critical technical support, giving me a unique, full-stack perspective of IT systems.
        </p>
      </div>

      {/* Core Focus Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-accent transition-colors group">
          <Briefcase className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="font-heading text-xl font-semibold mb-2 text-slate-900 dark:text-white">Full-Stack Development</h3>
          <p className="text-sm text-slate-500">Architecting scalable web apps using Django, DRF, React, and Next.js. From database schema to UI.</p>
        </div>
        <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-accent transition-colors group">
          <Network className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="font-heading text-xl font-semibold mb-2 text-slate-900 dark:text-white">Network Infrastructure</h3>
          <p className="text-sm text-slate-500">Configuring enterprise networks (Huawei, TCP/IP) and ensuring hardware and software security.</p>
        </div>
        <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-accent transition-colors group">
          <Cpu className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="font-heading text-xl font-semibold mb-2 text-slate-900 dark:text-white">System Architecture</h3>
          <p className="text-sm text-slate-500">Designing relational databases (PostgreSQL, MySQL) and integrating third-party APIs like MTN MoMo and SMS gateways.</p>
        </div>
        <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-accent transition-colors group">
          <GraduationCap className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="font-heading text-xl font-semibold mb-2 text-slate-900 dark:text-white">Continuous Learning</h3>
          <p className="text-sm text-slate-500">Actively expanding my expertise in cloud deployment (Render, Vercel) and modern frontend frameworks.</p>
        </div>
      </div>
    </div>
  );
}
