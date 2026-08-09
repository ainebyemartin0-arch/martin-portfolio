"use client";
import { motion } from "framer-motion";
import { ExternalLink, PlayCircle } from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function BackendProjectCard({ p, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.5, delay: index * 0.05 }} 
      whileHover={{ y: -5 }} 
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col justify-between transition-all hover:shadow-xl hover:border-accent/50"
    >
      <div>
        <h3 className="font-heading text-2xl font-bold mb-3 text-slate-900 dark:text-white">{p.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">{p.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tech_stack.split(", ").map(tech => (
            <span key={tech} className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-slate-700 dark:text-slate-300">{tech}</span>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        {p.github_url && (
          <a href={p.github_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-accent transition-colors">
            <GitHubIcon className="w-4 h-4" /> Source Code
          </a>
        )}
        {p.live_url && (
          <a href={p.live_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
            Live Demo <ExternalLink size={14} />
          </a>
        )}
        {p.demo_url && (
          <a href={p.demo_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-purple-500 hover:text-purple-600 transition-colors">
            <PlayCircle size={16} /> Watch Clip
          </a>
        )}
      </div>
    </motion.div>
  );
}
