'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/', label: 'Beranda' },
    {
      label: 'Tentang',
      submenu: [
        { href: '/perusahaan', label: 'Perusahaan' },
        { href: '/pilar-bisnis', label: 'Pilar Bisnis' },
        { href: '/karir', label: 'Karir' }
      ]
    },
    {
      label: 'Program',
      submenu: [
        { href: '/minisoccer-super-league', label: 'Minisoccer Super League' },
        { href: '/gabung-ekosistem', label: 'Gabung Ekosistem' }
      ]
    },
    { href: '/bantuan', label: 'Bantuan' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 font-mono ${scrolled
      ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-emerald-500/20'
      : 'bg-white/90 backdrop-blur-lg shadow-lg shadow-emerald-500/10'
      }`}>
      <div className="relative px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="POI Logo"
                width={170}
                height={170}
              />
            </Link>
          </div>

          {/* Desktop Geometric Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {menuItems.map((item, index) => (
                <div key={item.href || item.label} className="relative">
                  {item.submenu ? (
                    // Dropdown Menu Item
                    <div
                      className="group relative"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="group relative px-5 py-3 text-gray-700 hover:text-emerald-600 font-medium font-dm-mono transition-colors duration-300 flex items-center">
                        <span className="relative z-10">{item.label}</span>
                        <ChevronDown className="ml-1 w-4 h-4 relative z-10 transition-transform duration-300 group-hover:rotate-180" />
                      </button>

                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-emerald-100/50 transition-all duration-300 ${activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}>
                        <div className="p-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="group flex items-center px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-lg transition-all duration-200 font-dm-mono"
                            >
                              <div className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                              <span>{subItem.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular Menu Item
                    <Link
                      href={item.href!}
                      className="group relative px-5 py-3 text-gray-700 hover:text-emerald-600 font-medium font-dm-mono transition-colors duration-300"
                      style={{ animationDelay: `${index * 75}ms` }}
                    >
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}


            </div>
          </div>

          {/* Geometric Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-3 text-gray-700 hover:text-emerald-600 focus:outline-none transition-all duration-300 group"
            >
              <div className="relative w-7 h-7">
                {/* Geometric hamburger lines */}
                <span className={`absolute block w-7 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2.5'}`}></span>
                <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-3' : 'opacity-100 translate-x-1'}`}></span>
                <span className={`absolute block w-7 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2.5'}`}></span>

                {/* Geometric accent dots */}
                <div className={`absolute -right-1 -top-1 w-1 h-1 bg-emerald-500 transform rotate-45 transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></div>
                <div className={`absolute -left-1 -bottom-1 w-1 h-1 bg-teal-500 transform rotate-45 transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Geometric Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 ${isOpen
        ? 'max-h-screen opacity-100'
        : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
        <div className="relative px-4 pt-4 pb-8 space-y-3 bg-white/95 backdrop-blur-xl border-t border-emerald-100/50">
          {/* Geometric background pattern for mobile menu */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-500/5 to-teal-500/5 transform rotate-45"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-teal-500/5 to-emerald-500/5 transform -rotate-12"></div>

          {menuItems.map((item, index) => (
            <div key={item.href || item.label} className="space-y-2">
              {item.submenu ? (
                // Mobile Dropdown Menu Item
                <div>
                  <div className="group relative flex items-center px-5 py-4 text-gray-700 font-medium font-dm-mono transition-all duration-300 overflow-hidden">
                    {/* Geometric mobile menu background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/8 group-hover:to-teal-500/8 transition-all duration-300 transform -skew-x-6 group-hover:skew-x-0"></div>

                    {/* Geometric indicator */}
                    <div className="relative w-3 h-3 mr-4 flex-shrink-0">
                      <div className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-teal-500 transform rotate-45 opacity-100 transition-all duration-300"></div>
                      <div className="absolute top-0 right-0 w-1 h-1 bg-emerald-400 transform rotate-45 opacity-100 transition-all duration-300"></div>
                    </div>

                    <span className="relative z-10 flex-1">{item.label}</span>
                    <ChevronDown className="w-4 h-4 relative z-10" />

                    {/* Geometric accent line */}
                    <div className="absolute bottom-0 left-8 w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                  </div>

                  {/* Mobile Submenu */}
                  <div className="ml-8 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="group relative flex items-center px-4 py-3 text-gray-600 hover:text-emerald-600 font-dm-mono transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
                        <span>{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                // Regular Mobile Menu Item
                <Link
                  href={item.href!}
                  className="group relative flex items-center px-5 py-4 text-gray-700 hover:text-emerald-600 font-medium font-dm-mono transition-all duration-300 overflow-hidden"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Geometric mobile menu background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/8 group-hover:to-teal-500/8 transition-all duration-300 transform -skew-x-6 group-hover:skew-x-0"></div>

                  {/* Geometric indicator */}
                  <div className="relative w-3 h-3 mr-4 flex-shrink-0">
                    <div className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-teal-500 transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
                    <div className="absolute top-0 right-0 w-1 h-1 bg-emerald-400 transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></div>
                  </div>

                  <span className="relative z-10">{item.label}</span>

                  {/* Geometric accent line */}
                  <div className="absolute bottom-0 left-8 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-16 transition-all duration-300"></div>
                </Link>
              )}
            </div>
          ))}


        </div>
      </div>
    </nav>
  )
}

export default Navigation