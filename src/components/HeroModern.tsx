export default function HeroModern() {
  const skills = [
    { name: "Flutter", icon: "○", proficiency: 90 },
    { name: "Next.js", icon: "◨", proficiency: 75 },
    { name: "Python", icon: "◑", proficiency: 85 },
    { name: "Firebase", icon: "●", proficiency: 90 }
  ];

  return (
    <section id="home" className="relative flex min-h-[95vh] w-full flex-col justify-end overflow-hidden rounded-b-[2.5rem] bg-black pb-12 pt-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-red-900/90 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent opacity-100"></div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-grow flex-col justify-between px-8 md:px-16">
        <div className="mt-24 flex flex-col items-start justify-between gap-12 md:flex-row md:items-center md:gap-8">
          <div className="max-w-3xl">
            <p className="mb-2 text-xl font-medium text-orange-200 md:text-2xl">Hey, I'm a</p>
            <h1 className="text-6xl font-extrabold leading-[1.1] tracking-tighter text-white md:text-8xl">
              Fullstack<br />Developer
            </h1>
          </div>
          <div className="max-w-xs md:text-left">
            <h3 className="mb-4 text-2xl font-bold text-white">Engineering logic, designing experiences.</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              From robust database architectures to intuitive user interfaces, I build high-performance applications that connect and convert.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-8 border-t border-white/20 pt-8 md:pt-12 w-full">
          {skills.map((skill, index) => (
            <div key={index} className="group flex w-[45%] md:w-44 cursor-default flex-col gap-2">
              <div className="flex items-center justify-between text-white/70 transition-colors duration-300 group-hover:text-orange-400">
                <span className="flex items-center gap-2 text-lg font-bold md:text-xl">
                  {skill.icon} {skill.name}
                </span>
                <span className="text-xs font-bold text-orange-500 opacity-100">
                  {skill.proficiency}%
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800/80">
                <div
                  className="h-full rounded-full bg-orange-600 transition-colors duration-300 group-hover:bg-orange-400 shadow-[0_0_10px_rgba(234,88,12,0.4)]"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}