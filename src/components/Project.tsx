"use client";

import { useState } from "react";
import ProjectModal, { ProjectItem } from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      title: "License Plate Recognition",
      description: "Indonesian plate text formatting system built with advanced image processing and PARseq engine.",
      tech: ["Python", "OpenCV", "PARseq"],
      image: "/image/alpr/slide1.png",
      slides: [
{
          image: "/image/alpr/slide1.png",
          caption: "01. Detection & Plate Localization",
          story: "Sistem mendeteksi kendaraan, melacak kecepatan, dan mengisolasi area pelat nomor (ROI) secara real-time di jalan raya."
        },
        {
          image: "/image/alpr/slide2.png",
          caption: "02. Distance Tracking & Extraction",
          story: "Pemrosesan gambar mengekstrak teks pelat nomor dan melacak kecepatan objek secara konsisten meski pada jarak pandang yang lebih jauh[cite: 12]."
        },
        {
          image: "/image/alpr/slide3.png",
          caption: "03. OCR Prediction Validation",
          story: "Log terminal memvalidasi pembacaan OCR dengan membandingkan prediksi teks (PRED) terhadap kebenaran data asli (GT) secara individual[cite: 9]."
        },
        {
          image: "/image/alpr/slide4.png",
          caption: "04. Benchmark Report & Accuracy",
          story: "Laporan benchmark sistem menampilkan ringkasan performa dengan mencatat akurasi keseluruhan sebesar 56.98% dari total 358 sampel gambar[cite: 10]."
        }
      ]
    },
    {
      title: "jobseeker App",
      description: "Job seeking mobile application featuring complex state management.",
      tech: ["Flutter", "Provider"],
      image: "/image/ukk/slide1.png",
      slides: [
        {
          image: "/image/ukk/slide1.png",
          caption: "01. Role Selection & Registration",
          story: "Pengguna dapat memilih peran spesifik sebagai pelamar (Society) atau entitas perusahaan saat melakukan registrasi awal."
        },
        {
          image: "/image/ukk/slide2.png",
          caption: "02. Role-Based Dashboard",
          story: "Tampilan beranda yang disesuaikan dinamis, memisahkan panel manajemen perusahaan dan halaman penelusuran kerja bagi pelamar."
        },
        {
          image: "/image/ukk/slide3.png",
          caption: "03. Job Management & Search",
          story: "Perusahaan memiliki akses form untuk mengunggah lowongan, sedangkan pelamar disajikan fitur pencarian dan filter kategori."
        },
        {
          image: "/image/ukk/slide4.png",
          caption: "04. Profile & Portfolio Management",
          story: "Manajemen profil terpisah yang memungkinkan perusahaan mengatur identitas dan pelamar mengelola portofolio serta CV mandiri."
        }
      ]
    },
    {
      title: "Absensi Green Living Regency",
      description: "Mobile attendance system designed and built for Green Living Regency.",
      tech: ["Flutter", "Firebase"],
      image: "/image/greenliving/slide1.png",
      slides: [
       {
          image: "/image/greenliving/slide1.png",
          caption: "01. Dashboard & Radius Presensi",
          story: "Halaman utama menampilkan tombol presensi masuk dan pulang yang divalidasi langsung menggunakan radius jarak pengguna dari titik pos pengamanan."
        },
        {
          image: "/image/greenliving/slide2.png",
          caption: "02. Jadwal Kerja & Riwayat Izin",
          story: "Pegawai dapat memantau jadwal shift harian secara detail serta melihat status pengajuan izin kerja atau sakit langsung dari aplikasi."
        },
        {
          image: "/image/greenliving/slide3.png",
          caption: "03. Generator Pola Jadwal Otomatis",
          story: "Admin memiliki akses manajer jadwal yang dilengkapi fitur otomatisasi pola shift kerja (pagi, siang, malam, libur) untuk efisiensi penugasan."
        },
        {
          image: "/image/greenliving/slide4.png",
          caption: "04. Admin Panel & Live Monitoring",
          story: "Dashboard khusus admin menyajikan pemantauan kehadiran secara real-time dan akses cepat ke manajemen pegawai serta riwayat absensi."
        },
        {
          image: "/image/greenliving/slide5.png",
          caption: "05. Rekapitulasi & Export Excel",
          story: "Sistem menyediakan antarmuka kalender untuk memilih rentang tanggal absensi yang kemudian dapat diekspor secara otomatis ke format Excel."
        },
        {
          image: "/image/greenliving/slide6.png",
          caption: "06. Sistem Persetujuan Perizinan",
          story: "Modul persetujuan bagi admin untuk meninjau, menyetujui, atau menolak pengajuan cuti dan sakit beserta log riwayat yang sudah diproses."
        },
        {
          image: "/image/greenliving/slide7.png",
          caption: "07. Monitoring Harian & Keterlambatan",
          story: "Panel pemantauan shift harian yang mengkategorikan personel berdasarkan status kehadiran, lengkap dengan indikator keterlambatan akurat."
        }
      ]
    },
    {
      title: "Absensi Godsseo",
      description: "Mobile attendance system designed and built for Godsseo.",
      tech: ["Flutter", "Firebase"],
      image: "/image/godsseo/slide1.png",
      slides: [
       {
          image: "/image/godsseo/slide1.png",
          caption: "01. Multi-Role Dashboard View",
          story: "Dashboard adaptif yang memisahkan tampilan pengguna biasa untuk presensi harian dengan panel admin yang menampilkan grafik analitik kehadiran secara real-time."
        },
        {
          image: "/image/godsseo/slide2.png",
          caption: "02. Form Pengajuan Izin Terintegrasi",
          story: "Sistem pengajuan izin yang memungkinkan pengguna mengunggah lampiran foto bukti secara langsung, dilengkapi panel khusus bagi admin untuk meninjau dan merespons."
        },
        {
          image: "/image/godsseo/slide3.png",
          caption: "03. Manajemen Jadwal Piket Harian",
          story: "Modul penugasan di mana pengguna dapat melihat daftar pekerjaan harian, sementara admin memiliki kontrol penuh untuk mengatur jadwal dan melacak progres penyelesaian tugas."
        }
      ]
    },
   // {
      //title: "Chat BK SMK 5 Madiun",
      //description: "Counseling chat application specifically built for SMK 5 Kota Madiun.",
      //tech: ["Flutter", "Firebase"],
      //image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      //slides: [
        //{
          //image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
          //caption: "01. Private Counseling Room",
       //   story: "Ruang obrolan real-time antara siswa dan guru BK yang dirancang nyaman dan menjaga privasi sesi konseling di lingkungan SMK 5 Kota Madiun."
        //},
        //{
        //  image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
          //caption: "02. Firestore Security Rules & Role Access",
         // story: "Dilengkapi konfigurasi security rules ketat di Cloud Firestore untuk memastikan pesan hanya bisa diakses oleh siswa bersangkutan dan konselor yang berwenang."
        //}
     // ]
   // }
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
            onClick={() => setSelectedProject(project)}
            className="flex flex-col rounded-2xl bg-[#141414] border border-white/5 hover:border-orange-500/30 transition-all duration-500 group relative overflow-hidden cursor-pointer"
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

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </section>
  );
}