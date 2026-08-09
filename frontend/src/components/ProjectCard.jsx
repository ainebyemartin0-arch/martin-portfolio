"use client";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "./Icons";
export default function ProjectCard({ repo, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} whileHover={{ y: -5 }} className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between transition-all hover:shadow-xl hover:border-accent/50">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center"><GitHubIcon className="w-5 h-5 text-slate-700 dark:text-slate-300" /></div>
          {repo.language && (<span className="text-xs text-slate-500 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent"></span> {repo.language}</span>)}
        </div>
        <h3 className="font-heading text-lg font-semibold capitalize mb-2 text-slate-900 dark:text-white">{repo.name.replace(/-/g, " ")}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-grow">{repo.description || "No description provided."}</p>
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <span className="text-xs text-slate-500 flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:text-accent-hover flex items-center gap-1">View Code <ExternalLink size={14} /></a>
      </div>
    </motion.div>
  );
}
