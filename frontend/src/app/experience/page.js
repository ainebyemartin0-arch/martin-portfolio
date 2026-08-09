"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const experiences = [
  {
    year: "2025 - Present",
    role: "IT/IM Intern",
    company: "Uganda Police Force, ICT Directorate",
    description: "Configured and maintained Huawei routers and switches for secure departmental network connectivity. Installed CCTV systems, performed LAN troubleshooting, and provided first-line technical support to ensure high system availability.",
    icon: Briefcase
  },
  {
    year: "2023 - 2026",
    role: "BSc. Information Technology",
    company: "Cavendish University Uganda",
    description: "Graduated with Second Class Upper Division (CGPA 4.00/5.00). Specialized in software engineering, network infrastructure, and database administration. Led the development of BloodLink Uganda as my final year project.",
    icon: GraduationCap
  },
  {
    year: "Freelance",
    role: "Full-Stack Developer",
    company: "Remote / Various Clients",
    description: "Designed, built, and deployed production-ready e-commerce and healthcare applications. Handled end-to-end development from database schema design to REST API creation and responsive frontend implementation.",
    icon: Code2
  }
];

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <div className="text-center mb-20">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Experience & Education</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">My professional journey in software engineering and IT infrastructure.</p>
      </div>
      
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-16">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              className="relative pl-12"
            >
              <div className="absolute w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center -left-[26px] top-0">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm text-accent font-mono mb-2 block">{exp.year}</span>
              <h3 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">{exp.role}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium mb-4 text-lg">{exp.company}</p>
              <p className="text-slate-500 leading-relaxed">{exp.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
