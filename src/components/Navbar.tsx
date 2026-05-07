"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 100) {
        setActiveSection('home');
        return;
      }

      const sections = ['home', 'about', 'projects'];
      
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop - 200;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(id);
          }
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
  ];

  // Template Email
  const emailTo = "pragazaaji@gmail.com";
  const emailSubject = encodeURIComponent("R&D Collaboration Inquiry - [Your Name/Company]");
  const emailBody = encodeURIComponent(`Hi Pragaza,

I recently explored your portfolio and was thoroughly impressed by your work in software architecture and R&D projects.

I am reaching out to discuss a potential collaboration regarding [Briefly describe the project, role, or inquiry]. 

Looking forward to connecting and discussing this further.

Best regards,
[Your Name]
[Your Company/Contact Information]`);
//end of template email

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${emailSubject}&body=${emailBody}`;

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between p-8 text-white md:px-16 backdrop-blur-md bg-black/10">
      <div className="text-2xl font-bold tracking-tighter">Pragaza.</div>
      <div className="hidden gap-10 text-sm font-medium md:flex items-center">
        {navLinks.map((link) => (
          <Link 
            key={link.id}
            href={link.href} 
            className={`transition-all duration-500 ease-in-out relative py-1 flex flex-col items-center group ${
              activeSection === link.id ? 'text-orange-500 scale-110' : 'text-white/50 hover:text-white'
            }`}
          >
            <span className="relative z-10">{link.name}</span>
            <span className={`h-[2px] bg-orange-500 transition-all duration-500 ease-in-out mt-1 ${
              activeSection === link.id ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}></span>
          </Link>
        ))}
      </div>
      <a 
        href={gmailLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-orange-100 hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
      >
        Get in touch <span className="text-orange-500">→</span>
      </a>
    </nav>
  );
}