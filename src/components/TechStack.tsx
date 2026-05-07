export default function TechStack() {
  const skills = [
    "Flutter",
    "Dart",
    "Firebase",
    "GetX",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Figma",
    "Python",
    "OpenCV"
  ];

  return (
    <section className="mb-12">
      <h2 className="mb-6 border-b-2 border-blue-500 pb-2 text-3xl font-bold text-white">Tech Stack & Tools</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="rounded-full bg-gray-800 border border-blue-500 px-5 py-2 text-sm font-semibold text-blue-400 shadow-md transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-blue-500/50 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}