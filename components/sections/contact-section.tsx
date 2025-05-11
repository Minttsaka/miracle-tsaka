"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to your server or a form service
      console.log("Form submitted:", formData)
      setFormStatus("success")

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative min-h-screen bg-black py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

        {/* Animated lines */}
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:20px_20px] opacity-5"></div>

        {/* Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-8 bg-blue-500/50"></div>
            <span className="mx-2 text-xs text-blue-400 tracking-widest uppercase">05</span>
            <div className="h-px w-8 bg-blue-500/50"></div>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Get In Touch
          </h2>
          <p className="mt-2 text-xs text-gray-400 max-w-md mx-auto">
            Lets discuss how we can collaborate to bring your vision to life
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left column - Contact info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact information */}
            <div className="border border-blue-500/20 bg-blue-900/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3 h-3 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:hello@miracletsaka.com"
                      className="text-xs text-white hover:text-blue-300 transition-colors"
                    >
                      hello@miracletsaka.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-3 h-3 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 mb-1">Phone</p>
                    <a href="tel:+11234567890" className="text-xs text-white hover:text-purple-300 transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-900/30 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 mb-1">Location</p>
                    <p className="text-xs text-white">
                      San Francisco, CA
                      <span className="block text-[10px] text-gray-400 mt-1">Available for remote work worldwide</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-900/30 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-3 h-3 text-green-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 mb-1">Website</p>
                    <a
                      href="https://miracletsaka.com"
                      className="text-xs text-white hover:text-green-300 transition-colors"
                    >
                      miracletsaka.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="border border-purple-500/20 bg-purple-900/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4">Connect With Me</h3>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-gray-800 bg-gray-900/30 rounded-lg p-3 hover:border-purple-500/30 hover:bg-purple-900/20 transition-colors"
                >
                  <Github className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-300">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-gray-800 bg-gray-900/30 rounded-lg p-3 hover:border-blue-500/30 hover:bg-blue-900/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-300">LinkedIn</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-gray-800 bg-gray-900/30 rounded-lg p-3 hover:border-cyan-500/30 hover:bg-cyan-900/20 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-300">Twitter</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-gray-800 bg-gray-900/30 rounded-lg p-3 hover:border-pink-500/30 hover:bg-pink-900/20 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-300">Instagram</span>
                </a>
              </div>
            </div>

            {/* Availability status */}
            <div className="border border-green-500/20 bg-green-900/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4">Current Availability</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Available for new projects</span>
                </div>

                <p className="text-[10px] text-gray-300 leading-relaxed">
                  Im currently accepting new projects and collaborations. My availability is limited to 2 new projects
                  per month to ensure the highest quality of work and attention to detail.
                </p>

                <div className="pt-2">
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center text-[10px] text-green-400 hover:text-green-300 transition-colors"
                  >
                    Schedule a consultation
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="lg:col-span-3">
            <div id="contact-form" className="border border-blue-500/20 bg-blue-900/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] text-gray-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[10px] text-gray-400 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="General Question">General Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project, goals, and timeline..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className={`inline-flex items-center text-xs border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full transition-all duration-300 ${
                      formStatus === "submitting" ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <div className="w-3 h-3 border-2 border-blue-300 border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-3 h-3 ml-2" />
                      </>
                    )}
                  </button>

                  {formStatus === "success" && (
                    <div className="flex items-center text-green-400 text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Message sent successfully!
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="flex items-center text-red-400 text-xs">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Failed to send message. Please try again.
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* FAQ */}
            <div className="mt-8 border border-gray-800 bg-gray-900/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4">Frequently Asked Questions</h3>

              <div className="space-y-4">
                {[
                  {
                    question: "What is your typical project process?",
                    answer:
                      "My process typically includes discovery, planning, design, development, testing, and launch phases. I maintain clear communication throughout and provide regular updates on progress.",
                  },
                  {
                    question: "How do you handle project pricing?",
                    answer:
                      "I offer both fixed-price and hourly rate options depending on the project scope and requirements. After our initial consultation, I'll provide a detailed proposal with transparent pricing.",
                  },
                  {
                    question: "What is your typical turnaround time?",
                    answer:
                      "Turnaround time varies based on project complexity. Small projects may take 2-4 weeks, while larger ones can take 2-3 months. I always provide a timeline estimate before starting.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                    <h4 className="text-xs font-medium text-white mb-2">{faq.question}</h4>
                    <p className="text-[10px] text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
