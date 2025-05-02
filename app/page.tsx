import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectsSection from "@/components/sections/projects-section";
import EducationSection from "@/components/sections/education-section";
import SkillsSection from "@/components/sections/skills-section";
import ContactSection from "@/components/sections/contact-section";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050a1c] text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5 pointer-events-none"></div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  );
}
