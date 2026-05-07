export default function BrandMarquee() {
  const skills = [
    { name: "Flutter", icon: "○", proficiency: 90 },
    { name: "Next.js", icon: "◨", proficiency: 75 },
    { name: "Python", icon: "◑", proficiency: 85 },
    { name: "Firebase", icon: "●", proficiency: 90 }
  ];

  return (
    <section className="flex flex-col items-center gap-10 border-b border-gray-800 bg-[#0f0f0f] px-8 py-16 md:flex-row md:px-16">
      <div className="max-w-[150px] shrink-0 text-sm leading-snug text-gray-400">
        Frameworks &<br />Technologies
      </div>
      <div className="flex flex-1 flex-wrap items-center justify-around gap-8 md:gap-4 w-full">
        {skills.map((skill, index) => (
          <div key={index} className="group flex w-36 cursor-default flex-col gap-2 md:w-44">
            <div className="flex items-center justify-between text-white/50 transition-colors duration-300 group-hover:text-orange-500">
              <span className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                {skill.icon} {skill.name}
              </span>
              <span className="text-xs font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {skill.proficiency}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
              <div
                className="h-full rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-orange-500"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}