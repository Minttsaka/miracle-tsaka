import Link from "next/link"
import { ArrowUp, Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react"

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black py-16 border-t border-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-950"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:20px_20px] opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 - Logo and info */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                MT
              </h2>
            </Link>
            <p className="text-[10px] text-gray-400 leading-relaxed mb-4">
              Crafting next-generation digital experiences that transcend conventional boundaries.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center hover:border-purple-500 hover:bg-purple-900/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3 h-3 text-gray-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center hover:border-blue-500 hover:bg-blue-900/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3 h-3 text-gray-400" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-900/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3 h-3 text-gray-400" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center hover:border-pink-500 hover:bg-pink-900/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-[10px] text-gray-400 hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { label: "UI/UX Design", href: "#" },
                { label: "Web Development", href: "#" },
                { label: "Mobile Applications", href: "#" },
                { label: "AI Integration", href: "#" },
                { label: "Digital Strategy", href: "#" },
                { label: "Interactive Experiences", href: "#" },
              ].map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-[10px] text-gray-400 hover:text-blue-400 transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@miracletsaka.com"
                  className="text-[10px] text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  hello@miracletsaka.com
                </a>
              </li>
              <li>
                <a href="tel:+11234567890" className="text-[10px] text-gray-400 hover:text-cyan-400 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li>
                <span className="text-[10px] text-gray-400">San Francisco, CA</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="#contact"
                className="inline-flex items-center text-[10px] border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-full transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between">
          <div className="text-[10px] text-gray-500 mb-4 md:mb-0">
            © {currentYear} Miracle Tsaka. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-[10px] text-gray-500 hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10px] text-gray-500 hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
            <div className="text-[10px] text-gray-500 flex items-center">
              Made with <Heart className="w-3 h-3 text-red-500 mx-1" /> in San Francisco
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="absolute right-6 bottom-6">
          <Link
            href="#"
            className="w-10 h-10 rounded-full border border-gray-800 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center hover:border-purple-500 hover:bg-purple-900/20 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-gray-400" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
