import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, ExternalLink, Github, Filter, Eye } from "lucide-react"

export function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen bg-black py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black"></div>

        {/* Animated lines */}
        <div className="absolute left-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="absolute right-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>

        {/* Circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
                patternTransform="scale(5) rotate(0)"
              >
                <path
                  d="M0 50 L30 50 M70 50 L100 50 M50 0 L50 30 M50 70 L50 100"
                  stroke="#8888"
                  strokeWidth="1"
                  fill="none"
                />
                <circle cx="50" cy="50" r="5" fill="none" stroke="#8888" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

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
            <div className="h-px w-8 bg-cyan-500/50"></div>
            <span className="mx-2 text-xs text-cyan-400 tracking-widest uppercase">03</span>
            <div className="h-px w-8 bg-cyan-500/50"></div>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Featured Projects
          </h2>
          <p className="mt-2 text-xs text-gray-400 max-w-md mx-auto">
            A showcase of my most innovative and impactful digital creations
          </p>
        </div>

        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["Web Development", "UI/UX Design", "AI Solutions", "3D & Interactive"].map((filter) => (
            <button
              key={filter}
              className="text-[10px] px-4 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-gray-300 transition-colors"
            >
              {filter}
            </button>
          ))}
          <button className="text-[10px] px-4 py-1.5 rounded-full flex items-center gap-1 bg-gray-800/50 border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-gray-300 transition-colors">
            <Filter className="w-3 h-3" />
            More Filters
          </button>
        </div>

        {/* Featured project */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/10 to-purple-900/10 backdrop-blur-sm group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side - Image */}
              <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="NexusAI Platform"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Project badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <div className="bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-full px-2 py-1">
                    <span className="text-[10px] text-cyan-300">Featured</span>
                  </div>
                  <div className="bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-full px-2 py-1">
                    <span className="text-[10px] text-purple-300">AI Platform</span>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">NexusAI Platform</h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    A revolutionary AI-powered platform that enables businesses to create, deploy, and manage
                    intelligent applications without extensive technical expertise. NexusAI bridges the gap between
                    advanced machine learning capabilities and practical business applications.
                  </p>

                  {/* Tech stack */}
                  <div className="mb-6">
                    <p className="text-[10px] text-gray-500 mb-2">TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "TensorFlow", "GraphQL", "AWS", "Docker"].map((tech) => (
                        <span key={tech} className="text-[10px] px-2 py-1 rounded-full bg-gray-800 text-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      "Intuitive AI Model Builder",
                      "Real-time Analytics Dashboard",
                      "Multi-platform Deployment",
                      "Enterprise-grade Security",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-1">
                        <div className="w-1 h-1 rounded-full bg-cyan-500"></div>
                        <span className="text-[10px] text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                  <Link
                    href="#"
                    className="inline-flex items-center text-xs border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full transition-all duration-300 group"
                  >
                    View Case Study
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center text-xs text-gray-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Quantum UI Framework",
              description:
                "A next-generation UI component library built for the future of web development, featuring atomic design principles and advanced animation capabilities.",
              image: "/placeholder.svg?height=400&width=600",
              category: "UI/UX Design",
              tech: ["React", "TypeScript", "Framer Motion"],
              color: "purple",
            },
            {
              title: "EcoTrack Mobile App",
              description:
                "A sustainability-focused mobile application that helps users track and reduce their carbon footprint through personalized recommendations and community challenges.",
              image: "/placeholder.svg?height=400&width=600",
              category: "Mobile Apps",
              tech: ["React Native", "Firebase", "Node.js"],
              color: "green",
            },
            {
              title: "Immersive VR Experience",
              description:
                "A virtual reality experience that transports users to futuristic environments, featuring interactive elements and spatial audio for complete immersion.",
              image: "/placeholder.svg?height=400&width=600",
              category: "3D & Interactive",
              tech: ["Three.js", "WebXR", "GLSL"],
              color: "blue",
            },
            {
              title: "Predictive Analytics Dashboard",
              description:
                "An enterprise-grade analytics platform that leverages machine learning to provide predictive insights and actionable business intelligence.",
              image: "/placeholder.svg?height=400&width=600",
              category: "AI Solutions",
              tech: ["Python", "TensorFlow", "D3.js"],
              color: "cyan",
            },
            {
              title: "Blockchain Marketplace",
              description:
                "A decentralized marketplace built on blockchain technology, enabling secure and transparent transactions for digital assets and services.",
              image: "/placeholder.svg?height=400&width=600",
              category: "Web Development",
              tech: ["Solidity", "Web3.js", "Next.js"],
              color: "purple",
            },
            {
              title: "Smart Home Ecosystem",
              description:
                "An integrated IoT platform that connects and orchestrates smart home devices through an intuitive interface and advanced automation capabilities.",
              image: "/placeholder.svg?height=400&width=600",
              category: "AI Solutions",
              tech: ["IoT", "Node.js", "React"],
              color: "blue",
            },
          ].map((project, index) => (
            <div
              key={index}
              className={`border border-${project.color}-500/20 bg-gradient-to-br from-${project.color}-900/10 to-black/50 backdrop-blur-sm rounded-xl overflow-hidden group hover:border-${project.color}-500/40 transition-colors duration-300`}
            >
              {/* Project image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <div
                    className={`bg-black/80 backdrop-blur-sm border border-${project.color}-500/30 rounded-full px-2 py-1`}
                  >
                    <span className={`text-[10px] text-${project.color}-300`}>{project.category}</span>
                  </div>
                </div>

                {/* Quick view button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-sm font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-[10px] text-gray-400 leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-1 rounded-full bg-gray-800 text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Link
                    href="#"
                    className={`text-[10px] text-${project.color}-400 hover:text-${project.color}-300 flex items-center transition-colors`}
                  >
                    View Details
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </Link>
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                      <Github className="w-3 h-3" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center text-xs border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 px-6 py-3 rounded-full transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
