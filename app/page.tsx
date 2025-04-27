import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechnicalSkillsSection } from "@/components/technical-skills-section"
import { Footer } from "@/components/ui/footer"

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <TechnicalSkillsSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}

