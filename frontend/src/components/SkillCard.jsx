"use client";
import { motion } from "framer-motion";
import { Server, Code2, Database, Network, Smartphone, Wrench } from "lucide-react";

// Map categories to specific Lucide icons for a visual dashboard feel
const iconMap = {
  Backend: Server,
  Frontend: Code2,
  Database: Database,
  Networking: Network,
  Mobile: Smartphone,
  Tools: Wrench
};

export default function SkillCard({ title, skills, index }) {
  // Find the right icon, default to Wrench if category is unknown
  const Icon = iconMap[title] || Wrench;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.5, delay: index * 0.05 }} 
      whileHover={{ y: -5 }} 
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 transition-all hover:shadow-xl hover:border-accent/50"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      {/* Modern Pill Tags instead of a bulleted list */}
      <div className="flex flex-wrap gap-2">
        {skills.map((s, i) => (
          <span key={i} className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 transition-colors hover:bg-accent/10 hover:text-accent hover:border-accent/50 cursor-default">
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
