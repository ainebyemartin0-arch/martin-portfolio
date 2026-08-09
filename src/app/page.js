import Link from "next/link";
import { ArrowRight, Server, Network, Database } from "lucide-react";
export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-48">
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/20 opacity-30 blur-[100px] dark:bg-accent/10 dark:opacity-40"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white">Building scalable web experiences.</h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">I&apos;m Ainebye Martin, a Full-Stack Software Developer & IT Specialist. I design robust Django backends and craft pixel-perfect frontends.</p>
          <div className="mt-10 flex gap-4 justify-center">
            <Link href="/projects" className="group inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-200">View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Bento Grid "What I Do" */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          <div className="md:row-span-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div><Server className="w-8 h-8 text-accent mb-4" /><h3 className="font-heading text-xl font-semibold mb-2">Backend Engineering</h3><p className="text-sm text-slate-500">Architecting REST APIs and scalable server logic.</p></div>
            <div className="flex flex-wrap gap-2 mt-4">{["Python", "Django", "DRF", "REST APIs"].map(s => <span key={s} className="text-xs px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded-md">{s}</span>)}</div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div><Database className="w-8 h-8 text-accent mb-4" /><h3 className="font-heading text-xl font-semibold mb-2">Database Admin</h3></div>
            <div className="flex flex-wrap gap-2">{["PostgreSQL", "MySQL"].map(s => <span key={s} className="text-xs px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded-md">{s}</span>)}</div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div><Network className="w-8 h-8 text-accent mb-4" /><h3 className="font-heading text-xl font-semibold mb-2">IT & Networking</h3><p className="text-sm text-slate-500">Huawei routers, TCP/IP, CCTV.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
