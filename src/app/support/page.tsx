'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Mail, FileText, Shield, Users, Settings } from 'lucide-react'

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const faqCategories = [
    {
      title: 'Akun & Profil',
      icon: Users,
      questions: [
        {
          q: 'Bagaimana cara membuat akun baru?',
          a: 'Untuk membuat akun baru, klik tombol "Daftar" di halaman utama, isi formulir pendaftaran dengan informasi yang diperlukan, dan verifikasi email Anda.'
        },
        {
          q: 'Bagaimana cara mengubah informasi profil?',
          a: 'Masuk ke akun Anda, klik menu "Profil" di dashboard, lalu edit informasi yang ingin diubah dan simpan perubahan.'
        },
        {
          q: 'Lupa password, bagaimana cara reset?',
          a: 'Klik "Lupa Password" di halaman login, masukkan email Anda, dan ikuti instruksi yang dikirim ke email untuk mereset password.'
        }
      ]
    },
    {
      title: 'Kompetisi & Turnamen',
      icon: Shield,
      questions: [
        {
          q: 'Bagaimana cara mendaftar kompetisi?',
          a: 'Pilih kompetisi yang ingin diikuti, klik "Daftar", lengkapi formulir pendaftaran, dan lakukan pembayaran sesuai ketentuan.'
        },
        {
          q: 'Apa saja persyaratan mengikuti turnamen?',
          a: 'Setiap turnamen memiliki persyaratan berbeda. Umumnya meliputi: usia minimal, tingkat skill, kelengkapan dokumen, dan pembayaran biaya pendaftaran.'
        },
        {
          q: 'Bagaimana sistem penilaian dalam kompetisi?',
          a: 'Sistem penilaian menggunakan standar internasional dengan wasit bersertifikat. Detail kriteria penilaian tersedia di halaman masing-masing kompetisi.'
        }
      ]
    },
    {
      title: 'Pembayaran & Billing',
      icon: FileText,
      questions: [
        {
          q: 'Bagaimana cara melakukan pembayaran?',
          a: 'Pembayaran dilakukan melalui transfer manual. Setelah transfer, hubungi admin WhatsApp di +62 812-3456-7890 untuk konfirmasi dengan menyertakan bukti transfer dan informasi pesanan lengkap.'
        },
        {
          q: 'Metode pembayaran apa saja yang tersedia?',
          a: 'Saat ini kami menerima pembayaran melalui transfer bank manual. Setelah transfer, wajib konfirmasi melalui WhatsApp admin untuk verifikasi pembayaran.'
        },
        {
          q: 'Bagaimana cara mendapatkan invoice?',
          a: 'Invoice otomatis dikirim ke email setelah pembayaran berhasil dikonfirmasi oleh admin. Anda juga bisa mengunduhnya dari dashboard akun Anda.'
        },
        {
          q: 'Berapa lama proses konfirmasi pembayaran?',
          a: 'Proses konfirmasi pembayaran maksimal 1x24 jam setelah Anda mengirim bukti transfer dan informasi pesanan ke admin WhatsApp kami.'
        },
        {
          q: 'Apakah ada kebijakan refund?',
          a: 'Kebijakan refund berlaku dengan ketentuan tertentu. Pembatalan 7 hari sebelum event mendapat refund 50%, kurang dari 7 hari tidak dapat refund.'
        }
      ]
    },
    {
      title: 'Teknis & Platform',
      icon: Settings,
      questions: [
        {
          q: 'Aplikasi tidak bisa dibuka, apa yang harus dilakukan?',
          a: 'Pastikan koneksi internet stabil, update aplikasi ke versi terbaru, atau coba restart perangkat. Jika masih bermasalah, hubungi support.'
        },
        {
          q: 'Bagaimana cara menggunakan fitur live streaming?',
          a: 'Fitur live streaming tersedia untuk member premium. Akses melalui menu "Live" di aplikasi dan pilih pertandingan yang ingin ditonton.'
        },
        {
          q: 'Data saya hilang, bagaimana cara memulihkan?',
          a: 'Data tersimpan di server kami. Login ulang dengan akun yang sama. Jika masih hilang, hubungi support dengan detail akun Anda.'
        }
      ]
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Pesan Anda telah dikirim! Tim support kami akan merespons dalam 1x24 jam.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="grain-texture min-h-[60vh] flex items-center justify-center relative bg-emerald-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  Pusat Bantuan
                </span>
              </h1>
            </div>
            <div className="mb-12 space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Temukan jawaban untuk pertanyaan Anda atau hubungi tim support kami
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Kami siap membantu Anda 24/7 untuk pengalaman terbaik di ekosistem POI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hubungi Kami
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kirim email untuk mendapatkan bantuan dari tim support kami
              </p>
            </div>

            <div className="flex justify-center mb-16">
              <div className="bg-white p-8 grain-texture border border-gray-200 text-center max-w-md">
                <div className="w-16 h-16 bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
                <p className="text-gray-600 mb-4">Kirim email untuk pertanyaan detail</p>
                <a href="mailto:support@poi.id" className="text-emerald-600 font-semibold hover:text-emerald-700">
                  support@poi.id
                </a>
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
                Temukan jawaban cepat untuk pertanyaan umum seputar layanan POI
              </p>
            </div>

            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon
                return (
                  <div key={categoryIndex} className="bg-gray-50 p-8 grain-texture">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-emerald-600 flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.questions.map((faq, faqIndex) => {
                        const globalIndex = categoryIndex * 10 + faqIndex
                        return (
                          <div key={faqIndex} className="bg-white border border-gray-200">
                            <button
                              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                              onClick={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
                            >
                              <h4 className="text-lg font-semibold text-gray-900">{faq.q}</h4>
                              {openFaq === globalIndex ? (
                                <ChevronUp className="w-5 h-5 text-emerald-600" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-emerald-600" />
                              )}
                            </button>
                            {openFaq === globalIndex && (
                              <div className="px-6 pb-6">
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 grain-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Masih Butuh Bantuan?
              </h2>
              <p className="text-xl text-white/90">
                Kirim pesan kepada kami dan tim support akan merespons dalam 1x24 jam
              </p>
            </div>

            <div className="bg-white p-8 grain-texture">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subjek *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Ringkasan masalah atau pertanyaan Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Jelaskan masalah atau pertanyaan Anda secara detail..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center text-lg"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}