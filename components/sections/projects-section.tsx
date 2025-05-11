import Link from "next/link"
import Image from "next/image"
import { ExternalLink,  Filter, Eye } from "lucide-react"

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
                  src="/ai-chat.png?height=600&width=800"
                  alt="miracle tsaka chat"
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
                    <span className="text-[10px] text-purple-300">Advanced AI</span>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Realtime Voice Chat</h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  This app uses AI to provide information about Miracle Tsaka through natural voice conversations, enabling users to interact seamlessly using speech. 
                  It has realistic voice capabilities.
                  </p>

                  {/* Tech stack */}
                  <div className="mb-6">
                    <p className="text-[10px] text-gray-500 mb-2">TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "ElevensLab", "GEMINI", "API"].map((tech) => (
                        <span key={tech} className="text-[10px] px-2 py-1 rounded-full bg-gray-800 text-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      "Intuitive AI Model",
                      "Real-time Conversation",
                      "Realistic voice",
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
                    href="https://ai-voice-chat-eight.vercel.app/"
                    target="__blank"
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
              title: "XTREME-REGION STARTUP",
              description:
                `I developed the fontend and intergated ai functionalities to this startup web app.Extreme Region empowers organizations with AI-driven video conferencing and educational tools, enabling seamless 
                online meetings and dynamic lesson creation to enhance collaboration and knowledge sharing. The platform also allows 
                teachers to create dedicated channels where users can subscribe, having realtime voice chat with ai for learning purpose, offering a powerful way to monetize expertise and build 
                an engaged learning community. Its not deployed yet and its in development phase`,
              image: "/x-region.png?height=400&width=600",
              category: "Startup",
              tech: ["Nextjs", "TypeScript", "GEMINI", "ElevenLabs","More"],
              color: "purple",
            },
            {
              title: "MIRACLE TSAKA — PERSONAL PORTFOLIO",
              description: `A sleek and interactive portfolio website that highlights my journey, skills in full-stack development, AI projects, and design capabilities. It serves as a central hub for my professional profile, featuring my resume, project showcases, and contact links.`,
              image: "/portfolio.png?height=400&width=600",
              category: "Portfolio",
              tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
              color: "indigo",
            }
            
           
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
                <p className="text-[10px] text-gray-400 leading-relaxed mb-4 ">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-1 rounded-full bg-gray-800 text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  )
}
