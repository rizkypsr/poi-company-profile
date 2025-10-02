'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Users, GraduationCap, Building, Handshake, MapPin, Heart } from 'lucide-react'

const categories = [
  {
    id: 'pemain',
    title: 'Pemain',
    icon: Users,
    description: 'Daftar ke liga, akademi, dan turnamen resmi.',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'pelatih-wasit',
    title: 'Pelatih & Wasit',
    icon: GraduationCap,
    description: 'Ikuti sertifikasi dan lisensi resmi.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'klub-komunitas',
    title: 'Klub & Komunitas',
    icon: Building,
    description: 'Bergabung ke liga & aktivasi komunitas.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'sponsor-mitra',
    title: 'Sponsor & Mitra Bisnis',
    icon: Handshake,
    description: 'Buka peluang brand activation.',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'venue-operator',
    title: 'Venue & Operator Lokal',
    icon: MapPin,
    description: 'Jadi bagian dari jaringan MSL Arena.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'volunteer-media',
    title: 'Volunteer & Media',
    icon: Heart,
    description: 'Berkontribusi di event dan konten.',
    color: 'from-pink-500 to-rose-600'
  }
]

export default function GabungEkosistem() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { category: selectedCategory, ...formData })
    alert('Terima kasih! Pendaftaran Anda telah diterima. Tim kami akan menghubungi Anda segera.')
  }

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
                  Gabung Ekosistem
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="mb-12 space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Bangun perjalanan olahraga Anda bersama kami.
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Pilih kategori sesuai kebutuhan dan isi formulir pendaftaran.
              </p>
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

      {/* Category Selection */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Pilih Kategori Pendaftaran
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {categories.map((category) => {
                return (
                  <div
                    key={category.id}
                    className={`p-6 cursor-pointer transition-all duration-300 grain-texture ${
                      selectedCategory === category.id
                        ? 'ring-4 ring-emerald-500 bg-white shadow-xl scale-105'
                        : 'bg-white hover:shadow-lg hover:scale-102'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Registration Form */}
            {selectedCategory && (
              <div className="bg-white shadow-xl p-8 grain-texture">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Formulir Pendaftaran - {categories.find(c => c.id === selectedCategory)?.title}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="+62 8xx xxxx xxxx"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Lokasi/Kota *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Jakarta, Surabaya, dll"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Pengalaman/Latar Belakang
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Pilih tingkat pengalaman</option>
                      <option value="pemula">Pemula (0-1 tahun)</option>
                      <option value="menengah">Menengah (2-5 tahun)</option>
                      <option value="berpengalaman">Berpengalaman (5+ tahun)</option>
                      <option value="profesional">Profesional</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan/Motivasi Bergabung
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Ceritakan motivasi Anda bergabung dengan ekosistem POI..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      type="submit"
                      className="btn-primary inline-flex items-center justify-center"
                    >
                      Gabung Sekarang di INASPRO+
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <Link
                      href="/"
                      className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                    >
                      Kembali ke Beranda
                    </Link>
                  </div>
                </form>
              </div>
            )}

            {!selectedCategory && (
              <div className="text-center">
                <p className="text-gray-600 text-lg">
                  Pilih salah satu kategori di atas untuk melanjutkan pendaftaran
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}