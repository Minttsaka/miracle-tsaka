"use client"

import { useState } from "react"
import Image from "next/image"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
  rating: number
  project: string
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alexandra Chen",
      role: "CEO",
      company: "NexGen Innovations",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Working with Miracle was transformative for our business. The AI platform he developed has streamlined our operations and increased productivity by 40%. His technical expertise combined with a deep understanding of user experience resulted in a product that exceeded our expectations.",
      rating: 5,
      project: "AI-Powered Analytics Dashboard",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "CTO",
      company: "EcoSphere Technologies",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Miracle's approach to our mobile app development was methodical and innovative. He took the time to understand our vision and translated it into a user-friendly application that has received outstanding feedback from our customers. His attention to detail and commitment to quality are unmatched.",
      rating: 5,
      project: "Sustainable Living Mobile App",
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      role: "Creative Director",
      company: "Visionary Design Studio",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The immersive VR experience that Miracle created for our exhibition was nothing short of spectacular. He pushed the boundaries of what we thought was possible and delivered an experience that left our visitors in awe. His creativity and technical prowess are truly remarkable.",
      rating: 5,
      project: "Interactive VR Exhibition",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Product Manager",
      company: "FinTech Solutions",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Miracle's redesign of our financial platform transformed a complex system into an intuitive, user-friendly interface. His understanding of both the technical requirements and user needs resulted in a 35% increase in user engagement and a significant reduction in support tickets.",
      rating: 4,
      project: "Financial Platform Redesign",
    },
    {
      id: 5,
      name: "Emily Watson",
      role: "Marketing Director",
      company: "Global Reach Media",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The interactive data visualization tool that Miracle developed has revolutionized how we present information to our clients. His ability to make complex data accessible and engaging has given us a competitive edge in our industry. A true professional who delivers excellence.",
      rating: 5,
      project: "Interactive Data Visualization",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const handlePrev = () => {
    if (animating) return
    setAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setAnimating(false), 500)
  }

  const handleNext = () => {
    if (animating) return
    setAnimating(true)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setAnimating(false), 500)
  }

  const handleDotClick = (index: number) => {
    if (animating || index === activeIndex) return
    setAnimating(true)
    setActiveIndex(index)
    setTimeout(() => setAnimating(false), 500)
  }

  return (
    <section id="testimonials" className="relative bg-black py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

        {/* Animated lines */}
        <div className="absolute left-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute right-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>

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
            <span className="mx-2 text-xs text-purple-400 tracking-widest uppercase">06</span>
            <div className="h-px w-8 bg-purple-500/50"></div>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Client Testimonials
          </h2>
          <p className="mt-2 text-xs text-gray-400 max-w-md mx-auto">
            Hear what my clients have to say about their experience working with me
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="relative">
          {/* Main testimonial */}
          <div className="relative overflow-hidden">
            <div className={`transition-opacity duration-500 ${animating ? "opacity-0" : "opacity-100"}`}>
              <div className="border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black/50 backdrop-blur-sm rounded-xl p-8 md:p-10">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-purple-500" />
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Left - Client info */}
                  <div className="md:col-span-1">
                    <div className="flex flex-col items-center md:items-start">
                      {/* Client image */}
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/50 mb-4">
                        <Image
                          src={testimonials[activeIndex].image || "/placeholder.svg"}
                          alt={testimonials[activeIndex].name}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>

                      {/* Client details */}
                      <h3 className="text-sm font-semibold text-white mb-1">{testimonials[activeIndex].name}</h3>
                      <p className="text-[10px] text-gray-400 mb-2">
                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < testimonials[activeIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Project */}
                      <div className="text-center md:text-left">
                        <p className="text-[10px] text-gray-500 uppercase">Project</p>
                        <p className="text-[10px] text-purple-400">{testimonials[activeIndex].project}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right - Testimonial */}
                  <div className="md:col-span-3">
                    <blockquote className="text-xs leading-relaxed text-gray-300 italic">
                      "{testimonials[activeIndex].quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? "bg-purple-500" : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 text-gray-400" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial grid - smaller testimonials */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials
            .filter((_, index) => index !== activeIndex)
            .slice(0, 3)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="border border-gray-800 bg-gray-900/20 backdrop-blur-sm rounded-xl p-6 hover:border-purple-500/20 hover:bg-purple-900/10 transition-colors cursor-pointer"
                onClick={() => handleDotClick(testimonials.findIndex((t) => t.id === testimonial.id))}
              >
                {/* Quote */}
                <blockquote className="text-[10px] leading-relaxed text-gray-400 italic mb-4 line-clamp-4">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client info */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-purple-500/30">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-white">{testimonial.name}</h4>
                    <p className="text-[10px] text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Satisfied Clients", value: "50+" },
            { label: "Projects Completed", value: "120+" },
            { label: "Success Rate", value: "98%" },
            { label: "Years Experience", value: "8+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="border border-gray-800 bg-gray-900/20 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                {stat.value}
              </div>
              <p className="text-[10px] text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
