"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Check if user prefers reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");
      
      scrollers.forEach((scroller) => {
        // Add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", "true");

        // Make an array from the elements within `.scroller__inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);

          // For each item in the array, clone it
          // add aria-hidden to it
          // add it into the `.scroller__inner`
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);
  return (
    <div className="min-h-[100dvh]">
      {/* Hero Section */}
      <section className="grain-texture min-h-[100dvh] flex items-center justify-center relative bg-emerald-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white/90">Selamat datang di</span>
                <span className="block bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  Era Baru Olahraga Komunitas
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="mb-12 space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Ekosistem olahraga komunitas, profesional, dan industri kreatif olahraga di Indonesia.
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Kami membangun ekosistem olahraga modern melalui kompetisi, platform digital, venue, komunitas, dan sertifikasi, yang membuka peluang bagi semua: pemain, pelatih, wasit, pengusaha, sponsor, hingga komunitas lokal.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/gabung-ekosistem"
                className="btn-primary inline-flex items-center text-lg group"
              >
                Gabung Ekosistem INASPRO+
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 flex justify-center">
            <div className="w-1 h-3 bg-white/70 mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 bg-gray-50 grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ekosistem Olahraga Terlengkap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bergabunglah dengan ribuan atlet, pelatih, dan komunitas olahraga di seluruh Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 grain-texture">
              <div className="w-16 h-16 bg-emerald-100 flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-emerald-600"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ekosistem Kompetisi</h3>
              <p className="text-gray-600 leading-relaxed">
                Liga berjenjang dari komunitas lokal hingga nasional dengan sistem yang terstruktur dan profesional. Ekosistem kami tersebar di berbagai kota di Indonesia, menciptakan jalur karier bagi pelatih, wasit, dan komunitas untuk terus berkembang.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 grain-texture">
              <div className="w-16 h-16 bg-emerald-100 flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-emerald-600"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Digital</h3>
              <p className="text-gray-600 leading-relaxed">
                INASPRO+ sebagai hub digital untuk registrasi, statistik, konten, e-commerce, dan layanan AI untuk olahraga.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 grain-texture">
              <div className="w-16 h-16 bg-emerald-100 flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-emerald-600"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Than a Game</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami melakukan kegiatan sosial untuk keberlangsungan ekosistem olahraga komunitas. Kami aktif dalam program pengembangan infrastruktur, donasi perlengkapan, dan edukasi bagi komunitas olahraga di seluruh Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang POI Section */}
      <section className="py-20 bg-white grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tentang POI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mengenal lebih dalam tentang visi, misi, dan struktur organisasi Promotor Olahraga Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Perusahaan */}
            <Link href="/perusahaan" className="group">
              <div className="bg-white p-8 transition-all duration-300 group-hover:scale-105 grain-texture border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Perusahaan</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pelajari visi, misi, dan struktur organisasi POI dalam membangun ekosistem olahraga Indonesia.
                </p>
                <div className="flex items-center text-gray-900 font-semibold">
                  Pelajari lebih lanjut
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Pilar Bisnis */}
            <Link href="/pilar-bisnis" className="group">
              <div className="bg-white p-8 transition-all duration-300 group-hover:scale-105 grain-texture border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pilar Bisnis</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Eksplorasi 5 pilar utama bisnis POI: Kompetisi, Platform, Venue, Komunitas, dan Sertifikasi.
                </p>
                <div className="flex items-center text-gray-900 font-semibold">
                  Lihat pilar bisnis
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Karir */}
            <Link href="/karir" className="group">
              <div className="bg-white p-8 transition-all duration-300 group-hover:scale-105 grain-texture border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Karir</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bergabunglah dengan tim POI dan berkontribusi dalam membangun masa depan olahraga Indonesia.
                </p>
                <div className="flex items-center text-gray-900 font-semibold">
                  Lihat lowongan
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Unggulan Section */}
      <section className="py-20 grain-texture" style={{ backgroundColor: '#003B58' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Program Unggulan
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Jelajahi program-program inovatif yang mengembangkan ekosistem olahraga Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Minisoccer Super League */}
            <Link href="/minisoccer-super-league" className="group">
              <div className="bg-white p-8 transition-all duration-300 group-hover:scale-105 grain-texture border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Minisoccer Super League</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Liga sepak bola mini nasional dengan sistem kompetisi berjenjang, event internasional, dan platform digital MSL TV.
                </p>
                <div className="flex items-center text-gray-900 font-semibold">
                  Pelajari MSL
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Gabung Ekosistem */}
            <Link href="/gabung-ekosistem" className="group">
              <div className="bg-white p-8 transition-all duration-300 group-hover:scale-105 grain-texture border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gabung Ekosistem</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Bergabunglah sebagai pemain, pelatih, klub, sponsor, venue operator, atau volunteer dalam ekosistem POI.
                </p>
                <div className="flex items-center text-gray-900 font-semibold">
                  Gabung sekarang
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="py-26 bg-gray-50 grain-texture overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner & Sponsor
            </h2>
            <p className="text-lg text-gray-600">
              Dipercaya oleh perusahaan terkemuka di Indonesia
            </p>
          </div>

          {/* Infinite Scroll Container */}
          <div className="scroller" data-speed="slow">
            <div className="scroller__inner flex gap-8 py-4">
              <Image src="/sponsor/adira.png" alt="Adira" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/allplay.png" alt="Allplay" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/bi.jpg" alt="Bank Indonesia" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/Bolalob.webp" alt="Bolalob" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/bpjs.svg.png" alt="BPJS" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/brawijayahospital.png" alt="Brawijaya Hospital" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/cheers.jpeg" alt="Cheers" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/citilink.png" alt="Citilink" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/galerifutsal.png" alt="Galeri Futsal" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/garistemu_cover.jpeg" alt="Garis Temu" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/garudatv.png" alt="Garuda TV" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/gelora.jpeg" alt="Gelora" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/globalradio.svg.png" alt="Global Radio" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/hmns.png" alt="HMNS" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/indihome.webp" alt="IndiHome" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/inews.svg" alt="iNews" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/infipopblue.svg" alt="Infipop Blue" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/infomedia.png" alt="Infomedia" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/jbfc.jpeg" alt="JBFC" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/jetbretmedia.png" alt="Jetbret Media" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/jne.png" alt="JNE" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/madiriutama.png" alt="Madiri Utama" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/mandiri.png" alt="Mandiri" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/max.jpg" alt="Max" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/mills.png" alt="Mills" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/mnc.png" alt="MNC" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/molten.jpeg" alt="Molten" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/mustang.png" alt="Mustang" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/mytelkomsel.png" alt="MyTelkomsel" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/nodge.png" alt="Nodge" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/noice.webp" alt="Noice" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/pala.jpeg" alt="Pala" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/pelindo.png" alt="Pelindo" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/pertamina.png" alt="Pertamina" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/pertamina_lubricants.png" alt="Pertamina Lubricants" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/physioprenenur.jpeg" alt="Physio Prenenur" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/pln.png" alt="PLN" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/pocari.png" alt="Pocari" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/pupuk.webp" alt="Pupuk Indonesia" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/republika.png" alt="Republika" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/salingjaga.png" alt="Saling Jaga" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/segotempongnegoro.jpeg" alt="Sego Tempong Negoro" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/seindonesia.webp" alt="SE Indonesia" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/skor.jpg" alt="Skor" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/specs.jpg" alt="Specs" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/tiket.png" alt="Tiket" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/ultr.jpg" alt="ULTR" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
              <Image src="/sponsor/vivin.webp" alt="Vivin" width={48} height={48} quality={100} className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Layanan & Dukungan Section */}
      <section className="py-20 bg-white grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Layanan & Dukungan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dapatkan bantuan dan informasi yang Anda butuhkan untuk bergabung dengan ekosistem POI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bantuan */}
            <Link href="/bantuan" className="group">
              <div className="bg-white p-8 transition-all duration-300 group-hover:scale-105 grain-texture border border-gray-200 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bantuan</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  Temukan jawaban atas pertanyaan umum, panduan registrasi, dan dukungan teknis untuk platform INASPRO+.
                </p>
                <div className="flex items-center text-gray-900 font-semibold">
                  Dapatkan bantuan
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Kontak */}
            <Link href="/kontak" className="group">
              <div className="bg-white p-8 transition-all duration-300 group-hover:scale-105 grain-texture border border-gray-200 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kontak</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  Hubungi tim POI untuk kemitraan, kolaborasi, atau informasi lebih lanjut tentang program kami.
                </p>
                <div className="flex items-center text-gray-900 font-semibold">
                  Hubungi kami
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
