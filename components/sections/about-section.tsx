import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Code, Globe, Briefcase, Lightbulb, Target, Award, Rocket, ArrowDown } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen bg-black py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

        {/* Animated lines */}
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>

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
            <div className="h-px w-8 bg-purple-500/50"></div>
            <span className="mx-2 text-xs text-purple-400 tracking-widest uppercase">01</span>
            <div className="h-px w-8 bg-purple-500/50"></div>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            About Me
          </h2>
          <p className="mt-2 text-xs text-gray-400 max-w-md mx-auto">
          The story, mindset, and goals that guide my work in digital design and technology.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left column - Image and decorative elements */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
              <Image
                src="/mint.jpeg?height=600&width=480"
                alt="Miracle Tsaka Working"
                width={480}
                height={600}
                className="object-cover w-full h-full"
              />

              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-2">
                <div className="flex items-center space-x-1">
                  <Code className="w-3 h-3 text-purple-400" />
                  <span className="text-[10px] text-purple-300">SAMSUNG INNOVATION CAMPUS</span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-lg p-2">
                <div className="flex items-center space-x-1">
                  <Rocket className="w-3 h-3 text-blue-400" />
                  <span className="text-[10px] text-blue-300">FUTURE VISIONARY</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-purple-500/20 rounded-full"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-blue-500/20 rounded-full"></div>


          </div>

          {/* Right column - Text content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Bio */}
            <div>
              <h3 className="text-sm font-semibold text-purple-400 mb-2">The Journey</h3>
              <p className="text-xs leading-relaxed text-gray-300">
                I am Miracle Tsaka, a digital architect and future engineer with a passion for creating innovative
                solutions that bridge the gap between technology and human experience. With over 2 years of experience
                in the tech industry, I've dedicated my career to pushing the boundaries of what's possible in digital
                design and development.
              </p>
              <p className="text-xs leading-relaxed text-gray-300 mt-3">
                My journey began with a fascination for how technology could transform human interaction. This led me to
                pursue advanced studies in coding and digital design, where I developed a unique approach that
                combines technical expertise with creative vision.
              </p>
            </div>

            {/* Philosophy cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  icon: <Lightbulb className="w-4 h-4 text-purple-400" />,
                  title: "Innovation First",
                  description:
                    "I believe in challenging conventional thinking and exploring new frontiers in technology and design.",
                },
                {
                  icon: <Target className="w-4 h-4 text-blue-400" />,
                  title: "User-Centered",
                  description:
                    "Every line of code and pixel I develop is guided by how it enhances the human experience.",
                },
                {
                  icon: <Award className="w-4 h-4 text-cyan-400" />,
                  title: "Excellence",
                  description:
                    "I pursue perfection in every detail, believing that quality is the foundation of memorable experiences.",
                },
                {
                  icon: <Globe className="w-4 h-4 text-green-400" />,
                  title: "Global Perspective",
                  description:
                    "Working across cultures and borders has shaped my approach to creating universally resonant solutions.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm rounded-lg p-4 hover:border-purple-500/30 hover:bg-purple-900/10 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xs font-medium text-white mb-1">{item.title}</h4>
                      <p className="text-[10px] text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills preview */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold text-purple-400">Core Competencies</h3>
                <Link
                  href="#skills"
                  className="text-[10px] text-blue-400 flex items-center hover:text-blue-300 transition-colors"
                >
                  View all skills
                  <ArrowDown className="w-3 h-3 ml-1" />
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { label: "Frontend Development", value: 95 },
                  { label: "UI/UX Design", value: 90 },
                  { label: "Backend Architecture", value: 85 },
                  { label: "AI Integration", value: 80 },
                  { label: "Cloud Infrastructure", value: 75 },
                  { label: "Project Management", value: 85 },
                ].map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-gray-300">{skill.label}</span>
                      <span className="text-[10px] text-purple-400">{skill.value}%</span>
                    </div>
                    <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 flex items-center space-x-4">
              <Link
                href="#contact"
                className="inline-flex items-center text-xs border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full transition-all duration-300 group"
              >
                Get in Touch
                <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center text-xs text-gray-400 hover:text-purple-300 transition-colors"
              >
                <ArrowDown className="w-3 h-3 mr-1" />
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
