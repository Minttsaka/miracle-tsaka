import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
