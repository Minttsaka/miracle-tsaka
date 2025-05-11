import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  MapPin,
  ArrowRight,
  Award,
  ExternalLink,
  ChevronRight,
  Building,
  Sparkles,
  Zap,
  Star,
  Download,
} from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen bg-black py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

        {/* Animated lines */}
        <div className="absolute left-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute right-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:20px_20px] opacity-5"></div>

        {/* Timeline pattern */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>

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
            <span className="mx-2 text-xs text-purple-400 tracking-widest uppercase">04</span>
            <div className="h-px w-8 bg-purple-500/50"></div>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Professional Journey
          </h2>
          <p className="mt-2 text-xs text-gray-400 max-w-md mx-auto">
            A timeline of my career evolution and key milestones in the digital realm
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Central timeline line - visible on medium screens and up */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-purple-500/30"></div>

          {/* Timeline entries */}
          <div className="space-y-12 md:space-y-0">
            {[
              {
                period: "2022 - Present",
                role: "Lead Digital Architect",
                company: "FutureVision Technologies",
                location: "San Francisco, CA",
                description:
                  "Leading a team of designers and developers to create next-generation digital experiences for enterprise clients. Spearheading the development of AI-powered interfaces and immersive technologies that redefine human-computer interaction.",
                achievements: [
                  "Architected an award-winning AI platform that increased client productivity by 35%",
                  "Led the development of a revolutionary VR training system for medical professionals",
                  "Established a design system that reduced development time by 40%",
                ],
                technologies: ["React", "Next.js", "AI/ML", "WebXR", "Three.js"],
                color: "purple",
                logo: "/placeholder.svg?height=80&width=80",
              },
              {
                period: "2019 - 2022",
                role: "Senior Frontend Engineer",
                company: "Quantum Innovations",
                location: "New York, NY",
                description:
                  "Developed cutting-edge web applications with a focus on performance, accessibility, and user experience. Created innovative UI components and interactive visualizations for data-heavy applications.",
                achievements: [
                  "Rebuilt the company's flagship product, improving performance by 60%",
                  "Implemented advanced animations and micro-interactions that increased user engagement",
                  "Mentored junior developers and established frontend best practices",
                ],
                technologies: ["Vue.js", "TypeScript", "D3.js", "GraphQL", "Tailwind CSS"],
                color: "blue",
                logo: "/placeholder.svg?height=80&width=80",
              },
              {
                period: "2017 - 2019",
                role: "UI/UX Designer & Developer",
                company: "NeoSphere Digital",
                location: "Berlin, Germany",
                description:
                  "Bridged the gap between design and development by creating pixel-perfect interfaces and implementing them with clean, efficient code. Collaborated closely with clients to translate their vision into functional digital products.",
                achievements: [
                  "Designed and developed 15+ websites and applications for clients across various industries",
                  "Created a modular component library that streamlined the design-to-development workflow",
                  "Received the German Design Award for an innovative e-commerce interface",
                ],
                technologies: ["Figma", "React", "SCSS", "JavaScript", "Framer Motion"],
                color: "cyan",
                logo: "/placeholder.svg?height=80&width=80",
              },
              {
                period: "2015 - 2017",
                role: "Frontend Developer",
                company: "TechStart Solutions",
                location: "Toronto, Canada",
                description:
                  "Developed responsive websites and web applications for startups and small businesses. Focused on creating clean, maintainable code and ensuring cross-browser compatibility and optimal performance.",
                achievements: [
                  "Built and launched 20+ websites for clients in various industries",
                  "Implemented responsive design principles that improved mobile conversion rates by 25%",
                  "Optimized website performance, achieving 90+ PageSpeed scores",
                ],
                technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress"],
                color: "green",
                logo: "/placeholder.svg?height=80&width=80",
              },
            ].map((experience, index) => (
              <div key={index} className={`relative md:flex ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-purple-500 bg-black"></div>

                {/* Content */}
                <div className="md:w-1/2 md:px-8 mb-8 md:mb-24">
                  <div
                    className={`border border-${experience.color}-500/20 bg-gradient-to-br from-${experience.color}-900/10 to-black/50 backdrop-blur-sm rounded-xl overflow-hidden hover:border-${experience.color}-500/40 transition-colors duration-300`}
                  >
                    <div className="p-6">
                      {/* Header with logo */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <Calendar className="w-3 h-3 text-gray-400" />
                            <span className="text-[10px] text-gray-400">{experience.period}</span>
                          </div>
                          <h3 className="text-sm font-semibold text-white">{experience.role}</h3>
                          <div className="flex items-center mt-1">
                            <Building className="w-3 h-3 text-gray-400 mr-1" />
                            <span className="text-xs text-gray-300">{experience.company}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <MapPin className="w-3 h-3 text-gray-400 mr-1" />
                            <span className="text-[10px] text-gray-400">{experience.location}</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-700">
                          <Image
                            src={experience.logo || "/placeholder.svg"}
                            alt={`${experience.company} logo`}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-300 leading-relaxed mb-4">{experience.description}</p>

                      {/* Key achievements */}
                      <div className="mb-4">
                        <h4 className="text-[10px] text-gray-400 uppercase mb-2">Key Achievements</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <div className="mt-1">
                                <Star className="w-2 h-2 text-purple-400" />
                              </div>
                              <span className="text-[10px] text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-[10px] text-gray-400 uppercase mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`text-[10px] px-2 py-1 rounded-full bg-${experience.color}-900/20 border border-${experience.color}-500/20 text-${experience.color}-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Link to project or more details */}
                      {index === 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-800">
                          <Link
                            href="#projects"
                            className={`text-[10px] text-${experience.color}-400 hover:text-${experience.color}-300 flex items-center transition-colors`}
                          >
                            View Related Projects
                            <ChevronRight className="w-3 h-3 ml-1" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Empty div for layout on alternating sides */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Education section */}
        <div className="mt-20">
          <h3 className="text-center text-sm font-semibold text-purple-400 mb-8">Education & Certifications</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="border border-blue-500/20 bg-blue-900/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xs font-medium text-white mb-4 flex items-center">
                <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
                Academic Background
              </h4>

              <div className="space-y-6">
                {[
                  {
                    degree: "Education (Business studies)",
                    institution: "MUBAS",
                    period: "2021 - 2025",
                    description:
                      "System analysis, organization behaviour, and coding.",
                  },
                  
                ].map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-500/30 pl-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-[10px] text-gray-400">{edu.period}</span>
                    </div>
                    <h5 className="text-xs font-medium text-white">{edu.degree}</h5>
                    <p className="text-[10px] text-gray-300 mt-1">{edu.institution}</p>
                    <p className="text-[10px] text-gray-400 mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="border border-purple-500/20 bg-purple-900/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xs font-medium text-white mb-4 flex items-center">
                <Award className="w-4 h-4 text-purple-400 mr-2" />
                Certifications & Training
              </h4>

              <div className="space-y-4">
                {[
                  {
                    name: "Certificate in coding and programming",
                    issuer: "SAMSUNG",
                    year: "2024-2025",
                    credential: "Dinstinction",
                  },

                ].map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 border border-purple-500/10 bg-purple-900/5 rounded-lg p-3 hover:border-purple-500/20 transition-colors"
                  >
                    <div className="mt-1">
                      <Zap className="w-3 h-3 text-purple-400" />
                    </div>
                    <div>
                      <h5 className="text-xs font-medium text-white">{cert.name}</h5>
                      <div className="flex items-center mt-1">
                        <span className="text-[10px] text-gray-300">{cert.issuer}</span>
                        <span className="mx-2 text-gray-600">•</span>
                        <span className="text-[10px] text-gray-400">{cert.year}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-[10px] text-purple-400">Credential: {cert.credential}</span>
                        <ExternalLink className="w-2 h-2 ml-1 text-purple-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/resume.pdf"
            className="inline-flex items-center text-xs border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 px-6 py-3 rounded-full transition-all duration-300 group"
          >
            <Download className="w-3 h-3 mr-2" />
            Download Full Resume
          </Link>
          <div className="mt-4">
            <Link
              href="#contact"
              className="inline-flex items-center text-xs text-gray-400 hover:text-purple-300 transition-colors"
            >
              Lets discuss your project
              <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
