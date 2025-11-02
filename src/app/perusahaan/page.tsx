import Link from 'next/link'
import { Target, Users, Calendar, Trophy, Zap, Building } from 'lucide-react'

export default function Perusahaan() {
  const missions = [
    {
      icon: Trophy,
      title: 'Mengembangkan kompetisi dan ekosistem olahraga nasional',
      description: 'Membangun sistem kompetisi yang terstruktur dan berkelanjutan untuk semua kalangan'
    },
    {
      icon: Zap,
      title: 'Mendorong digitalisasi olahraga melalui platform INASPRO+',
      description: 'Mengintegrasikan teknologi digital dalam setiap aspek ekosistem olahraga'
    },
    {
      icon: Building,
      title: 'Membuka peluang ekonomi baru bagi komunitas, pelaku usaha, dan sponsor',
      description: 'Menciptakan value chain yang menguntungkan semua stakeholder'
    },
    {
      icon: Users,
      title: 'Menjadi mitra strategis pemerintah, korporasi, dan masyarakat',
      description: 'Berkolaborasi dengan berbagai pihak untuk kemajuan olahraga Indonesia'
    }
  ]

  const teamMembers = [
    {
      name: 'Komisaris',
      role: 'Visioner Ekosistem Olahraga',
      description: 'Pengalaman 10+ tahun di industri olahraga dan teknologi',
      expertise: ['Strategic Planning', 'Sports Business', 'Digital Innovation']
    },
    {
      name: 'CEO',
      role: 'Technology Leader',
      description: 'Expert dalam pengembangan platform digital dan AI',
      expertise: ['Platform Development', 'AI/ML', 'System Architecture']
    },
    {
      name: 'GM',
      role: 'Event & Competition Manager',
      description: 'Spesialis manajemen event dan kompetisi olahraga',
      expertise: ['Event Management', 'Competition Systems', 'Venue Operations']
    },
    {
      name: 'Head Head',
      role: 'Partnership & Growth',
      description: 'Expert dalam pengembangan bisnis dan kemitraan strategis',
      expertise: ['Business Strategy', 'Partnership', 'Market Expansion']
    }
  ]

  const roadmapItems = [
    {
      year: '2025',
      title: 'Ekspansi Nasional',
      description: 'Ekspansi ke 30 Kota Takeout WC',
      goals: [
        'Ekspansi ke 30 kota di Indonesia',
        '100,000+ pengguna aktif INASPRO+',
        '1,000+ venue partner'
      ],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      year: '2026',
      title: 'Ekspansi Internasional',
      description: 'Perluasan ke negara-negara ASEAN dan persiapan IPO untuk pendanaan lebih lanjut',
      goals: [
        'Ekspansi ke 5 negara ASEAN',
        'Persiapan IPO',
        'Platform AI coaching diluncurkan',
        'Sertifikasi internasional'
      ],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      year: '2030',
      title: 'Pemimpin Regional',
      description: 'Menjadikan Indonesia sebagai pusat pengembangan olahraga komunitas di Asia',
      goals: [
        'Hub olahraga komunitas Asia',
        'IPO berhasil dilaksanakan',
        '1 juta+ pengguna aktif',
        'Standard setter industri olahraga'
      ],
      color: 'from-emerald-500 to-teal-600'
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
                <span className="block text-white/90">Tentang</span>
                <span className="block bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  Promotor Olahraga Indonesia
                </span>
                <span className="block text-3xl md:text-4xl font-semibold text-emerald-200 mt-4">
                  (POI)
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="mb-12 space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Membangun masa depan olahraga Indonesia melalui inovasi, kolaborasi, dan dedikasi.
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Kami berkomitmen untuk mengembangkan ekosistem olahraga yang berkelanjutan, digital, dan berdampak sosial untuk seluruh Indonesia.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visi Kami</h2>
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-medium">
              Menjadi perusahaan olahraga komunitas terdepan di Asia, dengan model bisnis berkelanjutan, digital, dan berdampak sosial.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Misi Kami</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empat pilar misi yang menjadi fondasi dalam membangun ekosistem olahraga Indonesia
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {missions.map((mission, index) => {
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow grain-texture">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{mission.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{mission.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tim Kami</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dipimpin oleh profesional muda dengan pengalaman di olahraga, bisnis, dan digital
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow grain-texture">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-3 text-center">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 text-center">{member.description}</p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-center">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Roadmap Perusahaan</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Perjalanan strategis POI menuju visi menjadi pemimpin olahraga komunitas di Asia
              </p>
            </div>

            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index < roadmapItems.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-32 w-1 h-24 bg-gradient-to-b from-emerald-500 to-teal-600 hidden lg:block"></div>
                  )}
                  
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Year Badge */}
                    <div className={`text-center lg:text-${index % 2 === 0 ? 'right' : 'left'} ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className={`inline-block px-8 py-4 bg-gradient-to-r ${item.color} text-white rounded-full text-3xl font-bold mb-4`}>
                        {item.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`bg-white p-8 rounded-2xl shadow-lg grain-texture ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                      <div className="space-y-3">
                        {item.goals.map((goal, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <p className="text-gray-700">{goal}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nilai-Nilai Kami</h2>
            <p className="text-xl text-white/90 mb-12">
              Prinsip-prinsip yang memandu setiap langkah perjalanan POI
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Inovasi</h3>
                <p className="text-white/80 text-sm">Selalu mencari cara baru dan lebih baik dalam mengembangkan olahraga</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Kolaborasi</h3>
                <p className="text-white/80 text-sm">Membangun kemitraan yang saling menguntungkan dengan semua stakeholder</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Integritas</h3>
                <p className="text-white/80 text-sm">Berkomitmen pada transparansi dan kejujuran dalam setiap aspek bisnis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bergabunglah dengan Perjalanan Kami
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Jadilah bagian dari revolusi olahraga Indonesia dan wujudkan visi bersama
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/karir"
                className="btn-primary inline-flex items-center text-lg"
              >
                Lihat Peluang Karir
              </Link>
              <Link
                href="/gabung-ekosistem"
                className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Gabung Ekosistem
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}