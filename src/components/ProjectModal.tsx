"use client";

import { useEffect, useState } from "react";

export interface SlideItem {
  image: string;
  caption: string;
  story: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  image: string;
  slides: SlideItem[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
  }, [project]);

  useEffect(() => {
    if (!isOpen || !project) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev + 1) % project.slides.length);
      }
      if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev - 1 + project.slides.length) % project.slides.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, project, onClose]);

  if (!isOpen || !project || project.slides.length === 0) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.slides.length) % project.slides.length);
  };

  const activeSlide = project.slides[currentSlide];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-4xl rounded-2xl bg-[#111111] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10">
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#141414]">
          <div>
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest block mb-1">
              System Walkthrough
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8 flex flex-col gap-6">
          <div className="relative w-full h-64 sm:h-80 md:h-96 bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center group">
            <img 
              src={activeSlide.image} 
              alt={activeSlide.caption}
              className="w-full h-full object-contain transition-all duration-300"
            />

            {project.slides.length > 1 && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 border border-white/15 text-white hover:bg-orange-500 hover:border-orange-500 transition-all"
                >
                  ←
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 border border-white/15 text-white hover:bg-orange-500 hover:border-orange-500 transition-all"
                >
                  →
                </button>
              </>
            )}

            <div className="absolute bottom-3 right-4 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-gray-300">
              {currentSlide + 1} / {project.slides.length}
            </div>
          </div>

          {project.slides.length > 1 && (
            <div className="flex justify-center gap-2">
              {project.slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? "w-8 bg-orange-500" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}

          <div className="rounded-xl bg-[#181818] border border-white/5 p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <h4 className="text-white font-bold text-base md:text-lg">
                {activeSlide.caption}
              </h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed pl-4 border-l border-white/10 mt-1">
              {activeSlide.story}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="rounded-full bg-black/50 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  {t}
                </span>
              ))}
            </div>
            <span className="text-xs font-mono text-gray-500">
              Use ← → keys to navigate slides
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}