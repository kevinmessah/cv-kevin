import React, { useState, useEffect } from 'react';
import { Mail, MapPin, ExternalLink, Award, Briefcase, GraduationCap, Sparkles, User, Share2, Layers, ArrowRight, AlertTriangle, Download } from 'lucide-react';

// --- GAMBAR PROFIL (LINK GITHUB) ---
const profilePic = "https://github.com/KevinMessah.png";

const Portfolio = () => {
  const [mounted, setMounted] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- FUNGSI DOWNLOAD PDF ---
  const handleDownloadPDF = () => {
    window.print();
  };

  // Data dari CV Kevin
  const profile = {
    name: "Kevin Putu Imanuel Messah",
    role: "Creative Multimedia Specialist | Content Creator",
    location: "Denpasar",
    phone: "6285958587660",
    email: "kevinmessah@gmail.com",
    portfolioLink: "https://kevinmessah.github.io/What-I-Create/WHAT%20I%20CREATE2.pdf"
  };

  // Komponen Logo Software (SVG)
  const SoftLogo = ({ type }) => {
    // Kita gunakan class 'svg-icon' agar bisa dikontrol warnanya saat print
    const logos = {
      premiere: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#9999FF" fillOpacity="0.2" className="icon-bg"/>
          <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#D8B4FF" fontSize="10" fontWeight="bold" className="icon-text">Pr</text>
        </svg>
      ),
      photoshop: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
           <rect width="24" height="24" rx="4" fill="#31A8FF" fillOpacity="0.2" className="icon-bg"/>
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#31A8FF" fontSize="10" fontWeight="bold" className="icon-text">Ps</text>
        </svg>
      ),
      audition: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
           <rect width="24" height="24" rx="4" fill="#00E4BB" fillOpacity="0.2" className="icon-bg"/>
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#00E4BB" fontSize="10" fontWeight="bold" className="icon-text">Au</text>
        </svg>
      ),
      capcut: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 6H17L12 11L7 6Z" fill="white" className="icon-path" />
          <path d="M7 18H17L12 13L7 18Z" fill="white" className="icon-path" />
          <path d="M6 6V18" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" className="icon-stroke"/>
          <path d="M18 6V18" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" className="icon-stroke"/>
          <rect width="24" height="24" rx="4" fill="white" fillOpacity="0.1" className="icon-bg"/>
        </svg>
      ),
      canva: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="12" cy="12" r="12" fill="#00C4CC" fillOpacity="0.2" className="icon-bg"/>
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#00C4CC" fontSize="10" fontWeight="bold" style={{fontFamily: 'serif'}} className="icon-text">C</text>
        </svg>
      ),
      ai: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="url(#grad1)" className="icon-path-ai"/>
           <defs>
             <linearGradient id="grad1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
               <stop stopColor="#FF0080"/>
               <stop offset="1" stopColor="#7928CA"/>
             </linearGradient>
           </defs>
        </svg>
      )
    };
    return logos[type] || null;
  };

  const whatsappIcon = (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );

  return (
    <div className={`min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white overflow-hidden relative transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* BACKGROUND (Hilang saat print) */}
      <div className="fixed inset-0 z-0 no-print">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-pink-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto h-full min-h-screen pb-12 flex flex-col">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-6 pt-6 pb-2 text-sm font-medium text-white/70 no-print">
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <div className="flex gap-1.5">
            <div className="w-4 h-2.5 bg-white/80 rounded-[1px]"></div>
            <div className="w-0.5 h-2.5 bg-white/30 rounded-[1px]"></div>
          </div>
        </div>

        {/* HEADER PROFILE */}
        <header className="px-6 pt-4 pb-8 flex flex-col items-center text-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 no-print"></div>
            <div className="relative w-28 h-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden shadow-2xl print:border-gray-300 print:shadow-none">
              
              {/* GAMBAR PROFIL */}
              {imgError ? (
                <div className="flex flex-col items-center justify-center h-full text-xs text-red-400 bg-black/50 p-2 text-center">
                  <AlertTriangle className="w-6 h-6 mb-1" />
                  <span className="text-[8px] leading-tight">Foto Error</span>
                </div>
              ) : (
                <img 
                  src={profilePic}
                  alt="Kevin Messah" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  onError={() => setImgError(true)} 
                />
              )}

            </div>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 print:text-black print:mt-2">
            Kevin Messah
          </h1>
          <p className="mt-2 text-base text-purple-200 font-medium bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/30 print:text-black print:bg-transparent print:border-none print:px-0">
            {profile.role}
          </p>
          <div className="mt-3 flex items-center text-white/60 text-sm print:text-black">
            <MapPin className="w-3 h-3 mr-1" /> {profile.location}
          </div>
          
          {/* KONTAK INFO KHUSUS PRINT */}
          {/* Ini hanya muncul saat diprint, menggantikan tombol interaktif */}
          <div className="hidden print-block mt-4 text-sm text-black border-t border-b border-gray-300 py-2 w-full">
            <p className="font-semibold">Contact & Portfolio:</p>
            <p>WA: {profile.phone} | Email: {profile.email}</p>
            <p className="text-xs mt-1 text-gray-600">{profile.portfolioLink}</p>
          </div>
        </header>

        {/* BUTTONS (Disembunyikan saat print) */}
        <div className="flex flex-wrap justify-center gap-4 px-6 mb-8 no-print">
          <a href={`https://wa.me/${profile.phone}`} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group cursor-pointer w-20">
            <div className="w-14 h-14 rounded-2xl bg-green-500/20 backdrop-blur-xl border border-green-500/30 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-green-500/50">
              {whatsappIcon}
            </div>
            <span className="text-xs font-medium tracking-wide opacity-80 text-center">WhatsApp</span>
          </a>
          
          <a href={`mailto:${profile.email}`} className="flex flex-col items-center gap-2 group cursor-pointer w-20">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-blue-500/50">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium tracking-wide opacity-80 text-center">Email</span>
          </a>

          <div className="flex flex-col items-center gap-2 group cursor-pointer w-20" onClick={() => { if (navigator.share) { navigator.share({ title: 'Kevin Messah CV', text: 'Check out this portfolio!', url: window.location.href, }) } else { alert("Sharing is not supported on this browser context"); } }}>
            <div className="w-14 h-14 rounded-2xl bg-gray-500/20 backdrop-blur-xl border border-gray-500/30 flex items-center justify-center text-gray-300 group-hover:bg-gray-500 group-hover:text-white transition-all duration-300 shadow-lg">
              <Share2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium tracking-wide opacity-80 text-center">Share</span>
          </div>

          <a href={profile.portfolioLink} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group cursor-pointer w-20">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110 shadow-lg shadow-purple-500/40 animate-pulse">
               <ExternalLink className="w-6 h-6" />
            </div>
             <span className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 tracking-wide text-center leading-3 pt-1">WHAT I CREATE</span>
          </a>

          {/* TOMBOL DOWNLOAD PDF */}
          <div onClick={handleDownloadPDF} className="flex flex-col items-center gap-2 group cursor-pointer w-20">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 backdrop-blur-xl border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-orange-500/50">
              <Download className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium tracking-wide opacity-80 text-center">Save PDF</span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-6 px-4 flex-grow print:px-0 print:space-y-4">
          {/* ABOUT ME */}
          <section className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl print:bg-transparent print:border-0 print:shadow-none print:p-0 print:border-b print:border-gray-200">
            <h2 className="text-xl font-bold mb-3 flex items-center text-white/90 print:text-black print:mb-1">
              <User className="w-5 h-5 mr-2 text-blue-400 print:text-black" /> ABOUT ME
            </h2>
            <p className="text-base leading-relaxed text-white/70 font-light text-left md:text-justify hyphens-none print:text-black">
              Halo! Nama saya Kevin Putu Imanuel Messah, seorang spesialis multimedia yang kreatif dan mudah beradaptasi. Saya memiliki pengalaman desain dan multimedia yang solid dalam menciptakan konten visual, baik untuk kebutuhan komersial maupun media sosial yang dinamis. Berbekal ilmu dari DKV dan SMK Multimedia, saya selalu antusias menggabungkan estetika visual dengan strategi konten yang pas dengan tren saat ini. Selain itu, saya juga mengikuti perkembangan AI dan sudah bereksperimen memadukan AI dengan desain untuk hasil yang lebih inovatif.
            </p>
          </section>

          {/* EXPERIENCE */}
          <section className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl print:bg-transparent print:border-0 print:shadow-none print:p-0 print:border-b print:border-gray-200">
            <h2 className="text-xl font-bold mb-4 flex items-center text-white/90 print:text-black print:mb-2">
              <Briefcase className="w-5 h-5 mr-2 text-green-400 print:text-black" /> EXPERIENCE
            </h2>
            <div className="space-y-8 relative print:space-y-4">
              <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-white/10 rounded-full print:hidden"></div>
              
              <div className="pl-6 relative print:pl-0">
                 <div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-green-500 rounded-full border-4 border-black/50 box-content print:hidden"></div>
                 <h3 className="font-semibold text-white text-base print:text-black">Freelance Multimedia Creative | Self-Employed</h3>
                 <span className="text-sm text-green-400 block mb-2 print:text-gray-600">2022 – Sekarang</span>
                 <ul className="text-sm text-white/70 space-y-2 list-disc pl-3 marker:text-white/30 text-left md:text-justify hyphens-none print:text-black print:marker:text-black">
                   <li>Menangani berbagai proyek fotografi dokumentasi acara (Wedding, Gathering, Event Musik) untuk klien UMKM dan personal.</li>
                   <li>Bertanggung jawab penuh atas seluruh proses produksi, mulai dari pengambilan gambar (Camera Operation) hingga pasca produksi (Editing & Color Grading).</li>
                   <li>Memproduksi konten video pendek vertikal (TikTok/Reels) yang engaging menggunakan Adobe Premiere dan CapCut, serta memanfaatkan AI Tools untuk mempercepat alur kerja kreatif.</li>
                   <li>Mendesain materi promosi digital yang relevan dengan tren pasar saat ini.</li>
                 </ul>
              </div>
               
               <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mt-6 pl-6 print:pl-0 print:text-gray-500 print:mt-4">PENGALAMAN ORGANISASI</h3>
               
               <div className="pl-6 relative mt-4 print:pl-0 print:mt-2">
                 <div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-purple-500 rounded-full border-4 border-black/50 box-content print:hidden"></div>
                 <h3 className="font-semibold text-white text-base print:text-black">Multimedia & Live Production Team</h3>
                 <span className="text-sm text-purple-400 block mb-2 print:text-gray-600">2020 – Sekarang</span>
                 <ul className="text-sm text-white/70 space-y-2 list-disc pl-3 marker:text-white/30 text-left md:text-justify hyphens-none print:text-black print:marker:text-black">
                   <li>Bertanggung jawab sebagai operator multimedia mingguan untuk memastikan kelancaran visual ibadah Gereja (On-site & Live Streaming).</li>
                   <li>Bekerja sama secara intensif dalam tim untuk sinkronisasi visual, audio, dan pencahayaan acara.</li>
                   <li>Terlatih untuk tetap fokus dan mengambil keputusan cepat dalam situasi live event.</li>
                   <li>Memiliki rekam jejak aktif dalam berbagai kepanitiaan gereja, di mana saya berulang kali dipercaya sebagai Koordinator Divisi Publikasi dan Dokumentasi. Peran ini menuntut tanggung jawab penuh atas pengelolaan dokumentasi visual (kamera) dan produksi desain grafis untuk kebutuhan publikasi.</li>
                 </ul>
              </div>
               
               <div className="pl-6 relative print:pl-0">
                 <div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-purple-500 rounded-full border-4 border-black/50 box-content print:hidden"></div>
                 <h3 className="font-semibold text-white text-base print:text-black">Staf Publikasi & Dokumentasi (Pubdok)</h3>
                 <ul className="text-sm text-white/70 space-y-2 list-disc pl-3 marker:text-white/30 mt-2 text-justify hyphens-none print:text-black print:marker:text-black">
                   <li>Mengelola dokumentasi foto dan video untuk berbagai kegiatan organisasi.</li>
                   <li>Membuat desain poster, banner, dan konten media sosial untuk kebutuhan publikasi acara.</li>
                   <li>Menyelesaikan video highlight acara (After-movie) dengan tenggat waktu yang ketat.</li>
                 </ul>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl print:bg-transparent print:border-0 print:shadow-none print:p-0 print:border-b print:border-gray-200">
            <h2 className="text-xl font-bold mb-4 flex items-center text-white/90 print:text-black print:mb-2">
              <GraduationCap className="w-5 h-5 mr-2 text-pink-400 print:text-black" /> PENDIDIKAN
            </h2>
             <div className="space-y-4 print:space-y-2">
               <div className="p-4 bg-white/5 rounded-2xl border border-white/5 print:bg-transparent print:border-0 print:p-0">
                 <h3 className="text-base font-semibold text-white print:text-black">Institut Desain dan Bisnis Bali (IDB Bali)</h3>
                 <p className="text-sm text-pink-300 font-medium mt-1 print:text-gray-600">S1 Desain Komunikasi Visual (DKV) | 2019 – 2022</p>
                 <ul className="mt-3 text-sm text-white/60 space-y-1 list-disc pl-3 marker:text-white/30 text-left md:text-justify hyphens-none print:text-black print:marker:text-black">
                    <li>Menyelesaikan 5 Semester dengan fokus studi pada Fotografi, Videografi, Nirmana, dan Komunikasi Visual.</li>
                    <li>Memilih jalur mandiri untuk lebih leluasa bereksperimen dan mengembangkan kemampuan teknis di bidang multimedia melalui berbagai proyek kreatif.</li>
                 </ul>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl border border-white/5 print:bg-transparent print:border-0 print:p-0">
                 <h3 className="text-base font-semibold text-white print:text-black">SMK Wira Harapan</h3>
                 <p className="text-sm text-pink-300 font-medium mt-1 print:text-gray-600">Jurusan Multimedia | 2016 – 2019</p>
                 <ul className="mt-3 text-sm text-white/60 space-y-1 list-disc pl-3 marker:text-white/30 text-left md:text-justify hyphens-none print:text-black print:marker:text-black">
                    <li>Lulus dengan kompetensi teknis yang kuat di bidang pengoperasian kamera, editing video, dan desain grafis dasar.</li>
                 </ul>
               </div>
             </div>
          </section>

          {/* SKILLS */}
          <section className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl mb-6 print:bg-transparent print:border-0 print:shadow-none print:p-0 print:border-b print:border-gray-200">
            <h2 className="text-xl font-bold mb-4 flex items-center text-white/90 print:text-black print:mb-2">
              <Award className="w-5 h-5 mr-2 text-orange-400 print:text-black" /> KEAHLIAN (SKILLS)
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm text-white/80 print:text-black print:gap-y-1">
                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0 print:bg-black"></div>Desain Grafis</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0 print:bg-black"></div>Desain untuk media sosial</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0 print:bg-black"></div>Desain cetak</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0 print:bg-black"></div>Banner/poster/flyer</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0 print:bg-black"></div>Editing video</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0 print:bg-black"></div>Kemampuan memanfaatkan generative AI</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0 print:bg-black"></div>Mengoperasikan kamera</li>
            </ul>
          </section>
          
           {/* SOFTWARE & TOOLS */}
          <section className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden mb-2 print:bg-transparent print:border-0 print:shadow-none print:p-0">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent no-print"></div>
             <h2 className="text-xl font-bold mb-4 flex items-center text-white/90 print:text-black">
               <Layers className="w-5 h-5 mr-2 text-yellow-400 print:text-black" /> Software & Tools
             </h2>
             <div className="grid grid-cols-3 gap-4 print:grid-cols-5 print:gap-2">
               <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors print:bg-transparent print:border-0 print:p-0">
                  <SoftLogo type="premiere" />
                  <span className="text-xs text-white/70 text-center print:text-black">Premiere Pro</span>
               </div>
               <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors print:bg-transparent print:border-0 print:p-0">
                  <SoftLogo type="capcut" />
                  <span className="text-xs text-white/70 text-center print:text-black">CapCut</span>
               </div>
               <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors print:bg-transparent print:border-0 print:p-0">
                  <SoftLogo type="photoshop" />
                  <span className="text-xs text-white/70 text-center print:text-black">Photoshop</span>
               </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors print:bg-transparent print:border-0 print:p-0">
                  <SoftLogo type="canva" />
                  <span className="text-xs text-white/70 text-center print:text-black">Canva</span>
               </div>
               <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors print:bg-transparent print:border-0 print:p-0">
                  <SoftLogo type="audition" />
                  <span className="text-xs text-white/70 text-center print:text-black">Audition</span>
               </div>
             </div>
          </section>

           {/* WHAT I CREATE SHORTCUT BOTTOM (Sembunyikan saat print) */}
          <section className="mt-4 mb-2 no-print">
             <div className="relative group overflow-hidden rounded-3xl p-1 shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
               <div className="relative bg-black/80 backdrop-blur-xl rounded-[22px] p-5 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-purple-300">
                        <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">WHAT I CREATE</h3>
                        <p className="text-xs text-white/50">Explore my latest work</p>
                    </div>
                 </div>
                 <a href={profile.portfolioLink} target="_blank" rel="noreferrer" className="px-5 py-2 bg-white text-black font-bold rounded-full text-xs hover:scale-105 transition-transform shadow-lg shadow-white/20 flex items-center gap-1">
                   OPEN <ArrowRight className="w-3 h-3" />
                 </a>
               </div>
             </div>
          </section>

          {/* FOOTER */}
          <footer className="text-center pb-8 pt-4">
             <p className="text-xs text-white/30 print:text-black/50">© 2025 Kevin Messah. All Rights Reserved.</p>
             <div className="w-1/3 h-1 bg-white/20 rounded-full mx-auto mt-4 no-print"></div>
          </footer>
        </div>
      </div>
      
      {/* GLOBAL CSS: ANIMASI & PRINT */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        /* SCROLLBAR */
        ::-webkit-scrollbar { display: none; }

        /* GAYA KHUSUS SAAT PRINT (PUTIH BERSIH) */
        @media print {
          @page {
            margin: 1.5cm;
            size: auto;
          }
          
          /* 1. Latar Belakang & Warna Dasar */
          body, .min-h-screen { 
            background: white !important; 
            color: black !important;
            height: auto !important;
            overflow: visible !important;
          }

          /* 2. Sembunyikan Element Tidak Perlu */
          .no-print { display: none !important; }
          .print-hidden { display: none !important; }

          /* 3. Tampilkan Kontak Info */
          .print-block { display: block !important; }

          /* 4. Reset Efek Kaca (Glass) agar jadi bersih */
          .bg-white\\/5, .backdrop-blur-xl, .backdrop-blur-2xl, .backdrop-blur-md {
            backdrop-filter: none !important;
            background: transparent !important;
            box-shadow: none !important;
            border: none !important;
          }

          /* 5. Ubah Semua Teks Menjadi Hitam/Gelap */
          .text-white, .text-white\\/70, .text-white\\/90, .text-white\\/60, .text-purple-200 {
            color: #222 !important;
            text-shadow: none !important;
          }
          .text-white\\/30 { color: #666 !important; }

          /* 6. Atur Warna Icon & Judul Bagian */
          .text-green-400, .text-blue-400, .text-purple-400, .text-pink-400, .text-orange-400, .text-yellow-400 {
            color: #000 !important;
            font-weight: bold !important;
          }

          /* 7. Perbaiki Icon Software agar terlihat di background putih */
          .icon-bg { fill: #eee !important; fill-opacity: 1 !important; }
          .icon-text { fill: #000 !important; }
          .icon-path { fill: #000 !important; }
          .icon-stroke { stroke: #000 !important; }
          .icon-path-ai { fill: #000 !important; }
          
          /* Force SVG icons to be dark */
          .svg-icon rect[fill^="#"], .svg-icon path[fill^="url"] {
             fill: #ddd !important; /* Lighter gray background for icons */
             fill-opacity: 1 !important;
          }
          .svg-icon text, .svg-icon path[fill="white"] {
             fill: black !important;
          }
          .svg-icon path[stroke="white"] {
             stroke: black !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;