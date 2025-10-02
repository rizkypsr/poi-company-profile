import Link from 'next/link'
import { Briefcase, MapPin, Clock, Users, Send, Star, Award, Zap } from 'lucide-react'

export default function Karir() {
  const jobListings = [
    {
      id: 1,
      title: 'Content Creator Sport',
      department: 'Marketing & Creative',
      location: 'Jakarta / Remote',
      type: 'Full-time',
      experience: '2-3 tahun',
      description: 'Membuat konten kreatif untuk platform digital POI, termasuk video, foto, dan artikel seputar olahraga.',
      requirements: [
        'Pengalaman minimal 2 tahun di bidang content creation',
        'Mahir menggunakan tools editing video dan foto',
        'Memiliki passion di bidang olahraga',
        'Kreatif dan up-to-date dengan tren digital',
        'Portfolio yang menarik'
      ],
      benefits: [
        'Gaji kompetitif + bonus performa',
        'Asuransi kesehatan',
        'Flexible working hours',
        'Pelatihan dan pengembangan skill'
      ]
    },
    {
      id: 2,
      title: 'Community Manager',
      department: 'Community & Engagement',
      location: 'Jakarta',
      type: 'Full-time',
      experience: '1-2 tahun',
      description: 'Mengelola dan mengembangkan komunitas olahraga POI, membangun engagement yang kuat dengan member.',
      requirements: [
        'Pengalaman dalam community management',
        'Excellent communication skills',
        'Memahami dinamika komunitas olahraga',
        'Aktif di media sosial',
        'Kemampuan event organizing'
      ],
      benefits: [
        'Gaji kompetitif',
        'Tunjangan transportasi',
        'Akses gratis ke semua event POI',
        'Networking dengan komunitas olahraga'
      ]
    },
    {
      id: 3,
      title: 'Event & Partnership Officer',
      department: 'Business Development',
      location: 'Jakarta',
      type: 'Full-time',
      experience: '2-4 tahun',
      description: 'Mengelola event olahraga dan membangun kemitraan strategis dengan berbagai stakeholder.',
      requirements: [
        'Pengalaman event management minimal 2 tahun',
        'Strong negotiation dan presentation skills',
        'Network yang luas di industri olahraga',
        'Kemampuan project management',
        'Bersedia travel ke berbagai kota'
      ],
      benefits: [
        'Gaji kompetitif + incentive',
        'Tunjangan perjalanan dinas',
        'Asuransi kesehatan keluarga',
        'Career development program'
      ]
    },
    {
      id: 4,
      title: 'Sport Development Specialist',
      department: 'Sport Development',
      location: 'Jakarta / Multi-city',
      type: 'Full-time',
      experience: '3-5 tahun',
      description: 'Mengembangkan program pembinaan olahraga dan sistem kompetisi di berbagai daerah.',
      requirements: [
        'Background pendidikan olahraga atau terkait',
        'Pengalaman dalam sport development',
        'Memahami sistem kompetisi olahraga',
        'Leadership dan analytical skills',
        'Sertifikasi pelatih (nilai plus)'
      ],
      benefits: [
        'Gaji kompetitif',
        'Tunjangan daerah',
        'Program sertifikasi lanjutan',
        'Kesempatan berkontribusi langsung'
      ]
    },
    {
      id: 5,
      title: 'Volunteer Program Officer',
      department: 'Community Relations',
      location: 'Jakarta / Remote',
      type: 'Full-time',
      experience: '1-3 tahun',
      description: 'Mengelola program volunteer dan membangun jaringan relawan untuk mendukung event dan aktivitas POI.',
      requirements: [
        'Pengalaman dalam volunteer management',
        'Passionate tentang community service',
        'Organizational dan coordination skills',
        'Kemampuan training dan mentoring',
        'Familiar dengan digital tools'
      ],
      benefits: [
        'Gaji sesuai standar industri',
        'Flexible working arrangement',
        'Impact social yang nyata',
        'Networking luas dengan volunteer'
      ]
    }
  ]

  const benefits = [
    {
      icon: Star,
      title: 'Kompensasi Kompetitif',
      description: 'Gaji yang sesuai dengan standar industri plus bonus performa'
    },
    {
      icon: Users,
      title: 'Tim yang Solid',
      description: 'Bekerja dengan profesional muda yang passionate di bidang olahraga'
    },
    {
      icon: Award,
      title: 'Pengembangan Karir',
      description: 'Program training dan sertifikasi untuk mengembangkan skill'
    },
    {
      icon: Zap,
      title: 'Impact Nyata',
      description: 'Berkontribusi langsung dalam memajukan olahraga Indonesia'
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
                  Karir di POI
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="mb-12 space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Bergabunglah dengan tim kami dan jadilah bagian dari revolusi olahraga Indonesia.
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Wujudkan passion Anda dalam membangun ekosistem olahraga yang berkelanjutan.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:karir@inaspro.id"
                className="btn-primary inline-flex items-center text-lg group"
              >
                <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Kirim CV Anda
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

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mengapa Bergabung dengan POI?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Jadilah bagian dari perusahaan yang membangun masa depan olahraga Indonesia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="text-center p-6 bg-gray-50 hover:shadow-lg transition-shadow grain-texture">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Lowongan Tersedia
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Temukan posisi yang sesuai dengan passion dan keahlian Anda
              </p>
            </div>

            <div className="space-y-8">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow grain-texture">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>
                    </div>
                    <div className="lg:ml-8">
                      <a
                        href={`mailto:karir@inaspro.id?subject=Lamaran ${job.title}&body=Halo Tim HR POI,%0D%0A%0D%0ASaya tertarik untuk melamar posisi ${job.title}. Terlampir CV dan portfolio saya.%0D%0A%0D%0ATerima kasih.`}
                        className="btn-primary inline-flex items-center whitespace-nowrap"
                      >
                        <Send className="mr-2 w-4 h-4" />
                        Lamar Sekarang
                      </a>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Persyaratan:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-emerald-500 mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefit:</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Proses Rekrutmen
              </h2>
              <p className="text-xl text-gray-600">
                Proses yang transparan dan fair untuk semua kandidat
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kirim CV</h3>
                <p className="text-gray-600 text-sm">Kirim CV dan portfolio ke email karir kami</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Screening</h3>
                <p className="text-gray-600 text-sm">Tim HR akan melakukan review dan screening awal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
                <p className="text-gray-600 text-sm">Interview dengan tim dan user untuk posisi terkait</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Onboarding</h3>
                <p className="text-gray-600 text-sm">Welcome to the team! Proses onboarding dan training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tidak Menemukan Posisi yang Cocok?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Kami selalu terbuka untuk talenta-talenta terbaik. Kirim CV Anda dan kami akan menghubungi 
              ketika ada posisi yang sesuai dengan keahlian Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                  href="mailto:hr@poi.id"
                  className="bg-white text-gray-900 font-semibold py-3 px-8 hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Send className="mr-2 w-5 h-5" />
                karir@inaspro.id
              </a>
              <Link
                href="/bantuan"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-8 transition-all duration-300 hover:bg-white/20 hover:border-white/30"
              >
                Hubungi HR
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Siap Memulai Karir di POI?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Bergabunglah dengan kami dan jadilah bagian dari perubahan positif dalam dunia olahraga Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:karir@inaspro.id"
                className="btn-primary inline-flex items-center text-lg"
              >
                <Send className="mr-2 w-5 h-5" />
                Kirim CV Sekarang
              </a>
              <Link
                href="/perusahaan"
                className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
              >
                Pelajari Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}