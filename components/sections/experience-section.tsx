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
  Facebook,
} from "lucide-react"
import VideoLaunchModal from "./launch"

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
                period: "2021 - 2022",
                role: "Self-Taught Developer",
                company: "Independent",
                location: "Blantyre, Malawi",
                description:
                  "Began my coding journey with a deep curiosity and commitment to mastering the fundamentals of web development. Rapidly progressed from basic HTML/CSS to building dynamic websites and full-stack applications.",
                achievements: [
                  "Learned modern web development tools and best practices",
                  "Built foundational projects to apply and solidify my skills",
                ],
                socialLaunch: null,
                technologies: ["HTML", "CSS", "JavaScript", "React"],
                color: "gray",
                logo: "/mint.jpg?height=80&width=80",
              },
              {
                period: "2022 - 2023",
                role: "Full Stack Developer",
                company: "Independent Projects",
                location: "Blantyre, Malawi",
                description:
                  "Mastered full stack web development and started building real-world projects, ranging from dynamic websites to backend APIs. Established a personal portfolio showcasing my technical growth.",
                achievements: [
                  "Developed several personal and client-facing web apps",
                  "Gained expertise in frameworks like Next.js and tools like Docker",
                ],
                socialLaunch: null,
                technologies: ["Node.js", "Next.js", "TypeScript", "Docker"],
                color: "blue",
                logo: "/mint.jpg?height=80&width=80",
              },
                  {
                  period: "2023",
                  role: "Full Stack Developer & Project Lead",
                  company: "Polyhuwa (e-commerce platform)",
                  location: "Malawi",
                  description:
                    "Contributed as a core team member in building Polyhuwa, a local e-commerce platform designed to simplify online buying and selling in Malawi. I was responsible for both frontend and backend development, and led the implementation of essential features such as product listings, user accounts, checkout flow, and payment integration. Although the platform is no longer active, it laid the groundwork for local digital commerce initiatives. During this time, During launching other innovators like Excess, the founder of Mikoz, participated together with the dean of students.",
                  achievements: [
                    "Developed and launched a fully functional e-commerce site from scratch",
                    "Integrated secure payment processing and order tracking system",
                    "Collaborated with designers and testers to ensure mobile-friendly UI/UX",
                  ],
                  technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
                  color: "green",
                  logo: "/mint.jpg?height=80&width=80",
                  socialLaunch: "https://web.facebook.com/groups/1415924682019722/?multi_permalinks=3548032765475559&hoisted_section_header_type=recently_seen"
                }
                ,{
                period: "2023 - 2024",
                role: "AI Developer",
                company: "Independent + OpenAI Tools",
                location: "Malawi",
                description:
                  "Ventured into the field of AI, focusing on practical applications using OpenAI and related tools. Built interactive AI-powered apps like chatbots, voice interfaces, and quiz platforms to explore AI-human interaction.",
                achievements: [
                  "Created AI chatbot with image analysis capabilities",
                  "Launched AI Voice Conversation App for real-time voice interactions",
                  "Built AI Quiz Master App to support interactive learning environments",
                ],
                technologies: ["OpenAI", "Python", "TensorFlow", "OpenCV"],
                color: "green",
                socialLaunch: null,
                logo: "/mint.jpg?height=80&width=80",
              },
              {
                period: "2024",
                role: "AI & ML Engineer (Trainee)",
                company: "Samsung Innovation Campus",
                location: "Malawi",
                socialLaunch: null,
                description:
                  "Focused on machine learning, advanced data analysis, and AI technologies as part of the Samsung Innovation Campus program. Excelled in applying theoretical knowledge to real-world problems and projects.",
                achievements: [
                  "Gained hands-on experience with ML models and AI frameworks",
                  "Certified with distinction and awarded Top Performer recognition",
                ],
                technologies: ["Machine Learning", "Python", "Pandas", "Scikit-Learn"],
                color: "purple",
                logo: "/mint.jpg?height=80&width=80",
              },
              {
                period: "2024 - 2025",
                role: "Fullstack developer & AI Product Lead at xtremeregion",
                company: "Extreme Region",
                socialLaunch: "video",
                location: "Malawi",
                description:
                  "Software developer at Extreme Region, an AI-powered educational, communication and video conferencing platform aimed at transforming online learning, management and collaboration in Africa. Spearheading the development of scalable AI solutions and product vision.",
                achievements: [
                  "Develop Xtreme Region with AI-driven video meetings and lesson creation",
                  "Enabled monetization for educators via user-subscription channels using airtel money and tnm mpamba. ont forget about visa card.",
                  "Integrated meeting scheduling, AI chatbots, and real-time voice features",
                ],
                technologies: ["AI/ML", "OpenAI", "AWS", "Next.js", "WebRTC", "Agora", "ElevenLabs"],
                color: "orange",
                logo: "/mint.jpg?height=80&width=80",
              },
            ]
            .map((experience, index) => (
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
                            {experience.socialLaunch &&<a
                              href={experience.socialLaunch}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center hover:border-blue-500 hover:bg-blue-900/10 transition-colors"
                              aria-label="Facebook"
                            >
                              <Facebook className="w-3 h-3 text-gray-400" />
                            </a>}
                          </div>
                          <div className="flex items-center mt-1">
                            <MapPin className="w-3 h-3 text-gray-400 mr-1" />
                            <span className="text-[10px] text-gray-400">{experience.location}</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-700">
                          <Image
                            src={experience.logo || "/mint.jpg"}
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

                      {
                        experience.socialLaunch === "video" && (
                          <VideoLaunchModal />
                        )

                      }

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
                    period: "2022 - 2025",
                    description:
                      "Business and computer studies",
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
