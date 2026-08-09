import GitHubProjects from "@/components/GitHubProjects";
import BackendProjects from "@/components/BackendProjects";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-32">
      <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Projects & Case Studies</h1>
      
      {/* Full-Stack Database Projects (Django API) */}
      <div className="mb-32">
        <h2 className="font-heading text-2xl font-bold mb-2 text-center text-slate-900 dark:text-white">Featured Full-Stack Projects</h2>
        <p className="text-center text-slate-500 mb-10 text-sm">Fetched dynamically from my Django REST API.</p>
        <BackendProjects />
      </div>

      {/* GitHub Repositories */}
      <div>
        <h2 className="font-heading text-2xl font-bold mb-2 text-center text-slate-500">More Repositories</h2>
        <p className="text-center text-slate-500 mb-10 text-sm">Live synced directly from my GitHub profile.</p>
        <GitHubProjects />
      </div>
    </div>
  );
}
