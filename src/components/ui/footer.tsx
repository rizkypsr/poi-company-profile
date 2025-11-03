import Link from 'next/link'
import Image from 'next/image'
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

        {/* Sponsor Logos Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <Image src="/sponsor/adira.png" alt="Adira" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/allplay.png" alt="Allplay" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/bi.jpg" alt="Bank Indonesia" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/Bolalob.webp" alt="Bolalob" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/bpjs.svg.png" alt="BPJS" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/brawijayahospital.png" alt="Brawijaya Hospital" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/cheers.jpeg" alt="Cheers" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/citilink.png" alt="Citilink" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/galerifutsal.png" alt="Galeri Futsal" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/garistemu_cover.jpeg" alt="Garis Temu" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/garudatv.png" alt="Garuda TV" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/gelora.jpeg" alt="Gelora" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/globalradio.svg.png" alt="Global Radio" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/hmns.png" alt="HMNS" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/indihome.webp" alt="IndiHome" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/inews.svg" alt="iNews" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/infipopblue.svg" alt="Infipop Blue" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/infomedia.png" alt="Infomedia" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/jbfc.jpeg" alt="JBFC" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/jetbretmedia.png" alt="Jetbret Media" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/jne.png" alt="JNE" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/madiriutama.png" alt="Madiri Utama" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/mandiri.png" alt="Bank Mandiri" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/max.jpg" alt="Max" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/mills.png" alt="Mills" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/mnc.png" alt="MNC" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/molten.jpeg" alt="Molten" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/mustang.png" alt="Mustang" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/mytelkomsel.png" alt="MyTelkomsel" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/nodge.png" alt="Nodge" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/noice.webp" alt="Noice" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/pala.jpeg" alt="Pala" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/pelindo.png" alt="Pelindo" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/pertamina.png" alt="Pertamina" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/pertamina_lubricants.png" alt="Pertamina Lubricants" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/physioprenenur.jpeg" alt="Physio Prenenur" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/pln.png" alt="PLN" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/pocari.png" alt="Pocari Sweat" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/pupuk.webp" alt="Pupuk Indonesia" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/republika.png" alt="Republika" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/salingjaga.png" alt="Saling Jaga" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/segotempongnegoro.jpeg" alt="Sego Tempong Negoro" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/seindonesia.webp" alt="SE Indonesia" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/skor.jpg" alt="Skor" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/specs.jpg" alt="Specs" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/tiket.png" alt="Tiket.com" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/ultr.jpg" alt="ULTR" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="/sponsor/vivin.webp" alt="Vivin" width={40} height={40} className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
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