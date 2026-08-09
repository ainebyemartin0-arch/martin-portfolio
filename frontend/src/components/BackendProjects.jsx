import BackendProjectCard from "./BackendProjectCard";

async function getDbProjects() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
  try {
    const res = await fetch(`${apiUrl}/api/projects/`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  } catch (e) { return []; }
}

export default async function BackendProjects() {
  const projects = await getDbProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      {projects.length === 0 ? (
        <p className="text-slate-500 text-center col-span-full">No projects found in database. Ensure Django is running.</p>
      ) : (
        projects.map((p, index) => (
          <BackendProjectCard key={p.id} p={p} index={index} />
        ))
      )}
    </div>
  );
}
