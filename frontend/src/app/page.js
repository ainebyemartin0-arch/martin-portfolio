import Link from "next/link";
import { ArrowRight, Server, Network, Database, Code2 } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/20 opacity-30 blur-[100px] dark:bg-accent/10 dark:opacity-40"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-slate-600 dark:text-slate-300">Available for new opportunities</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white">
            Engineering robust web applications and resilient networks.
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I am Ainebye Martin, a Full-Stack Software Developer and IT Specialist based in Kampala, Uganda. I specialize in building production-ready Django and React applications and configuring enterprise-grade network infrastructure.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="group inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-200 transition-all shadow-md hover:shadow-lg">
              Explore My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="max-w-4xl mx-auto px-6 pb-24 border-b border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">4.00</h3>
            <p className="text-sm text-slate-500 mt-1">CGPA (BSc. IT)</p>
          </div>
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">5+</h3>
            <p className="text-sm text-slate-500 mt-1">Apps Deployed</p>
          </div>
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">100%</h3>
            <p className="text-sm text-slate-500 mt-1">Commitment</p>
          </div>
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">24/7</h3>
            <p className="text-sm text-slate-500 mt-1">Problem Solver</p>
          </div>
        </div>
      </section>

      {/* Bento Grid "What I Do" */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Core Competencies</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">A synergy of software engineering and enterprise infrastructure.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          {/* Backend - Large Card */}
          <div className="md:row-span-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div>
              <Server className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-heading text-2xl font-semibold mb-3 text-slate-900 dark:text-white">Backend Engineering</h3>
              <p className="text-slate-500 leading-relaxed">Architecting secure, scalable REST APIs and complex server-side logic using Python and Django.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Python", "Django", "DRF", "REST", "JWT Auth"].map(s => <span key={s} className="text-xs px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-300">{s}</span>)}
            </div>
          </div>
          
          {/* Frontend */}
          <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div>
              <Code2 className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-heading text-2xl font-semibold mb-3 text-slate-900 dark:text-white">Frontend Dev</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TailwindCSS", "JS"].map(s => <span key={s} className="text-xs px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-300">{s}</span>)}
            </div>
          </div>

          {/* Database */}
          <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div>
              <Database className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-heading text-2xl font-semibold mb-3 text-slate-900 dark:text-white">Database Admin</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "MySQL", "SQLite"].map(s => <span key={s} className="text-xs px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-300">{s}</span>)}
            </div>
          </div>

          {/* Networking - Wide Card */}
          <div className="md:col-span-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-6">
              <Network className="w-10 h-10 text-accent mt-1" />
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-3 text-slate-900 dark:text-white">IT and Networking</h3>
                <p className="text-slate-500 leading-relaxed max-w-md">Hands-on experience configuring enterprise network infrastructure, ensuring high availability and security.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Huawei", "TCP/IP", "LAN/WAN", "CCTV"].map(s => <span key={s} className="text-xs px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-300">{s}</span>)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
