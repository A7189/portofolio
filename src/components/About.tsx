export default function About() {
  return (
    <section id="about" className="mb-20 scroll-mt-32">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">01.</span>
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-800 to-transparent"></div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 rounded-2xl bg-[#141414] p-8 border border-white/5 hover:border-orange-500/30 transition-colors duration-500 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-orange-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
        
        <div className="relative w-full md:w-1/3 h-72 md:h-auto rounded-xl overflow-hidden shrink-0 border border-white/10">
          <img 
            src="/image/AJI.JPEG"
            alt="Pragaza Aji Narpati" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay"></div>
        </div>

        <div className="flex flex-col justify-center flex-1">
          <p className="text-gray-400 leading-relaxed text-lg font-light">
            I am Pragaza Aji Narpati, a highly adaptable software developer with a background in accelerated academic programs, which has cultivated my ability to rapidly master new technologies and execute complex engineering tasks. I specialize in the end-to-end development lifecycle, bridging the gap between intuitive UI/UX design and scalable, high-performance software architecture.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed text-lg font-light">
            With a strong foundation in building robust digital products and managing seamless deployments, I approach coding with a strict focus on precision, system optimization, and maintainability. My core objective is to consistently deliver efficient, production-grade technical solutions that drive real-world impact.
          </p>
          
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
            <div>
              <h4 className="text-white font-bold mb-1">Location</h4>
              <p className="text-sm text-orange-500">Malang, Indonesia</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Interests</h4>
              <p className="text-sm text-gray-400">UI/UX, Machine Learning, Mobile Development</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}