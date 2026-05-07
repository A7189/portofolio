export default function Experience() {
  return (
    <section className="mb-20 scroll-mt-32">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">02.</span>
        <h2 className="text-3xl font-bold text-white">Experience & Achievements</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-800 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-[#141414] p-8 border border-white/5 hover:border-orange-500/30 transition-all duration-300">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-white">Fullstack Developer Intern</h3>
            <span className="text-gray-500 text-sm font-mono mt-1">2026</span>
          </div>
          <p className="text-orange-500 font-medium mb-4">godsseo</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Developed and maintained web and mobile dashboards. Focused on building scalable architectures and responsive interfaces to enhance operational efficiency.
          </p>
        </div>

        <div className="rounded-2xl bg-[#141414] p-8 border border-white/5 hover:border-orange-500/30 transition-all duration-300">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-white">3rd Winner UI/UX Competition</h3>
            <span className="text-gray-500 text-sm font-mono mt-1">2024</span>
          </div>
          <p className="text-orange-500 font-medium mb-4">Institute Asia Malang</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Led the UI/UX design process and served as the main speaker. Conceptualized user-centric interfaces and successfully pitched the prototype to the judging panel.
          </p>
        </div>
      </div>
    </section>
  );
}