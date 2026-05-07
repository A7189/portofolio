import Navbar from "@/components/Navbar";
import HeroModern from "@/components/HeroModern";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <HeroModern />
      
      {/* Container di bawah ini lebarnya disamain kayak Hero (max-w-7xl) dan paddingnya (md:px-16) */}
      <div className="mx-auto max-w-7xl px-8 md:px-16 pt-24">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}