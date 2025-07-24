import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  Star,
  Code,
  Zap,
  Globe,
  Cpu,
  ArrowRight,
  User,
  FolderKanban,
  Briefcase,
  Mail,
} from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-transparent opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Animated circuit lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse" />
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_14px] opacity-5" />

        {/* Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
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

        {/* Floating tech icons */}
        <div className="absolute top-1/4 right-1/4 animate-float opacity-20">
          <Code className="w-8 h-8 text-purple-300" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-delay opacity-20">
          <Zap className="w-6 h-6 text-cyan-300" />
        </div>
        <div className="absolute top-1/3 left-1/5 animate-float-slow opacity-20">
          <Globe className="w-10 h-10 text-blue-300" />
        </div>
        <div className="absolute bottom-1/3 right-1/5 animate-float-slower opacity-20">
          <Cpu className="w-7 h-7 text-purple-300" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Small intro text */}
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs tracking-widest text-purple-300 uppercase">
            <Star className="w-3 h-3" />
            <span>Portfolio V1</span>
            <Star className="w-3 h-3" />
          </div>

          {/* Name */}
          <h1 className="text-5xl uppercase sm:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 animate-gradient">
            Miracle Tsaka
          </h1>

          {/* Title */}
          <p className="text-xs sm:text-sm tracking-wider text-gray-400 max-w-xl mx-auto lg:mx-0">
            DIGITAL GIANT • SOFTWARE ENGINEER • INNOVATION SPECIALIST
          </p>

          {/* Description */}
          <p className="text-xs leading-relaxed max-w-2xl mx-auto lg:mx-0 text-gray-300">
          I create advanced digital experiences that go beyond the ordinary. I focus on modern user interfaces, interactive technologies, and smart systems
           that change the way people interact with computers.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 pt-4">
            <div className="border border-purple-500/20 bg-purple-500/5 rounded-md p-2">
              <div className="text-xs text-purple-300">Lead Projects</div>
              <div className="text-xl font-bold">2+</div>
            </div>
            <div className="border border-blue-500/20 bg-blue-500/5 rounded-md p-2">
              <div className="text-xs text-blue-300">Experience</div>
              <div className="text-xl font-bold">2 YRS</div>
            </div>
            <div className="border border-cyan-500/20 bg-cyan-500/5 rounded-md p-2">
              <div className="text-xs text-cyan-300">Clients</div>
              <div className="text-xl font-bold">2+</div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link
              href="#about"
              className="inline-flex items-center text-xs border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full transition-all duration-300 group"
            >
              Explore My Universe
              <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center text-xs border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full transition-all duration-300 group"
            >
              View Projects
              <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Tech stack */}
          <div className="pt-4">
            <p className="text-[10px] text-gray-500 mb-2">TECH STACK</p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "AI/ML","More advanced technologies"].map((tech) => (
                <span key={tech} className="text-[10px] px-2 py-1 rounded-full bg-gray-800 text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Profile image and decorative elements */}
        <div className="relative flex justify-center">
          {/* Decorative ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-purple-500/30 animate-spin-slow"></div>
            <div className="absolute w-72 h-72 rounded-full border border-blue-500/20 animate-spin-slower"></div>
            <div className="absolute w-80 h-80 rounded-full border border-cyan-500/10 animate-spin-slowest"></div>
          </div>

          {/* Profile image */}
          <div className="relative z-10 w-56 h-56 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <Image
              src="/mint.jpg?height=400&width=400"
              alt="Miracle Tsaka"
              width={224}
              height={224}
              className="object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
          </div>

          {/* Floating info cards */}
          <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-2 text-xs animate-float-slow">
            <div className="flex items-center space-x-1">
              <Cpu className="w-3 h-3 text-purple-400" />
              <span className="text-[10px]">AI Specialist</span>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-lg p-2 text-xs animate-float">
            <div className="flex items-center space-x-1">
              <Globe className="w-3 h-3 text-blue-400" />
              <span className="text-[10px]">Global Projects</span>
            </div>
          </div>

          <div className="absolute top-1/2 -right-8 bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-2 text-xs animate-float-delay">
            <div className="flex items-center space-x-1">
              <Zap className="w-3 h-3 text-cyan-400" />
              <span className="text-[10px]">Fast Delivery</span>
            </div>
          </div>

          {/* Available badge */}
          <div className="absolute -bottom-8 right-0 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-3 py-1">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] text-green-400">Available for Work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-[10px] text-gray-500 mb-2">Scroll to explore</span>
        <div className="w-5 h-9 border border-gray-700 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-purple-400 rounded-full animate-bounce mt-1"></div>
        </div>
      </div>

      {/* Navigation links */}
      <div className="absolute bottom-10 right-10 flex flex-col space-y-4">
        {[
          { id: "about", icon: <User className="w-3 h-3" />, label: "About Me" },
          { id: "skills", icon: <Cpu className="w-3 h-3" />, label: "Skills" },
          { id: "projects", icon: <FolderKanban className="w-3 h-3" />, label: "Projects" },
          { id: "experience", icon: <Briefcase className="w-3 h-3" />, label: "Experience" },
          { id: "contact", icon: <Mail className="w-3 h-3" />, label: "Contact" },
        ].map((item) => (
          <div key={item.id} className="group relative">
            <a
              href={`#${item.id}`}
              className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-colors duration-300"
            >
              <span className="text-gray-400 group-hover:text-purple-400 transition-colors">{item.icon}</span>
            </a>
            {/* Tooltip */}
            <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0 transition-transform">
              <div className="bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded px-2 py-1 whitespace-nowrap">
                <span className="text-[10px] text-purple-300">{item.label}</span>
              </div>
              {/* Tooltip arrow */}
              <div className="absolute top-1/2 right-0 -mt-1 -mr-1 border-t border-r border-purple-500/30 w-2 h-2 bg-black/80 transform rotate-45"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
