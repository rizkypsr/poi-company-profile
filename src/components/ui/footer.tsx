import Link from 'next/link'
import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white grain-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-emerald-400">POI</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Promotor Olahraga Indonesia - Rumah besar ekosistem olahraga komunitas, profesional, dan industri kreatif olahraga di Indonesia.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/id.inasport" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.youtube.com/@minisoccersuperleague" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-400">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/perusahaan" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/pilar-bisnis" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Pilar Bisnis
                </Link>
              </li>
              <li>
                <Link href="/karir" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Karir
                </Link>
              </li>
              <li>
                <Link href="/bantuan" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Bantuan
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-400">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/gabung-ekosistem" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Gabung Ekosistem
                </Link>
              </li>
              <li>
                <Link href="/minisoccer-super-league" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Minisoccer Super League
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Event Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Community Building
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-400">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Jakarta, Indonesia
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <Link href="mailto:info@poi.id" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  info@poi.id
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <Link href="tel:+62" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  +62 xxx xxxx xxxx
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Promotor Olahraga Indonesia. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}