import Link from "next/link"
import {
  ArrowRight,
  Server,
  PenTool,
  Brain,
  Database,
  Cloud,
  Monitor,
  Figma,
  GitBranch,
  Terminal,
  Globe,
} from "lucide-react"

export function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen bg-black py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

        {/* Animated lines */}
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:20px_20px] opacity-5"></div>

        {/* Hexagon pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hexagons"
                width="50"
                height="43.4"
                patternUnits="userSpaceOnUse"
                patternTransform="scale(5) rotate(0)"
              >
                <path d="M25 0 L50 14.4 L50 38.6 L25 53 L0 38.6 L0 14.4 Z" fill="none" stroke="#8888" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
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
            <div className="h-px w-8 bg-blue-500/50"></div>
            <span className="mx-2 text-xs text-blue-400 tracking-widest uppercase">02</span>
            <div className="h-px w-8 bg-blue-500/50"></div>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Technical SKILLS
          </h2>
          <p className="mt-2 text-xs text-gray-400 max-w-md mx-auto">
            A comprehensive overview of my skills, technologies, and expertise
          </p>
        </div>

        {/* Main content */}
        <div className="space-y-16">
          {/* Skill categories */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                icon: <Monitor className="w-5 h-5" />,
                title: "Frontend",
                description: "Creating intuitive and immersive user interfaces",
                color: "purple",
              },
              {
                icon: <Server className="w-5 h-5" />,
                title: "Backend",
                description: "Building robust and scalable system architectures",
                color: "blue",
              },
              {
                icon: <PenTool className="w-5 h-5" />,
                title: "Design",
                description: "Crafting visually stunning digital experiences",
                color: "cyan",
              },
              {
                icon: <Brain className="w-5 h-5" />,
                title: "AI & ML",
                description: "Implementing intelligent and adaptive systems",
                color: "green",
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`border border-${category.color}-500/20 bg-${category.color}-900/10 backdrop-blur-sm rounded-lg p-5 hover:border-${category.color}-500/40 hover:bg-${category.color}-900/20 transition-colors duration-300`}
              >
                <div
                  className={`w-10 h-10 rounded-full bg-${category.color}-900/30 border border-${category.color}-500/30 flex items-center justify-center mb-4`}
                >
                  <span className={`text-${category.color}-400`}>{category.icon}</span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{category.title}</h3>
                <p className="text-[10px] text-gray-400">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Technical skills */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-semibold text-blue-400">Technical Proficiency</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-[10px] text-gray-400">Expert</span>
                <div className="w-2 h-2 rounded-full bg-blue-500 ml-2"></div>
                <span className="text-[10px] text-gray-400">Advanced</span>
                <div className="w-2 h-2 rounded-full bg-cyan-500 ml-2"></div>
                <span className="text-[10px] text-gray-400">Intermediate</span>
              </div>
            </div>

            {/* Skill radar chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left column - Frontend & Design */}
              <div className="space-y-8">
                {/* Frontend */}
                <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/20 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <Monitor className="w-4 h-4 text-purple-400 mr-2" />
                    <h4 className="text-xs font-medium text-white">Frontend Development</h4>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: "React / Next.js", level: 98, color: "purple" },
                      { name: "TypeScript", level: 95, color: "purple" },
                      { name: "HTML5 / CSS3", level: 96, color: "purple" },
                      { name: "Tailwind CSS", level: 94, color: "purple" },
                      { name: "V0", level: 85, color: "blue" },
                      { name: "SASS", level: 75, color: "cyan" },
                    ].map((skill, index) => (
                      <div key={index} className="relative">
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${skill.color}-500 mr-2`}></div>
                            <span className="text-[10px] text-gray-300">{skill.name}</span>
                          </div>
                          <span className="text-[10px] text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r from-${skill.color}-500/80 to-${skill.color}-500/50 rounded-full`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design */}
                <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/20 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <PenTool className="w-4 h-4 text-cyan-400 mr-2" />
                    <h4 className="text-xs font-medium text-white">Design & Creative</h4>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: "UI/UX Design", level: 92, color: "purple" },
                      { name: "Figma / Adobe XD", level: 90, color: "purple" },
                      { name: "Motion Design", level: 85, color: "blue" },
                      { name: "3D Modeling", level: 75, color: "cyan" },
                      { name: "Graphic Design", level: 80, color: "blue" },
                      { name: "Interaction Design", level: 88, color: "purple" },
                    ].map((skill, index) => (
                      <div key={index} className="relative">
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${skill.color}-500 mr-2`}></div>
                            <span className="text-[10px] text-gray-300">{skill.name}</span>
                          </div>
                          <span className="text-[10px] text-cyan-400">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r from-${skill.color}-500/80 to-${skill.color}-500/50 rounded-full`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column - Backend & AI/ML */}
              <div className="space-y-8">
                {/* Backend */}
                <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/20 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <Server className="w-4 h-4 text-blue-400 mr-2" />
                    <h4 className="text-xs font-medium text-white">Backend Development</h4>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: "Node.js", level: 95, color: "purple" },
                      { name: "Python", level: 90, color: "purple" },
                      { name: "GraphQL", level: 88, color: "purple" },
                      { name: "RESTful APIs", level: 96, color: "purple" },
                      { name: "Websocket", level: 75, color: "cyan" },
                      
                    ].map((skill, index) => (
                      <div key={index} className="relative">
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${skill.color}-500 mr-2`}></div>
                            <span className="text-[10px] text-gray-300">{skill.name}</span>
                          </div>
                          <span className="text-[10px] text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r from-${skill.color}-500/80 to-${skill.color}-500/50 rounded-full`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI & ML */}
                <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/20 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <Brain className="w-4 h-4 text-green-400 mr-2" />
                    <h4 className="text-xs font-medium text-white">AI & Machine Learning</h4>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: "TensorFlow", level: 85, color: "blue" },
                      { name: "OpenAI", level: 88, color: "purple" },
                      { name: "Generative AI", level: 90, color: "purple" },
                      { name: "Data Analysis", level: 85, color: "blue" },
                    ].map((skill, index) => (
                      <div key={index} className="relative">
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${skill.color}-500 mr-2`}></div>
                            <span className="text-[10px] text-gray-300">{skill.name}</span>
                          </div>
                          <span className="text-[10px] text-green-400">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r from-${skill.color}-500/80 to-${skill.color}-500/50 rounded-full`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-6">Tools & Technologies</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { icon: <Figma className="w-5 h-5" />, name: "Figma" },
                { icon: <GitBranch className="w-5 h-5" />, name: "Git" },
                { icon: <Database className="w-5 h-5" />, name: "SQL/NoSQL" },
                { icon: <Cloud className="w-5 h-5" />, name: "AWS" },
                { icon: <Terminal className="w-5 h-5" />, name: "Docker" },
                { icon: <Globe className="w-5 h-5" />, name: "Vercel" },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="border border-gray-800 bg-gray-900/20 backdrop-blur-sm rounded-lg p-4 hover:border-blue-500/30 hover:bg-blue-900/10 transition-colors duration-300 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-900/30 border border-blue-500/20 flex items-center justify-center mb-3">
                    <span className="text-blue-400">{tool.icon}</span>
                  </div>
                  <span className="text-[10px] text-gray-300">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-6">Professional Attributes</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Problem Solving",
                  description: "Analytical thinking and innovative approaches to complex challenges",
                  level: 95,
                },
                {
                  title: "Communication",
                  description: "Clear articulation of complex technical concepts to diverse audiences",
                  level: 90,
                },
                {
                  title: "Leadership",
                  description: "Guiding teams with vision, empathy, and technical expertise",
                  level: 85,
                },
                {
                  title: "Adaptability",
                  description: "Quickly mastering new technologies and methodologies",
                  level: 92,
                },
                {
                  title: "Project Management",
                  description: "Orchestrating complex projects from conception to deployment",
                  level: 88,
                },
                {
                  title: "Creativity",
                  description: "Innovative thinking that transcends conventional boundaries",
                  level: 94,
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="border border-gray-800 bg-gray-900/20 backdrop-blur-sm rounded-lg p-5 hover:border-purple-500/30 hover:bg-purple-900/10 transition-colors duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xs font-medium text-white">{skill.title}</h4>
                    <span className="text-[10px] text-purple-400">{skill.level}%</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mb-3">{skill.description}</p>
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link
              href="#projects"
              className="inline-flex items-center text-xs border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full transition-all duration-300 group"
            >
              See My Projects
              <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
