'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, FileText, Shield, Users, Settings } from 'lucide-react'

export default function SupportPageEN() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const faqCategories = [
    {
      title: 'Account & Profile',
      icon: Users,
      questions: [
        {
          q: 'How do I create a new account?',
          a: 'To create a new account, click the "Sign Up" button on the main page, fill out the registration form with the required information, and verify your email.'
        },
        {
          q: 'How do I change my profile information?',
          a: 'Log into your account, click the "Profile" menu in the dashboard, then edit the information you want to change and save the changes.'
        },
        {
          q: 'Forgot password, how do I reset it?',
          a: 'Click "Forgot Password" on the login page, enter your email, and follow the instructions sent to your email to reset your password.'
        }
      ]
    },
    {
      title: 'Competitions & Tournaments',
      icon: Shield,
      questions: [
        {
          q: 'How do I register for competitions?',
          a: 'Select the competition you want to join, click "Register", complete the registration form, and make payment according to the terms.'
        },
        {
          q: 'What are the requirements to participate in tournaments?',
          a: 'Each tournament has different requirements. Generally includes: minimum age, skill level, document completeness, and registration fee payment.'
        },
        {
          q: 'How does the scoring system work in competitions?',
          a: 'The scoring system uses international standards with certified referees. Detailed scoring criteria are available on each competition page.'
        }
      ]
    },
    {
      title: 'Payment & Billing',
      icon: FileText,
      questions: [
        {
          q: 'How do I make a payment?',
          a: 'Payment is made through manual transfer. After transfer, contact WhatsApp admin at +62 812-3456-7890 for confirmation by including transfer proof and complete order information.'
        },
        {
          q: 'What payment methods are available?',
          a: 'Currently we accept payment through manual bank transfer. After transfer, confirmation via WhatsApp admin is required for payment verification.'
        },
        {
          q: 'How do I get an invoice?',
          a: 'Invoices are automatically sent to your email after payment is successfully confirmed by admin. You can also download them from your account dashboard.'
        },
        {
          q: 'How long does payment confirmation take?',
          a: 'Payment confirmation process takes maximum 24 hours after you send transfer proof and order information to our WhatsApp admin.'
        },
        {
          q: 'Is there a refund policy?',
          a: 'Refund policy applies with certain conditions. Cancellation 7 days before the event gets 50% refund, less than 7 days no refund.'
        }
      ]
    },
    {
      title: 'Technical & Platform',
      icon: Settings,
      questions: [
        {
          q: 'The app won\'t open, what should I do?',
          a: 'Make sure your internet connection is stable, update the app to the latest version, or try restarting your device. If still problematic, contact support.'
        },
        {
          q: 'How do I use the live streaming feature?',
          a: 'Live streaming feature is available for premium members. Access through the "Live" menu in the app and select the match you want to watch.'
        },
        {
          q: 'My data is lost, how do I recover it?',
          a: 'Data is stored on our servers. Log in again with the same account. If still missing, contact support with your account details.'
        }
      ]
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Your message has been sent! Our support team will respond within 24 hours.')
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
                  Support Center
                </span>
              </h1>
            </div>
            <div className="mb-12 space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Find answers to your questions or contact our support team
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                We&apos;re here to help you 24/7 for the best experience in the POI ecosystem
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
                Contact Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Send us an email to get help from our support team
              </p>
            </div>

            <div className="flex justify-center mb-16">
              <div className="bg-white p-8 grain-texture border border-gray-200 text-center max-w-md">
                <div className="w-16 h-16 bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
                <p className="text-gray-600 mb-4">Send email for detailed questions</p>
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
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find quick answers to common questions about POI services
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
                Still Need Help?
              </h2>
              <p className="text-xl text-white/90">
                Send us a message and our support team will respond within 24 hours
              </p>
            </div>

            <div className="bg-white p-8 grain-texture">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your full name"
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
                      placeholder="name@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Brief summary of your issue or question"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Describe your issue or question in detail..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center text-lg"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Send Message
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