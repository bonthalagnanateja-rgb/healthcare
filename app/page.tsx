import HeroSection from "@/components/HeroSection"
import HowItWorks from "@/components/HowItWorks"
import Demo from "@/components/demo"

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorks />
      <Demo />
    </main>
  )
}