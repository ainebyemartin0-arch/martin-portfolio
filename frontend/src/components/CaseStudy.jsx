"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function CaseStudy() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 mb-20 shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">Featured Case Study</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-4">BloodLink Uganda</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            A blood donor management and emergency-response web application built for a real hospital case study (St. Francis Hospital Nsambya). It targeted a reduction in emergency blood-sourcing time from 6–8 hours to under 2 hours.
          </p>
          
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Architecture & Implementation</h4>
              <p className="text-sm text-slate-500">Built with Django REST Framework. Designed a relational PostgreSQL database schema and implemented two separate authenticated portals (staff & donors).</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Key Challenge Solved</h4>
              <p className="text-sm text-slate-500">Integrated Africa&apos;s Talking SMS API for emergency donor notifications with location-priority ordering to ensure fast response times.</p>
            </div>
          </div>

          <a href="https://github.com/ainebyemartin0-arch/BloodLink" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <GitHubIcon className="w-4 h-4" /> View Source Code
          </a>
        </div>
        
        <div className="bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 h-full flex flex-col justify-center">
          <h4 className="font-heading text-lg font-semibold mb-4 text-slate-500">Tech Stack & Features</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Python", "Django", "DRF", "PostgreSQL", "Africa's Talking API", "Bootstrap 5", "Render"].map(tech => (
              <span key={tech} className="text-xs px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-300">{tech}</span>
            ))}
          </div>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-accent mt-1 shrink-0" /> Real-time donor-hospital matching algorithm</li>
            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-accent mt-1 shrink-0" /> Blood-type compatibility matrix</li>
            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-accent mt-1 shrink-0" /> Secure JWT Authentication</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
