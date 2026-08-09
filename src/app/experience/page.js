import { motion } from "framer-motion";
const experiences = [
  { year: "2025 - Present", role: "IT/IM Intern", company: "Uganda Police Force, ICT Directorate", description: "Configured Huawei routers/switches, managed CCTV infrastructure, and provided first-line technical support and LAN troubleshooting." },
  { year: "2023 - 2026", role: "BSc. Information Technology", company: "Cavendish University Uganda", description: "Graduated with Second Class Upper Division (CGPA 4.00/5.00). Focused on software engineering and network infrastructure." },
  { year: "Freelance", role: "Full-Stack Developer", company: "Various Projects (BloodLink, FootStyle)", description: "Built production-ready e-commerce and healthcare apps using Django, DRF, and Vanilla JS, deploying on Render." }
];
export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Experience & Education</h1>
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative pl-8">
            <div className="absolute w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-slate-950 -left-[10px] top-0"></div>
            <span className="text-sm text-accent font-mono">{exp.year}</span>
            <h3 className="font-heading text-xl font-semibold mt-1">{exp.role}</h3>
            <p className="text-slate-600 dark:text-slate-400 font-medium mb-2">{exp.company}</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
