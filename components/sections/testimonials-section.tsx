"use client"

import { useState } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
  rating: number

}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Dr. Kankuzi",
      role: "Head of Department, ICT",
      company: "Malawi University of Science and Technology",
      image: "/kankudzi.jpg?height=80&width=80",
      quote:
        "Miracle Tsaka is one of the most promising students I have encountered in my career. His deep interest in data analysis and relentless pursuit of knowledge have led him to build solutions that not only demonstrate technical brilliance but also solve real-world challenges. ",
      rating: 5,

    },
    {
      id: 2,
      name: "Mr. Kapelemera",
      role: "Lecturer",
      company: "Malawi University of Science and Technology",
      image: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png?height=80&width=80",
      quote:
        "Miracle has consistently demonstrated exceptional technical and analytical skills in my classes. His work ethic, curiosity, and ability to implement complex concepts into functional tools, especially in python, are truly commendable. I have no doubt he is destined to lead innovation in Malawi and beyond.",
      rating: 5,

    },
    {
      id: 3,
      name: "Mr. M. Phiri",
      role: "Lecturer",
      company: "Malawi University of Science and Technology",
      image: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png?height=80&width=80",
      quote:
        "Miracle has shown an impressive ability to merge business understanding with technology. His python projects and portfolio website reflect his growth from a student to a solutions-oriented developer who is passionate about impacting education and communication using cutting-edge technology.",
      rating: 5,
  
    },
    {
      id: 4,
      name: "Mr. Tambala",
      role: "Lecturer",
      company: "Malawi University of Science and Technology",
      image: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png?height=80&width=80",
      quote:
        "As Miracles lecturer, Ive seen him transition from a curious beginner to a confident developer capable of building complex analysis system using python tools. His initiative in creating applications like the voice conversation app shows his ability to blend innovation with practical impact in education.",
      rating: 5,

    },
    {
      id: 5,
      name: "Mr. P. Chirwa",
      role: "Lecturer",
      company: "Malawi University of Science and Technology",
      image: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png?height=80&width=80",
      quote:
        "Miracle is a dedicated and visionary student. His work during the Samsung Innovation Campus and his continued effort in building project for employees analysis show both maturity and exceptional technical growth. He is a true asset to the future of technology in Malawi.",
      rating: 5,
  
    },
  ];
  

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
                      
                    </div>
                  </div>

                  {/* Right - Testimonial */}
                  <div className="md:col-span-3">
                    <blockquote className="text-xs leading-relaxed text-gray-300 italic">
                      {testimonials[activeIndex].quote}
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
                  {testimonial.quote}
                </blockquote>

                {/* Client info */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-purple-500/30">
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

      </div>
    </section>
  )
}
