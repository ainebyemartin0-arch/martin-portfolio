import DjangoSkills from "@/components/DjangoSkills";

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      <div className="text-center mb-20">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Technical Arsenal</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A robust and continuously expanding toolkit for full-stack development, database design, and enterprise infrastructure management. Fetched live from my backend API.
        </p>
      </div>
      
      <DjangoSkills />
    </div>
  );
}
