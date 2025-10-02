import Link from 'next/link'
import { ExternalLink, Trophy, Tv, Users, Globe, Play, Calendar, Award } from 'lucide-react'

export default function MinisoccerSuperLeague() {
  const features = [
    {
      icon: Trophy,
      title: 'Kompetisi Nasional',
      description: 'Liga berjenjang dari lokal hingga nasional dengan sistem kompetisi yang terstruktur dan profesional.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Globe,
      title: 'Event Internasional',
      description: 'Fournation Cup, Corporate World Cup, IMF World Cup - kompetisi bergengsi tingkat internasional.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Tv,
      title: 'MSL TV',
      description: 'Siaran langsung, konten digital, dan dokumenter eksklusif untuk semua pertandingan MSL.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Users,
      title: 'Garuda MSL',
      description: 'Timnas resmi hasil seleksi liga & akademi terbaik dari seluruh Indonesia.',
      color: 'from-emerald-500 to-teal-600'
    }
  ]

  const competitions = [
    {
      title: 'Liga Komunitas',
      description: 'Kompetisi untuk klub-klub komunitas lokal di seluruh Indonesia',
      participants: '500+ Tim',
      icon: Users
    },
    {
      title: 'Liga Korporasi',
      description: 'Turnamen khusus untuk perusahaan dan korporasi',
      participants: '200+ Perusahaan',
      icon: Trophy
    },
    {
      title: 'Liga Akademi',
      description: 'Kompetisi untuk akademi dan sekolah sepakbola',
      participants: '150+ Akademi',
      icon: Award
    },
    {
      title: 'Liga Sekolah',
      description: 'Turnamen untuk sekolah-sekolah di seluruh Indonesia',
      participants: '300+ Sekolah',
      icon: Calendar
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
                  Minisoccer Super League
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="mb-12 space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Liga resmi minisoccer terbesar di Indonesia.
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Dengan sistem kompetisi berjenjang: komunitas, korporasi, akademi, sekolah, hingga tim nasional.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://msl.inaspro.id"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center text-lg group"
              >
                Kunjungi Website MSL
                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Fitur Utama MSL
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sistem kompetisi terlengkap dengan teknologi modern dan standar internasional
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                return (
                  <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow grain-texture">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Competition Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Jenis Kompetisi
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Berbagai kategori kompetisi untuk semua kalangan dan tingkat kemampuan
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {competitions.map((comp, index) => {
                const IconComponent = comp.icon
                return (
                  <div key={index} className="bg-gray-50 p-6 hover:shadow-lg transition-shadow grain-texture">
                    <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{comp.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{comp.description}</p>
                    <div className="text-emerald-600 font-semibold text-sm">{comp.participants}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MSL TV Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-blue-600 flex items-center justify-center mx-auto mb-8">
              <Play className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">MSL TV</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Saksikan semua pertandingan MSL secara langsung melalui platform streaming resmi kami.
              Nikmati siaran berkualitas HD, komentar ahli, dan konten eksklusif di balik layar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://tv.msl.inaspro.id"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-8 transition-all duration-300 hover:bg-white/20 hover:border-white/30 inline-flex items-center"
              >
                <Play className="mr-2 w-5 h-5" />
                Tonton MSL TV
              </a>
              <a
                href="https://youtube.com/@mslofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-8 transition-all duration-300 hover:bg-white/20 hover:border-white/30"
              >
                YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Garuda MSL Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white/20 flex items-center justify-center mx-auto mb-8">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Garuda MSL</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Tim Nasional Minisoccer Indonesia yang terbentuk dari hasil seleksi terbaik
              dari liga dan akademi MSL di seluruh Indonesia. Mewakili Indonesia di kompetisi internasional.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6">
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-white/80">Pemain Terpilih</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6">
                <h3 className="text-2xl font-bold mb-2">15+</h3>
                <p className="text-white/80">Kompetisi Internasional</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6">
                <h3 className="text-2xl font-bold mb-2">8</h3>
                <p className="text-white/80">Medali Emas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Siap Bergabung dengan MSL?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Jadilah bagian dari liga minisoccer terbesar di Indonesia dan wujudkan impian sepakbola Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/gabung-ekosistem"
                className="btn-primary inline-flex items-center text-lg"
              >
                Daftar Sekarang
              </Link>
              <a
                href="https://msl.inaspro.id"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Pelajari Lebih Lanjut
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}