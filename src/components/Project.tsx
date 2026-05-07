export default function Projects() {
  const projects = [
    {
      title: "License Plate Recognition",
      description: "Indonesian plate text formatting system built with advanced image processing and PARseq engine.",
      tech: ["Python", "OpenCV", "PARseq"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Galaxy-birth-D",
      description: "High-performance web application successfully deployed to production.",
      tech: ["Three.js", "Vercel"],
      image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "jobseeker App",
      description: "Job seeking mobile application featuring complex state management.",
      tech: ["Flutter", "Provider"],
      image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Astra Warehouse Management System",
      description: "Backend system implementing strict Cloud Firestore database rules and architecture.",
      tech: ["Flutter", "Firebase"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Absensi godsseo",
      description: "Mobile attendance application developed for operational needs.",
      tech: ["Flutter", "Firebase"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Absensi Green Regency",
      description: "Mobile attendance system designed and built for Green Regency.",
      tech: ["Flutter", "Firebase"],
      image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Chat BK SMK 5 Madiun",
      description: "Counseling chat application specifically built for SMK 5 Kota Madiun.",
      tech: ["Flutter", "Firebase"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="mb-20 scroll-mt-10">
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-sm tracking-widest text-orange-500 uppercase">03.</span>
        <h2 className="text-3xl font-bold text-white">Selected R&D</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-800 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col rounded-2xl bg-[#141414] border border-white/5 hover:border-orange-500/30 transition-all duration-500 group relative overflow-hidden"
          >
            
            <div className="relative overflow-hidden w-full h-56">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>

            <div className="p-8 flex flex-col flex-1 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-orange-500/20"></div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors relative z-10">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tech.map((tech, i) => (
                  <span key={i} className="rounded-full bg-black/50 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}