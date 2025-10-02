import Link from 'next/link'
import { MessageCircle, Mail, Phone, Clock, HelpCircle, FileText, Users, Zap } from 'lucide-react'

export default function Bantuan() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Kirim pertanyaan detail melalui email',
      contact: 'support@inaspro.id',
      responseTime: 'Respon dalam 24 jam',
      color: 'from-blue-500 to-indigo-600',
      action: 'mailto:support@inaspro.id'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat langsung dengan tim customer service',
      contact: '+62 812-3456-7890',
      responseTime: 'Respon dalam 2 jam (jam kerja)',
      color: 'from-emerald-500 to-emerald-600',
      action: 'https://wa.me/6281234567890'
    },
    {
      icon: Phone,
      title: 'Telepon',
      description: 'Hubungi langsung untuk bantuan urgent',
      contact: '(021) 1234-5678',
      responseTime: 'Senin-Jumat, 09:00-17:00 WIB',
      color: 'from-purple-500 to-pink-600',
      action: 'tel:+622112345678'
    }
  ]

  const faqCategories = [
    {
      icon: Users,
      title: 'Pendaftaran & Akun',
      questions: [
        {
          q: 'Bagaimana cara mendaftar di INASPRO+?',
          a: 'Kunjungi halaman Gabung Ekosistem, pilih kategori yang sesuai, dan isi formulir pendaftaran. Tim kami akan memproses dalam 1-2 hari kerja.'
        },
        {
          q: 'Apakah pendaftaran berbayar?',
          a: 'Pendaftaran dasar gratis. Beberapa layanan premium dan sertifikasi memiliki biaya terpisah yang akan dijelaskan saat pendaftaran.'
        },
        {
          q: 'Bagaimana cara mengubah data profil?',
          a: 'Login ke akun INASPRO+ Anda, masuk ke menu Profil, dan edit informasi yang diperlukan. Perubahan akan tersimpan otomatis.'
        }
      ]
    },
    {
      icon: HelpCircle,
      title: 'Event & Kompetisi',
      questions: [
        {
          q: 'Bagaimana cara mendaftar kompetisi MSL?',
          a: 'Pastikan Anda sudah terdaftar sebagai Pemain atau Klub. Buka halaman MSL, pilih kompetisi yang diinginkan, dan ikuti proses pendaftaran.'
        },
        {
          q: 'Kapan jadwal kompetisi dimulai?',
          a: 'Jadwal kompetisi bervariasi per region. Cek kalender event di website MSL atau platform INASPRO+ untuk informasi terkini.'
        },
        {
          q: 'Bagaimana sistem pembayaran untuk event?',
          a: 'Kami menerima transfer bank, e-wallet, dan payment gateway. Detail pembayaran akan dikirim setelah konfirmasi pendaftaran.'
        }
      ]
    },
    {
      icon: FileText,
      title: 'Sertifikasi & Edukasi',
      questions: [
        {
          q: 'Apa saja jenis sertifikasi yang tersedia?',
          a: 'Kami menyediakan sertifikasi untuk Pelatih, Wasit, Manajer Tim, dan Program Akademi. Setiap sertifikasi memiliki level dan persyaratan berbeda.'
        },
        {
          q: 'Berapa lama proses sertifikasi?',
          a: 'Durasi bervariasi: Pelatih Level 1 (2 minggu), Wasit (1 minggu), Manajer Tim (3 minggu). Termasuk teori, praktik, dan ujian.'
        },
        {
          q: 'Apakah sertifikasi diakui secara nasional?',
          a: 'Ya, semua sertifikasi POI diakui oleh asosiasi olahraga nasional dan dapat digunakan untuk kompetisi resmi.'
        }
      ]
    },
    {
      icon: Zap,
      title: 'Platform & Teknologi',
      questions: [
        {
          q: 'Bagaimana cara menggunakan platform INASPRO+?',
          a: 'Setelah login, Anda dapat mengakses dashboard sesuai kategori. Tersedia tutorial dan panduan lengkap di menu Help.'
        },
        {
          q: 'Apakah ada aplikasi mobile?',
          a: 'Aplikasi mobile INASPRO+ sedang dalam pengembangan. Saat ini dapat diakses melalui web browser di semua device.'
        },
        {
          q: 'Bagaimana cara melaporkan bug atau masalah teknis?',
          a: 'Gunakan fitur Report Bug di platform atau kirim email ke support@inaspro.id dengan detail masalah dan screenshot.'
        }
      ]
    }
  ]

  const supportHours = [
    { day: 'Senin - Jumat', hours: '09:00 - 17:00 WIB' },
    { day: 'Sabtu', hours: '09:00 - 15:00 WIB' },
    { day: 'Minggu', hours: 'Emergency only' }
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
                  Pusat Bantuan
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="mb-12 space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Ada pertanyaan seputar event, pendaftaran, atau kerja sama?
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Tim customer service kami siap membantu Anda 24/7.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center text-lg group"
              >
                <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Chat WhatsApp
              </a>
              <a
                href="mailto:support@inaspro.id"
                className="btn-secondary inline-flex items-center text-lg group"
              >
                <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Kirim Email
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

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hubungi Kami
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pilih metode komunikasi yang paling nyaman untuk Anda
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <div key={index} className="bg-gray-50 p-8 shadow-lg hover:shadow-xl transition-shadow grain-texture text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{method.contact}</div>
                    <div className="text-sm text-gray-500 mb-6">{method.responseTime}</div>
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="btn-primary inline-flex items-center"
                    >
                      Hubungi Sekarang
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Jam Operasional
              </h2>
              <p className="text-xl text-gray-600">
                Tim customer service kami siap melayani Anda
              </p>
            </div>

            <div className="bg-white p-8 shadow-lg grain-texture">
              <div className="grid md:grid-cols-3 gap-6">
                {supportHours.map((schedule, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50">
                    <div className="text-lg font-semibold text-gray-900 mb-2">{schedule.day}</div>
                    <div className="text-emerald-600 font-medium">{schedule.hours}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  <strong>Chatbot INASPRO+</strong> tersedia 24/7 untuk pertanyaan umum dan bantuan cepat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Temukan jawaban untuk pertanyaan umum seputar layanan POI
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {faqCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon
                return (
                  <div key={categoryIndex} className="bg-gray-50 p-8 grain-texture">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="bg-white p-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h4>
                          <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white/20 flex items-center justify-center mx-auto mb-8">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Chatbot INASPRO+ (24/7)
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Dapatkan bantuan instan dengan chatbot AI kami yang tersedia 24 jam sehari, 7 hari seminggu. 
              Cocok untuk pertanyaan umum, informasi event, dan panduan penggunaan platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-emerald-600 font-semibold py-3 px-8 hover:bg-gray-100 transition-colors inline-flex items-center">
                <MessageCircle className="mr-2 w-5 h-5" />
                Mulai Chat dengan Bot
              </button>
              <Link
                href="/gabung-ekosistem"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-8 transition-all duration-300 hover:bg-white/20 hover:border-white/30"
              >
                Daftar INASPRO+
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gray-900 grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bantuan Darurat
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Untuk situasi darurat terkait event atau keamanan, hubungi hotline darurat kami
            </p>
            <div className="bg-gray-800 p-6 inline-block">
              <div className="flex items-center justify-center">
                <Phone className="w-8 h-8 text-white mr-4" />
                <div>
                  <div className="text-2xl font-bold">Emergency Hotline</div>
                  <a href="tel:+6281234567890" className="text-xl hover:underline">+62 812-3456-7890</a>
                </div>
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
              Masih Butuh Bantuan?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Tim customer service kami siap membantu Anda dengan pertanyaan apapun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center text-lg"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat WhatsApp
              </a>
              <a
                href="mailto:support@inaspro.id"
                className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Mail className="mr-2 w-4 h-4" />
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}