import Link from 'next/link'
import { Calendar, Smartphone, Building, Palette, GraduationCap, Trophy, Users, MapPin, Megaphone, Award } from 'lucide-react'

export default function PilarBisnis() {
  const pillars = [
    {
      id: 1,
      title: 'Event',
      subtitle: 'Kompetisi & Turnamen',
      description: 'Kompetisi komunitas, korporasi, sekolah, kelompok umur, dan event internasional yang menghubungkan seluruh ekosistem olahraga.',
      icon: Calendar,
      color: 'from-blue-500 to-indigo-600',
      features: [
        'Kompetisi komunitas lokal dan nasional',
        'Turnamen korporasi dan perusahaan',
        'Liga sekolah dan akademi',
        'Event internasional',
        'Kompetisi kelompok umur (U-12, U-15, U-18, Senior)'
      ],
      stats: [
        { label: 'Event per Tahun', value: '400+' },
        { label: 'Peserta', value: '100,000+' },
        { label: 'Kota', value: '30+' }
      ]
    },
    {
      id: 2,
      title: 'Platform (INASPRO+)',
      subtitle: 'Digital Hub Olahraga',
      description: 'Digital hub untuk registrasi, statistik, konten, e-commerce, dan layanan AI untuk olahraga yang terintegrasi.',
      icon: Smartphone,
      color: 'from-emerald-500 to-teal-600',
      features: [
        'Sistem registrasi dan manajemen turnamen',
        'Statistik pemain dan tim real-time',
        'Platform konten dan streaming',
        'E-commerce merchandise dan equipment',
        'AI coaching dan analisis performa'
      ],
      stats: [
        { label: 'Pengguna Aktif', value: '100,000+' },
        { label: 'Transaksi/Bulan', value: '25,000+' },
        { label: 'Konten Video', value: '10,000+' }
      ]
    },
    {
      id: 3,
      title: 'Venue (MSL Arena)',
      subtitle: 'Jaringan Venue Olahraga',
      description: 'Jaringan pengelolaan venue olahraga (minisoccer, basket 3x3, padel, pickleball) dengan standar internasional.',
      icon: Building,
      color: 'from-orange-500 to-red-600',
      features: [
        'Pengelolaan venue minisoccer premium',
        'Lapangan basket 3x3 standar FIBA',
        'Court padel dan pickleball modern',
        'Sistem booking online terintegrasi',
        'Fasilitas pendukung lengkap'
      ],
      stats: [
        { label: 'Venue Partner', value: '150+' },
        { label: 'Lapangan', value: '10+' },
        { label: 'Booking/Bulan', value: '15,000+' }
      ]
    },
    {
      id: 4,
      title: 'Agency & Kreatif',
      subtitle: 'Manajemen Talenta & Branding',
      description: 'Talent management, branding klub, produksi konten, merchandise, hingga manajemen media sosial untuk ekosistem olahraga.',
      icon: Palette,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Manajemen talenta pemain dan pelatih',
        'Branding dan identitas visual klub',
        'Produksi konten video dan foto',
        'Desain dan produksi merchandise',
        'Strategi digital marketing dan media sosial'
      ],
      stats: [
        { label: 'Talenta Dikelola', value: '30+' },
        { label: 'Klub Partner', value: '200+' },
        { label: 'Konten Diproduksi', value: '5,000+' }
      ]
    },
    {
      id: 5,
      title: 'Sertifikasi & Edukasi',
      subtitle: 'Pengembangan SDM Olahraga',
      description: 'Lisensi pelatih, wasit, manajer tim, dan pembinaan akademi standar nasional untuk meningkatkan kualitas SDM olahraga.',
      icon: GraduationCap,
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Sertifikasi pelatih berlisensi nasional',
        'Pelatihan wasit dan official',
        'Program manajer tim profesional',
        'Kurikulum akademi standar nasional',
        'Workshop dan seminar berkala'
      ],
      stats: [
        { label: 'Pelatih Tersertifikasi', value: '100+' },
        { label: 'Wasit Berlisensi', value: '100+' },
        { label: 'Program Edukasi', value: '100+' }
      ]
    },
    {
      id: 6,
      title: 'Sportpreneur Capital Fund',
      subtitle: 'Menciptakan Peluang, Membangun Juara',
      description: 'Wadah yang berfokus pada ekosistem olahraga di Indonesia. Kami bermitra dengan para sportpreneur—individu atau perusahaan inovatif—untuk mendorong pertumbuhan industri olahraga.',
      icon: GraduationCap,
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Sertifikasi pelatih berlisensi nasional',
        'Pelatihan wasit dan official',
        'Program manajer tim profesional',
        'Kurikulum akademi standar nasional',
        'Workshop dan seminar berkala'
      ],
      stats: [
        { label: 'Pelatih Tersertifikasi', value: '2,500+' },
        { label: 'Wasit Berlisensi', value: '1,200+' },
        { label: 'Program Edukasi', value: '100+' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="grain-texture min-h-[100dvh] flex items-center justify-center relative bg-emerald-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  Pilar Bisnis POI
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="mb-12 space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                POI dibangun di atas 5 pilar bisnis utama yang saling terintegrasi untuk menciptakan ekosistem olahraga yang berkelanjutan dan berdampak.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/gabung-ekosistem"
                className="btn-primary inline-flex items-center text-lg group"
              >
                Bergabung dengan Ekosistem
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

      {/* Pillars Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                5 Pilar Utama
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Setiap pilar memiliki peran strategis dalam membangun ekosistem olahraga yang komprehensif dan berkelanjutan
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {pillars.map((pillar, index) => {
                return (
                  <div key={pillar.id} className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow grain-texture group cursor-pointer">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                    <p className="text-emerald-600 font-semibold mb-4">{pillar.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pillars */}
      {pillars.map((pillar, index) => {
        const isEven = index % 2 === 0

        return (
          <section key={pillar.id} className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {pillar.title}
                    </h2>
                    <p className="text-xl text-emerald-600 font-semibold mb-6">{pillar.subtitle}</p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {pillar.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-500 mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 grain-texture">
                      <h3 className="text-2xl font-bold text-white mb-8">Statistik & Pencapaian</h3>
                      <div className="grid grid-cols-1 gap-6">
                        {pillar.stats.map((stat, idx) => (
                          <div key={idx} className="text-center p-4 bg-white/10 backdrop-blur-sm">
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-white/80">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Integrasi Ekosistem
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Kelima pilar bisnis ini tidak berdiri sendiri, melainkan saling terintegrasi untuk menciptakan
              ekosistem olahraga yang holistik dan berkelanjutan. Dari event hingga edukasi,
              semua terhubung dalam satu platform digital yang komprehensif.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6">
                <Trophy className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Kompetisi Terintegrasi</h3>
                <p className="text-white/80 text-sm">Event, venue, dan platform digital bekerja bersama</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Komunitas Terhubung</h3>
                <p className="text-white/80 text-sm">Semua stakeholder dalam satu ekosistem</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6">
                <Award className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Kualitas Terjamin</h3>
                <p className="text-white/80 text-sm">Sertifikasi dan edukasi berkelanjutan</p>
              </div>
            </div>

            <Link
              href="/perusahaan"
              className="bg-white text-emerald-600 font-semibold py-3 px-8 hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Pelajari Visi & Misi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bergabunglah dengan Ekosistem POI
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Jadilah bagian dari revolusi olahraga Indonesia melalui salah satu atau semua pilar bisnis kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/gabung-ekosistem"
                className="btn-primary inline-flex items-center text-lg"
              >
                Gabung Sekarang
              </Link>
              <Link
                href="/bantuan"
                className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}