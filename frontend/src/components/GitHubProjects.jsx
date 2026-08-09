import ProjectCard from "./ProjectCard";
async function getGithubRepos() {
  try {
    const res = await fetch("https://api.github.com/users/ainebyemartin0-arch/repos?sort=updated&per_page=6", { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    return res.json();
  } catch (e) { return []; }
}
export default async function GitHubProjects() {
  const repos = await getGithubRepos();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.length === 0 ? <p className="text-slate-500 text-center col-span-full">Unable to fetch projects right now.</p> : repos.map((repo, index) => <ProjectCard key={repo.id} repo={repo} index={index} />)}
    </div>
  );
}
