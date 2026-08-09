import SkillCard from "./SkillCard";

async function getSkills() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
  try {
    const res = await fetch(`${apiUrl}/api/skills/`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  } catch (e) { 
    console.error("Backend connection failed:", e);
    return []; 
  }
}

export default async function DjangoSkills() {
  const skills = await getSkills();
  const grouped = skills.reduce((acc, s) => { 
    if (!acc[s.category]) acc[s.category] = []; 
    acc[s.category].push(s.name); 
    return acc; 
  }, {});

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.keys(grouped).length === 0 ? (
        <p className="text-slate-500 text-center col-span-full">Ensure Django backend is running on port 8000.</p>
      ) : (
        Object.entries(grouped).map(([category, skillsList], i) => (
          <SkillCard key={category} title={category} skills={skillsList} index={i} />
        ))
      )}
    </div>
  );
}
