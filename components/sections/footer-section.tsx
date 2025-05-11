import Link from "next/link"
import { ArrowUp, Github, Linkedin, Twitter, Instagram } from "lucide-react"

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
              DREAMZ COME TRUE.
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
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between">
          <div className="text-[10px] text-gray-500 mb-4 md:mb-0">
            © {currentYear} Miracle Tsaka. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-[10px] text-gray-500 flex items-center">
              MIRACLE TSAKA
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
